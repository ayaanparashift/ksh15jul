// import { useState } from "react";

// const accordionData = [
//   {
//     title: "Safe Guarding the Nature is part of our DNA",
//     content:
//       "We integrate sustainable practices in every aspect of infrastructure development, emphasizing harmony with nature.",
//   },
//   {
//     title: "Positioned at a prime location seamless connectivity",
//     content:
//       "The KSH INFRA Code of Conduct Handbook sets a high bar for compliance. This encompasses every aspect of how our team interacts with internal and external stakeholders",
//   },
//   {
//     title: "Built on the foundations of trust, integrity, & sustainability.",
//     content:
//       "Our values drive us to build long-lasting client relationships and environmentally responsible industrial spaces.",
//   },
//   {
//     title: "Offers competitive pricing models and eco-friendly operations",
//     content:
//       "We ensure affordability without compromising on green operations and modern infrastructure.",
//   },
// ];

// // const Accordion = () => {
// //   const [activeIndex, setActiveIndex] = useState(0); // default second item active

// //   return (
// //     <div className="w-full pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col gap-[16px]">
// //       {accordionData.map((item, index) => {
// //         const isActive = index === activeIndex;
// //         return (
// //           <div
// //             key={index}
// //             onClick={() => setActiveIndex(index)}
// //             className={`transition-all  duration-500 cursor-pointer w-full rounded-[10px] overflow-hidden backdrop-blur-md ${
// //               isActive ? "bg-[#092241]" : "bg-[#EEF0F390]"
// //             }`}
// //           >
// //             <div className="flex justify-between items-center px-6 py-5">
// //               <h3
// //                 className={`text-[16px] md:text-[18px] leading-[26px] font-semibold transition-colors duration-300 ${
// //                   isActive ? "text-white" : "text-[#1A1A1A]"
// //                 }`}
// //               >
// //                 {item.title}
// //               </h3>
// //               <span
// //                 className={`text-2xl font-bold transition-transform duration-300 ${
// //                   isActive ? "text-white rotate-45" : "text-[#DD1D26]"
// //                 }`}
// //               >
// //                 +
// //               </span>
// //             </div>
// //             {isActive && (
// //               <div className="px-6 pb-5 text-white text-[15px] leading-[24px] transition-all duration-500">
// //                 {item.content}
// //               </div>
// //             )}
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // const Accordion = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   return (
// //     <div className="w-full pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col gap-[16px]">
// //       {accordionData.map((item, index) => {
// //         const isActive = index === activeIndex;

// //         return (
// //           <div
// //             key={index}
// //             onClick={() => setActiveIndex(index)}
// //             className={`transition-all duration-500 ease-[cubic-bezier(0.7, 0, 0.4, 1)] cursor-pointer w-full rounded-[10px] overflow-hidden backdrop-blur-md ${
// //               isActive ? "bg-[#092241] p-[30px]" : "bg-[#EEF0F390] p-[20px]"
// //             }`}
// //             style={{
// //               height: isActive ? "180px" : "100px",
// //             }}
// //           >
// //             {/* Title row */}
// //             <div className="flex justify-between items-center h-[60px]">
// //               <h3
// //                 className={`text-[16px] md:text-[22px] fsans-600 leading-[180%] font-semibold transition-colors duration-300 ${
// //                   isActive ? "text-white" : "text-[#1A1A1A]"
// //                 }`}
// //               >
// //                 {item.title}
// //               </h3>
// //               <span
// //                 className={`text-2xl font-bold transition-transform duration-300 ${
// //                   isActive ? "text-white rotate-45" : "text-[#DD1D26]"
// //                 }`}
// //               >
// //                 +
// //               </span>
// //             </div>

// //             {/* Content section only visible when active */}
// //             <div
// //               className={` text-white text-[16px] leading-[150%] transition-opacity duration-500 ease-in ${
// //                 isActive ? "opacity-100" : "opacity-0 pointer-events-none"
// //               }`}
// //             >
// //               {item.content}
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const isMobile = useIsMobile(); // 👈 new hook here

//   return (
//     <div className="w-full pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col gap-[16px]">
//       {accordionData.map((item, index) => {
//         const isActive = index === activeIndex;

//         // 🎯 Responsive heights
//         const height = isActive
//           ? isMobile
//             ? "240px"
//             : "180px"
//           : isMobile
//           ? "150px"
//           : "100px";

