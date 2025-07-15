"use client";
// import React from "react";

// const Newsletter = () => {
//   return (
//     <div className="newLetterSection lg:flex justify-between items-end md:pt-[105px] pt-[60px] pb-[40px] md:pb-[60px] border-b-[rgba(215, 215, 215, 0.34)] border-b-[1px]">
//       <div className="leftCon">
//         <h2 className="text-3xl w-fit pb-1 font-semibold text-white border-b-[5px] border-[#F7E327]">
//           Get the latest <br /> updates & insights
//         </h2>
//       </div>
//       <div className="rightCon pt-9 lg:pt-0">
//         <p className="text-base text-[#6c8dab80] pb-[10px]">
//           Subscribe to our newsletter
//         </p>
//         <form
//           action=""
//           className="md:w-[512px] border-2 border-white bg-white h-10 md:h-[70px] rounded-full flex justify-between pl-2 md:pl-6 md:pr-4 pr-2 items-center"
//         >
//           <div className="flex items-center gap-4">
//             <img src="/emailIcon.svg" alt="" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="border-none outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="flex gap-2 text-sm font-semibold items-center justify-between px-2 py-1 md:px-4 rounded-full md:w-[150px] md:h-[50px] bg-[#E30613] text-white"
//           >
//             Subscribe
//             <img
//               src="/rightUpArrow.svg"
//               alt=""
//               className="md:w-auto md:h-auto w-[15px] h-[15px]"
//             />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;

/**
 * Newsletter subscription component with EmailJS integration.
 *
 * Environment variables (in .env.local):
 * NEXT_PUBLIC_EMAILJS_SERVICE_ID=<your_service_id>
 * NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID=<your_newsletter_template_id>
 * NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE_ID=<your_thank_you_template_id>
 * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<your_public_key>
 *
 * EmailJS Templates:
 * 1) Newsletter Template: expects `subscriber_email`.
 * 2) Thank You Template: expects `subscriber_email`.
 */
// const Newsletter = () => {
//   const formRef = useRef(null);
//   const [status, setStatus] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//     const newsletterTemplateId =
//       process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
//     const thankYouTemplateId =
//       process.env.NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE_ID;
//     const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
//     const formData = new FormData(formRef.current);
//     const subscriberEmail = formData.get("subscriber_email");

//     try {
//       // Send notification to your inbox or database
//       await emailjs.sendForm(
//         serviceId,
//         newsletterTemplateId,
//         formRef.current,
//         publicKey
//       );
//       // Send thank you email to subscriber
//       await emailjs.send(
//         serviceId,
//         thankYouTemplateId,
//         { subscriber_email: subscriberEmail },
//         ublicKeyp
//       );

//       setStatus(true);
//       formRef.current.reset();
//       console.log("Newsletter & Thank You emails sent successfully.");
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       setStatus(false);
//     }
//   };

//   return (
//     <div className="newLetterSection lg:flex justify-between items-end md:pt-[105px] pt-[60px] pb-[40px] md:pb-[60px] border-b-[rgba(215, 215, 215, 0.34)] border-b-[1px]">
//       {!status && (
//         <div className="leftCon">
//           <h2 className="text-3xl w-fit pb-1 font-semibold text-white border-b-[5px] border-[#F7E327]">
//             Get the latest <br /> updates & insights
//           </h2>
//         </div>
//       )}
//       <div className="rightCon pt-9 lg:pt-0">
//         {!status && (
//           <p className="text-base text-[#6c8dab80] pb-[10px]">
//             Subscribe to our newsletter
//           </p>
//         )}
//         {!status && (
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="md:w-[512px] border-2 border-white bg-white h-10 md:h-[70px] rounded-full flex justify-between pl-2 md:pl-6 md:pr-4 pr-2 items-center"
//           >
//             <div className="flex items-center gap-4">
//               <img src="/emailIcon.svg" alt="Email icon" />
//               <input
//                 type="email"
//                 name="subscriber_email"
//                 placeholder="Enter your email"
//                 required
//                 className="border-none outline-none"
//               />
//             </div>
//             <button
//               type="submit"
// className="flex gap-2 text-sm font-semibold items-center justify-between px-2 py-1 md:px-4 rounded-full md:w-[150px] md:h-[50px] bg-[#E30613] text-white"
//             >
//               Subscribe
//               <img
//                 src="/rightUpArrow.svg"
//                 alt="Submit arrow"
//                 className="md:w-auto md:h-auto w-[15px] h-[15px]"
//               />
//             </button>
//           </form>
//         )}
//         {status && (
//           <p className="mt-2 text-green-400">
//             Thank you for subscribing! Check your inbox.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Newsletter;
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const newsletterTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
    const thankYouTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      console.log(formRef.current);
      // Send notification to your inbox
      await emailjs.sendForm(
        serviceId,
        newsletterTemplateId,
        formRef.current,
        publicKey
      );

      // Send thank you email to subscriber
      const formData = new FormData(formRef.current);
      const subscriberEmail = formData.get("subscriber_email");

      await emailjs.send(
        serviceId,
        thankYouTemplateId,
        { subscriber_email: subscriberEmail },
        publicKey
      );

      setStatus(true);
      formRef.current.reset();
      console.log("Both Newsletter and Thank You emails sent successfully.");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(false);
    }
  };

  return (
    <div className="newLetterSection xl:w-[80%] xl:mx-auto lg:flex justify-between items-end py-[40px] md:py-[60px] border-b border-[rgba(215,215,215,0.34)]">
      <div className="leftCon">
        <h2 className="text-3xl w-fit pb-1 font-semibold text-white border-b-4 border-[#F7E327]">
          Get the latest <br /> updates & insights
        </h2>
      </div>
      <div className="rightCon pt-9 lg:pt-0">
        {!status && (
          <>
            <p className="text-base text-[#6c8dab80] pb-[10px]">
              Subscribe to our newsletter
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="md:w-[512px] border-2 border-white bg-white h-[60px] md:h-[70px] rounded-full flex justify-between pl-2 md:pl-6 md:pr-4 pr-2 items-center"
            >
              <div className="flex items-center w-full gap-4">
                <img src="/emailIcon.svg" alt="Email icon" />
                <input
                  type="email"
                  name="subscriber_email"
                  placeholder="Enter your email"
                  required
                  className="border-none outline-none w-full pr-1 text-sm md:text-base"
                />
              </div>
              <button
                type="submit"
                className="flex md:gap-1 text-sm font-semibold items-center justify-between px-2 py-1 md:px-4 w-[150px] rounded-full md:w-[150px]  h-[40px] md:h-[50px] bg-[#E30613] text-white group"
              >
                Subscribe
                <svg
                  className="rotate-45 group-hover:rotate-0 duration-500 transition-transform"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_1911)">
                    <path
                      d="M4.58673 19.1612L18.2412 6.3877"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.2413 17.2075L19.2413 6.35429C19.2413 5.82071 18.779 5.38816 18.2086 5.38816L6.5 5.38816"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1911">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(24 24) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
          </>
        )}
        {status && (
          <p className="md:text-[30px] text-[24px] text-white ">
            Thank you for subscribing! Check your inbox.
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
