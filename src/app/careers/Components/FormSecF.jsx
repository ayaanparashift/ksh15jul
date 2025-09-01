// "use client";

// import { motion } from "framer-motion";
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// import AttachCV from "./AttachCV";
// import AttachCoverLetter from "./AttachCoverLetter";

// // Initialize EmailJS
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CAREER_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_COMPANY_ID;
// const CAREER_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_AUTOREPLY_ID;

// export default function FormSecF() {
//   const formRef = useRef(null);

//   const [file, setFile] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     user_phone: "",
//     user_email: "",
//     user_education: "",
//     user_department: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Validate one error at a time
//   const validateForm = () => {
//     const errs = {};
//     if (!/^[a-zA-Z\s]{2,}$/.test(formData.first_name)) {
//       errs.first_name = "Please enter a valid first name.";
//     } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.last_name)) {
//       errs.last_name = "Please enter a valid last name.";
//     } else if (!/^\d{7,15}$/.test(formData.user_phone)) {
//       errs.user_phone = "Please enter a valid phone number.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
//       errs.user_email = "Please enter a valid email address.";
//     } else if (formData.user_education.trim().length < 2) {
//       errs.user_education = "Please enter your education.";
//     } else if (!formData.user_department) {
//       errs.user_department = "Please select a department.";
//     }

//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors({}); // clear previous errors on any change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     if (!formRef.current) return;
//     try {
//       // 1️⃣ Send to company
//       await emailjs.sendForm(
//         SERVICE_ID,
//         CAREER_COMPANY_ID,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );

//       // 2️⃣ Auto-reply to applicant
//       await emailjs.send(
//         SERVICE_ID,
//         CAREER_AUTOREPLY_ID,
//         {
//           to_name: `${formData.first_name} ${formData.last_name}`,
//           to_email: formData.user_email,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );

//       // reset form
//       setFormData({
//         first_name: "",
//         last_name: "",
//         user_phone: "",
//         user_email: "",
//         user_education: "",
//         user_department: "",
//       });
//       setFile(null);
//       setFile2(null);
//       setErrors({});
//       setIsSubmitted(true);
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       toast.error("Error sending form. Please try again.");
//     }
//   };

//   return (
//     <div id="join-us" className="relative md:mb-[85px]">
//       <Toaster position="top-center" />
//       <img
//         src="/Career/formbg.png"
//         alt="Blue bg"
//         className="absolute w-full top-0 left-0 z-0"
//       />
//       <div className="flex relative z-0 xl:pt-[50px] md:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] lg:py-0 py-[5%] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[5%] md:pr-[60px] overflow-hidden">
//           {!isSubmitted && (
//             <>
//               <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//                 <h1 className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[28px] text-white leading-[150%] md:leading-[105%] 2xl:text-[70px]">
//                   Join Us
//                 </h1>
//                 <div className="bg-[#F7E327] h-[8px] md:h-[10px] w-full" />
//               </div>
//             </>
//           )}

//           {!isSubmitted && (
//             <motion.form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               encType="multipart/form-data"
//               className="flex flex-col gap-[24px] sm:gap-[40px] relative z-0"
//             >
//               {/* First & Last Name */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="first_name"
//                     type="text"
//                     placeholder="First Name"
//                     value={formData.first_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.first_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.first_name}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="last_name"
//                     type="text"
//                     placeholder="Last Name"
//                     value={formData.last_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.last_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.last_name}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Phone & Email */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_phone"
//                     type="tel"
//                     placeholder="Phone"
//                     value={formData.user_phone}
//                     onChange={handleInputChange}
//                     className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     onKeyDown={(e) => {
//                       const allowedKeys = [
//                         "Backspace",
//                         "ArrowLeft",
//                         "ArrowRight",
//                         "Delete",
//                         "Tab",
//                       ];
//                       if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   />
//                   {errors.user_phone && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_phone}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_email"
//                     type="email"
//                     placeholder="Email"
//                     value={formData.user_email}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_email && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_email}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Education & Department */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_education"
//                     type="text"
//                     placeholder="Qualification"
//                     value={formData.user_education}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_education && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_education}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px] relative">
//                   <select
//                     name="user_department"
//                     value={formData.user_department}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-[#959CA9] border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[12px] sm:w-full appearance-none pr-8"
//                   >
//                     <option className="text-[#959CA9]" value="">
//                       Select Department
//                     </option>
//                     <option value="Engineering">Engineering</option>
//                     <option value="Operations">Operations</option>
//                     <option value="HR">Human Resources</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Marketing">Marketing</option>
//                   </select>

