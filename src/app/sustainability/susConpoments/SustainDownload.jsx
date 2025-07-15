"use client";
import React from "react";
import { motion } from "framer-motion";
const SustainDownload = () => {
  return (
    <div className="bg-red-500 bgSusDown">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center md:py-10 py-14 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.1, once: true }}
          className=""
        >
          <img src="Sustainability/downloadBook.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
          viewport={{ amount: 0.3, once: true }}
          className="text-white flex flex-col gap-8 md:items-start justify-center items-center"
        >
          <h1 className="fsans-600 text-xl">
            View how we prioritize sustainability in every task, Download our
            ESG Report
          </h1>
          <button className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px] ">
            Download Now{" "}
            <img src="Sustainability/downloadBookArrow.svg" alt="" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SustainDownload;

// "use client";
// import React from "react";

// import { motion } from "framer-motion";
// const SustainSpotLigth = () => {
//   return (
//     <div className="relative bg-[#092241] h-[350px] md:h-[550px] lg:h-[650px] min-1366:h-[95vh] z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[125px] md:pt-[140px] xl-1920:pt-44">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400"
//         >{`Home > Sustainability`}</motion.p>
//         <motion.h1
//           initial={{ width: 0 }}
//           whileInView={{ width: "fit-content" }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="md:text-[60px] text-[30px] text-[24px] md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
//         >
//           Sustainability
//         </motion.h1>
//       </div>
//       <motion.img
//         initial={{ opacity: 0, translateY: "100px" }}
//         whileInView={{ opacity: 1, translateY: 0 }}
//         transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.1, once: true }}
//         src="./Sustainability/sustainSpot.png"
//         // className="absolute bottom-0 w-full h-[637px]"
//         className="absolute bottom-0 w-full "
//         alt=""
//       />
//     </div>
//   );
// };
