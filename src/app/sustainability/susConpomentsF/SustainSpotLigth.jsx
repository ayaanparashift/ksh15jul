"use client";
import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
const SustainSpotLigth = () => {
  return (
    <div className="relative bg-[#092241] h-[50vh] lg:h-[100vh] z-0 overflow-hidden">
      {/* <div className=""> */}
      <div className="fix12 pt-[125px] z-10 md:pt-[140px] xl-1920:pt-44">
        <p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400"
        >
          {" "}
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; Sustainability
        </p>
        <h1
          // initial={{ width: 0 }}
          // whileInView={{ width: "fit-content" }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          className="md:text-[60px] text-[30px] max-w-fit md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
        >
          Sustainability
        </h1>
      </div>
      <img
        // initial={{ opacity: 0, translateY: "100px" }}
        // whileInView={{ opacity: 1, translateY: 0 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        // viewport={{ amount: 0.1, once: true }}
        src="/Sustainability/susspot.webp"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full -z-10"
        alt=""
      />
    </div>
  );
};

export default SustainSpotLigth;

// "use client";
// import { motion } from "framer-motion";
// const AboutStop = () => {
//   return (
//     <div className="relative bg-[#092241] h-[430px] md:h-[742px] z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[140px] ">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-base fsans-400"
//         >{`Home > About`}</motion.p>
//         <motion.h1
//           initial={{ width: 0 }}
//           whileInView={{ width: "fit-content" }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[60px] max-w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden"
//         >
//           About Us &nbsp;&nbsp;&nbsp;
//         </motion.h1>
//       </div>
//       <motion.img
//         initial={{ opacity: 0, translateY: "100px" }}
//         whileInView={{ opacity: 1, translateY: 0 }}
//         transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.1, once: true }}
//         src="./AboutPage/aboutSpot.png"
//         className="absolute bottom-0 w-full h-auto md:h-[637px]"
//         alt=""
//       />
//     </div>
//   );
// };

// export default AboutStop;
