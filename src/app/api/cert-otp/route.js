// OTP is now sent directly by the Firebase client SDK.
// This route is no longer used.
export const runtime = "nodejs";

export async function POST() {
  return Response.json(
    { success: false, error: "Not used. OTP is handled by Firebase client SDK." },
    { status: 410 },
  );
}