//         return (
//           <div
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`transition-all duration-500 ease-[cubic-bezier(0.7, 0, 0.4, 1)] cursor-pointer w-full rounded-[10px] overflow-hidden backdrop-blur-md ${
//               isActive ? "bg-[#092241] p-[30px]" : "bg-[#EEF0F390] p-[20px]"
//             }`}
//             style={{
//               height,
//             }}
//           >
//             {/* Title row */}
//             <div className="flex justify-between items-center h-[60px]">
//               <h3
//                 className={`text-[16px] md:text-[22px] fsans-600 leading-[180%] font-semibold transition-colors duration-300 ${
//                   isActive ? "text-white" : "text-[#1A1A1A]"
//                 }`}
//               >
//                 {item.title}
//               </h3>
//               <span
//                 className={`text-2xl font-bold transition-transform duration-300 ${
//                   isActive ? "text-white rotate-45" : "text-[#DD1D26]"
//                 }`}
//               >
//                 +
//               </span>
//             </div>

//             {/* Content */}
//             <div
//               className={`text-white text-[16px] leading-[150%] transition-opacity duration-500 ease-in ${
//                 isActive ? "opacity-100" : "opacity-0 pointer-events-none"
//               }`}
//             >
//               {item.content}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Accordion;
"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const Accordion = ({ accordionData, acch, accw }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile(); // 👈 new hook here

  //   return (
  //     <div className="w-full min-1920:max-w-[80%] lg:ml-auto pr-[max(5%,calc((100vw-1250px)/2))] items-center justify-center flex flex-col gap-[16px]">
  //       {accordionData.map((item, index) => {
  //         const isActive = index === activeIndex;

  //         // 🎯 Responsive heights
  //         const height = isActive
  //           ? isMobile
  //             ? "240px"
  //             : "180px"
  //           : isMobile
  //           ? "150px"
  //           : "100px";

  //         return (
  //           <div
  //             key={index}
  //             onClick={() => setActiveIndex(index)}
  //             className={`transition-all flex flex-col justify-center duration-500 ease-[cubic-bezier(0.7, 0, 0.4, 1)] cursor-pointer w-full rounded-[10px] overflow-hidden backdrop-blur-md ${
  //               isActive ? "bg-[#092241] p-5" : "bg-[#EEF0F390] p-[20px]"
  //             }`}
  //             style={{
  //               height,
  //             }}
  //           >
  //             {/* Title row */}
  //             <div
  //               className={`flex transition-all duration-300 justify-between items-center`}
  //             >
  //               <h3
  //                 className={`text-[16px] md:text-[22px] fsans-600 leading-[180%] font-semibold transition-colors duration-300 ${
  //                   isActive ? "text-white" : "text-[#1A1A1A]"
  //                 }`}
  //               >
  //                 {item.title}
  //               </h3>
  //               {isActive ? (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="24"
  //                   height="24"
  //                   viewBox="0 0 24 24"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M18 12H12H6"
  //                     stroke="white"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                 </svg>
  //               ) : (
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="24"
  //                   height="24"
  //                   viewBox="0 0 24 24"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M18 12H12M12 12H6M12 12V6M12 12V18"
  //                     stroke="#E30613"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                 </svg>
  //               )}
  //             </div>

  //             {/* Content */}
  //             <div
  //               className={`text-white text-[16px] leading-[150%] transition-opacity duration-500 ease-in ${
  //                 isActive ? "opacity-100" : "opacity-0 pointer-events-none"
  //               }`}
  //             >
  //               {item.content}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  return (
    <div
      className={`w-full min-1920:max-w-[90%] pl-0 md:pl-[max(5%,calc((100vw-1250px)/2))] md:pr-[max(5%,calc((100vw-1250px)/2))] xl:pl-0 xl:ml-auto flex flex-col gap-[16px] ${
        acch > 450 ? "xl:h-[550px]" : "xl:h-[450px]"
      } ${accw > 80 ? "w-full" : "xl:w-[90%]"}`}
    >
      {accordionData.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full cursor-pointer rounded-[10px] p-5 backdrop-blur-md border border-transparent ${
              isActive ? "bg-[#6C8DAB]" : "bg-[#EEF0F390]"
            } transition-colors duration-300`}
          >
            {/* Title row */}
            <div className="flex items-center justify-between">
              <p
                className={`text-[16px] md:text-[22px] fsans-600 leading-[150%] font-semibold transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {item.title}
              </p>

              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12H6"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12M12 12H6M12 12V6M12 12V18"
                    stroke="#E30613"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* Animated content container */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.4, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="text-white text-[14px] md:text-[16px] min-1920:text-[18px] leading-[150%] fsans-400 pt-2">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
