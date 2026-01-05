import emailjs from "@emailjs/nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    const payload = {
      user_name: body.user_name,
      user_company: body.user_company,
      user_phone: body.user_phone,
      user_email: body.user_email,
      user_subject: body.user_subject,
      user_message: body.user_message,
      source_url: "API Test / Postman",
    };

    const start = Date.now();

    // company email
    const companyPromise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY,
      payload,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );

    // auto-reply
    const autoReplyPromise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY,
      payload,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );

    const results = await Promise.allSettled([
      companyPromise,
      autoReplyPromise,
    ]);

    const timeTaken = Date.now() - start;

    return Response.json({
      success: true,
      timeTakenMs: timeTaken,
      company: results[0].status,
      autoReply: results[1].status,
    });
  } catch (err) {
    return Response.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