//                   {/* Custom dropdown icon */}
//                   <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#959CA9]">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
//                         fill="#959CA9"
//                       />
//                     </svg>
//                   </div>

//                   {errors.user_department && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_department}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Attach CV & Submit */}
//               <div className="w-full flex justify-between items-center flex-wrap gap-4">
//                 <AttachCV file={file} onFileSelect={setFile} />
//                 <AttachCoverLetter file={file2} onFileSelect={setFile2} />

//                 <button
//                   type="submit"
//                   className="bg-[#E30613] w-fit gap-[10px] px-[21px] max-h-[52px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//                 >
//                   Submit <img src="/rightUpArrow.svg" alt="Arrow" />
//                 </button>
//               </div>
//             </motion.form>
//           )}

//           {isSubmitted && (
//             <div className="h-full items-center w-full flex">
//               <h1 className="md:text-[40px] text-[24px] text-white">
//                 Thank you for submitting this form. Your form has been
//                 successfully submitted.
//               </h1>
//             </div>
//           )}
//         </div>

//         <div className="2xl:h-[85vh] min-1920:h-[60vh] flex-1 hidden md:block overflow-hidden relative">
//           <img
//             className="object-cover min-h-full min-w-full"
//             src="/Career/careerformimg.png"
//             alt="career visual"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
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

// import { motion } from "framer-motion";
// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// import AttachCV from "./AttachCV";
// import AttachCoverLetter from "./AttachCoverLetter";

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CAREER_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_COMPANY_ID;
// const CAREER_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_AUTOREPLY_ID;
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// export default function FormSecF() {
//   const formRef = useRef(null);

//   const [file, setFile] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     user_phone: "",
//     user_email: "",
//     user_education: "",
//     user_department: "",
//   });

//   const [errors, setErrors] = useState({});

//   // ✅ Recipient mapping
//   const RECIPIENTS = {
//     Engineering: ["azamparashift@gmail.com"],
//     Operations: ["ayaan.s@parashifttech.com"],
//     HR: ["mightydeveloper771@gmail.com"],
//     Finance: ["azamparashift@gmail.com"],
//     Sales: ["ayaan.s@parashifttech.com"],
//     Marketing: ["mightydeveloper771@gmail.com"],
//   };

//   useEffect(() => {
//     if (!PUBLIC_KEY) {
//       console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
//     } else {
//       emailjs.init(PUBLIC_KEY);
//     }
//   }, []);

//   // ✅ Validation
//   const validateForm = () => {
//     const errs = {};
//     if (!/^[a-zA-Z\s]{2,}$/.test(formData.first_name)) {
//       errs.first_name = "Please enter a valid first name.";
//     } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.last_name)) {
//       errs.last_name = "Please enter a valid last name.";
//     } else if (!/^\d{7,15}$/.test(formData.user_phone)) {
//       errs.user_phone = "Please enter a valid phone number.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
//       errs.user_email = "Please enter a valid email address.";
//     } else if (formData.user_education.trim().length < 2) {
//       errs.user_education = "Please enter your education.";
//     } else if (!formData.user_department) {
//       errs.user_department = "Please select a department.";
//     }
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors({});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     if (!formRef.current) return;

//     try {
//       // 🎯 Pick department → recipient
//       const recipients = RECIPIENTS[formData.user_department] || [
//         "default@yourcompany.com",
//       ];
//       const r_email = recipients[Math.floor(Math.random() * recipients.length)];

//       // 1️⃣ Send to department
//       await emailjs.send(
//         SERVICE_ID,
//         CAREER_COMPANY_ID,
//         {
//           ...formData,
//           r_email, // 👈 match {{r_email}} in your EmailJS template
//         },
//         PUBLIC_KEY
//       );

//       // 2️⃣ Auto-reply
//       await emailjs.send(
//         SERVICE_ID,
//         CAREER_AUTOREPLY_ID,
//         {
//           to_name: `${formData.first_name} ${formData.last_name}`,
//           to_email: formData.user_email,
//         },
//         PUBLIC_KEY
//       );

