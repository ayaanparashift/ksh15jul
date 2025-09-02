import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { subscriber_email } = await req.json();

    if (!subscriber_email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const SHEET_URL3 = process.env.SHEET_URL3;

    if (!SHEET_URL3) {
      return NextResponse.json(
        { success: false, error: "Google Sheet URL is not configured" },
        { status: 500 }
      );
    }

    // Send to Google Apps Script
    const response = await fetch(SHEET_URL3, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscriber_email }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || "Failed to send to Google Sheets");
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
