// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import LineHead from "./Heading/LineHead";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // Stagger effect for child elements
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 130 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };

// const EsgF = () => {
//   return (
//     <div className="h-fit">
//       <div className="WContainer py-[56px] fix12">
//         <LineHead heading={"SUSTAINABILITY"} clr="text-[#092241]" />
//         <motion.div
//           className="lg:flex md:gap-[20px] "
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//         >
//           <div className="lg:w-[40%]">
//             <motion.h3
//               variants={itemVariants}
//               viewport={{ once: true, amount: 0.3 }}
//               className="text-[#092241] text-3xl md:text-[60px] font-semibold leading-[105%]"
//             >
//               Environmental Sustainability Is in Our DNA
//             </motion.h3>
//             <div className="pt-[32px]">
//               <motion.h3
//                 variants={itemVariants}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="text-[18px] leading-[26px] text-[#6C8DAB]"
//               >
//                 Nurturing nature is at the heart of everything we do. We create
//                 industrial spaces that work in harmony with the environment. Our
//                 parks feature green spaces, energy-efficient buildings, and
//                 sustainable water systems. Our commitment to the planet isn't
//                 just good policy—it's a part of our value system.
//               </motion.h3>
//               <div className="pt-[23px] flex flex-col gap-4 w-[305px]">
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">01</span>{" "}
//                   Enviroment
//                 </motion.p>
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">02</span>{" "}
//                   Social
//                 </motion.p>
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">03</span>{" "}
//                   Governance
//                 </motion.p>
//               </div>
//               {/* <motion.div
//                 // initial={{ y: 130, opacity: 0 }}
//                 // whileInView={{ y: 0, opacity: 1 }}
//                 // transition={{ duration: 1.5, delay: 0.5 }}
//                 // viewport={{ once: true }}
//                 variants={itemVariants}
//                 viewport={{once: true, amount: 0.3}}
//                 className="flex cursor-pointer group transition-transform duration-[400ms] items-center gap-4 pt-[45px] justify-between font-semibold text-[#092241] text-[16px] w-fit"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
//                   alt=""
//                 />
//                 Explore More
//               </motion.div> */}

//               <motion.button
//                 variants={itemVariants}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="flex pt-[45px] group transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#092241] fsans-600">Explore More</p>
//               </motion.button>
//             </div>
//           </div>
//           <div className="hidden lg:w-[60%] md:flex items-center justify-center">
//             <video
//               src="/Esg/KSH Final Sustainability.mp4"
//               autoPlay
//               loop
//               muted
//             ></video>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default EsgF;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import LineHead from "./Heading/LineHead";
// import Link from "next/link";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       // Stagger child animations
//       staggerChildren: 0.1,
//       // You can set an overall duration if needed
//       duration: 1.4,
//       ease: [0.7, 0, 0.4, 1],
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 130 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };

// const EsgF = () => {
//   return (
//     <div className="h-fit">
//       <div className="WContainer py-[56px] fix12">
//         <LineHead heading={"SUSTAINABILITY"} clr="text-[#092241]" />
//         <motion.div
//           className="lg:flex md:gap-[20px]"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <div className="lg:w-[40%]">
//             <motion.h3
//               variants={itemVariants}
//               viewport={{ once: true, amount: 0.3 }}
//               className="text-[#092241] text-3xl md:text-[60px] font-semibold leading-[105%]"
//             >
//               Environmental Sustainability Is in Our DNA
//             </motion.h3>
//             <div className="pt-[32px]">
//               <motion.h3
//                 variants={itemVariants}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="text-[18px] leading-[26px] text-[#6C8DAB] flato-400 spotlightheaddd"
//               >
//                 Nurturing nature is at the heart of everything we do. We create
//                 industrial spaces that work in harmony with the environment. Our
//                 parks feature green spaces, energy-efficient buildings, and
//                 sustainable water systems. Our commitment to the planet isn't
//                 just good policy—it's a part of our value system.
//               </motion.h3>
//               <div className="pt-[23px] flex flex-col gap-4 w-[305px]">
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">01</span>{" "}
//                   Enviroment
//                 </motion.p>
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">02</span>{" "}
//                   Social
//                 </motion.p>
//                 <motion.p
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
//                 >
//                   <span className="font-bold text-red-700 pr-[11px]">03</span>{" "}
//                   Governance
//                 </motion.p>
//               </div>
//               <Link href="/sustainability">
//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   variants={itemVariants}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="flex pt-[45px] group transition-transform duration-[400ms] items-center justify-center gap-3"
//                 >
//                   <img
//                     src="/buttonarrows/redarico.svg"
//                     width={0}
//                     height={0}
//                     className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                     alt="Red Arrow Icon"
//                   />
//                   <p className="text-[#092241] fsans-600">Explore More</p>
//                 </motion.button>
//               </Link>
//             </div>
//           </div>
//           <div className="hidden lg:w-[60%] md:flex items-center justify-center">
//             <video src="/homepage/esgfinal.mp4" autoPlay loop muted></video>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default EsgF;

