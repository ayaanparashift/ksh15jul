// // "use client";
// //
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
//           {/* {spotlight_btn_content.map((btntitle, index) => (
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
//           ))} */}
//           {spotlight_btn_content.filter(Boolean).map((btntitle, index) => (
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

// const GenLineHead = ({
//   heading,
//   acbtn,
//   setAcBtn,
//   showRenders = true,
//   showPhotos = true, // Default to true to ensure at least one tab is visible
//   showVids = true,
// }) => {
//   const spotlight_btn_content = [
//     showPhotos && { title: "Photos" },
//     showRenders && { title: "Renders" },
//     showVids && { title: "Videos" },
//   ].filter(Boolean); // Remove falsy values (false, undefined, null)

//   return (
//     <div className="pb-[20px] relative lg:border-b lg:mb-[60px] mb-5 border-[#D7D7D7] overflow-hidden whitespace-nowrap max-w-[1280px] tablinehead flex-nowrap">
//       {/* White masking div that slides out */}
//       {/* <div
//         className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3] z-50"
//         // initial={{ x: 0 }}
//         // animate={{ x: "100%" }}
//         // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//       /> */}

//       <div className="flex lg:flex-row flex-col lg:items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
//         <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
//           {heading}
//         </h2>
//         <div
//           className="flex lg:gap-[5px] overflow-x-auto scrollbar"
//           style={{
//             scrollbarWidth: "none", // Hides scrollbar in Firefox
//             msOverflowStyle: "none",
//           }}
//         >
//           {/* {spotlight_btn_content.map((btntitle, index) => (
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
//           ))} */}
//           {/* {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center
//       border-b-[4px] border-[#092241] border-opacity-30 lg:border lg:rounded-[10px] rounded-none
//       ${
//         acbtn === btntitle.title
//           ? "text-[#E30613] border-b-[#E30613] border-opacity-100 lg:bg-[#E30613] lg:text-[#fff] lg:border-[#E30613]"
//           : "text-[#092241] text-opacity-50"
//       }`}
//             >
//               {btntitle.title}
//             </button>
//           ))} */}
//           {spotlight_btn_content.map((btntitle, index) => (
//             <button
//               onClick={() => setAcBtn(btntitle.title)}
//               key={btntitle.title + " " + String(index)}
//               className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center
//       border-b-[4px] lg:border lg:rounded-[10px] rounded-none
//       ${
//         acbtn === btntitle.title
//           ? "text-[#E30613] border-b-[#E30613] lg:bg-[#E30613] lg:text-[#fff] lg:border-[#E30613]"
//           : "text-[#092241] text-opacity-50 border-b-[#092241] border-opacity-30 lg:border-opacity-30"
//       }`}
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

import { motion } from "framer-motion";
import { useEffect } from "react";

const GenLineHead = ({
  heading,
  acbtn,
  setAcBtn,
  showPhotos = false,
  showRenders = false,
  showVids = false,
}) => {
  // Always enforce order: Renders → Photos → Videos
  const spotlight_btn_content = [
    showPhotos && { title: "Photos" },
    showRenders && { title: "Renders" },
    showVids && { title: "Videos" },
  ].filter(Boolean);

  // Ensure the first available tab is active
  useEffect(() => {
    if (spotlight_btn_content.length > 0) {
      const firstTab = spotlight_btn_content[0].title;
      if (!acbtn || !spotlight_btn_content.some((t) => t.title === acbtn)) {
        setAcBtn(firstTab);
      }
    }
  }, [spotlight_btn_content, acbtn, setAcBtn]);

  return (
    <div className="pb-[20px] relative border-b mb-[60px] border-[#D7D7D7] overflow-hidden whitespace-nowrap max-w-[1280px] tablinehead flex-nowrap">
      {/* White masking div that slides out */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3] z-50"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      />

      <div className="lg:flex hidden items-center justify-between w-full lg:gap-0 gap-[20px] relative z-20">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] text-[16px] transition-colors duration-500 fsans-600 py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 border ${
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
      <div className="lg:hidden flex flex-col justify-between w-full lg:gap-0 gap-[20px] relative z-20">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#092241] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-0  scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center
      border-b-[4px] lg:border lg:rounded-[10px] rounded-none
      ${
        acbtn === btntitle.title
          ? "text-[#E30613] border-b-[#E30613] lg:bg-[#E30613] lg:text-[#fff] lg:border-[#E30613]"
          : "text-[#092241] text-opacity-50 border-b-[#092241] border-opacity-30 lg:border-opacity-30"
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
