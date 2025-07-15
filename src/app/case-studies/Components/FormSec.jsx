// "use client";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// const FormSec = () => {
//   const fileInputRef = useRef(null);

//   const handleClick = () => {
//     fileInputRef.current?.click();
//   };
//   return (
//     <div
//       className="pb-[85px] pt-[50px]"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="flex relative z-50 xl:pt-[50px] sm:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[20px] sm:pr-[60px] pt-[47px] sm:pb-0 pb-[47px] overflow-hidden ">
//           <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
//             >
//               Contact Us
//             </motion.h1>
//             <motion.div
//               initial={{ x: -150, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="bg-[#F7E327] h-[10px] w-full"
//             ></motion.div>
//           </div>
//           {/* White Mask Layer */}
//           {/* FORM */}
//           <motion.form
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             action=""
//             className="flex flex-col gap-[24px] pb-[75px] sm:gap-[40px] relative z-10"
//           >
//             {/* Name & Company Name */}
//             <div className="flex sm:flex-row flex-col gap-[24px]">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
//               />
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
//               />
//             </div>
//             {/* Phone & Email */}
//             <div className="flex sm:flex-row flex-col gap-[24px]">
//               <input
//                 type="number"
//                 placeholder="Phone"
//                 className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
//               />
//             </div>
//             {/* Subject */}
//             <div className="relative w-full">
//               <select
//                 name="Subject"
//                 id="sub"
//                 className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//               >
//                 <option value="">Subject</option>
//                 <option value="Option 1">Option 1</option>
//                 <option value="Option 2">Option 2</option>
//                 <option value="Option 3">Option 3</option>
//               </select>
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="26"
//                   height="26"
//                   viewBox="0 0 26 26"
//                   fill="none"
//                 >
//                   <path
//                     d="M19.5888 9.31081L13.4983 15.3051C13.3654 15.4366 13.186 15.5103 12.9991 15.5103C12.8122 15.5103 12.6328 15.4366 12.4999 15.3051L6.4094 9.31211C6.27569 9.18071 6.09572 9.10709 5.90825 9.10709C5.72078 9.10709 5.54081 9.18071 5.4071 9.31211C5.34126 9.3763 5.28893 9.45302 5.2532 9.53775C5.21747 9.62248 5.19907 9.71351 5.19907 9.80546C5.19907 9.89742 5.21747 9.98844 5.2532 10.0732C5.28893 10.1579 5.34126 10.2346 5.4071 10.2988L11.4963 16.2918C11.8974 16.6856 12.437 16.9062 12.9991 16.9062C13.5612 16.9062 14.1008 16.6856 14.5019 16.2918L20.5911 10.2988C20.6571 10.2346 20.7096 10.1578 20.7455 10.0729C20.7813 9.9881 20.7998 9.89692 20.7998 9.80481C20.7998 9.7127 20.7813 9.62152 20.7455 9.53667C20.7096 9.45182 20.6571 9.37502 20.5911 9.31081C20.4574 9.17941 20.2774 9.10579 20.09 9.10579C19.9025 9.10579 19.7225 9.17941 19.5888 9.31081Z"
//                     fill="white"
//                   />
//                 </svg>
//               </span>
//             </div>
//             {/* Message */}
//             <div className="w-full">
//               <textarea
//                 className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//                 name="Message"
//                 placeholder="Message"
//                 id="message"
//               ></textarea>
//             </div>
//             <div className="w-full flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//               >
//                 <p>Submit</p>
//                 <img src="/rightUpArrow.svg" alt="Arrow" />
//               </button>
//             </div>
//           </motion.form>
//         </div>
//         <div className="min-h-full hidden md:block flex-[0.99999] overflow-hidden relative">
//           <img
//             className="object-cover min-h-full min-w-full"
//             src="/cst/caseform.png"
//             alt=""
//           />
//           <motion.div
//             initial={{ x: 0 }}
//             whileInView={{ x: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] bg-cover bg-no-repeat h-full w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormSec;

// "use client";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const FormSec = () => {
//   const formRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const [formErrors, setFormErrors] = useState({});
//   const [submissionStatus, setSubmissionStatus] = useState("");

//   const validateForm = (formData) => {
//     const errors = {};
//     const nameRegex = /^[a-zA-Z\s]{2,}$/;
//     const phoneRegex = /^[0-9]{6,15}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.get("name") || !nameRegex.test(formData.get("name")))
//       errors.name = "Please enter a valid name";

//     if (!formData.get("company"))
//       errors.company = "Please enter a company name";

//     if (!formData.get("phone") || !phoneRegex.test(formData.get("phone")))
//       errors.phone = "Enter a valid phone number";

//     if (!formData.get("email") || !emailRegex.test(formData.get("email")))
//       errors.email = "Please enter a valid email address";