"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LineHead from "./Heading/LineHead";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger child animations
      staggerChildren: 0.1,
      // You can set an overall duration if needed
      duration: 1.4,
      ease: [0.7, 0, 0.4, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 130 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};

const EsgF = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Start the video from 0s when the component loads
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    const handleTimeUpdate = () => {
      if (videoRef.current) {
        // If the video reaches the end, restart it from 4.6 seconds
        if (videoRef.current.currentTime >= videoRef.current.duration - 0.5) {
          videoRef.current.currentTime = 4;
        }
      }
    };

    // Add 'timeupdate' event listener to check the video progress
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="h-fit">
      <div className="WContainer py-[56px] fix12">
        <LineHead heading={"SUSTAINABILITY"} clr="text-[#092241]" />
        <div
          className="lg:flex md:gap-[20px]"
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
        >
          <div className="lg:w-[40%]">
            <h3
              // variants={itemVariants}
              // viewport={{ once: true, amount: 0.3 }}
              className="text-[#092241] text-3xl md:text-[60px] font-semibold leading-[105%]"
            >
              Environmental Sustainability is in Our DNA
            </h3>
            <div className="pt-[32px]">
              <h3
                // variants={itemVariants}
                // viewport={{ once: true, amount: 0.3 }}
                className="text-[18px] leading-[26px] text-[#6C8DAB] flato-400 spotlightheaddd"
              >
                Nurturing nature is at the heart of everything we do. We create
                industrial spaces that work in harmony with the environment. Our
                parks feature green spaces, energy-efficient buildings, and
                sustainable water systems. Our commitment to the planet isn't
                just good policy—it's a part of our value system.
              </h3>
              <div className="pt-[23px] flex flex-col gap-4 w-[305px]">
                <p
                  // variants={itemVariants}
                  // viewport={{ once: true, amount: 0.3 }}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">01</span>{" "}
                  Environment
                </p>
                <p
                  // variants={itemVariants}
                  // viewport={{ once: true, amount: 0.3 }}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">02</span>{" "}
                  Social
                </p>
                <p
                  // variants={itemVariants}
                  // viewport={{ once: true, amount: 0.3 }}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">03</span>{" "}
                  Governance
                </p>
              </div>
              <Link href="/sustainability">
                <button
                  // whileHover={{ x: 5 }}
                  // variants={itemVariants}
                  // viewport={{ once: true, amount: 0.3 }}
                  className="flex pt-[45px] group transition-transform duration-[400ms] items-center justify-center gap-3"
                >
                  <img
                    src="/buttonarrows/redarico.svg"
                    width={0}
                    height={0}
                    className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                    alt="Red Arrow Icon"
                  />
                  <p className="text-[#092241] text-[16px] fsans-600">
                    Explore More
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:w-[60%] md:flex items-center justify-center">
            <video
              ref={videoRef}
              src="/homepage/susvidf.mp4"
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsgF;
