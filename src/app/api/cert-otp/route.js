import crypto from "crypto";

export const runtime = "nodejs";

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

// -------------------- RATE LIMIT --------------------
const rateLimitStore = new Map();
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 5;

function isRateLimited(key) {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(key) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_MAX) return true;
  timestamps.push(now);
  rateLimitStore.set(key, timestamps);
  return false;
}

// -------------------- MAIN API --------------------
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("cert-otp received body:", body);
    const { phone, name, email } = body;

    if (!phone || !email || !name) {
      return Response.json(
        { success: false, error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    if (!MINIORANGE_CUSTOMER_KEY || !MINIORANGE_API_KEY) {
      return Response.json(
        { success: false, error: "SMS service not configured" },
        { status: 500 }
      );
    }

    const emailKey = email.toLowerCase().trim();
    // Normalize to E.164 — if 10-digit Indian number, prepend +91
    const rawPhone = phone.trim();
    const normalizedPhone = rawPhone.startsWith("+")
      ? rawPhone
      : rawPhone.length === 10
      ? `+91${rawPhone}`
      : rawPhone;

    if (isRateLimited(emailKey)) {
      return Response.json(
        { success: false, error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    // Create user — MiniOrange requires the user to exist before challenge.
    // If user already exists, the API returns a non-success status which we intentionally ignore.
    const nameParts = name.trim().split(/\s+/);
    const createRes = await fetch("https://login.xecurify.com/moas/api/admin/users/create", {
      method: "POST",
      headers: generateAuthHeaders(),
      body: JSON.stringify({
        customerKey: MINIORANGE_CUSTOMER_KEY,
        username: emailKey,
        email: emailKey,
        firstName: nameParts[0] || "User",
        lastName: nameParts.slice(1).join(" ") || "-",
        phone: normalizedPhone,
        phoneNumber: normalizedPhone,
        mobileNumber: normalizedPhone,
      }),
    });
    const createData = await createRes.json();
    console.log("create user:", createData);

    const challengeRes = await fetch("https://login.xecurify.com/moas/api/auth/challenge", {
      method: "POST",
      headers: generateAuthHeaders(),
      body: JSON.stringify({
        customerKey: MINIORANGE_CUSTOMER_KEY,
        username: emailKey,
        authType: "SMS",
        transactionName: "KSH Certificate Download",
      }),
    });

    const challengeData = await challengeRes.json();
    console.log("OTP challenge:", challengeData);

    if (!challengeRes.ok || challengeData.status === "FAILED" || challengeData.status === "ERROR") {
      return Response.json(
        { success: false, error: challengeData.message || "Failed to send OTP" },
        { status: 400 }
      );
    }

    return Response.json({ success: true, txId: challengeData.txId });
  } catch (err) {
    console.error("cert-otp error:", err);
    return Response.json(
      { success: false, error: "Failed to send OTP. Please try again." },
      { status: 500 }
    );
  }
}
