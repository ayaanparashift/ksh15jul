//
// import { motion } from "framer-motion";

// const PopForm = ({ onClose }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
//     >
//       <div className="lg:w-[720px] max-w-full w-full h-fit md:h-[510px] flex flex-col gap-[40px] px-[25px] py-[30px] md:px-[50px] md:py-[60px] bg-[#092241]">
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-[20px] md:text-[44px]  leading-[111%] fpt-700 text-white">
//               Download ESG Report
//             </h3>
//             {/* <p className="fsans-400 text-[24px] leading-[111%] text-[#E30613]">
//               Lorem Ipsum
//             </p> */}
//           </div>
//           <div
//             className="cursor-pointer h-[30px] w-[30px]  md:h-[60px] md:w-[60px]"
//             onClick={onClose}
//           >
//             <img src="/Sustainability/closepopf.svg" alt="Close Popup" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-[20px]">
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px]  py-[7px] pl-[16px] leading-[26px] fsans-400  border-[#BABABA]"
//               type="text"
//               id="name"
//             />
//           </div>
//           <div className="flex flex-col gap-[10px]">
//             <label
//               className="fsans-600 text-[16px] leading-[34px] text-[#767676]"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px]  py-[7px] pl-[16px] leading-[26px] fsans-400  border-[#BABABA]"
//               type="email"
//               id="email"
//             />
//           </div>
//         </div>
//         <div>
//           <button className="bg-[#E30613] text-white py-[14px] px-[21px] flex gap-[10px] items-center rounded-full">
//             <p className="fsans-600 text-[16px]">Proceed to Download</p>
//             <img
//               className="h-[24px] w-[24px]"
//               src="/Sustainability/susdownarr.svg"
//               alt="Down Arrow"
//             />
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PopForm;
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// // Initialize EmailJS once (you can also do this in your App entry point)
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const PopForm = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [sending, setSending] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email) return;

//     setSending(true);

//     // 1) Notify your company
//     const notifyParams = {
//       from_name: name,
//       from_email: email,
//     };

//     // 2) Auto-responder to the user
//     const autoParams = {
//       to_email: email,
//       report_link:
//         "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     };

//     try {
//       // Send to your team
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // e.g. "service_xyz789"
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_NOTIFY, // e.g. "ESG_REPORT_notify"
//         notifyParams
//       );

//       // Send auto-response to user
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_AUTORESPOND, // e.g. "template_autorespond"
//         autoParams
//       );

//       alert("✔️ Check your inbox for the report link!");
//       onClose();
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="lg:w-[720px] max-w-full w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-8"
//       >
//         <header className="flex justify-between items-center">
//           <h3 className="text-white text-[24px] md:text-[44px] font-bold">
//             Download ESG Report
//           </h3>
//           <button type="button" onClick={onClose}>
//             <img src="/Sustainability/closepopf.svg" alt="Close" />
//           </button>
//         </header>

