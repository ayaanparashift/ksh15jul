// import emailjs from "@emailjs/browser";

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const TEMPLATE_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY;
// const TEMPLATE_AUTOREPLY_ID =
//   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY;
// const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// emailjs.init(USER_ID);

// export async function sendEmails(data) {
//   if (
//     !SERVICE_ID ||
//     !TEMPLATE_COMPANY_ID ||
//     !TEMPLATE_AUTOREPLY_ID ||
//     !USER_ID
//   ) {
//     throw new Error(
//       "Missing EmailJS configuration. Make sure all env vars are set."
//     );
//   }

//   const {
//     user_name,
//     user_company,
//     user_phone,
//     user_email,
//     user_subject,
//     user_message,
//     attachmentBase64, // optional
//     attachmentName, // optional
//   } = data;

//   const companyParams = {
//     user_name,
//     user_company,
//     user_phone,
//     user_email,
//     user_subject,
//     user_message,
//     ...(attachmentBase64 &&
//       attachmentName && {
//         attachment: {
//           content: attachmentBase64,
//           filename: attachmentName,
//         },
//       }),
//   };

//   const autoReplyParams = {
//     to_name: user_name,
//     to_email: user_email,
//   };

//   let successCompany = false;
//   let successAutoReply = false;

//   try {
//     await emailjs.send(SERVICE_ID, TEMPLATE_COMPANY_ID, companyParams);
//     successCompany = true;
//     console.log("✅ Company email sent");
//   } catch (err) {
//     console.error("❌ Company email failed:", err);
//   }

//   try {
//     await emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY_ID, autoReplyParams);
//     successAutoReply = true;
//     console.log("✅ Auto-reply sent");
//   } catch (err) {
//     console.error("❌ Auto-reply failed:", err);
//   }

//   if (!successCompany && !successAutoReply) {
//     throw new Error("Both emails failed to send");
//   }

//   return {
//     successCompany,
//     successAutoReply,
//   };
// }
// utils/sendEmail.js
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY;
const TEMPLATE_AUTOREPLY_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (
  !SERVICE_ID ||
  !TEMPLATE_COMPANY_ID ||
  !TEMPLATE_AUTOREPLY_ID ||
  !PUBLIC_KEY
) {
  throw new Error(
    "Missing EmailJS configuration. Make sure all env vars are set."
  );
}

// Initialize once
emailjs.init(PUBLIC_KEY);

export async function sendEmails(data) {
  const {
    user_name,
    user_company,
    user_phone,
    user_email,
    user_subject,
    user_message,
    attachmentBase64,
    attachmentName,
  } = data;

  // Build company email params
  const companyParams = {
    user_name,
    user_company,
    user_phone,
    user_email,
    user_subject,
    user_message,
    ...(attachmentBase64 && attachmentName
      ? {
          attachment: {
            content: attachmentBase64,
            filename: attachmentName,
          },
        }
      : {}),
  };

  // Build auto-reply params
  const autoReplyParams = {
    to_name: user_name,
    to_email: user_email,
    user_name, // optionally include others if your template expects them
    user_company, // etc
    user_subject,
    user_message,
  };

  let successCompany = false;
  let successAutoReply = false;

  try {
    const resultCompany = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_COMPANY_ID,
      companyParams,
      { publicKey: PUBLIC_KEY } // explicit option
    );
    if (resultCompany.status === 200) {
      successCompany = true;
      console.log("✅ Company email sent", resultCompany);
    } else {
      console.warn(
        "⚠️ Company email send returned non-200 status",
        resultCompany
      );
    }
  } catch (err) {
    console.error("❌ Company email failed:", err);
  }

  try {
    const resultAuto = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_AUTOREPLY_ID,
      autoReplyParams,
      { publicKey: PUBLIC_KEY }
    );
    if (resultAuto.status === 200) {
      successAutoReply = true;
      console.log("✅ Auto-reply sent", resultAuto);
    } else {
      console.warn("⚠️ Auto-reply send returned non-200 status", resultAuto);
    }
  } catch (err) {
    console.error("❌ Auto-reply failed:", err);
  }

  if (!successCompany && !successAutoReply) {
    throw new Error("Both emails failed to send");
  }

  return {
    successCompany,
    successAutoReply,
  };
}