//       // ✅ Reset form
//       setFormData({
//         first_name: "",
//         last_name: "",
//         user_phone: "",
//         user_email: "",
//         user_education: "",
//         user_department: "",
//       });
//       setFile(null);
//       setFile2(null);
//       setErrors({});
//       setIsSubmitted(true);

//       toast.success("✅ Application submitted successfully!");
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       toast.error("Error sending form. Please try again.");
//     }
//   };

//   return (
//     <div id="join-us" className="relative md:mb-[85px]">
//       <Toaster position="top-center" />
//       <img
//         src="/Career/formbg.png"
//         alt="Blue bg"
//         className="absolute w-full top-0 left-0 z-0"
//       />
//       <div className="flex relative z-0 xl:pt-[50px] md:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] lg:py-0 py-[5%] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[5%] md:pr-[60px] overflow-hidden">
//           {!isSubmitted && (
//             <>
//               <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//                 <h1 className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[28px] text-white leading-[150%] md:leading-[105%] 2xl:text-[70px]">
//                   Join Us
//                 </h1>
//                 <div className="bg-[#F7E327] h-[8px] md:h-[10px] w-full" />
//               </div>
//             </>
//           )}
//           {!isSubmitted ? (
//             <motion.form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-[24px] sm:gap-[40px] relative z-0"
//             >
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="first_name"
//                     type="text"
//                     placeholder="First Name"
//                     value={formData.first_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.first_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.first_name}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="last_name"
//                     type="text"
//                     placeholder="Last Name"
//                     value={formData.last_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.last_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.last_name}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Phone & Email */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_phone"
//                     type="tel"
//                     placeholder="Phone"
//                     value={formData.user_phone}
//                     onChange={handleInputChange}
//                     className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     onKeyDown={(e) => {
//                       const allowedKeys = [
//                         "Backspace",
//                         "ArrowLeft",
//                         "ArrowRight",
//                         "Delete",
//                         "Tab",
//                       ];
//                       if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   />
//                   {errors.user_phone && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_phone}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_email"
//                     type="email"
//                     placeholder="Email"
//                     value={formData.user_email}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_email && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_email}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Education & Department */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_education"
//                     type="text"
//                     placeholder="Qualification"
//                     value={formData.user_education}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_education && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_education}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px] relative">
//                   <select
//                     name="user_department"
//                     value={formData.user_department}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-[#959CA9] border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[12px] sm:w-full appearance-none pr-8"
//                   >
//                     <option className="text-[#959CA9]" value="">
//                       Select Department
//                     </option>
//                     <option value="Engineering">Engineering</option>
//                     <option value="Operations">Operations</option>
//                     <option value="HR">Human Resources</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Marketing">Marketing</option>
//                   </select>

//                   {/* Custom dropdown icon */}
//                   <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#959CA9]">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
//                         fill="#959CA9"
//                       />
//                     </svg>
//                   </div>

//                   {errors.user_department && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_department}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Inputs ... unchanged */}
//               {/* AttachCV & AttachCoverLetter */}
//               <div className="w-full flex justify-between items-center flex-wrap gap-4">
//                 <AttachCV file={file} onFileSelect={setFile} />
//                 <AttachCoverLetter file={file2} onFileSelect={setFile2} />
//                 <button
//                   type="submit"
//                   className="bg-[#E30613] w-fit gap-[10px] px-[21px] max-h-[52px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//                 >
//                   Submit <img src="/rightUpArrow.svg" alt="Arrow" />
//                 </button>
//               </div>
//             </motion.form>
//           ) : (
//             <div className="h-full items-center w-full flex">
//               <h1 className="md:text-[40px] text-[24px] text-white">
//                 Thank you for submitting this form. Your form has been
//                 successfully submitted.
//               </h1>
//             </div>
//           )}
//         </div>
//         <div className="2xl:h-[85vh] min-1920:h-[60vh] flex-1 hidden md:block overflow-hidden relative">
//           <img
//             className="object-cover min-h-full min-w-full"
//             src="/Career/careerformimg.png"
//             alt="career visual"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
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
//
// "use client";

// import { motion } from "framer-motion";
// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";