//     if (!formData.get("subject") || formData.get("subject").trim().length < 2)
//       errors.subject = "Subject is required";

//     if (!formData.get("message") || formData.get("message").length < 10)
//       errors.message = "Message must be at least 10 characters";

//     const file = fileInputRef.current?.files?.[0];
//     if (file) {
//       const allowedTypes = [
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ];
//       if (!allowedTypes.includes(file.type)) {
//         errors.file = "Only PDF, DOC, and DOCX files are allowed";
//       }
//       if (file.size > 2 * 1024 * 1024) {
//         errors.file = "File size must be under 2MB";
//       }
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(formRef.current);
//     const errors = validateForm(formData);

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setFormErrors({});
//     setSubmissionStatus("Sending...");

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//       );

//       // Auto-reply (without file)
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
//         {
//           to_email: formData.get("email"),
//           to_name: formData.get("name"),
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//       );

//       setSubmissionStatus("Thank you! Your message has been sent.");
//       formRef.current.reset();
//     } catch (err) {
//       setSubmissionStatus("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div
//       className="pb-[85px] pt-[50px]"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="flex relative z-50 xl:pt-[50px] sm:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[20px] sm:pr-[60px] pt-[47px] sm:pb-0 pb-[47px] overflow-hidden ">
//           <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
//             >
//               Contact Us
//             </motion.h1>
//             <motion.div
//               initial={{ x: -150, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="bg-[#F7E327] h-[10px] w-full"
//             />
//           </div>

//           <motion.form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="flex flex-col gap-[24px] pb-[75px] sm:gap-[40px] relative z-10"
//           >
//             {/* Name & Company */}
//             <div className="flex sm:flex-row flex-col gap-[24px]">
//               <div className="w-full sm:w-1/2">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 />
//                 <span className="text-red-400 text-sm">{formErrors.name}</span>
//               </div>
//               <div className="w-full sm:w-1/2">
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="Company Name"
//                   className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 />
//                 <span className="text-red-400 text-sm">
//                   {formErrors.company}
//                 </span>
//               </div>
//             </div>

//             {/* Phone & Email */}
//             <div className="flex sm:flex-row flex-col gap-[24px]">
//               <div className="w-full sm:w-1/2">
//                 <input
//                   type="number"
//                   name="phone"
//                   placeholder="Phone"
//                   className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 />
//                 <span className="text-red-400 text-sm">{formErrors.phone}</span>
//               </div>
//               <div className="w-full sm:w-1/2">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                 />
//                 <span className="text-red-400 text-sm">{formErrors.email}</span>
//               </div>
//             </div>

//             {/* Subject (as input) */}
//             <div className="w-full">
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] outline-none"
//               />
//               <span className="text-red-400 text-sm">{formErrors.subject}</span>
//             </div>

//             {/* Message */}
//             <div className="w-full">
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 id="message"
//                 className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//               />
//               <span className="text-red-400 text-sm">{formErrors.message}</span>
//             </div>

//             {/* File Upload */}
//             <div className="w-full">
//               <input
//                 type="file"
//                 name="attachment"
//                 ref={fileInputRef}
//                 className="hidden"
//                 accept=".pdf,.doc,.docx"
//               />
//               <button
//                 type="button"
//                 onClick={() => fileInputRef.current?.click()}
//                 className="text-white underline text-sm"
//               >
//                 Upload CV (PDF, DOC, DOCX)
//               </button>
//               <span className="text-red-400 text-sm block">
//                 {formErrors.file}
//               </span>
//             </div>

//             {/* Submit */}
//             <div className="w-full flex justify-end">
//               <button
//                 type="submit"
//                 className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//               >
//                 <p>Submit</p>
//                 <img src="/rightUpArrow.svg" alt="Arrow" />
//               </button>
//             </div>

//             {submissionStatus && (
//               <span className="text-white text-sm">{submissionStatus}</span>
//             )}
//           </motion.form>
//         </div>

//         <div className="min-h-full hidden md:block flex-[0.99999] overflow-hidden relative">
//           <img
//             className="object-cover min-h-full min-w-full"
//             src="/cst/caseform.png"
//             alt=""
//           />
//           <motion.div
//             initial={{ x: 0 }}
//             whileInView={{ x: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] bg-cover bg-no-repeat h-full w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormSec;

// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import emailjs from "@emailjs/browser";

// // Initialize EmailJS
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
// const CONTACT_AUTOREPLY_ID =
//   process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;

