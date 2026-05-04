import crypto from "crypto";

export const runtime = "nodejs";

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
    const { phone } = await req.json();

    if (!phone) {
      return Response.json({ success: false, error: "Phone number is required" }, { status: 400 });
    }

    if (!MINIORANGE_CUSTOMER_KEY || !MINIORANGE_API_KEY) {
      return Response.json(
        { success: false, error: "MinIOrange not configured" },
        { status: 500 }
      );
    }

    // Format phone number with country code
    let formattedPhone = phone.replace(/[^\d+]/g, "");
    if (!formattedPhone.startsWith("+")) {
      if (formattedPhone.startsWith("91") && formattedPhone.length === 12) {
        formattedPhone = "+" + formattedPhone;
      } else if (formattedPhone.length === 10) {
        formattedPhone = "+91" + formattedPhone;
      } else {
        formattedPhone = "+" + formattedPhone;
      }
    }

    const headers = generateAuthHeaders(MINIORANGE_CUSTOMER_KEY, MINIORANGE_API_KEY);

    const requestBody = {
      customerKey: MINIORANGE_CUSTOMER_KEY,
      phone: formattedPhone,
      authType: "SMS",
      transactionName: "KSH Certificate Download",
    };

    const response = await fetch("https://login.xecurify.com/moas/api/auth/challenge", {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log("MinIOrange send OTP response:", { status: response.status, data });

    if (!response.ok || data.status === "FAILED" || data.status === "ERROR") {
      return Response.json(
        {
          success: false,
          error: data.message || data.error || "Failed to send OTP",
          details: data,
        },
        { status: 400 }
      );
    }

    return Response.json({
      success: true,
      txId: data.txId,
      message: data.message || "OTP sent successfully",
    });
  } catch (err) {
    console.error("cert-otp error:", err);
    return Response.json(
      { success: false, error: `Failed to send OTP: ${err.message}` },
      { status: 500 }
    );
  }
}
