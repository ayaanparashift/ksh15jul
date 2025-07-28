// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const TabLineHead = ({ heading, acbtn, setAcBtn }) => {
//   const spotlight_btn_content = [
//     { title: "Case Studies" },
//     { title: "News" },
//     { title: "Press Release" },
//     // { title: "Others" },
//   ];

//   return (
//     <div className="relative max-w-[1280px] border-b border-[#ffffff80] pb-[20px] lg:mb-[66px] mb-[36px] overflow-hidden whitespace-nowrap tablinehead">
//       <div
//         // initial={{ opacity: 0 }}
//         // whileInView={{ opacity: 1 }}
//         // viewport={{ once: true, amount: 0.1 }}
//         // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//         className="flex items-center justify-between w-full lg:gap-0 gap-[20px]"
//       >
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none", // Hides scrollbar in Firefox
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] py-[10px] transition-colors duration-[600ms] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                 acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
//               }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Animated Border Using Empty Div */}
//       {/* <motion.div
//         className="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.34] bg-[#D7D7D7]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.34 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       /> */}
//     </div>
//   );
// };

// export default TabLineHead;
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
// import React, { useEffect } from "react";
// import { usePathname } from "next/navigation";

// const TabLineHead = ({ heading, acbtn, setAcBtn }) => {
//   const spotlight_btn_content = [
//     { title: "Case Studies" },
//     { title: "News" },
//     { title: "Press Release" },
//   ];

//   const pathname = usePathname();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const hash = window.location.hash; // e.g. "#spotlight?tab=news"
//       if (hash.startsWith("#spotlight?tab=")) {
//         const tabParam = hash.split("=")[1]; // "news"
//         const matchedTab = spotlight_btn_content.find(
//           (btn) => btn.title.toLowerCase().replace(/\s+/g, "-") === tabParam
//         );
//         if (matchedTab) {
//           setAcBtn(matchedTab.title);
//         }
//       }
//     }
//   }, [pathname, setAcBtn]);

//   return (
//     <div className="relative max-w-[1280px] border-b border-[#ffffff80] pb-[20px] lg:mb-[66px] mb-[36px] overflow-hidden whitespace-nowrap tablinehead">
//       <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px]">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => {
//                 setAcBtn(btntitle.title);
//                 const newTab = btntitle.title
//                   .toLowerCase()
//                   .replace(/\s+/g, "-");
//                 window.history.replaceState(
//                   null,
//                   "",
//                   `#spotlight?tab=${newTab}`
//                 );
//               }}
//               key={btntitle.title + " " + index}
//               className={`px-[12px] py-[10px] transition-colors duration-[600ms] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                 acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
//               }`}
//             >
//               {btntitle.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabLineHead;
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
// import React, { useEffect } from "react";

// const TabLineHead = ({ heading, acbtn, setAcBtn }) => {
//   const spotlight_btn_content = [
//     { title: "Case Studies" },
//     { title: "News" },
//     { title: "Press Release" },
//   ];

//   // Utility to extract `tab` value from hash like "#spotlight?tab=news"
//   const updateActiveTabFromHash = () => {
//     const hash = window.location.hash; // e.g. "#spotlight?tab=news"
//     const match = hash.match(/tab=([^&]+)/); // extracts "news"
//     if (match) {
//       const tabParam = match[1];
//       const matchedTab = spotlight_btn_content.find(
//         (btn) => btn.title.toLowerCase().replace(/\s+/g, "-") === tabParam
//       );
//       if (matchedTab) {
//         setAcBtn(matchedTab.title);
//       }
//     }
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       updateActiveTabFromHash();
//       window.addEventListener("hashchange", updateActiveTabFromHash);
//     }
//     return () => {
//       window.removeEventListener("hashchange", updateActiveTabFromHash);
//     };
//   }, []);

//   return (
//     <div className="relative max-w-[1280px] border-b border-[#ffffff80] pb-[20px] lg:mb-[66px] mb-[36px] overflow-hidden whitespace-nowrap tablinehead">
//       <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px]">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           {spotlight_btn_content.map((btntitle, index) => {
//             const tabSlug = btntitle.title.toLowerCase().replace(/\s+/g, "-");

//             return (
//               <button
//                 key={btntitle.title + " " + index}
//                 onClick={() => {
//                   setAcBtn(btntitle.title);

//                   // Update only the hash portion of the URL without reloading
//                   const spotlightElement = document.getElementById("spotlight");
//                   if (spotlightElement) {
//                     spotlightElement.scrollIntoView({ behavior: "smooth" });
//                   }

//                   window.history.replaceState(
//                     null,
//                     "",
//                     `#spotlight?tab=${tabSlug}`
//                   );
//                 }}
//                 className={`px-[12px] py-[10px] transition-colors duration-[600ms] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                   acbtn === btntitle.title
//                     ? "bg-[#E30613] border-[#E30613]"
//                     : ""
//                 }`}
//               >
//                 {btntitle.title}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabLineHead;
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
"use client";
import React, { useEffect } from "react";

const TabLineHead = ({ heading, acbtn, setAcBtn }) => {
  const spotlight_btn_content = [
    { title: "Case Studies" },
    { title: "News" },
    { title: "Press Release" },
  ];

  const getTabFromHash = () => {
    const hash = window.location.hash; // e.g. "#spotlight?tab=case-studies"
    const match = hash.match(/tab=([^&]+)/); // extracts "case-studies"
    if (match) {
      return match[1];
    }
    return null;
  };

  const updateActiveTabFromHash = () => {
    const tabParam = getTabFromHash();
    if (tabParam) {
      const matchedTab = spotlight_btn_content.find(
        (btn) => btn.title.toLowerCase().replace(/\s+/g, "-") === tabParam
      );
      if (matchedTab) {
        setAcBtn(matchedTab.title);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // wait a tiny bit for router hash to be present
      const timer = setTimeout(updateActiveTabFromHash, 10);
      window.addEventListener("hashchange", updateActiveTabFromHash);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("hashchange", updateActiveTabFromHash);
      };
    }
  }, []);

  return (
    <div
      id="spotlight"
      className="relative max-w-[1280px] border-b border-[#ffffff80] pb-[20px] lg:mb-[66px] mb-[36px] overflow-hidden whitespace-nowrap tablinehead"
    >
      <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px]">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => {
            const tabSlug = btntitle.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <button
                key={btntitle.title + " " + index}
                onClick={() => {
                  setAcBtn(btntitle.title);

                  // Replace hash without scrolling
                  const newHash = `spotlight?tab=${tabSlug}`;
                  history.replaceState(null, "", `#${newHash}`);
                }}
                className={`px-[12px] py-[10px] transition-colors duration-[600ms] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
                  acbtn === btntitle.title
                    ? "bg-[#E30613] border-[#E30613]"
                    : ""
                }`}
              >
                {btntitle.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabLineHead;