// const FormSec = () => {
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   // Validation: one error at a time
//   const validateForm = (fields) => {
//     const errs = {};
//     if (!fields.get("name") || !/^[a-zA-Z\s]{2,}$/.test(fields.get("name")))
//       errs.name = "Please enter a valid name";
//     else if (!fields.get("company"))
//       errs.company = "Please enter a company name";
//     else if (!fields.get("phone") || !/^[0-9]{6,15}$/.test(fields.get("phone")))
//       errs.phone = "Enter a valid phone number";
//     else if (
//       !fields.get("email") ||
//       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
//         fields.get("email").trim()
//       )
//     )
//       errs.email = "Please enter a valid email address";
//     else if (!fields.get("subject") || fields.get("subject").trim().length < 2)
//       errs.subject = "Subject is required";
//     else if (!fields.get("message") || fields.get("message").length < 10)
//       errs.message = "Message must be at least 10 characters";
//     return errs;
//   };

//   const handleFocus = (field) => {
//     setFormErrors((prev) => {
//       const copy = { ...prev };
//       delete copy[field];
//       return copy;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     console.log(form)
//     const fields = new FormData(form);
//     const errors = validateForm(fields);
//     if (Object.keys(errors).length) {
//       setFormErrors(errors);
//       return;
//     }

//     setFormErrors({});
//     setIsSending(true);

//     const autoReplyParams = {
//       to_name: fields.get("name"),
//       to_email: fields.get("email"),
//     };

//     try {
//       // Send enquiry to company
//       await emailjs.sendForm(
//         SERVICE_ID,
//         CONTACT_COMPANY_ID,
//         form,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );
//       // Auto-reply to user
//       await emailjs.send(
//         SERVICE_ID,
//         CONTACT_AUTOREPLY_ID,
//         autoReplyParams,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );

//       setIsSubmitted(true);
//       form.reset();
//       toast.success("Thank you! Your message has been sent.");
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div
//       className="pb-[85px] pt-[50px]"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <Toaster position="top-center" />
//       <div className="flex relative z-50 xl:pt-[50px] sm:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[20px] sm:pr-[60px] pt-[47px] min-h-[727px] sm:pb-0 pb-[47px] overflow-hidden">
//           <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
//             >
//               Contact Us
//             </motion.h1>
//             <motion.div
//               initial={{ x: -150, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="bg-[#F7E327] h-[10px] w-full"
//             />
//           </div>

//           {!isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.1, once: true }}
//               className="relative z-10"
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-[24px] pb-0 md:pb-[75px] sm:gap-[40px]"
//               >
//                 {/* Name & Company */}
//                 <div className="flex sm:flex-row flex-col gap-[24px]">
//                   <div className="w-full sm:w-1/2">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       onFocus={() => handleFocus("name")}
//                       disabled={isSending}
//                       className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     />
//                     <span className="text-red-400 text-sm">
//                       {formErrors.name}
//                     </span>
//                   </div>
//                   <div className="w-full sm:w-1/2">
//                     <input
//                       type="text"
//                       name="company"
//                       placeholder="Company Name"
//                       onFocus={() => handleFocus("company")}
//                       disabled={isSending}
//                       className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     />
//                     <span className="text-red-400 text-sm">
//                       {formErrors.company}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Phone & Email */}
//                 <div className="flex sm:flex-row flex-col gap-[24px]">
//                   <div className="w-full sm:w-1/2">
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone"
//                       onFocus={() => handleFocus("phone")}
//                       disabled={isSending}
//                       className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     />
//                     <span className="text-red-400 text-sm">
//                       {formErrors.phone}
//                     </span>
//                   </div>
//                   <div className="w-full sm:w-1/2">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       onFocus={() => handleFocus("email")}
//                       disabled={isSending}
//                       className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     />
//                     <span className="text-red-400 text-sm">
//                       {formErrors.email}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Subject */}
//                 <div className="w-full">
//                   <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     onFocus={() => handleFocus("subject")}
//                     disabled={isSending}
//                     className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] outline-none"
//                   />
//                   <span className="text-red-400 text-sm">
//                     {formErrors.subject}
//                   </span>
//                 </div>

//                 {/* Message */}
//                 <div className="w-full">
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     onFocus={() => handleFocus("message")}
//                     disabled={isSending}
//                     className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//                   />
//                   <span className="text-red-400 text-sm">
//                     {formErrors.message}
//                   </span>
//                 </div>

