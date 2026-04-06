// import nodemailer from "nodemailer";

// export const runtime = "nodejs";

// const NAME_REGEX = /^[A-Za-z ]{2,}$/;
// const ORGANIZATION_REGEX = /^[\w\s.\-&]{2,}$/;
// const PHONE_REGEX = /^(?:\+91\s?|0\s?)?(?:\d{10}|\d{5}\s\d{5})$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const RECIPIENTS = [
//   // "rushid.domadia@kshinfra.com",
//   // "jeyakrishnan.achuthan@kshinfra.com",
//   // "karan.domadia@kshinfra.com",
//   // "kshinframail@gmail.com",
//   "ayaan.s@parashifttech.com",
// ];

// function formatDateDDMMYY(dateObj) {
//   return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${String(
//     dateObj.getFullYear(),
//   ).slice(-2)}`;
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const date = (body?.date || "").trim();
//     const name = (body?.name || "").trim();
//     const organization = (body?.organization || "").trim();
//     const contactNumber = (body?.contact_number || "").trim();
//     const email = (body?.email || "").trim();
//     const source = (body?.source || "").trim();

//     if (!NAME_REGEX.test(name)) {
//       return Response.json({ success: false, error: "Invalid name" }, { status: 400 });
//     }

//     if (!ORGANIZATION_REGEX.test(organization)) {
//       return Response.json(
//         { success: false, error: "Invalid organization" },
//         { status: 400 },
//       );
//     }

//     if (!PHONE_REGEX.test(contactNumber)) {
//       return Response.json(
//         { success: false, error: "Invalid contact number" },
//         { status: 400 },
//       );
//     }

//     if (!EMAIL_REGEX.test(email)) {
//       return Response.json({ success: false, error: "Invalid email" }, { status: 400 });
//     }

//     const timestamp = new Date().toISOString();
//     const sheetDate = date || formatDateDDMMYY(new Date());
//     const payload = {
//       date: sheetDate,
//       name,
//       organization,
//       contact_number: contactNumber,
//       email,
//       source,
//       form_type: "park_environmental_certificate_enquiry",
//       timestamp,
//     };

//     let sheetStatus = { enabled: false, success: false, response: null };

