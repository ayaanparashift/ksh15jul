// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { sendEmails } from "../utils/sendEmail";

// const EnquireNow = ({ closeEnquire }) => {
//   const [userName, setUserName] = useState("");
//   const [userCompany, setUserCompany] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userSubject, setUserSubject] = useState("");
//   const [userMessage, setUserMessage] = useState("");
//   const [honeypot, setHoneypot] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if honeypot filled, likely a bot
//     if (honeypot) return;

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
//         toast.success("✅ Your enquiry has been sent!");
//       } else if (response.successCompany) {
//         toast.success("📨 Enquiry sent, but auto-reply failed.");
//       } else if (response.successAutoReply) {
//         toast.success("📨 Auto-reply sent, but company email failed.");
//       }

//       setUserName("");
//       setUserCompany("");
//       setUserPhone("");
//       setUserEmail("");
//       setUserSubject("");
//       setUserMessage("");

//       setIsSubmitted(true);

//       // if (typeof closeEnquire === "function") closeEnquire();
//     } catch (err) {
//       toast.error(`❌ An error occurred: ${err.message}`);
//       console.error("Email send error:", err);
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div
//       className="bg-[#092241] min-h-screen flex flex-col gap-[30px] md:gap-[60px] w-full px-[40px] py-[47px] z-[100000000000] relative mt-0 overflow-hidden"
//       id="contform"
//     >
//       <div className="flex justify-between items-center">
//         <button onClick={closeEnquire} disabled={isSending}>
//           <img
//             className="w-[40px] h-[40px]"
//             src="/homepage/icons/backarrow.svg"
//             alt="Back"
//           />
//         </button>
//         {!isSubmitted && (
//           <div>
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               id="appformtitle"
//               className="fpt-600 xl:text-[42px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-1 2xl:text-[42px]"
//             >
//               Enquire Now
//             </motion.h1>
//             <motion.div
//               initial={{ x: -150, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0 }}
//               className="bg-[#F7E327] h-[10px] w-full"
//             />
//           </div>
//         )}
//       </div>
//       {!isSubmitted && (
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-[24px] sm:gap-[50px]"
//         >
//           {/* Honeypot field - hidden from users */}
//           <input
//             type="text"
//             name="honeypot"
//             value={honeypot}
//             onChange={(e) => setHoneypot(e.target.value)}
//             autoComplete="off"
//             style={{ display: "none" }}
//           />

//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <input
//               name="user_name"
//               type="text"
//               placeholder="Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
//               required
//               disabled={isSending}
//             />
//             <input
//               name="user_company"
//               type="text"
//               placeholder="Company Name"
//               value={userCompany}
//               onChange={(e) => setUserCompany(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
//               required
//               disabled={isSending}
//             />
//           </div>

//           <div className="flex sm:flex-row flex-col gap-[24px]">
//             <input
//               name="user_phone"
//               type="number"
//               placeholder="Phone"
//               value={userPhone}
//               onChange={(e) => setUserPhone(e.target.value)}
//               className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
//               required
//               disabled={isSending}
//             />
//             <input
//               name="user_email"
//               type="email"
//               placeholder="Email"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//               className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full xl:w-[295px]"
//               required
//               disabled={isSending}
//             />
//           </div>

//           <div className="relative w-full">
//             <input
//               name="user_subject"
//               type="text"
//               placeholder="Subject"
//               value={userSubject}
//               onChange={(e) => setUserSubject(e.target.value)}
//               className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] fsans-400 text-[16px] leading-[111%]"
//               required
//               disabled={isSending}
//             />
//           </div>

//           <div className="w-full">
//             <textarea
//               name="user_message"
//               placeholder="Message"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
//               required
//               disabled={isSending}
//             />
//           </div>

//           <div className="w-full">
//             <button
//               type="submit"
//               disabled={isSending}
//               className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl opacity-90 hover:opacity-100"
//             >
//               <p>{isSending ? "Sending..." : "Submit"}</p>
//               <img src="/rightUpArrow.svg" alt="Arrow" />
//             </button>
//           </div>
//         </form>
//       )}
//       {isSubmitted && (
//         <div className="h-full w-full flex ">
//           <h1 className="md:text-[40px] text-[24px] text-white ">
//             Thank you for submitting this form. Your form has been succesfully
//             submitted.
//           </h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnquireNow;

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendEmails } from "../utils/sendEmail";

