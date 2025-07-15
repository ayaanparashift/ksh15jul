// "use client";
// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import { sendEmails } from "../../utils/sendEmail";

// const ContactForm = () => {
//   const [userName, setUserName] = useState("");
//   const [userCompany, setUserCompany] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userSubject, setUserSubject] = useState("");
//   const [userMessage, setUserMessage] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     try {
//       const response = await sendEmails({
//         user_name: userName,
//         user_company: userCompany,
//         user_phone: userPhone,
//         user_email: userEmail,
//         user_subject: userSubject,
//         user_message: userMessage,
//       });

//       if (response.successCompany && response.successAutoReply) {
//         toast.success("Your enquiry has been sent!");
//       } else if (response.successCompany) {
//         toast.success("📨 Enquiry sent, but auto-reply failed.");
//       } else if (response.successAutoReply) {
//         toast.success("📨 Auto-reply sent, but company email failed.");
//       } else {
//         toast.error("❌ Both email attempts failed.");
//       }

//       // Reset form
//       setUserName("");
//       setUserCompany("");
//       setUserPhone("");
//       setUserEmail("");
//       setUserSubject("");
//       setUserMessage("");
//       setIsSubmitted(true);
//     } catch (err) {
//       toast.error(`❌ An error occurred: ${err.message}`);
//       console.error("Error sending email:", err);
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="bg-[#092241] px-[5%] md:px-[40px] pt-[47px] sm:pb-0 pb-[47px] xl:mt-[50px] mt-0">
//       <Toaster position="top-center" />
//       {!isSubmitted && (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-[24px] sm:gap-[50px]"
//         >
//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <input
//               type="text"
//               placeholder="Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
//               disabled={isSending}
//             />
//             <input
//               type="text"
//               placeholder="Company Name"
//               value={userCompany}
//               onChange={(e) => setUserCompany(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
//               disabled={isSending}
//             />
//           </div>

//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <input
//               type="number"
//               placeholder="Phone"
//               value={userPhone}
//               onChange={(e) => setUserPhone(e.target.value)}
//               className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
//               disabled={isSending}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-[295px]"
//               disabled={isSending}
//             />
//           </div>

//           <div className="relative w-full text-[16px]">
//             {/* <select
//             name="Subject"
//             id="sub"
//             value={userSubject}
//             onChange={(e) => setUserSubject(e.target.value)}

//             disabled={isSending}
//             className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//           >
//             <option value="">Subject</option>
//             <option value="Option 1">Option 1</option>
//             <option value="Option 2">Option 2</option>
//             <option value="Option 3">Option 3</option>
//           </select> */}
//             <input
//               name="user_subject"
//               type="text"
//               placeholder="Subject"
//               value={userSubject}
//               onChange={(e) => setUserSubject(e.target.value)}
//               className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] fsans-400 text-[16px] leading-[111%]"
//               disabled={isSending}
//             />

//             {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="26"
//               height="26"
//               viewBox="0 0 26 26"
//               fill="none"
//             >
//               <path
//                 d="M19.5888 9.31081L13.4983 15.3051C13.3654 15.4366 13.186 15.5103 12.9991 15.5103C12.8122 15.5103 12.6328 15.4366 12.4999 15.3051L6.4094 9.31211C6.27569 9.18071 6.09572 9.10709 5.90825 9.10709C5.72078 9.10709 5.54081 9.18071 5.4071 9.31211C5.34126 9.3763 5.28893 9.45302 5.2532 9.53775C5.21747 9.62248 5.19907 9.71351 5.19907 9.80546C5.19907 9.89742 5.21747 9.98844 5.2532 10.0732C5.28893 10.1579 5.34126 10.2346 5.4071 10.2988L11.4963 16.2918C11.8974 16.6856 12.437 16.9062 12.9991 16.9062C13.5612 16.9062 14.1008 16.6856 14.5019 16.2918L20.5911 10.2988C20.6571 10.2346 20.7096 10.1578 20.7455 10.0729C20.7813 9.9881 20.7998 9.89692 20.7998 9.80481C20.7998 9.7127 20.7813 9.62152 20.7455 9.53667C20.7096 9.45182 20.6571 9.37502 20.5911 9.31081C20.4574 9.17941 20.2774 9.10579 20.09 9.10579C19.9025 9.10579 19.7225 9.17941 19.5888 9.31081Z"
//                 fill="white"
//               />
//             </svg>
//           </span> */}
//           </div>

