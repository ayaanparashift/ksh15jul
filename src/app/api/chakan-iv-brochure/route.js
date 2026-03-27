import nodemailer from "nodemailer";

export const runtime = "nodejs";

const NAME_REGEX = /^[A-Za-z ]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();

    if (!NAME_REGEX.test(name)) {
      return Response.json(
        { success: false, error: "Invalid name" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const sheetPayload = {
      ...body,
      name,
      email,
      form_type: "chakan_iv_brochure",
      timestamp: body?.timestamp || new Date().toISOString(),
    };

    const sheetResponse = await fetch(process.env.SHEET_URL7, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetPayload),
    });

    const sheetText = await sheetResponse.text();

    if (!sheetResponse.ok) {
      return Response.json(
        { success: false, error: `Sheet error: ${sheetResponse.status}` },
        { status: 502 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const parkName = "KSH Chakan Park IV";
    const brochureLink =
      "https://www.kshinfra.com/brochure/KSH-Chakan-IV-Brochure.pdf";

    await transporter.sendMail({
      from: `"KSH INFRA Leasing" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `${parkName} Brochure Download`,
      html: `<p>Hi there!</p>
<p>Thank you for your interest in our ${parkName} Brochure.</p>
<p>You can download it right now by clicking the link below:</p>
<p><a href="${brochureLink}">Download the ${parkName} Brochure</a></p>
<hr />
<p>If the link doesn't work, copy &amp; paste this URL into your browser:</p>
<p>${brochureLink}</p>
<p>Best regards,<br/>KSH INFRA</p>`,
      text: `Hi there!

Thank you for your interest in our ${parkName} Brochure.

You can download it right now by clicking the link below:

Download the ${parkName} Brochure

If the link doesn't work, copy & paste this URL into your browser:

${brochureLink}

Best regards,
KSH INFRA`,
    });

    await transporter.sendMail({
      from: `"KSH INFRA Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New brochure request: ${parkName}`,
      text: `New brochure request received.

Name: ${name}
Email: ${email}
Park: ${parkName}
Timestamp: ${sheetPayload.timestamp}`,
    });

    return Response.json({
      success: true,
      message: "Brochure email sent",
      sheetResponse: sheetText,
    });
  } catch (error) {
    console.error("Chakan IV brochure API error:", error);
    return Response.json(
      {
        success: false,
        error: error?.message || "Unexpected error",
      },
      { status: 500 },
    );
  }
}
