import nodemailer from "nodemailer";
import crypto from "crypto";

export const runtime = "nodejs";

const CERT_DOWNLOAD_URL = "https://www.kshinfra.com/certifications/ksh-certifications.rar";
const MINIORANGE_CUSTOMER_KEY = process.env.MINIORANGE_CUSTOMER_KEY;
const MINIORANGE_API_KEY = process.env.MINIORANGE_API_KEY;

function generateAuthHeaders(customerKey, apiKey) {
  const currentTimeInMillis = Date.now().toString();
  const stringToHash = customerKey + currentTimeInMillis + apiKey;
  const hashValue = crypto.createHash("sha512").update(stringToHash).digest("hex");

  return {
    "Customer-Key": customerKey,
    "Timestamp": currentTimeInMillis,
    "Authorization": hashValue,
    "Content-Type": "application/json",
  };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { txId, otp, name, email, organization, phone } = body;

    if (!email) {
      return Response.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    // Verify OTP with MinIOrange if txId and otp provided
    if (txId && otp && MINIORANGE_CUSTOMER_KEY && MINIORANGE_API_KEY) {
      const headers = generateAuthHeaders(MINIORANGE_CUSTOMER_KEY, MINIORANGE_API_KEY);

      const verifyResponse = await fetch("https://login.xecurify.com/moas/api/auth/validate", {
        method: "POST",
        headers,
        body: JSON.stringify({
          txId,
          token: otp.trim(),
        }),
      });

      const verifyData = await verifyResponse.json();
      console.log("MinIOrange verify response:", { status: verifyResponse.status, data: verifyData });

      if (!verifyResponse.ok || verifyData.status !== "SUCCESS") {
        return Response.json(
          {
            success: false,
            error: verifyData.message || "Invalid or expired OTP",
            details: verifyData,
          },
          { status: 400 }
        );
      }
    } else if (!txId || !otp) {
      return Response.json(
        { success: false, error: "Transaction ID and OTP are required" },
        { status: 400 }
      );
    }

    // Send email with download link
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
          subject: "KSH INFRA - Certification Documents Download",
          html: `<p>Hi ${name || "there"},</p>
<p>Thank you for your interest in KSH INFRA's certifications.</p>
<p><a href="${CERT_DOWNLOAD_URL}">Download Certifications (.rar)</a></p>
<p>If the link doesn't work, copy and paste this URL:<br/>${CERT_DOWNLOAD_URL}</p>
<p>Best regards,<br/>KSH INFRA</p>`,
        });
      } catch (emailError) {
        console.error("cert-verify email error:", emailError);
      }
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("cert-verify error:", err);
    return Response.json({ success: false, error: err.message || "Unexpected error" }, { status: 500 });
  }
}