//           <div className="w-full">
//             <textarea
//               className="h-[118px] text-[16px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//               name="Message"
//               placeholder="Message"
//               id="message"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               required
//               disabled={isSending}
//             ></textarea>
//           </div>

//           <div className="w-full">
//             <button
//               type="submit"
//               disabled={isSending}
//               className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//             >
//               <p>{isSending ? "Sending..." : "Submit"}</p>
//               <img src="/rightUpArrow.svg" alt="Arrow" />
//             </button>
//           </div>
//         </form>
//       )}
//       {isSubmitted && (
//         <div className="h-full w-full flex">
//           <h1 className="md:text-[40px] text-[24px] text-white">
//             Thank you for submitting this form. Your form has been successfully
//             submitted.
//           </h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

///********************************************************************************** */

// "use client";
// import React, { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import { sendEmails } from "../../utils/sendEmail";

// const ContactForm = () => {
//   const [userName, setUserName] = useState("");
//   const [userCompany, setUserCompany] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userSubject, setUserSubject] = useState("");
//   const [userMessage, setUserMessage] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isSending, setIsSending] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validate = () => {
//     const errs = {};

//     if (!/^[a-zA-Z\s]{2,}$/.test(userName)) {
//       errs.userName = "Please enter a valid name (only letters & spaces)";
//     } else if (!/^[\w\s.\-&]{2,}$/.test(userCompany)) {
//       errs.userCompany = "Please enter a valid company name";
//     } else if (!/^[6-9][0-9]{9}$/.test(userPhone)) {
//       errs.userPhone = "Enter a valid 10-digit Indian phone number";
//     } else if (
//       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)
//     ) {
//       errs.userEmail = "Enter a valid email address";
//     } else if (userSubject.trim().length < 2) {
//       errs.userSubject = "Please enter a subject";
//     } else if (userMessage.trim().length < 5) {
//       errs.userMessage = "Message must be at least 5 characters";
//     }

//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const clearError = (field) => {
//     setErrors((prev) => {
//       const copy = { ...prev };
//       delete copy[field];
//       return copy;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSending(true);
//     try {
//       const response = await sendEmails({
//         user_name: userName,
//         user_company: userCompany,
//         user_phone: userPhone,
//         user_email: userEmail,
//         user_subject: userSubject,
//         user_message: userMessage,
//       });

//       if (response.successCompany && response.successAutoReply) {
//         toast.success("Your enquiry has been sent!");
//       } else if (response.successCompany) {
//         toast.success("📨 Enquiry sent, but auto-reply failed.");
//       } else if (response.successAutoReply) {
//         toast.success("📨 Auto-reply sent, but company email failed.");
//       } else {
//         toast.error("❌ Both email attempts failed.");
//       }

//       setUserName("");
//       setUserCompany("");
//       setUserPhone("");
//       setUserEmail("");
//       setUserSubject("");
//       setUserMessage("");
//       setIsSubmitted(true);
//     } catch (err) {
//       toast.error(`❌ An error occurred: ${err.message}`);
//       console.error("Error sending email:", err);
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="bg-[#092241] flex-1 px-[5%] md:px-[40px] pt-[47px] sm:pb-0 pb-[47px] xl:mt-[50px] mt-0">
//       <Toaster position="top-center" />
//       {!isSubmitted && (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-[24px] sm:gap-[50px]"
//         >
//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <div className="w-full sm:w-[295px]">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 onFocus={() => clearError("userName")}
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 disabled={isSending}
//               />
//               {errors.userName && (
//                 <span className="text-sm text-red-400">{errors.userName}</span>
//               )}
//             </div>
//             <div className="w-full sm:w-[295px]">
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 value={userCompany}
//                 onChange={(e) => setUserCompany(e.target.value)}
//                 onFocus={() => clearError("userCompany")}
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 disabled={isSending}
//               />
//               {errors.userCompany && (
//                 <span className="text-sm text-red-400">
//                   {errors.userCompany}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <div className="w-full sm:w-[295px]">
//               <input
//                 type="number"
//                 placeholder="Phone"
//                 value={userPhone}
//                 onChange={(e) => setUserPhone(e.target.value)}
//                 onFocus={() => clearError("userPhone")}
//                 className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 disabled={isSending}
//               />
//               {errors.userPhone && (
//                 <span className="text-sm text-red-400">{errors.userPhone}</span>
//               )}
//             </div>
//             <div className="w-full sm:w-[295px]">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={userEmail}
//                 onChange={(e) => setUserEmail(e.target.value)}
//                 onFocus={() => clearError("userEmail")}
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 disabled={isSending}
//               />
//               {errors.userEmail && (
//                 <span className="text-sm text-red-400">{errors.userEmail}</span>
//               )}
//             </div>
//           </div>

