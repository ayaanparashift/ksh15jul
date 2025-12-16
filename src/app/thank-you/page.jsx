// import { CircleCheck } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// export const metadata = {
//   robots: {
//     index: false,
//     follow: false,
//     nocache: true,
//     googleBot: {
//       index: false,
//       follow: false,
//       noimageindex: true,
//     },
//   },
// };

// const Page = () => {
//   return (
//     <div className="w-full xl:py-24 py-12">
//       <div className="fix12 flex flex-col gap-10 justify-center items-center xl:h-[calc(100vh-100px)] h-[calc(100vh-65px)] xl:pt-0 pt-[65px]">
//         <CircleCheck color="#092241" size={124} />
//         <h1 className="fpt-500 text-center max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[28px] leading-[105%] min-1600:text-[70px]">
//           Thank You for Submitting <br /> the Form!
//         </h1>
//         <p className="text-center max-w-2xl text-lg text-gray-700">
//           We appreciate you reaching out to us. Our team will review your
//           submission and get back to you as soon as possible.
//         </p>
//         <Link
//           href="/"
//           className="bg-[#E30613] group w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
//         >
//           <p>Return Home</p>
//           <img
//             className="group-hover:rotate-0 rotate-45 transition-all duration-300"
//             src="/rightUpArrow.svg"
//             alt="Arrow"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Page;
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

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { CircleCheck } from "lucide-react";
// import Link from "next/link";
// import { useFormSubmit } from "../context/FormSubmitContext";

// const Page = () => {
//   const router = useRouter();
//   const { canAccessThankYou, setCanAccessThankYou } = useFormSubmit();

//   useEffect(() => {
//     if (!canAccessThankYou) {
//       router.replace("/");
//     }
//   }, [canAccessThankYou, router]);

//   const handleLeave = (href) => {
//     setCanAccessThankYou(false);
//     router.push(href);
//   };

//   if (!canAccessThankYou) return null;

//   return (
//     <div className="w-full xl:py-24 py-12">
//       <div className="fix12 flex flex-col gap-10 justify-center items-center xl:h-[calc(100vh-100px)] h-[calc(100vh-65px)] xl:pt-0 pt-[65px]">
//         <CircleCheck color="#092241" size={124} />
//         <h1 className="fpt-500 text-center max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[28px] leading-[105%] min-1600:text-[70px]">
//           Thank You for Submitting <br /> the Form!
//         </h1>
//         <p className="text-center max-w-2xl text-lg text-gray-700">
//           We appreciate you reaching out to us. Our team will review your
//           submission and get back to you as soon as possible.
//         </p>

//         {/* IMPORTANT: intercept navigation */}
//         <button
//           onClick={() => handleLeave("/")}
//           className="bg-[#E30613] w-fit px-[21px] py-[14px] text-white rounded-3xl"
//         >
//           Return Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CircleCheck } from "lucide-react";
import { useFormSubmit } from "../context/FormSubmitContext";

export default function ThankYou() {
  const router = useRouter();
  const { syncAccess, revokeAccess } = useFormSubmit();
  useEffect(() => {
    const allowed = syncAccess();
    if (!allowed) {
      router.replace("/");
    }

    const handleBeforeUnload = () => revokeAccess();
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router, syncAccess, revokeAccess]);

  const goHome = () => {
    revokeAccess(); // manually revoke
    router.push("/");
  };

  return (
    <div className="w-full xl:py-24 py-12">
      <div className="fix12 flex flex-col gap-5 justify-center items-center xl:h-[calc(100vh-100px)] h-[calc(100vh-65px)] xl:pt-0 pt-[65px]">
        <CircleCheck color="#092241" size={124} />
        <h1 className="fpt-500 text-center max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[28px] leading-[105%] min-1600:text-[70px]">
          Thank you for your submission!
        </h1>
        <p className="text-center max-w-2xl text-lg text-gray-700">
          Our team will review it and get back to you shortly.
        </p>

        {/* IMPORTANT: intercept navigation */}
        <button
          onClick={goHome}
          className="bg-[#E30613] w-fit flex items-center gap-2 whitespace-nowrap px-[21px] py-[14px] text-white rounded-3xl group"
        >
          <span>Return Home</span>
          <img
            className="rotate-45 group-hover:rotate-0 transition-all duration-300"
            src="/rightUpArrow.svg"
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
}