//         <div className="flex flex-col gap-6">
//           <label className="text-[#767676]">
//             Name
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-[#263548] text-white border-b border-[#146BD7] py-2 px-4 outline-none"
//
//             />
//           </label>

//           <label className="text-[#767676]">
//             Email
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-[#263548] text-white border-b border-[#146BD7] py-2 px-4 outline-none"
//
//             />
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={sending}
//           className="self-start bg-[#E30613] text-white py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
//         >
//           {sending ? (
//             "Sending..."
//           ) : (
//             <>
//               <span>Proceed to Download</span>
//               <img
//                 className="h-6 w-6"
//                 src="/Sustainability/susdownarr.svg"
//                 alt="down arrow"
//               />
//             </>
//           )}
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default PopForm;
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// // Initialize EmailJS
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const PopForm = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [sending, setSending] = useState(false);
//   const [message, setMessage] = useState(""); // For success/error message
//   const [messageType, setMessageType] = useState(""); // "success" | "error"

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email) return;

//     console.log("📨 Submitting form with:", { name, email });

//     setSending(true);
//     setMessage(""); // Clear any previous message

//     const notifyParams = {
//       from_name: name,
//       from_email: email,
//     };

//     const autoParams = {
//       to_email: email,
//       report_link:
//         "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
//     };

//     try {
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_NOTIFY,
//         notifyParams
//       );

//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_AUTORESPOND,
//         autoParams
//       );

//       setMessage("✔️ Check your inbox for the report link!");
//       setMessageType("success");
//       setName("");
//       setEmail("");
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setMessage("❌ Something went wrong. Please try again.");
//       setMessageType("error");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="lg:w-[720px] max-w-full w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-8"
//       >
//         <header className="flex justify-between items-center">
//           <h3 className="text-white text-[24px] md:text-[44px] font-bold">
//             Download ESG Report
//           </h3>
//           <button type="button" onClick={onClose}>
//             <img src="/Sustainability/closepopf.svg" alt="Close" />
//           </button>
//         </header>

//         <div className="flex flex-col gap-6">
//           <label className="text-[#767676]">
//             Name
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-[#263548] text-white border-b border-[#146BD7] py-2 px-4 outline-none"
//
//             />
//           </label>

//           <label className="text-[#767676]">
//             Email
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-[#263548] text-white border-b border-[#146BD7] py-2 px-4 outline-none"
//
//             />
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={sending}
//           className="self-start bg-[#E30613] text-white py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
//         >
//           {sending ? (
//             "Sending..."
//           ) : (
//             <>
//               <span>Proceed to Download</span>
//               <img
//                 className="h-6 w-6"
//                 src="/Sustainability/susdownarr.svg"
//                 alt="down arrow"
//               />
//             </>
//           )}
//         </button>

//         {/* Message Section */}
//         {message && (
//           <div
//             className={`mt-4 px-4 py-3 rounded text-sm ${
//               messageType === "success" ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {message}
//           </div>
//         )}
//       </form>
//     </motion.div>
//   );
// };

// export default PopForm;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// // Initialize EmailJS
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const NAME_REGEX = /^[A-Za-z ]{2,}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const PopForm = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [sending, setSending] = useState(false);
//   const [submitted, setSubmitted] = useState(false); // tracks success
//   const [errorMessage, setErrorMessage] = useState(""); // tracks errors
//   const [fieldError, setFieldError] = useState({ field: "", text: "" });

//   const validateField = (field, value) => {
//     if (!value) {
//       return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
//     }
//     if (field === "name" && !NAME_REGEX.test(value)) {
//       return "Name must be at least 2 letters and contain only letters/spaces.";
//     }
//     if (field === "email" && !EMAIL_REGEX.test(value)) {
//       return "Please enter a valid email address.";
//     }
//     return "";
//   };

//   const handleFocus = (field) => {
//     if (fieldError.field === field) {
//       setFieldError({ field: "", text: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate name
//     let err = validateField("name", name);
//     if (err) {
//       setFieldError({ field: "name", text: err });
//       return;
//     }
//     // Validate email
//     err = validateField("email", email);
//     if (err) {
//       setFieldError({ field: "email", text: err });
//       return;
//     }

//     console.log("📨 Submitting form with:", { name, email });
//     setSending(true);
//     setErrorMessage("");
//     setFieldError({ field: "", text: "" });

//     const notifyParams = { from_name: name, from_email: email };
//     const autoParams = {
//       to_email: email,
//       report_link:
//         "https://www.kshinfra.com/wp-content/uploads/2024/07/KSH_ESG_Report_v13.pdf",
//     };

//     try {
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_NOTIFY,
//         notifyParams
//       );
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_AUTORESPOND,
//         autoParams
//       );
//       setSubmitted(true);
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setErrorMessage("❌ Something went wrong. Please try again.");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="lg:w-[620px]  max-w-full min-h-[318px] w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-0 sm:gap-8"
//         noValidate
//       >
//         <header className="flex justify-between items-center">
//           <h3 className="text-white text-[24px] md:text-[44px] font-bold">
//             Download ESG Report
//           </h3>
//           <button type="button" onClick={onClose}>
//             <img
//               className="h-10 w-10"
//               src="/Sustainability/icons/broclose.svg"
//               alt="Close"
//             />
//           </button>
//         </header>

//         {!submitted ? (
//           <>
//             <div className="flex flex-col gap-6">
//               {/* Name */}
//               <div>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onFocus={() => handleFocus("name")}
//                   placeholder="Name"
//                   className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
//                     fieldError.field === "name"
//                       ? "border-red-400"
//                       : "border-[#146BD7]"
//                   }`}
//                 />
//                 {fieldError.field === "name" && (
//                   <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onFocus={() => handleFocus("email")}
//                   placeholder="Email"
//                   className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
//                     fieldError.field === "email"
//                       ? "border-red-400"
//                       : "border-[#146BD7]"
//                   }`}
//                 />
//                 {fieldError.field === "email" && (
//                   <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
//                 )}
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={sending}
//               className="self-start bg-[#E30613] text-white mt-6 py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
//             >
//               {sending ? (
//                 "Sending..."
//               ) : (
//                 <>
//                   <span>Proceed to Download</span>
//                   <img
//                     className="h-6 w-6"
//                     src="/Sustainability/susdownarr.svg"
//                     alt="down arrow"
//                   />
//                 </>
//               )}
//             </button>
//           </>
//         ) : (
//           <div className="mt-4 sm:mt-4  text-white fsans-600 text-[20px] sm:text-[30px] py-3 rounded-lg">
//             Thank You For Submitting This Form. Please Check your inbox for the
//             report link!
//           </div>
//         )}

//         {errorMessage && (
//           <div className="mt-0 sm:mt-4 bg-white bg-opacity-20 text-red-300 text-[20px] sm:text-[30px] py-3 rounded-lg text-center">
//             {errorMessage}
//           </div>
//         )}
//       </form>
//     </motion.div>
//   );
// };

// export default PopForm;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// const NAME_REGEX = /^[A-Za-z ]{2,}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const PopForm = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [sending, setSending] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [fieldError, setFieldError] = useState({ field: "", text: "" });

//   // ✅ Init EmailJS client-side only
//   useEffect(() => {
//     if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
//       emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
//       console.log(
//         "✅ EmailJS initialized with key:",
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );
//     } else {
//       console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
//     }
//   }, []);

//   const validateField = (field, value) => {
//     if (!value) {
//       return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
//     }
//     if (field === "name" && !NAME_REGEX.test(value)) {
//       return "Name must be at least 2 letters and contain only letters/spaces.";
//     }
//     if (field === "email" && !EMAIL_REGEX.test(value)) {
//       return "Please enter a valid email address.";
//     }
//     return "";
//   };

//   const handleFocus = (field) => {
//     if (fieldError.field === field) {
//       setFieldError({ field: "", text: "" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate name
//     let err = validateField("name", name);
//     if (err) {
//       setFieldError({ field: "name", text: err });
//       return;
//     }
//     // Validate email
//     err = validateField("email", email);
//     if (err) {
//       setFieldError({ field: "email", text: err });
//       return;
//     }

//     console.log("📨 Submitting form with:", { name, email });
//     setSending(true);
//     setErrorMessage("");
//     setFieldError({ field: "", text: "" });

//     const notifyParams = { from_name: name, from_email: email };
//     const autoParams = {
//       to_email: email,
//       report_link:
//         "https://www.kshinfra.com/wp-content/uploads/2024/07/KSH_ESG_Report_v13.pdf",
//     };

//     try {
//       // ✅ First email (notify)
//       const res1 = await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_NOTIFY,
//         notifyParams
//       );
//       console.log("📧 Notify email sent:", res1);

//       // ✅ Second email (auto response)
//       const res2 = await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_AUTORESPOND,
//         autoParams
//       );
//       console.log("📧 Auto-respond email sent:", res2);

//       setSubmitted(true);
//     } catch (err) {
//       console.error("❌ EmailJS error:", err?.text || err?.message || err);
//       setErrorMessage("❌ Something went wrong. Please try again.");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="lg:w-[620px]  max-w-full min-h-[318px] w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-0 sm:gap-8"
//         noValidate
//       >
//         <header className="flex justify-between items-center">
//           <h3 className="text-white text-[24px] md:text-[44px] font-bold">
//             Download ESG Report
//           </h3>
//           <button type="button" onClick={onClose}>
//             <img
//               className="h-10 w-10"
//               src="/Sustainability/icons/broclose.svg"
//               alt="Close"
//             />
//           </button>
//         </header>

//         {!submitted ? (
//           <>
//             <div className="flex flex-col gap-6">
//               {/* Name */}
//               <div>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   onFocus={() => handleFocus("name")}
//                   placeholder="Name"
//                   className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
//                     fieldError.field === "name"
//                       ? "border-red-400"
//                       : "border-[#146BD7]"
//                   }`}
//                 />
//                 {fieldError.field === "name" && (
//                   <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onFocus={() => handleFocus("email")}
//                   placeholder="Email"
//                   className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
//                     fieldError.field === "email"
//                       ? "border-red-400"
//                       : "border-[#146BD7]"
//                   }`}
//                 />
//                 {fieldError.field === "email" && (
//                   <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
//                 )}
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={sending}
//               className="self-start bg-[#E30613] text-white mt-6 py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
//             >
//               {sending ? (
//                 "Sending..."
//               ) : (
//                 <>
//                   <span>Proceed to Download</span>
//                   <img
//                     className="h-6 w-6"
//                     src="/Sustainability/susdownarr.svg"
//                     alt="down arrow"
//                   />
//                 </>
//               )}
//             </button>
//           </>
//         ) : (
//           <div className="mt-4 sm:mt-4  text-white fsans-600 text-[20px] sm:text-[30px] py-3 rounded-lg">
//             Thank You For Submitting This Form. Please Check your inbox for the
//             report link!
//           </div>
//         )}

//         {errorMessage && (
//           <div className="mt-0 sm:mt-4 bg-white bg-opacity-20 text-red-300 text-[20px] sm:text-[30px] py-3 rounded-lg text-center">
//             {errorMessage}
//           </div>
//         )}
//       </form>
//     </motion.div>
//   );
// };

// export default PopForm;
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const NAME_REGEX = /^[A-Za-z ]{2,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PopForm = ({
  onClose,
  title = "Download ESG Report",
  esgReports = {
    2023: "/brochure/KSH_ESG_Report_2023.pdf",
    "2024-2025": "/brochure/KSH_ESG_Report_2024-2025.pdf",
  },
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldError, setFieldError] = useState({ field: "", text: "" });
  const [honeypot, setHoneypot] = useState("");

  // ✅ Init EmailJS client-side only
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      console.log("✅ EmailJS initialized");
    } else {
      console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    }
  }, []);

  const validateField = (field, value) => {
    if (!value) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    if (field === "name" && !NAME_REGEX.test(value)) {
      return "Name must be at least 2 letters and contain only letters/spaces.";
    }
    if (field === "email" && !EMAIL_REGEX.test(value)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleFocus = (field) => {
    if (fieldError.field === field) {
      setFieldError({ field: "", text: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    // ✅ Validate name
    let err = validateField("name", name);
    if (err) {
      setFieldError({ field: "name", text: err });
      return;
    }
    // ✅ Validate email
    err = validateField("email", email);
    if (err) {
      setFieldError({ field: "email", text: err });
      return;
    }
    // ✅ Validate year
    if (!year) {
      setFieldError({ field: "year", text: "Please select a year." });
      return;
    }

    const reportLink = esgReports[year];

    console.log("📨 Submitting form with:", { name, email, year });
    setSending(true);
    setErrorMessage("");
    setFieldError({ field: "", text: "" });

    const notifyParams = { from_name: name, from_email: email };
    const autoParams = {
      to_email: email,
      report_link: reportLink,
    };

    try {
      // ✅ Save entry in Google Sheet via API
      const sheetRes = await fetch("/api/esgr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          year,
          timestamp: new Date().toISOString(),
        }),
      });

      const sheetData = await sheetRes.json();
      console.log("📑 Sheet response:", sheetData);

      if (!sheetData.success) {
        console.warn("⚠️ Failed to save entry in sheet", sheetData.error);
      }

      // ✅ First email (notify)
      const res1 = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_NOTIFY,
        notifyParams,
      );
      console.log("📧 Notify email sent:", res1);

      // ✅ Second email (auto response)
      const res2 = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ESG_REPORT_AUTORESPOND,
        autoParams,
      );
      console.log("📧 Auto-respond email sent:", res2);

      setSubmitted(true);
    } catch (err) {
      console.error("❌ Error:", err?.text || err?.message || err);
      setErrorMessage("❌ Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <form
        onSubmit={handleSubmit}
        className="lg:w-[620px] max-w-full min-h-[318px] w-full bg-[#092241] p-6 md:p-12 flex flex-col gap-5 sm:gap-8 relative overflow-hidden"
        noValidate
      >
        <input
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          // style={{ display: "none" }}
          className="absolute left-[-9000px]"
        />
        <header className="flex justify-between items-center">
          <h3 className="text-white text-[24px] md:text-[44px] font-bold">
            {title}
          </h3>
          <button type="button" onClick={onClose}>
            <img
              className="h-10 w-10"
              src="/Sustainability/icons/broclose.svg"
              alt="Close"
            />
          </button>
        </header>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => handleFocus("name")}
                  placeholder="Name"
                  className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
                    fieldError.field === "name"
                      ? "border-red-400"
                      : "border-[#146BD7]"
                  }`}
                />
                {fieldError.field === "name" && (
                  <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => handleFocus("email")}
                  placeholder="Email"
                  className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none ${
                    fieldError.field === "email"
                      ? "border-red-400"
                      : "border-[#146BD7]"
                  }`}
                />
                {fieldError.field === "email" && (
                  <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
                )}
              </div>

              {/* Year */}
              <div className="relative">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  onFocus={() => handleFocus("year")}
                  className={`w-full bg-[#263548] text-white border-b py-2 px-4 outline-none appearance-none pr-8 fsans-400 text-[16px] ${
                    fieldError.field === "year"
                      ? "border-red-400"
                      : "border-[#146BD7]"
                  }`}
                >
                  <option value="" disabled>
                    Select a Year
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024-2025">2024-2025</option>
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                {fieldError.field === "year" && (
                  <p className="mt-1 text-sm text-red-400">{fieldError.text}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="self-start bg-[#E30613] text-white xl:mt-6 py-3 px-6 rounded-full flex items-center gap-2 disabled:opacity-50"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  <span>Proceed to Download</span>
                  <img
                    className="h-6 w-6"
                    src="/Sustainability/susdownarr.svg"
                    alt="down arrow"
                  />
                </>
              )}
            </button>
          </>
        ) : (
          <div className="mt-4 sm:mt-4 text-white fsans-600 text-[20px] sm:text-[30px] py-3 rounded-lg">
            Thank You For Submitting This Form. Please Check your inbox for the
            report link!
          </div>
        )}

        {errorMessage && (
          <div className="mt-0 sm:mt-4 bg-white bg-opacity-20 text-red-300 text-[20px] sm:text-[30px] py-3 rounded-lg text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default PopForm;