const EnquireNow = ({ closeEnquire }) => {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    if (!/^[a-zA-Z\s]{2,}$/.test(userName)) {
      errs.userName = "Please enter a valid name (only letters & spaces)";
    } else if (!/^[\w\s.\-&]{2,}$/.test(userCompany)) {
      errs.userCompany = "Please enter a valid company name";
    } else if (!/^[6-9][0-9]{9}$/.test(userPhone)) {
      errs.userPhone = "Please enter a valid 10-digit Indian phone number";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)
    ) {
      errs.userEmail = "Please enter a valid email address";
    } else if (userSubject.trim().length < 2) {
      errs.userSubject = "Please enter a subject";
    } else if (userMessage.trim().length < 5) {
      errs.userMessage = "Please enter a message (min 5 characters)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    if (!validate()) return;

    setIsSending(true);

    try {
      const response = await sendEmails({
        user_name: userName,
        user_company: userCompany,
        user_phone: userPhone,
        user_email: userEmail,
        user_subject: userSubject,
        user_message: userMessage,
      });

      if (response.successCompany && response.successAutoReply) {
        toast.success("✅ Your enquiry has been sent!");
      } else if (response.successCompany) {
        toast.success("📨 Enquiry sent, but auto-reply failed.");
      } else if (response.successAutoReply) {
        toast.success("📨 Auto-reply sent, but company email failed.");
      }

      setUserName("");
      setUserCompany("");
      setUserPhone("");
      setUserEmail("");
      setUserSubject("");
      setUserMessage("");
      setErrors({});
      setIsSubmitted(true);
    } catch (err) {
      toast.error(`❌ An error occurred: ${err.message}`);
      console.error("Email send error:", err);
    } finally {
      setIsSending(false);
    }
  };

  const clearError = (field) => {
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  return (
    <div
      className="bg-[#092241] min-h-screen flex flex-col gap-[30px] min-1366:gap-[60px] w-full px-[20px] md:px-[40px] py-[47px] z-[10000000] relative mt-0 overflow-hidden"
      id="contform"
    >
      <div className="flex justify-between items-center">
        {!isSubmitted && (
          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              id="appformtitle"
              className="fpt-600 xl:text-[42px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-1 2xl:text-[42px]"
            >
              Enquire Now
            </motion.h1>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="bg-[#F7E327] h-[10px] w-full"
            />
          </div>
        )}
        <button onClick={closeEnquire} disabled={isSending}>
          <img
            className="w-[40px] rotate-180 h-[40px]"
            src="/homepage/icons/backarrow.svg"
            alt="Back"
          />
        </button>
      </div>
      {!isSubmitted && (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[20px] sm:gap-[30px] min-1440::gap-[50px]"
        >
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div className="flex sm:flex-row flex-col gap-[24px]">
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => clearError("userName")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.userName && (
                <span className="text-sm text-red-400">{errors.userName}</span>
              )}
            </div>
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="user_company"
                type="text"
                placeholder="Company Name"
                value={userCompany}
                onChange={(e) => setUserCompany(e.target.value)}
                onFocus={() => clearError("userCompany")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.userCompany && (
                <span className="text-sm text-red-400">
                  {errors.userCompany}
                </span>
              )}
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-[24px]">
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="user_phone"
                type="tel"
                inputMode="numeric"
                placeholder="Phone"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                onFocus={() => clearError("userPhone")}
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
                className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />

              {errors.userPhone && (
                <span className="text-sm text-red-400">{errors.userPhone}</span>
              )}
            </div>
            <div className="flex flex-col w-full xl:w-[295px]">
              <input
                name="user_email"
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                onFocus={() => clearError("userEmail")}
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
                disabled={isSending}
              />
              {errors.userEmail && (
                <span className="text-sm text-red-400">{errors.userEmail}</span>
              )}
            </div>
          </div>

          <div className="relative w-full flex flex-col">
            <input
              name="user_subject"
              type="text"
              placeholder="Subject"
              value={userSubject}
              onChange={(e) => setUserSubject(e.target.value)}
              onFocus={() => clearError("userSubject")}
              className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px] fsans-400 text-[16px] leading-[111%]"
              disabled={isSending}
            />
            {errors.userSubject && (
              <span className="text-sm text-red-400">{errors.userSubject}</span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <textarea
              name="user_message"
              placeholder="Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onFocus={() => clearError("userMessage")}
              className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
              disabled={isSending}
            />
            {errors.userMessage && (
              <span className="text-sm text-red-400">{errors.userMessage}</span>
            )}
          </div>

          <div className="w-full">
            <button
              type="submit"
              disabled={isSending}
              className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl opacity-90 hover:opacity-100"
            >
              <p>{isSending ? "Sending..." : "Submit"}</p>
              <img src="/rightUpArrow.svg" alt="Arrow" />
            </button>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className="h-full w-full flex">
          <h1 className="md:text-[40px] text-[24px] text-white">
            Thank you for submitting this form. Your form has been successfully
            submitted.
          </h1>
        </div>
      )}
    </div>
  );
};

export default EnquireNow;
