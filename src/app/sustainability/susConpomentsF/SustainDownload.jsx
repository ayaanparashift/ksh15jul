// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// const SustainDownload = () => {
//   return (
//     <div className="bg-red-500 bgSusDown">
//       <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center md:py-10 py-14 ">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className=""
//         >
//           <img src="Sustainability/downloadBook.png" alt="" />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//           viewport={{ amount: 0.3, once: true }}
//           className="text-white flex flex-col gap-8 md:items-start justify-center items-center"
//         >
//           <h1 className="fsans-600 text-xl">
//             View how we prioritize sustainability. Download our ESG Report
//           </h1>
//           <button className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px] ">
//             Download Now
//             <img src="Sustainability/downloadBookArrow.svg" alt="" />
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SustainDownload;

// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// 99999999 **********************
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import PopForm from "./PopForm"; // adjust the path if necessary

// const SustainDownload = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOpenPopup = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div>
//       <div className="bg-red-500 bgSusDown">
//         <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center md:py-10 py-14">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//           >
//             <img src="Sustainability/downloadBook.png" alt="Download Book" />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: [0.7, 0, 0.4, 1],
//               delay: 0.2,
//             }}
//             viewport={{ amount: 0.3, once: true }}
//             className="text-white flex flex-col gap-8 md:items-start items-center justify-center"
//           >
//             <h1 className="fsans-600 text-xl">
//               View how we prioritize sustainability. Download our ESG Report
//             </h1>
//             <button
//               className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px]"
//               onClick={handleOpenPopup}
//             >
//               Download Now
//               <img src="Sustainability/downloadBookArrow.svg" alt="Arrow" />
//             </button>
//           </motion.div>
//         </div>
//       </div>
//       {/* Only render the PopForm when showPopup is true */}
//       {showPopup && <PopForm onClose={handleClosePopup} />}
//     </div>
//   );
// };

// export default SustainDownload;

// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************
// 99999999 ********************************

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PopForm from "./PopForm"; // adjust the path if necessary

// const SustainDownload = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOpenPopup = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   function overflowBodyScroll(showPopup) {
//     if (showPopup) {
//       document.body.style.overflow = "hidden";
//       // document.body.style.position = "fixed";
//     } else {
//       document.body.style.overflow = "auto";
//       // document.body.style.position = "static";
//     }
//   }
//   overflowBodyScroll(showPopup);
//   return (
//     <div>
//       <div className="bg-red-500 bgSusDown">
//         <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center md:py-10 py-14">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//           >
//             <img src="Sustainability/downloadBook.png" alt="Download Book" />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: [0.7, 0, 0.4, 1],
//               delay: 0.2,
//             }}
//             viewport={{ amount: 0.3, once: true }}
//             className="text-white flex flex-col gap-8 md:items-start items-center justify-center"
//           >
//             <h1 className="fsans-600 text-center text-xl">
//               View how we prioritize sustainability. Download our ESG Report
//             </h1>
//             <button
//               className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px]"
//               onClick={handleOpenPopup}
//             >
//               Download Now
//               <img src="Sustainability/downloadBookArrow.svg" alt="Arrow" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* AnimatePresence for exit animation */}
//       <AnimatePresence>
//         {showPopup && <PopForm onClose={handleClosePopup} />}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SustainDownload;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopForm from "./PopForm";

const SustainDownload = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <div>
      <div className="bgSusDown">
        <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-[50px] md:h-[352px] items-center md:py-10 py-14">
          <div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          >
            <img src="Sustainability/downloadBook.png" alt="Download Book" />
          </div>
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
            // viewport={{ amount: 0.3, once: true }}
            className="text-white flex flex-col gap-8 md:items-start items-center justify-center "
          >
            <h1 className="fsans-600 text-center text-xl">
              View how we prioritize sustainability. Download our ESG Report
            </h1>
            <button
              className="items-center fsans-600 text-[16px] leading-7 flex py-3 px-8 border gap-[10px] border-[#D7D7D7] rounded-[10px] hover:bg-white group transition-colors duration-[500ms] hover:text-black"
              onClick={handleOpenPopup}
            >
              Download Now
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-black transition-colors duration-[500ms]"
                  d="M1 11.531L4.5902 15.0989C5.37022 15.8741 6.62977 15.8741 7.4098 15.0989L11 11.531M6 1.5L6 11.0452"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && <PopForm onClose={handleClosePopup} />}
      </AnimatePresence>
    </div>
  );
};

export default SustainDownload;
