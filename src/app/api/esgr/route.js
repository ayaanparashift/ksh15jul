export const runtime = "nodejs"; // ⬅ ensure Node runtime, not edge

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(process.env.SHEET_URL4, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    console.log("Sheet raw response:", text);

    if (!response.ok) {
      throw new Error(`Failed: ${response.status} ${text}`);
    }

    let result = {};
    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text };
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Sheets API error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
