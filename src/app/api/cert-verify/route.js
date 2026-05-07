import nodemailer from "nodemailer";
import crypto from "crypto";

export const runtime = "nodejs";

const CERT_DOWNLOAD_URL = "https://www.kshinfra.com/certifications/ksh-certifications.rar";
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
        { status: 400 }
      );
    }

    // Verify OTP — Customer-Key header only, body is txId + token
    const verifyRes = await fetch("https://login.xecurify.com/moas/api/auth/validate", {
      method: "POST",
      headers: generateAuthHeaders(),
      body: JSON.stringify({
        txId,
        token: otp.trim(),
      }),
    });

    const verifyData = await verifyRes.json();
    console.log("verify response:", verifyData);

    if (verifyData.status !== "SUCCESS") {
      const msg = verifyData.message || verifyData.Message || "Invalid or expired OTP";
      return Response.json({ success: false, error: msg }, { status: 400 });
    }

    // Send download link to email
    if (email && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
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
          subject: "KSH INFRA – Your Certification Documents",
          html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Open Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:520px;background:#092241;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#E30613;padding:6px 32px;"></td></tr>
        <tr><td style="padding:32px 32px 8px;">
          <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">KSH INFRA</p>
          <div style="height:4px;background:#F7E327;width:80px;margin-top:6px;border-radius:2px;"></div>
        </td></tr>
        <tr><td style="padding:20px 32px 32px;">
          <p style="margin:0 0 16px;font-size:15px;color:#ffffff;line-height:1.7;">
            Hi <strong>${name || "there"}</strong>,
          </p>
          <p style="margin:0 0 16px;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.7;">
            Thank you for your interest in KSH INFRA's certification documents.
            Your download link is ready below.
          </p>
          <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
            <tr><td style="background:#E30613;border-radius:24px;padding:12px 28px;">
              <a href="${CERT_DOWNLOAD_URL}" style="color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;white-space:nowrap;">
                Download Certifications →
              </a>
            </td></tr>
          </table>
          <p style="margin:0 0 8px;font-size:12px;color:rgba(255,255,255,0.4);line-height:1.6;">
            If the button doesn't work, copy and paste this link into your browser:
          </p>
          <p style="margin:0 0 24px;font-size:12px;word-break:break-all;">
            <a href="${CERT_DOWNLOAD_URL}" style="color:#146BD7;">${CERT_DOWNLOAD_URL}</a>
          </p>
          <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);line-height:1.6;">
            Warm regards,<br/>
            <strong style="color:#ffffff;">KSH INFRA Leasing Team</strong>
          </p>
        </td></tr>
        <tr><td style="background:#0d1f35;padding:16px 32px;">
          <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.3);">
            © ${new Date().getFullYear()} KSH Infrastructure Pvt. Ltd. All rights reserved.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
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
      { status: 500 }
    );
  }
}