//           <div className="relative w-full text-[16px]">
//             <input
//               name="user_subject"
//               type="text"
//               placeholder="Subject"
//               value={userSubject}
//               onChange={(e) => setUserSubject(e.target.value)}
//               onFocus={() => clearError("userSubject")}
//               className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] fsans-400 text-[16px] leading-[111%]"
//               disabled={isSending}
//             />
//             {errors.userSubject && (
//               <span className="text-sm text-red-400">{errors.userSubject}</span>
//             )}
//           </div>

//           <div className="w-full">
//             <textarea
//               className="h-[118px] text-[16px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//               name="Message"
//               placeholder="Message"
//               id="message"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onFocus={() => clearError("userMessage")}
//               disabled={isSending}
//             ></textarea>
//             {errors.userMessage && (
//               <span className="text-sm text-red-400">{errors.userMessage}</span>
//             )}
//           </div>

//           <div className="w-full">
//             <button
//               type="submit"
//               disabled={isSending}
//               className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//             >
//               <p>{isSending ? "Sending..." : "Submit"}</p>
//               <img src="/rightUpArrow.svg" alt="Arrow" />
//             </button>
//           </div>
//         </form>
//       )}
//       {isSubmitted && (
//         <h1 className="md:text-[40px] text-[24px] text-white">
//           Thank you for submitting this form. Your form has been successfully
//           submitted.
//         </h1>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
///********************************************************************************************************** */

