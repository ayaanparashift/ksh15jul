import emailjs from "@emailjs/browser";

//// // Replace these environment variables in your .env.local
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_COMPANY;
const TEMPLATE_AUTOREPLY_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_AUTOREPLY;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// // // Initialize EmailJS with your Public Key
emailjs.init(USER_ID);

// /**
//  * Send form data to company and auto-reply to user.
//  * @param {Object} data - Form field values.
//  * @param {string} data.user_name
//  * @param {string} data.user_company
//  * @param {string} data.user_phone
//  * @param {string} data.user_email
//  * @param {string} data.user_subject
//  * @param {string} data.user_message
//  */
// // export async function sendEmails(data) {
// //   console.log(data);
// //   if (
// //     !SERVICE_ID ||
// //     !TEMPLATE_COMPANY_ID ||
// //     !TEMPLATE_AUTOREPLY_ID ||
// //     !USER_ID
// //   ) {
// //     throw new Error(
// //       "Missing EmailJS configuration. Make sure all env vars are set."
// //     );
// //   }

// //   // Parameters for the company template
// //   const companyParams = {
// //     user_name: data.user_name,
// //     user_company: data.user_company,
// //     user_phone: data.user_phone,
// //     user_email: data.user_email,
// //     user_subject: data.user_subject,
// //     user_message: data.user_message,
// //     // to_email: data.to_email, // ✅ use the dynamic one
// //   };

// //   // Parameters for the auto-reply template
// //   const autoReplyParams = {
// //     to_name: data.user_name,
// //     to_email: data.user_email,
// //     // you can add more fields if your template needs them
// //   };

// //   // Send both emails in parallel
// //   const sendCompany = emailjs.send(
// //     SERVICE_ID,
// //     TEMPLATE_COMPANY_ID,
// //     companyParams
// //   );
// //   const sendAutoReply = emailjs.send(
// //     SERVICE_ID,
// //     TEMPLATE_AUTOREPLY_ID,
// //     autoReplyParams
// //   );

// //   try {
// //     await Promise.all([sendCompany, sendAutoReply]);
// //     console.log("✅ Both emails sent successfully");
// //   } catch (error) {
// //     console.error("❌ Error sending emails:", error);
// //     throw error;
// //   }
// // }

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

//   const companyParams = {
//     user_name: data.user_name,
//     user_company: data.user_company,
//     user_phone: data.user_phone,
//     user_email: data.user_email,
//     user_subject: data.user_subject,
//     user_message: data.user_message,
//   };

//   const autoReplyParams = {
//     to_name: data.user_name,
//     to_email: data.user_email,
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

export async function sendEmails(data) {
  if (
    !SERVICE_ID ||
    !TEMPLATE_COMPANY_ID ||
    !TEMPLATE_AUTOREPLY_ID ||
    !USER_ID
  ) {
    throw new Error(
      "Missing EmailJS configuration. Make sure all env vars are set."
    );
  }

  const {
    user_name,
    user_company,
    user_phone,
    user_email,
    user_subject,
    user_message,
    attachmentBase64, // optional
    attachmentName, // optional
  } = data;

  const companyParams = {
    user_name,
    user_company,
    user_phone,
    user_email,
    user_subject,
    user_message,
    ...(attachmentBase64 &&
      attachmentName && {
        attachment: {
          content: attachmentBase64,
          filename: attachmentName,
        },
      }),
  };

  const autoReplyParams = {
    to_name: user_name,
    to_email: user_email,
  };

  let successCompany = false;
  let successAutoReply = false;

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_COMPANY_ID, companyParams);
    successCompany = true;
    console.log("✅ Company email sent");
  } catch (err) {
    console.error("❌ Company email failed:", err);
  }

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY_ID, autoReplyParams);
    successAutoReply = true;
    console.log("✅ Auto-reply sent");
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
