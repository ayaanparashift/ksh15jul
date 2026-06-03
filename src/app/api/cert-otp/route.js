import nodemailer from "nodemailer";
import { createHmac } from "crypto";

export const runtime = "nodejs";

const NAME_REGEX = /^[A-Za-z ]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OTP_TTL_MS = 5 * 60 * 1000; // 5 minutes

function generateOtp() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

// Creates a signed token: base64(email|otp|expiresAt).HMAC
export function signOtpToken(email, otp, expiresAt) {
  const secret = process.env.OTP_SECRET || process.env.SMTP_PASS || "ksh-otp-secret";
  const payload = `${email}|${otp}|${expiresAt}`;
  const sig = createHmac("sha256", secret).update(payload).digest("hex");
  return Buffer.from(payload).toString("base64url") + "." + sig;
}

let _transporter = null;
function getTransporter() {
  if (!_transporter) {
    _transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      socketTimeout: 10000,
      greetingTimeout: 10000,
      connectionTimeout: 10000,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    // Warm the connection pool at module load so first request isn't slow
    _transporter.verify().catch(() => {});
  }
  return _transporter;
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (body.website) {
      return Response.json({ success: true }); // honeypot — silent drop
    }

    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim().toLowerCase();

    if (!NAME_REGEX.test(name)) {
      return Response.json({ success: false, error: "Invalid name" }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email)) {
      return Response.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    const otp = generateOtp();
    const expiresAt = Date.now() + OTP_TTL_MS;
    const token = signOtpToken(email, otp, expiresAt);

    // Respond immediately so the UI doesn't wait on SMTP
    const response = Response.json({ success: true, token });

    // Send OTP email in background — SMTP latency doesn't block the client
    getTransporter().sendMail({
      from: `"KSH INFRA" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Verification Code – KSH INFRA",
      text: `Hi ${name},\n\nYour one-time verification code is: ${otp}\n\nValid for 5 minutes.\n\nRegards,\nKSH INFRA`,
    }).catch((err) => console.error("cert-otp sendMail error:", err));

    return response;
  } catch (err) {
    console.error("cert-otp error:", err);
    return Response.json({ success: false, error: "Failed to send OTP." }, { status: 500 });
  }
}
