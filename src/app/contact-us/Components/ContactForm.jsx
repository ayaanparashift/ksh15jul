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

  return (
    <div className="bg-[#092241] md:min-h-fit min-h-[700px] flex-1 px-[5%] md:px-[40px] pt-[47px] md:pb-[47px] pb-[20px] xl:mt-[50px] xl:w-auto md:max-w-[50%]">
      <Toaster position="top-center" />

      {!isSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-[24px] sm:gap-[40px]"
        >
          {/* Name & Company */}
          <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px]">
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
          <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px]">
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

          <div className="relative w-full">
            <select
              name="user_subject" // keep same name for EmailJS
              value={formData.user_subject}
              onChange={handleChange}
              onFocus={() => clearError("user_subject")}
              disabled={isSending}
              className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px] appearance-none pr-8"
            >
              <option value="" disabled>
                Type of Enquiry
              </option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Sales Enquiry">Sales Enquiry</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
              <option value="Careers">Careers</option>
            </select>

            {/* Dropdown icon */}
            <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#ffffff]">
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
                  fill="#ffffff"
                />
              </svg>
            </div>

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

// "use client";
// import React, { useState, useRef } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";

// // Initialize EmailJS
// emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
// const CONTACT_AUTOREPLY_ID =
//   process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;

// const ContactForm = () => {
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_company: "",
//     user_phone: "",
//     user_email: "",
//     user_subject: "",
//     user_message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSending, setIsSending] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const subjectToEmail = {
//     "General Enquiry": "ayaansayyed771@gmail.com",
//     "Sales Enquiry": "leasing@kshinfra.com",
//     Support: "support@kshinfra.com",
//     "Partners / Vendors": "purchase@kshinfra.com",
//     Careers: "careers@kshinfra.com",
//   };
//   const recipientEmail =
//     subjectToEmail[formData.user_subject] || "enquiry@kshinfra.com";
//   // Validation: one error at a time
//   const validate = () => {
//     const errs = {};
//     const {
//       user_name,
//       user_company,
//       user_phone,
//       user_email,
//       user_subject,
//       user_message,
//     } = formData;

//     if (!/^[a-zA-Z\s]{2,}$/.test(user_name)) {
//       errs.user_name = "Please enter a valid name (only letters & spaces)";
//     } else if (!/^[\w\s.\-&]{2,}$/.test(user_company)) {
//       errs.user_company = "Please enter a valid company name";
//     } else if (!/^[0-9]{6,15}$/.test(user_phone)) {
//       errs.user_phone = "Enter a valid 10-digit Indian phone number";
//     } else if (
//       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)
//     ) {
//       errs.user_email = "Enter a valid email address";
//     } else if (user_subject.trim().length < 2) {
//       errs.user_subject = "Please enter a subject";
//     } else if (user_message.trim().length < 5) {
//       errs.user_message = "Message must be at least 5 characters";
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const updated = { ...prev, [name]: value };
//       console.log("handleChange →", updated); // logs on every field change
//       return updated;
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     console.log("handleSubmit → sending formData:", formData);

//     setIsSending(true);
//     try {
//       // pick the recipient email based on subject
//       const recipientEmail =
//         subjectToEmail[formData.user_subject] || "enquiry@kshinfra.com";

//       // 1️⃣ Send enquiry to company
//       await emailjs.send(
//         SERVICE_ID,
//         CONTACT_COMPANY_ID,
//         CONTACT_AUTOREPLY_ID,
//         {
//           ...formData,
//           to_email: recipientEmail, // 👈 dynamically set recipient
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       );

//       // 2️⃣ Send auto-reply back to user