// import AttachCV from "./AttachCV";
// import AttachCoverLetter from "./AttachCoverLetter";

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CAREER_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_COMPANY_ID;
// const CAREER_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_AUTOREPLY_ID;
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// export default function FormSecF() {
//   const formRef = useRef(null);

//   const [file, setFile] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     user_phone: "",
//     user_email: "",
//     user_education: "",
//     user_department: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [rEmail, setREmail] = useState("");

//   // ✅ Recipient mapping
//   const RECIPIENTS = {
//     Engineering: "azamparashift@gmail.com",
//     Operations: "ayaan.s@parashifttech.com",
//     HR: "mightydeveloper771@gmail.com",
//     Finance: "azamparashift@gmail.com",
//     Sales: "ayaan.s@parashifttech.com",
//     Marketing: "mightydeveloper771@gmail.com",
//   };

//   useEffect(() => {
//     if (!PUBLIC_KEY) {
//       console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
//     } else {
//       emailjs.init(PUBLIC_KEY);
//     }
//   }, []);

//   // ✅ Validation
//   const validateForm = () => {
//     const errs = {};
//     if (!/^[a-zA-Z\s]{2,}$/.test(formData.first_name)) {
//       errs.first_name = "Please enter a valid first name.";
//     } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.last_name)) {
//       errs.last_name = "Please enter a valid last name.";
//     } else if (!/^\d{7,15}$/.test(formData.user_phone)) {
//       errs.user_phone = "Please enter a valid phone number.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
//       errs.user_email = "Please enter a valid email address.";
//     } else if (formData.user_education.trim().length < 2) {
//       errs.user_education = "Please enter your education.";
//     } else if (!formData.user_department) {
//       errs.user_department = "Please select a department.";
//     }
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors({});
//     if (name === "user_department") {
//       setREmail(RECIPIENTS[value] || "default@yourcompany.com");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     if (!formRef.current) return;

//     try {
//       // 1️⃣ Send to company/department with attachments
//       await emailjs.sendForm(
//         SERVICE_ID,
//         CAREER_COMPANY_ID,
//         formRef.current,
//         PUBLIC_KEY
//       );

//       // 2️⃣ Auto-reply (text only)
//       await emailjs.send(
//         SERVICE_ID,
//         CAREER_AUTOREPLY_ID,
//         {
//           to_name: `${formData.first_name} ${formData.last_name}`,
//           to_email: formData.user_email,
//         },
//         PUBLIC_KEY
//       );

//       // ✅ Reset form
//       setFormData({
//         first_name: "",
//         last_name: "",
//         user_phone: "",
//         user_email: "",
//         user_education: "",
//         user_department: "",
//       });
//       setFile(null);
//       setFile2(null);
//       setErrors({});
//       setIsSubmitted(true);

//       toast.success("✅ Application submitted successfully!");
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       toast.error("Error sending form. Please try again.");
//     }
//   };

//   return (
//     <div id="join-us" className="relative md:mb-[85px]">
//       <Toaster position="top-center" />
//       <img
//         src="/Career/formbg.png"
//         alt="Blue bg"
//         className="absolute w-full top-0 left-0 z-0"
//       />
//       <div className="flex relative z-0 xl:pt-[50px] md:mr-[max(5%,calc((100vw-1250px)/2))]">
//         <div className="bg-[#141D28] lg:py-0 py-[5%] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[5%] md:pr-[60px] overflow-hidden">
//           {!isSubmitted && (
//             <div className="lg:pb-[50px] pb-[20px] max-w-fit">
//               <h1 className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[28px] text-white leading-[150%] md:leading-[105%] 2xl:text-[70px]">
//                 Join Us
//               </h1>
//               <div className="bg-[#F7E327] h-[8px] md:h-[10px] w-full" />
//             </div>
//           )}

