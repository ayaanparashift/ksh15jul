// "use client";
// import React, { useState, useEffect } from "react";
// import { Toaster, toast } from "react-hot-toast";
// import emailjs from "@emailjs/browser";

// // ✅ Environment variables
// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
// const CONTACT_AUTOREPLY_ID =
//   process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// const ContFF = () => {
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
//   const [honeypot, setHoneypot] = useState("");

//   // ✅ Initialize EmailJS only once
//   // Map subjects to recipient arrays
//   const RECIPIENTS = {
//     "General Enquiry": ["enquiry@kshinfra.com"],
//     "Leasing Enquiry": ["leasing@kshinfra.com"],
//     "Sales Enquiry": ["enquiry@kshinfra.com"],
//     Support: ["support@kshinfra.com"],
//     "Partners/Vendors": ["purchase@kshinfra.com"],
//     Careers: ["careers@kshinfra.com"],
//     "Marketing Enquiry": ["marketing@kshinfra.com"],
//   };

//   useEffect(() => {
//     if (!PUBLIC_KEY) {
//       console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
//     } else {
//       emailjs.init(PUBLIC_KEY);
//     }
//   }, []);

//   // ✅ Validation
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
//       errs.user_phone = "Enter a valid phone number";
//     } else if (
//       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)
//     ) {
//       errs.user_email = "Enter a valid email address";
//     } else if (user_subject.trim().length < 2) {
//       errs.user_subject = "Please select a subject";
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
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     if (honeypot) return;

//     setIsSending(true);

//     const subject = formData.user_subject;
//     const recipients = RECIPIENTS[subject] || ["default@yourcompany.com"];
//     const r_email = recipients[Math.floor(Math.random() * recipients.length)];

//     try {
//       // Send to company
//       await emailjs.send(SERVICE_ID, CONTACT_COMPANY_ID, {
//         ...formData,
//         r_email,
//       });

//       // Send auto-reply
//       await emailjs.send(SERVICE_ID, CONTACT_AUTOREPLY_ID, {
//         to_name: formData.user_name,
//         to_email: formData.user_email,
//       });

//       // ✅ Save to Google Sheets
//       await fetch("/api/contact/", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-Type": "application/json" },
//       });

//       toast.success("✅ Your enquiry has been sent!");
//       setIsSubmitted(true);
//       setFormData({
//         user_name: "",
//         user_company: "",
//         user_phone: "",
//         user_email: "",
//         user_subject: "",
//         user_message: "",
//       });
//       setErrors({});
//     } catch (err) {
//       console.error("❌ Error:", err);
//       toast.error("Error sending form. Please try again.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="bg-[#092241] md:min-h-fit min-h-[700px] flex-1 px-[5%] md:px-[40px] pt-[47px] md:pb-[47px] pb-[20px] xl:mt-[100px] xl:w-auto md:max-w-[50%]">
//       <Toaster position="top-center" />

//       {!isSubmitted ? (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-[24px] sm:gap-[40px] relative overflow-hidden"
//         >
//           <input
//             type="text"
//             name="honeypot"
//             value={honeypot}
//             onChange={(e) => setHoneypot(e.target.value)}
//             autoComplete="off"
//             // style={{ display: "none" }}
//             className="absolute left-[-9000px]"
//           />
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

//           {/* Subject */}
//           <div className="relative w-full">
//             <select
//               name="user_subject"
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
//               <option value="Leasing Enquiry">Leasing Enquiry</option>
//               <option value="Sales Enquiry">Sales Enquiry</option>
//               <option value="Support">Support</option>
//               <option value="Partners/Vendors">Partners/Vendors</option>
//               <option value="Careers">Careers</option>
//               <option value="Marketing Enquiry">Marketing Enquiry</option>
//             </select>
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
//         <h1 className="md:text-[40px] text-[30px] text-white h-full flex items-center">
//           Thank you for submitting this form. Your form has been successfully
//           submitted.
//         </h1>
//       )}
//     </div>
//   );
// };

// export default ContFF;
"use client";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useFormSubmit } from "../../../app/context/FormSubmitContext";

// ✅ Environment variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const CONTACT_COMPANY_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_COMPANY_ID;
const CONTACT_AUTOREPLY_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_AUTOREPLY_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContFF = () => {
  const { grantAccess } = useFormSubmit();
  const router = useRouter();
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
  const [honeypot, setHoneypot] = useState("");

  // ✅ Initialize EmailJS only once
  // Map subjects to recipient arrays
  const RECIPIENTS = {
    "General Enquiry": ["enquiry@kshinfra.com"],
    "Leasing Enquiry": ["leasing@kshinfra.com"],
    "Sales Enquiry": ["enquiry@kshinfra.com"],
    Support: ["support@kshinfra.com"],
    "Partners/Vendors": ["purchase@kshinfra.com"],
    Careers: ["careers@kshinfra.com"],
    "Marketing Enquiry": ["marketing@kshinfra.com"],
  };

  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.error("❌ Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
    } else {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  // ✅ Validation
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
      errs.user_phone = "Enter a valid phone number";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user_email)
    ) {
      errs.user_email = "Enter a valid email address";
    } else if (user_subject.trim().length < 2) {
      errs.user_subject = "Please select a subject";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (honeypot) return;

    setIsSending(true);

    const subject = formData.user_subject;
    const recipients = RECIPIENTS[subject] || ["default@yourcompany.com"];
    const r_email = recipients[Math.floor(Math.random() * recipients.length)];

    try {
      // Run all async requests concurrently so it takes less time
      await Promise.all([
        emailjs.send(SERVICE_ID, CONTACT_COMPANY_ID, {
          ...formData,
          r_email,
        }),
        emailjs.send(SERVICE_ID, CONTACT_AUTOREPLY_ID, {
          to_name: formData.user_name,
          to_email: formData.user_email,
        }),
        fetch("/api/contact/", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        })
      ]);

      toast.success("✅ Your enquiry has been sent!");
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
      console.error("❌ Error:", err);
      toast.error("Error sending form. Please try again.");
    } finally {
      setIsSending(false);
    }
    grantAccess();
    router.push("/thank-you");
  };

  return (
    <div className="bg-[#092241] md:min-h-fit min-h-[700px] flex-1 px-[5%] md:px-[40px] pt-[47px] md:pb-[47px] pb-[20px] xl:mt-[100px] xl:w-auto md:max-w-[50%]">
      <Toaster position="top-center" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[24px] sm:gap-[40px] relative overflow-hidden"
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
            />
            {errors.user_phone && (
              <span className="text-sm text-red-400">{errors.user_phone}</span>
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
              <span className="text-sm text-red-400">{errors.user_email}</span>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="relative w-full">
          <select
            name="user_subject"
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
            <option value="Leasing Enquiry">Leasing Enquiry</option>
            <option value="Sales Enquiry">Sales Enquiry</option>
            <option value="Support">Support</option>
            <option value="Partners/Vendors">Partners/Vendors</option>
            <option value="Careers">Careers</option>
            <option value="Marketing Enquiry">Marketing Enquiry</option>
          </select>
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
            <span className="text-sm text-red-400">{errors.user_subject}</span>
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
            <span className="text-sm text-red-400">{errors.user_message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
          >
            <p>{isSending ? "Sending..." : "Submit"}</p>
            <img src="/rightUpArrow.svg" alt="Arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContFF;
