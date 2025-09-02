// app/api/sheet/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // Get the form data from request
    const SHEET_URL5 = process.env.SHEET_URL5;

    if (!SHEET_URL5) {
      return NextResponse.json(
        { error: "Missing Google Sheet URL (SHEET_URL5)" },
        { status: 500 }
      );
    }

    // Send data to Google Apps Script Web App (sheet)
    const response = await fetch(SHEET_URL5, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets request failed: ${response.status}`);
    }

    const result = await response.json(); // Expect JSON response from Apps Script

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error("❌ Sheets API Error:", err);
    return NextResponse.json(
      { error: "Failed to submit data to Google Sheets" },
      { status: 500 }
    );
  }
}