//     if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
//       return Response.json(
//         { success: false, error: "SMTP is not configured" },
//         { status: 500 },
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || 587),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const adminMail = transporter.sendMail({
//       from: `"KSH INFRA Website" <${process.env.SMTP_USER}>`,
//       to: RECIPIENTS.join(","),
//       subject: "New Environmental Certificate Enquiry",
//       text: `New enquiry received for Environmental Certificate.\n\nName: ${name}\nOrganization: ${organization}\nContact Number: ${contactNumber}\nEmail: ${email}\nSource: ${source || "N/A"}\nTimestamp: ${timestamp}`,
//       html: `<p>New enquiry received for <strong>Environmental Certificate</strong>.</p>
// <p><strong>Name:</strong> ${name}</p>
// <p><strong>Organization:</strong> ${organization}</p>
// <p><strong>Contact Number:</strong> ${contactNumber}</p>
// <p><strong>Email:</strong> ${email}</p>
// <p><strong>Source:</strong> ${source || "N/A"}</p>`,
//     });

//     const autoResponderMail = transporter.sendMail({
//       from: `"KSH INFRA Leasing" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: "We have received your enquiry",
//       text: `Hi ${name},\n\nThank you for reaching out to KSH INFRA. Our team has received your request and will get in touch shortly regarding the Environmental Certificate.\n\nRegards,\nKSH INFRA`,
//       html: `<p>Hi ${name},</p>
// <p>Thank you for reaching out to KSH INFRA.</p>
// <p>Regards,<br/>KSH INFRA</p>`,
//     });

//     let sheetTask = Promise.resolve();
//     if (process.env.SHEET_URL_PARK_CERTIFICATE) {
//       sheetTask = fetch(process.env.SHEET_URL_PARK_CERTIFICATE, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       }).then(async (res) => {
//         const text = await res.text();
//         sheetStatus = { enabled: true, success: res.ok, response: text };
//         if (!res.ok) console.error("Sheet sync failed:", text);
//       });
//     }

//     await Promise.all([adminMail, autoResponderMail, sheetTask]);

//     return Response.json({
//       success: true,
//       message: "Enquiry submitted successfully",
//       sheet: sheetStatus,
//     });
//   } catch (error) {
//     console.error("Park certificate enquiry API error:", error);
//     return Response.json(
//       { success: false, error: error?.message || "Unexpected error" },
//       { status: 500 },
//     );
//   }
// }
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const NAME_REGEX = /^[A-Za-z ]{2,}$/;
const ORGANIZATION_REGEX = /^[\w\s.\-&]{2,}$/;
const PHONE_REGEX = /^(?:\+91\s?|0\s?)?(?:\d{10}|\d{5}\s\d{5})$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RECIPIENTS = [
  "rushid.domadia@kshinfra.com",
  "jeyakrishnan.achuthan@kshinfra.com",
  "karan.domadia@kshinfra.com",
];

function formatDateDDMMYY(dateObj) {
  return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${String(
    dateObj.getFullYear(),
  ).slice(-2)}`;
}

function normalizePhoneForMailAndSheet(rawPhone) {
  const trimmed = (rawPhone || "").trim();
  const compact = trimmed.replace(/\s+/g, "");

  if (/^\+91\d{10}$/.test(compact)) {
    return compact.slice(3);
  }

  return trimmed;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const date = (body?.date || "").trim();
    const name = (body?.name || "").trim();
    const organization = (body?.organization || "").trim();
    const contactNumber = (body?.contact_number || "").trim();
    const email = (body?.email || "").trim();
    const source = (body?.source || "").trim();
    const normalizedContactNumber =
      normalizePhoneForMailAndSheet(contactNumber);

    // 1. Validations
    if (!NAME_REGEX.test(name))
      return Response.json(
        { success: false, error: "Invalid name" },
        { status: 400 },
      );
    if (!ORGANIZATION_REGEX.test(organization))
      return Response.json(
        { success: false, error: "Invalid organization" },
        { status: 400 },
      );
    if (!PHONE_REGEX.test(contactNumber))
      return Response.json(
        { success: false, error: "Invalid contact number" },
        { status: 400 },
      );
    if (!EMAIL_REGEX.test(email))
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );

    const timestamp = new Date().toISOString();
    const sheetDate = date || formatDateDDMMYY(new Date());

    const payload = {
      date: sheetDate,
      name,
      organization,
      contact_number: normalizedContactNumber,
      email,
      source,
      form_type: "park_environmental_certificate_enquiry",
      timestamp,
    };

    // 2. SMTP Setup
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return Response.json(
        { success: false, error: "SMTP is not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const adminMail = transporter.sendMail({
      from: `"KSH INFRA Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENTS.join(","),
      subject: "New Environmental Certificate Enquiry",
      html: `<p>New enquiry received for <strong>Environmental Certificate</strong>.</p>
       <p>
         <strong>Name:</strong> ${name}<br>
         <strong>Email:</strong> ${email}<br>
         <strong>Phone:</strong> ${normalizedContactNumber}<br>
         <strong>Organization:</strong> ${organization}<br>
         <strong>Source:</strong> ${source || "N/A"}
       </p>`,
    });

    const autoResponderMail = transporter.sendMail({
      from: `"KSH INFRA Leasing" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We have received your enquiry",
      html: `<p>Hi ${name},</p><p>Thank you for reaching out to KSH INFRA. Our team will get back to you soon.</p>`,
    });

    // 3. Google Sheets Sync (The Fix)
    let sheetStatus = { enabled: false, success: false, response: null };
    let sheetTask = Promise.resolve();

    if (process.env.SHEET_URL_PARK_CERTIFICATE) {
      sheetTask = fetch(process.env.SHEET_URL_PARK_CERTIFICATE, {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // Avoids CORS preflight issues
        body: JSON.stringify(payload),
        redirect: "follow", // CRITICAL for Apps Script 302 redirects
      })
        .then(async (res) => {
          const text = await res.text();
          const contentType = res.headers.get("content-type") || "";

          if (!res.ok) {
            sheetStatus = {
              enabled: true,
              success: false,
              response: text,
              status: res.status,
            };
            throw new Error(`Sheet HTTP ${res.status}`);
          }

          if (!contentType.includes("application/json")) {
            sheetStatus = {
              enabled: true,
              success: false,
              response: text,
              status: res.status,
            };
            throw new Error("Sheet returned non-JSON response");
          }

          let parsed;
          try {
            parsed = JSON.parse(text);
          } catch {
            sheetStatus = {
              enabled: true,
              success: false,
              response: text,
              status: res.status,
            };
            throw new Error("Sheet returned invalid JSON");
          }

          sheetStatus = {
            enabled: true,
            success: !!parsed?.success,
            response: text,
          };
          if (!parsed?.success) {
            throw new Error(parsed?.error || "Sheet reported failure");
          }
        })
        .catch((err) => {
          console.error("Sheet Sync Error:", err);
          sheetStatus = { enabled: true, success: false, error: err.message };
        });
    }

    // Wait for all processes to finish
    await Promise.all([adminMail, autoResponderMail, sheetTask]);

    if (sheetStatus.enabled && !sheetStatus.success) {
      return Response.json(
        {
          success: false,
          error: sheetStatus.error || "Sheet sync failed",
          sheet: sheetStatus,
        },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      message: "Enquiry submitted successfully",
      sheet: sheetStatus,
    });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { success: false, error: error?.message || "Unexpected error" },
      { status: 500 },
    );
  }
}