//       toast.success("Your enquiry has been sent!");
//       setIsSubmitted(true);
//       setFormData({
//         user_name: "",
//         user_company: "",
//         user_phone: "",
//         user_email: "",
//         user_subject: "",
//         user_message: "",
//         to_email: recipientEmail, // 👈 now matches {{to_email}} in template
//       });
//       setErrors({});
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       toast.error("Error sending form. Please try again.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="bg-[#092241] md:min-h-fit min-h-[700px] flex-1 px-[5%] md:px-[40px] pt-[47px] md:pb-[47px] pb-[20px] xl:mt-[50px] xl:w-auto md:max-w-[50%]">
//       <Toaster position="top-center" />

//       {!isSubmitted ? (
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-[24px] sm:gap-[40px]"
//         >
//           {/* Name & Company */}
//           <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px]">
//             {["user_name", "user_company"].map((field) => (
//               <div key={field} className="w-full sm:w-[295px]">
//                 <input
//                   name={field}
//                   type="text"
//                   placeholder={field === "user_name" ? "Name" : "Company Name"}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   onFocus={() => clearError(field)}
//                   disabled={isSending}
//                   className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
//                 />
//                 {errors[field] && (
//                   <span className="text-sm text-red-400">{errors[field]}</span>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Phone & Email */}
//           <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[40px]">
//             <div className="w-full sm:w-[295px]">
//               <input
//                 name="user_phone"
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.user_phone}
//                 onChange={handleChange}
//                 onFocus={() => clearError("user_phone")}
//                 disabled={isSending}
//                 className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
//                 onKeyDown={(e) => {
//                   const allowedKeys = [
//                     "Backspace",
//                     "ArrowLeft",
//                     "ArrowRight",
//                     "Delete",
//                     "Tab",
//                   ];
//                   if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//               {errors.user_phone && (
//                 <span className="text-sm text-red-400">
//                   {errors.user_phone}
//                 </span>
//               )}
//             </div>
//             <div className="w-full sm:w-[295px]">
//               <input
//                 name="user_email"
//                 type="email"
//                 placeholder="Email"
//                 value={formData.user_email}
//                 onChange={handleChange}
//                 onFocus={() => clearError("user_email")}
//                 disabled={isSending}
//                 className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] px-[10px] py-[14px] w-full"
//               />
//               {errors.user_email && (
//                 <span className="text-sm text-red-400">
//                   {errors.user_email}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="relative w-full">
//             <select
//               name="user_subject" // keep same name for EmailJS
//               value={formData.user_subject}
//               onChange={handleChange}
//               onFocus={() => clearError("user_subject")}
//               disabled={isSending}
//               className="w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px] appearance-none pr-8"
//             >
//               <option value="" disabled>
//                 Type of Enquiry
//               </option>
//               <option value="General Enquiry">General Enquiry</option>
//               <option value="Sales Enquiry">Sales Enquiry</option>
//               <option value="Support">Support</option>
//               <option value="Partners / Vendors">Partners / Vendors</option>
//               <option value="Careers">Careers</option>
//             </select>

//             {/* Dropdown icon */}
//             <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-[#ffffff]">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
//                   fill="#ffffff"
//                 />
//               </svg>
//             </div>

//             {errors.user_subject && (
//               <span className="text-sm text-red-400">
//                 {errors.user_subject}
//               </span>
//             )}
//           </div>

//           {/* Message */}
//           <div className="w-full">
//             <textarea
//               name="user_message"
//               placeholder="Message"
//               value={formData.user_message}
//               onChange={handleChange}
//               onFocus={() => clearError("user_message")}
//               disabled={isSending}
//               className="h-[118px] resize-none w-full border-b border-b-[#146BD7] bg-[#263548] text-white outline-none fsans-400 text-[16px] px-[10px] py-[14px]"
//             />
//             {errors.user_message && (
//               <span className="text-sm text-red-400">
//                 {errors.user_message}
//               </span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="w-full">
//             <button
//               // whileTap={{ scale: 0.95 }}
//               type="submit"
//               disabled={isSending}
//               className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//             >
//               <p>{isSending ? "Sending..." : "Submit"}</p>
//               <img src="/rightUpArrow.svg" alt="Arrow" />
//             </button>
//           </div>
//         </form>
//       ) : (
//         <h1 className="md:text-[40px] text-[30px] text-white text-center">
//           Thank you for submitting this form. Your form has been successfully
//           submitted.
//         </h1>
//       )}
//     </div>
//   );
// };

// export default ContactForm;
