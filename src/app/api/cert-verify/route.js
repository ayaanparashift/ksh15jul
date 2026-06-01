import nodemailer from "nodemailer";
import path from "path";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const runtime = "nodejs";

const CERT_FILE_PATH = path.join(
  process.cwd(),
  "public",
  "Goldberg_certificates.rar",
);

function getAdminAuth() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return getAuth();
}

export async function POST(req) {
  try {
    const { idToken, name, email, organization } = await req.json();

    if (!idToken) {
      return Response.json(
        { success: false, error: "ID token is required" },
        { status: 400 },
      );
    }

    if (
      !process.env.FIREBASE_PROJECT_ID ||
      !process.env.FIREBASE_CLIENT_EMAIL ||
      !process.env.FIREBASE_PRIVATE_KEY
    ) {
      return Response.json(
        { success: false, error: "Auth service not configured" },
        { status: 500 },
      );
    }

    const adminAuth = getAdminAuth();

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(idToken);
    } catch (err) {
      console.error("Firebase token verify error:", err);
      return Response.json(
        { success: false, error: "Invalid or expired OTP. Please try again." },
        { status: 400 },
      );
    }

    console.log("Verified phone:", decodedToken.phone_number);

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
