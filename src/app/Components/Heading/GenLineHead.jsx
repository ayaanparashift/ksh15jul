// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";

// // const GenLineHead = ({ heading, acbtn, setAcBtn }) => {
// //   const spotlight_btn_content = [{ title: "Photos" }, { title: "Videos" }];

// //   return (
// //     <div className="pb-[20px] relative border-b mb-[60px] border-[#D7D7D7] overflow-hidden whitespace-nowrap w-[1280px] tablinehead flex-nowrap">
// //       <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px]">
// //         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
// //           {heading}
// //         </h2>
// //         <div
// //           className="flex gap-[5px] overflow-x-auto scrollbar"
// //           style={{
// //             scrollbarWidth: "none", // Hides scrollbar in Firefox
// //             msOverflowStyle: "none",
// //           }}
// //         >
// //           {spotlight_btn_content.map((btntitle, index) => (
// //             <button
// //               onClick={() => setAcBtn(btntitle.title)}
// //               key={btntitle.title + " " + String(index)}
// //               className={`px-[12px] py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 text-[#092241] text-opaciy-50 border ${
// //                 acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
// //               }`}
// //             >
// //               {btntitle.title}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //       <motion.div
// //         className="absolute z-20 top-0 left-0 w-full bg-white"
// //         initial={{ x: 0 }}
// //         whileInView={{ x: "100%" }}
// //         viewport={{ once: true, amount: 0.3 }}
// //         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
// //       />
// //     </div>
// //   );
// // };

// // export default GenLineHead;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const GenLineHead = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showRenders = false,
//   showPhotos,
//   showVids,
// }) => {
//   const spotlight_btn_content = [
//     showRenders && { title: "Renders" },
//     showPhotos && { title: "Photos" },
//     showVids && { title: "Videos" },
//   ];

//   return (
//     <div className="pb-[20px] relative border-b mb-[60px] border-[#D7D7D7] overflow-hidden whitespace-nowrap max-w-[1280px] tablinehead flex-nowrap">
//       {/* White masking div that slides out */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3] z-50"
//         initial={{ x: 0 }}
//         animate={{ x: "100%" }}
//         transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       />

//       <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
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
//               className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 border ${
//                 acbtn === btntitle.title
//                   ? "bg-[#E30613] border-[#E30613] text-[#fff] text-opacity-100"
//                   : "text-[#092241] text-opacity-50"
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

// export default GenLineHead;

"use client";
import React from "react";
import { motion } from "framer-motion";

const GenLineHead = ({
  heading,
  acbtn,
  setAcBtn,
  showRenders = true,
  showPhotos = true, // Default to true to ensure at least one tab is visible
  showVids = true,
}) => {
  const spotlight_btn_content = [
    showPhotos && { title: "Photos" },
    showRenders && { title: "Renders" },
    showVids && { title: "Videos" },
  ].filter(Boolean); // Remove falsy values (false, undefined, null)

  return (
    <div className="pb-[20px] relative border-b mb-[60px] border-[#D7D7D7] overflow-hidden whitespace-nowrap max-w-[1280px] tablinehead flex-nowrap">
      {/* White masking div that slides out */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3] z-50"
        // initial={{ x: 0 }}
        // animate={{ x: "100%" }}
        // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      /> */}

      <div className="flex items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
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
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 border ${
                acbtn === btntitle.title
                  ? "bg-[#E30613] border-[#E30613] text-[#fff] text-opacity-100"
                  : "text-[#092241] text-opacity-50"
              }`}
            >
              {btntitle.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenLineHead;