//           {!isSubmitted ? (
//             <motion.form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-[24px] sm:gap-[40px] relative z-0"
//             >
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="first_name"
//                     type="text"
//                     placeholder="First Name"
//                     value={formData.first_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.first_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.first_name}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="last_name"
//                     type="text"
//                     placeholder="Last Name"
//                     value={formData.last_name}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.last_name && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.last_name}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Phone & Email */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_phone"
//                     type="tel"
//                     placeholder="Phone"
//                     value={formData.user_phone}
//                     onChange={handleInputChange}
//                     className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                     onKeyDown={(e) => {
//                       const allowedKeys = [
//                         "Backspace",
//                         "ArrowLeft",
//                         "ArrowRight",
//                         "Delete",
//                         "Tab",
//                       ];
//                       if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   />
//                   {errors.user_phone && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_phone}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_email"
//                     type="email"
//                     placeholder="Email"
//                     value={formData.user_email}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_email && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_email}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Education & Department */}
//               <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
//                 <div className="flex flex-col w-full sm:w-[295px]">
//                   <input
//                     name="user_education"
//                     type="text"
//                     placeholder="Qualification"
//                     value={formData.user_education}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
//                   />
//                   {errors.user_education && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_education}
//                     </span>
//                   )}
//                 </div>
//                 <div className="flex flex-col w-full sm:w-[295px] relative">
//                   <select
//                     name="user_department"
//                     value={formData.user_department}
//                     onChange={handleInputChange}
//                     className="border-b bg-[#263548] text-[#959CA9] border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[12px] sm:w-full appearance-none pr-8"
//                   >
//                     <option className="text-[#959CA9]" value="">
//                       Select Department
//                     </option>
//                     <option value="Engineering">Engineering</option>
//                     <option value="Operations">Operations</option>
//                     <option value="HR">Human Resources</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Marketing">Marketing</option>
//                   </select>

//                   {/* Custom dropdown icon */}
//                   <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#959CA9]">
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
//                         fill="#959CA9"
//                       />
//                     </svg>
//                   </div>

//                   {errors.user_department && (
//                     <span className="mt-1 text-red-400 text-sm">
//                       {errors.user_department}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <input type="hidden" name="r_email" value={rEmail} />

//               {/* Inputs */}
//               {/* ... your existing input fields ... */}

