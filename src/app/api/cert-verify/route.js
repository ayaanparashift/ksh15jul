import nodemailer from "nodemailer";
import path from "path";
import { createHmac } from "crypto";
import { after } from "next/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CERT_FILE_PATH = path.join(
  process.cwd(),
  "public",
  "Goldberg_certificates.rar",
);

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
      socketTimeout: 30000,
      greetingTimeout: 15000,
      connectionTimeout: 15000,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    _transporter.verify().catch(() => {});
  }
  return _transporter;
}

function verifyOtpToken(token, email, otp) {
  try {
    const secret = process.env.OTP_SECRET || process.env.SMTP_PASS || "ksh-otp-secret";
    const [payloadB64, sig] = token.split(".");
    if (!payloadB64 || !sig) return { valid: false };

    const payload = Buffer.from(payloadB64, "base64url").toString();
    const [tokenEmail, tokenOtp, expiresAt] = payload.split("|");

    const expectedSig = createHmac("sha256", secret).update(payload).digest("hex");
    if (expectedSig !== sig) return { valid: false, error: "Invalid token." };

    if (Date.now() > Number(expiresAt)) return { valid: false, error: "OTP has expired. Please request a new one." };

    if (tokenEmail !== email.toLowerCase()) return { valid: false, error: "Token mismatch." };

    if (tokenOtp !== otp) return { valid: false, error: "Incorrect OTP. Please try again." };

    return { valid: true };
  } catch {
    return { valid: false, error: "Invalid token." };
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (body.website) {
      return Response.json({ success: true }); // honeypot — silent drop
    }

    const email = (body?.email || "").trim().toLowerCase();
    const otp = (body?.otp || "").trim();
    const token = (body?.token || "").trim();
    const name = (body?.name || "").trim();
    const organization = (body?.organization || "").trim();

    if (!EMAIL_REGEX.test(email)) {
      return Response.json({ success: false, error: "Invalid email" }, { status: 400 });
    }
    if (!/^\d{4}$/.test(otp)) {
      return Response.json({ success: false, error: "Invalid OTP format" }, { status: 400 });
    }
    if (!token) {
      return Response.json({ success: false, error: "Session expired. Please request a new OTP." }, { status: 400 });
    }

    const tokens = token.split(",").map((t) => t.trim()).filter(Boolean);
    const result = tokens.map((t) => verifyOtpToken(t, email, otp)).find((r) => r.valid);
    if (!result) {
      const lastErr = verifyOtpToken(tokens[tokens.length - 1], email, otp);
      return Response.json({ success: false, error: lastErr.error || "Invalid OTP." }, { status: 400 });
    }

    // OTP is valid — respond immediately, send certificate email after response is delivered
    after(async () => {
      try {
        await getTransporter().sendMail({
          from: `"KSH INFRA" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "KSH INFRA – Certification Documents",
          text: `Hi ${name || "there"},\n\nThank you for your interest in KSH INFRA's certification for Hosur Park documents. Please find the files in the attachments.\n\nRegards,\nKSH INFRA`,
          attachments: [{ filename: "Goldberg_certificates.rar", path: CERT_FILE_PATH }],
        });
      } catch (emailErr) {
        console.error("cert-verify certificate email error:", emailErr);
      }
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("cert-verify error:", err);
    return Response.json(
      { success: false, error: err.message || "Unexpected error" },
      { status: 500 },
    );
  }
}