"use client";
import React, { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
const CONTACT_AUTOREPLY_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_company: "",
    user_phone: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation: one error at a time
  const validate = () => {
    const errs = {};
    const {
      user_name,
      user_company,
      user_phone,
      user_email,
      user_subject,
      user_message,
    } = formData;

    if (!/^[a-zA-Z\s]{2,}$/.test(user_name)) {
      errs.user_name = "Please enter a valid name (only letters & spaces)";
    } else if (!/^[\w\s.\-&]{2,}$/.test(user_company)) {
      errs.user_company = "Please enter a valid company name";
    } else if (!/^[0-9]{6,15}$/.test(user_phone)) {
      errs.user_phone = "Enter a valid 10-digit Indian phone number";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)
    ) {
      errs.user_email = "Enter a valid email address";
    } else if (user_subject.trim().length < 2) {
      errs.user_subject = "Please enter a subject";
    } else if (user_message.trim().length < 5) {
      errs.user_message = "Message must be at least 5 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   setIsSending(true);
  //   try {
  //     // 1️⃣ Send enquiry to company
  //     await emailjs.sendForm(
  //       SERVICE_ID,
  //       CONTACT_COMPANY_ID,
  //       formRef.current,
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  //     );

  //     // 2️⃣ Send auto-reply back to user
  //     await emailjs.send(
  //       SERVICE_ID,
  //       CONTACT_AUTOREPLY_ID,
  //       {
  //         to_name: formData.user_name,
  //         to_email: formData.user_email,
  //       },
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  //     );

  //     toast.success("Your enquiry has been sent!");
  //     setIsSubmitted(true);
  //     setFormData({
  //       user_name: "",
  //       user_company: "",
  //       user_phone: "",
  //       user_email: "",
  //       user_subject: "",
  //       user_message: "",
  //     });
  //     setErrors({});
  //   } catch (err) {
  //     console.error("EmailJS error:", err);
  //     toast.error("Error sending form. Please try again.");
  //   } finally {
  //     setIsSending(false);
  //   }
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log("handleChange →", updated); // logs on every field change
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("handleSubmit → sending formData:", formData); // logs before send

    setIsSending(true);
    try {
      // 1️⃣ Send enquiry to company
      await emailjs.sendForm(
        SERVICE_ID,
        CONTACT_COMPANY_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // 2️⃣ Send auto-reply back to user
      await emailjs.send(
        SERVICE_ID,
        CONTACT_AUTOREPLY_ID,
        {
          to_name: formData.user_name,
          to_email: formData.user_email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Your enquiry has been sent!");
      setIsSubmitted(true);
      setFormData({
        user_name: "",
        user_company: "",
        user_phone: "",
        user_email: "",
        user_subject: "",
        user_message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Error sending form. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // if (isSubmitted) {
  //   return (
  //     <div className="bg-[#092241] flex-1 px-[5%] md:px-[40px] pt-[47px] pb-[47px] xl:mt-[50px]">
  //       <h1 className="md:text-[40px] text-[24px] text-white">
  //         Thank you for submitting this form. Your form has been successfully
  //         submitted.
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-[#092241] md:min-h-screen min-h-[700px] flex-1 px-[5%] md:px-[40px] pt-[47px] pb-[47px] xl:mt-[50px] xl:w-auto max-w-[50%]">
      <Toaster position="top-center" />

      {!isSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-[24px] sm:gap-[50px]"
        >
          {/* Name & Company */}
          <div className="flex flex-col sm:flex-row gap-[24px]">
            {["user_name", "user_company"].map((field) => (
              <div key={field} className="w-full sm:w-[295px]">
                <input
                  name={field}
                  type="text"
                  placeholder={field === "user_name" ? "Name" : "Company Name"}
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => clearError(field)}
                  disabled={isSending}
                  className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
                />
                {errors[field] && (
                  <span className="text-sm text-red-400">{errors[field]}</span>
                )}
              </div>
            ))}
          </div>

          {/* Phone & Email */}
          <div className="flex flex-col sm:flex-row gap-[24px]">
            <div className="w-full sm:w-[295px]">
              <input
                name="user_phone"
                type="tel"
                placeholder="Phone"
                value={formData.user_phone}
                onChange={handleChange}
                onFocus={() => clearError("user_phone")}
                disabled={isSending}
                className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
                onKeyDown={(e) => {
                  const allowedKeys = [
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "Delete",
                    "Tab",
                  ];
                  if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.user_phone && (
                <span className="text-sm text-red-400">
                  {errors.user_phone}
                </span>
              )}
            </div>
            <div className="w-full sm:w-[295px]">
              <input
                name="user_email"
                type="email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
                onFocus={() => clearError("user_email")}
                disabled={isSending}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
              />
              {errors.user_email && (
                <span className="text-sm text-red-400">
                  {errors.user_email}
                </span>
              )}
            </div>
          </div>

          {/* Subject */}
          {/* <div className="relative w-full">
            <input
              name="user_subject"
              type="text"
              placeholder="Subject"
              value={formData.user_subject}
              onChange={handleChange}
              onFocus={() => clearError("user_subject")}
              disabled={isSending}
              className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px]"
            />
            {errors.user_subject && (
              <span className="text-sm text-red-400">
                {errors.user_subject}
              </span>
            )}
          </div> */}

          {/* Type of Enquiry */}
          <div className="relative w-full">
            <select
              name="user_subject" // keep same name for EmailJS
              value={formData.user_subject}
              onChange={handleChange}
              onFocus={() => clearError("user_subject")}
              disabled={isSending}
              className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px] appearance-none"
            >
              <option value="" disabled>
                Type of Enquiry
              </option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Sales Enquiry">Sales Enquiry</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
            </select>
            {errors.user_subject && (
              <span className="text-sm text-red-400">
                {errors.user_subject}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="w-full">
            <textarea
              name="user_message"
              placeholder="Message"
              value={formData.user_message}
              onChange={handleChange}
              onFocus={() => clearError("user_message")}
              disabled={isSending}
              className="h-[118px] resize-none w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px]"
            />
            {errors.user_message && (
              <span className="text-sm text-red-400">
                {errors.user_message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              // whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSending}
              className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
            >
              <p>{isSending ? "Sending..." : "Submit"}</p>
              <img src="/rightUpArrow.svg" alt="Arrow" />
            </button>
          </div>
        </form>
      ) : (
        <h1 className="md:text-[40px] text-[30px] text-white text-center">
          Thank you for submitting this form. Your form has been successfully
          submitted.
        </h1>
      )}
    </div>
  );
};

export default ContactForm;
