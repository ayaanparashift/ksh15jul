import nodemailer from "nodemailer";
import crypto from "crypto";
import path from "path";

export const runtime = "nodejs";

const CERT_FILE_PATH = path.join(
  process.cwd(),
  "public",
  "Goldberg_certificates.rar",
);
const MINIORANGE_CUSTOMER_KEY = process.env.MINIORANGE_CUSTOMER_KEY;
const MINIORANGE_API_KEY = process.env.MINIORANGE_API_KEY;

function generateAuthHeaders() {
  const timestamp = Date.now().toString();
  const hash = crypto
    .createHash("sha512")
    .update(MINIORANGE_CUSTOMER_KEY + timestamp + MINIORANGE_API_KEY)
    .digest("hex");
  return {
    "Customer-Key": MINIORANGE_CUSTOMER_KEY,
    Timestamp: timestamp,
    Authorization: hash,
    "Content-Type": "application/json",
  };
}

export async function POST(req) {
  try {
    const { txId, otp, name, email } = await req.json();

    if (!txId || !otp) {
      return Response.json(
        { success: false, error: "Transaction ID and OTP are required" },
        { status: 400 },
      );
    }

    // Verify OTP — Customer-Key header only, body is txId + token
    const verifyRes = await fetch(
      "https://login.xecurify.com/moas/api/auth/validate",
      {
        method: "POST",
        headers: generateAuthHeaders(),
        body: JSON.stringify({
          txId,
          token: otp.trim(),
        }),
      },
    );

    const verifyData = await verifyRes.json();
    console.log("verify response:", verifyData);

    if (verifyData.status !== "SUCCESS") {
      const msg =
        verifyData.message || verifyData.Message || "Invalid or expired OTP";
      return Response.json({ success: false, error: msg }, { status: 400 });
    }

    // Send download link to email
    if (
      email &&
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      try {
        await transporter.sendMail({
          from: `"KSH INFRA" <${process.env.SMTP_USER}>`,
          to: email,
          subject: "KSH INFRA – Certification Documents",
          text: `Hi ${name || "there"},\n\nThank you for your interest in KSH INFRA's certification for Hosur Park documents. Please find the files in the attachments.\n\nRegards,\nKSH INFRA`,
          attachments: [
            {
              filename: "Goldberg_certificates.rar",
              path: CERT_FILE_PATH,
            },
          ],
        });
      } catch (emailError) {
        console.error("cert-verify email error:", emailError);
      }
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("cert-verify error:", err);
    return Response.json(
      { success: false, error: err.message || "Unexpected error" },
      { status: 500 },
    );
  }
}