//               {/* AttachCV & AttachCoverLetter */}
//               <div className="w-full flex justify-between items-center flex-wrap gap-4">
//                 <AttachCV onFileSelect={setFile} />
//                 <AttachCoverLetter onFileSelect={setFile2} />
//                 <button
//                   type="submit"
//                   className="bg-[#E30613] w-fit gap-[10px] px-[21px] max-h-[52px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//                 >
//                   Submit <img src="/rightUpArrow.svg" alt="Arrow" />
//                 </button>
//               </div>
//             </motion.form>
//           ) : (
//             <div className="h-full items-center w-full flex">
//               <h1 className="md:text-[40px] text-[24px] text-white">
//                 Thank you for submitting this form. Your form has been
//                 successfully submitted.
//               </h1>
//             </div>
//           )}
//         </div>
//         <div className="2xl:h-[85vh] min-1920:h-[60vh] flex-1 hidden md:block overflow-hidden relative">
//           <img
//             className="object-cover min-h-full min-w-full"
//             src="/Career/careerformimg.png"
//             alt="career visual"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import AttachCV from "./AttachCV";
import AttachCoverLetter from "./AttachCoverLetter";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const CAREER_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_COMPANY_ID;
const CAREER_AUTOREPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_CAREER_AUTOREPLY_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function FormSecF() {
  const formRef = useRef(null);

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_phone: "",
    user_email: "",
    user_education: "",
    user_department: "",
  });

  const [errors, setErrors] = useState({});
  const [rEmail, setREmail] = useState("");

  const RECIPIENTS = {
    Engineering: "hr@kshinfra.com",
    Operations: "hr@kshinfra.com",
    HR: "hr@kshinfra.com",
    Finance: "hr@kshinfra.com",
    Sales: "hr@kshinfra.com",
    Marketing: "hr@kshinfra.com",
  };

  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    } else {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const validateForm = () => {
    const errs = {};
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.first_name)) {
      errs.first_name = "Please enter a valid first name.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.last_name)) {
      errs.last_name = "Please enter a valid last name.";
    } else if (!/^\d{7,15}$/.test(formData.user_phone)) {
      errs.user_phone = "Please enter a valid phone number.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errs.user_email = "Please enter a valid email address.";
    } else if (formData.user_education.trim().length < 2) {
      errs.user_education = "Please enter your education.";
    } else if (!formData.user_department) {
      errs.user_department = "Please select a department.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
    if (name === "user_department") {
      setREmail(RECIPIENTS[value] || "default@yourcompany.com");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!formRef.current) return;

    setLoading(true); // ✅ start loading
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        CAREER_COMPANY_ID,
        formRef.current,
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        CAREER_AUTOREPLY_ID,
        {
          to_name: `${formData.first_name} ${formData.last_name}`,
          to_email: formData.user_email,
        },
        PUBLIC_KEY
      );

      setFormData({
        first_name: "",
        last_name: "",
        user_phone: "",
        user_email: "",
        user_education: "",
        user_department: "",
      });
      setFile(null);
      setFile2(null);
      setErrors({});
      setIsSubmitted(true);

      toast.success("✅ Application submitted successfully!");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Error sending form. Please try again.");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div id="join-us" className="relative md:mb-[85px]">
      <Toaster position="top-center" />
      <img
        src="/Career/formbg.png"
        alt="Blue bg"
        className="absolute w-full top-0 left-0 z-0"
      />
      <div className="flex relative z-0 xl:pt-[50px] md:mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="bg-[#141D28] lg:py-0 py-[5%] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[5%] md:pr-[60px] overflow-hidden">
          {!isSubmitted && (
            <div className="lg:pb-[50px] pb-[20px] max-w-fit">
              <h1 className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[28px] text-white leading-[150%] md:leading-[105%] 2xl:text-[70px]">
                Join Us
              </h1>
              <div className="bg-[#F7E327] h-[8px] md:h-[10px] w-full" />
            </div>
          )}

          {!isSubmitted ? (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-[24px] sm:gap-[40px] relative z-0"
            >
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.first_name && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.first_name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.last_name && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.last_name}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.user_phone}
                    onChange={handleInputChange}
                    className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
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
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_phone}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.user_email && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_email}
                    </span>
                  )}
                </div>
              </div>

              {/* Education & Department */}
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-[24px]">
                <div className="flex flex-col w-full sm:w-[295px]">
                  <input
                    name="user_education"
                    type="text"
                    placeholder="Qualification"
                    value={formData.user_education}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                  />
                  {errors.user_education && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_education}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-[295px] relative">
                  <select
                    name="user_department"
                    value={formData.user_department}
                    onChange={handleInputChange}
                    className="border-b bg-[#263548] text-[#959CA9] border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[12px] sm:w-full appearance-none pr-8"
                  >
                    <option className="text-[#959CA9]" value="">
                      Select Department
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Operations">Operations</option>
                    <option value="HR">Human Resources</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                  </select>

                  {/* Custom dropdown icon */}
                  <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#959CA9]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                        fill="#959CA9"
                      />
                    </svg>
                  </div>

                  {errors.user_department && (
                    <span className="mt-1 text-red-400 text-sm">
                      {errors.user_department}
                    </span>
                  )}
                </div>
              </div>
              <input type="hidden" name="r_email" value={rEmail} />
              {/* ... inputs above unchanged ... */}

              <input type="hidden" name="r_email" value={rEmail} />

              <div className="w-full flex justify-between items-center flex-wrap gap-4">
                <AttachCV onFileSelect={setFile} />
                <AttachCoverLetter onFileSelect={setFile2} />
                <button
                  type="submit"
                  disabled={loading}
                  className={`group ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  } bg-[#E30613] w-fit gap-[10px] px-[21px] max-h-[52px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl`}
                >
                  {loading ? "Submitting..." : "Submit"}
                  <img
                    className="group-hover:rotate-0 rotate-45 transition-transform duration-500"
                    src="/rightUpArrow.svg"
                    alt="Arrow"
                  />
                </button>
              </div>
            </motion.form>
          ) : (
            <div className="h-full items-center w-full flex">
              <h1 className="md:text-[40px] text-[24px] text-white">
                Thank you for submitting this form. Your form has been
                successfully submitted.
              </h1>
            </div>
          )}
        </div>
        <div className="2xl:h-[85vh] min-1920:h-[60vh] flex-1 hidden md:block overflow-hidden relative">
          <img
            className="object-cover min-h-full min-w-full"
            src="/Career/careerformimg.png"
            alt="career visual"
          />
        </div>
      </div>
    </div>
  );
}
