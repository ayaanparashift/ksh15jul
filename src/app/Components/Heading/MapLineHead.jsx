// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { isLeftHandSideExpression } from "typescript";

// const MapLineHead = ({ heading, hideopen, ach }) => {
//   const spotlight_btn_content = [
//     { title: "Pune", hid: 1, poE: "auto" },
//     { title: "Hosur", hid: 2, poE: "auto" },
//     { title: "Chennai", hid: 3, poE: "none" },
//   ];
//   return (
//     <div className="absolute z-[1000] fix12 top-5 lg:top-[100px] left-[max(5%,calc((100vw-1250px)/2))] lg:mb-[0px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="relative flex pb-2 gap-[10px] sm:gap-[0px] lg:pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <h2 className="leading-[26px] text-[16px] lg:text-[20px] fsans-600 text-[#ffffff] tbhead">
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
//               onClick={() => hideopen(btntitle?.hid)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] lg:px-[16px] py-[6px] lg:py-[10px] text-[14px] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
//                 ach && ach === btntitle.hid
//                   ? "bg-[#E30613] border-[#E30613]"
//                   : "bg-transparent"
//               }`}
//               style={{ pointerEvents: btntitle.poE }}
//             >
//               {btntitle?.title}
//             </button>
//           ))}
//         </div>
//       </motion.div>

//       {/* Animated Border Using Empty Div */}
//       <motion.div
//         className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D7D7D7]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.34 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       />
//     </div>
//   );
// };

// export default MapLineHead;

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 99999999999999999999999999
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 99999999999999999999999999
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 99999999999999999999999999
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 99999999999999999999999999
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 99999999999999999999999999

"use client";
import React from "react";
import { motion } from "framer-motion";
import { isLeftHandSideExpression } from "typescript";

const MapLineHead = ({ heading, hideopen, ach }) => {
  const spotlight_btn_content = [
    { title: "Pune", hid: 1, poE: "auto" },
    { title: "Bangalore", hid: 2, poE: "auto" },
    { title: "Chennai", hid: 3, poE: "none" },
  ];
  return (
    <div className="absolute z-[1000] fix12 top-5 lg:top-[100px] left-[max(5%,calc((100vw-1250px)/2))] lg:mb-[0px] mb-[36px] tablinehead overflow-hidden whitespace-nowrap">
      <div
        className="relative flex pb-2 gap-[10px] sm:gap-[0px] lg:pb-[20px] overflow-hidden whitespace-nowrap items-center justify-between w-full"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      >
        <h2 className="leading-[26px] text-[16px] lg:text-[20px] fsans-600 text-[#ffffff] tbhead border-b-[5px] border-[#F7E327]">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => hideopen(btntitle?.hid)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] lg:px-[16px] py-[6px] lg:py-[10px] text-[14px] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
                ach && ach === btntitle.hid
                  ? "bg-[#E30613] border-[#E30613]"
                  : "bg-transparent"
              }`}
              style={{ pointerEvents: btntitle.poE }}
            >
              {btntitle?.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapLineHead;
