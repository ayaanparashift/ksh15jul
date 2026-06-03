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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"KSH INFRA" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your OTP for Certificate Download",
      text: `Hi ${name},\n\nYour OTP is: ${otp}\n\nThis code expires in 5 minutes. Do not share it with anyone.\n\nRegards,\nKSH INFRA`,
      // plain text only — no HTML
    });

    // Return the signed token to the client — it carries the OTP hash for stateless verification
    return Response.json({ success: true, token });
  } catch (err) {
    console.error("cert-otp error:", err);
    return Response.json({ success: false, error: "Failed to send OTP." }, { status: 500 });
  }
}