//                 {/* Submit */}
//                 <div className="w-full flex justify-end">
//                   <button
//                     type="submit"
//                     className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//                     disabled={isSending}
//                   >
//                     <p>{isSending ? "Sending..." : "Submit"}</p>
//                     <img src="/rightUpArrow.svg" alt="Arrow" />
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           ) : (
//             <h1 className="md:text-[40px] text-[24px] text-white text-center">
//               Thank you for submitting this form. Your form has been
//               successfully submitted.
//             </h1>
//           )}
//         </div>

//         <div className="min-h-full hidden md:block flex-[0.99999] overflow-hidden relative">
//           <img
//             className="object-cover min-h-full max-h-full min-w-full"
//             src="/cst/caseform.png"
//             alt=""
//           />
//           <motion.div
//             initial={{ x: 0 }}
//             whileInView={{ x: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] bg-cover bg-no-repeat min-h-[calc(100%+10px)] w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormSec;

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
const CONTACT_AUTOREPLY_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;

const FormSec = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateForm = (fields) => {
    const errs = {};
    const name = fields.get("name")?.trim();
    const company = fields.get("company")?.trim();
    const phone = fields.get("phone")?.trim();
    const email = fields.get("email")?.trim();
    const subject = fields.get("subject")?.trim();
    const message = fields.get("message")?.trim();

    if (!name || !/^[a-zA-Z\s]{2,}$/.test(name)) {
      errs.name = "Please enter a valid name";
    } else if (!company) {
      errs.company = "Please enter a company name";
    } else if (!phone || !/^[0-9]{6,15}$/.test(phone)) {
      errs.phone = "Enter a valid phone number";
    } else if (
      !email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errs.email = "Please enter a valid email address";
    } else if (!subject || subject.length < 2) {
      errs.subject = "Subject is required";
    } else if (!message || message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleFocus = (field) => {
    setFormErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);

    // Log form element and all field values
    console.log("Form element:", form);
    const data = Object.fromEntries(fields.entries());
    console.log("Submitting form data:", data);

    const errors = validateForm(fields);
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSending(true);

    // Build company email params matching your EmailJS template
    const companyParams = {
      user_name: data.name,
      user_company: data.company,
      user_phone: data.phone,
      user_email: data.email,
      user_subject: data.subject,
      user_message: data.message,
    };
    // Auto-reply to user
    const autoReplyParams = {
      to_name: data.name,
      to_email: data.email,
    };

    try {
      // Send enquiry to company
      await emailjs.send(
        SERVICE_ID,
        CONTACT_COMPANY_ID,
        companyParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      // Auto-reply
      await emailjs.send(
        SERVICE_ID,
        CONTACT_AUTOREPLY_ID,
        autoReplyParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      form.reset();
      toast.success("Thank you! Your message has been sent.");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div
      className="pb-[85px] pt-[50px]"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <Toaster position="top-center" />
      <div className="flex relative z-50 xl:pt-[50px] sm:mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[20px] sm:pr-[60px] pt-[47px] min-h-[727px] sm:pb-0 pb-[47px] overflow-hidden">
          <div className="lg:pb-[50px] pb-[20px] max-w-fit">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
            >
              Contact Us
            </motion.h1>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="bg-[#F7E327] h-[10px] w-full"
            />
          </div>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="relative z-10"
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[24px] pb-0 md:pb-[75px] sm:gap-[40px]"
              >
                {/* Name & Company */}
                <div className="flex sm:flex-row flex-col gap-[24px]">
                  <div className="w-full sm:w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onFocus={() => handleFocus("name")}
                      disabled={isSending}
                      className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                    />
                    <span className="text-red-400 text-sm">
                      {formErrors.name}
                    </span>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      onFocus={() => handleFocus("company")}
                      disabled={isSending}
                      className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                    />
                    <span className="text-red-400 text-sm">
                      {formErrors.company}
                    </span>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="flex sm:flex-row flex-col gap-[24px]">
                  <div className="w-full sm:w-1/2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      onFocus={() => handleFocus("phone")}
                      disabled={isSending}
                      className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                    />
                    <span className="text-red-400 text-sm">
                      {formErrors.phone}
                    </span>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onFocus={() => handleFocus("email")}
                      disabled={isSending}
                      className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                    />
                    <span className="text-red-400 text-sm">
                      {formErrors.email}
                    </span>
                  </div>
                </div>

                {/* Subject */}
                <div className="w-full">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onFocus={() => handleFocus("subject")}
                    disabled={isSending}
                    className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] outline-none"
                  />
                  <span className="text-red-400 text-sm">
                    {formErrors.subject}
                  </span>
                </div>

                {/* Message */}
                <div className="w-full">
                  <textarea
                    name="message"
                    placeholder="Message"
                    onFocus={() => handleFocus("message")}
                    disabled={isSending}
                    className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
                  />
                  <span className="text-red-400 text-sm">
                    {formErrors.message}
                  </span>
                </div>

                {/* Submit */}
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
                    disabled={isSending}
                  >
                    <p>{isSending ? "Sending..." : "Submit"}</p>
                    <img src="/rightUpArrow.svg" alt="Arrow" />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <h1 className="md:text-[40px] text-[24px] text-white ">
              Thank you for submitting this form. Your form has been
              successfully submitted.
            </h1>
          )}
        </div>

        <div className="min-h-full hidden md:block flex-[0.99999] overflow-hidden relative">
          <img
            className="object-cover min-h-full max-h-full min-w-full"
            src="/cst/caseform.png"
            alt=""
          />
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] bg-cover bg-no-repeat min-h-[calc(100%+10px)] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FormSec;
