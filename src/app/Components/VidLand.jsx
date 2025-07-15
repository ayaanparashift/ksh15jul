// // import React from "react";
// // import { motion } from "framer-motion";

// // const VidLand = () => {
// //   return (
// //     <div className="w-screen h-screen overflow-hidden ">
// //       <video
// //         className="w-screen h-screen object-cover sm:flex hidden"
// //         autoPlay
// //         muted
// //         playsInline
// //         loop
// //         src="/homepage/homef.mp4"
// //       ></video>
// //       <video
// //         className="w-screen h-screen object-cover sm:hidden flex"
// //         autoPlay
// //         muted
// //         playsInline
// //         loop
// //         src="/homepage/homemobf.mp4"
// //       ></video>
// //     </div>
// //   );
// // };

// // export default VidLand;
// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// // const VidLand = () => {
// //   return (
// //     <div className="w-screen h-screen overflow-hidden relative">
// //       {/* Desktop Video */}
// //       <video
// //         className="w-screen h-screen object-cover sm:flex hidden"
// //         autoPlay
// //         muted
// //         playsInline
// //         loop
// //         src="/homepage/homef.webm"
// //       ></video>

// //       {/* Mobile Video */}
// //       <video
// //         className="w-screen h-screen object-cover sm:hidden flex"
// //         autoPlay
// //         muted
// //         playsInline
// //         loop
// //         src="/homepage/homemob.webm"
// //       ></video>

// //       {/* Overlay */}
// //       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10"></div>
// //     </div>
// //   );
// // };
// const fadeIn2 = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
//   exit: {
//     opacity: 0,
//     x: 100,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };
// const VidLand = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden relative relative">
//       {/* Desktop Video */}
//       <video
//         className="w-screen h-screen object-cover sm:flex hidden"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.webm"
//       ></video>

//       {/* Mobile Video */}
//       <video
//         className="w-screen h-screen object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemob.webm"
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

//       <div className="absolute top-3/4 md:top-1/2 left-[max(5%,calc((100vw-1250px)/2))] md:right-0 right-[5%] z-[100] -translate-y-1/2">
//         <motion.h1
//           className="fpt-600 max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[30px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] min-1600:text-[70px]"
//           variants={fadeIn2}
//         >
//           Delivering
//           <br className="md:flex hidden" /> Grade A Industrial{" "}
//           <br className="md:flex hidden" /> & Logistics Parks
//         </motion.h1>
//       </div>
//     </div>
//   );
// };

// export default VidLand;

// import React from "react";
// import { motion } from "framer-motion";

// const VidLand = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden ">
//       <video
//         className="w-screen h-screen object-cover sm:flex hidden"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.mp4"
//       ></video>
//       <video
//         className="w-screen h-screen object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemobf.mp4"
//       ></video>
//     </div>
//   );
// };

// export default VidLand;
"use client";
import React from "react";
import { motion } from "framer-motion";

// const VidLand = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden relative">
//       {/* Desktop Video */}
//       <video
//         className="w-screen h-screen object-cover sm:flex hidden"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.webm"
//       ></video>

//       {/* Mobile Video */}
//       <video
//         className="w-screen h-screen object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemob.webm"
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10"></div>
//     </div>
//   );
// };
const fadeIn2 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};
// const VidLand = () => {
//   return (
//     <div className="w-screen md:h-screen h-[90vh] overflow-hidden relative">
//       {/* Desktop Video */}
//       <video
//         className="w-screen min-h-full object-cover sm:flex hidden brightness-110"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homef.webm"
//       ></video>

//       {/* Mobile Video */}
//       <video
//         className="w-screen min-h-full object-cover sm:hidden flex"
//         autoPlay
//         muted
//         playsInline
//         loop
//         src="/homepage/homemob.webm"
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full min-h-full bg-black bg-opacity-40 z-10"></div>

//       <div className="absolute top-[75%] md:top-1/2 left-[max(5%,calc((100vw-1250px)/2))] md:right-0 right-[5%] z-[100] -translate-y-1/2">
//         <motion.h1
//           className="fpt-600 max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[30px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] min-1600:text-[70px]"
//           variants={fadeIn2}
//         >
//           Delivering
//           <br className="md:flex hidden" /> Grade A Industrial{" "}
//           <br className="md:flex hidden" /> & Logistics Parks
//         </motion.h1>
//       </div>
//     </div>
//   );
// };

const VidLand = () => {
  return (
    <div className="w-screen md:h-screen h-[90vh] overflow-hidden relative bg-[#092241]">
      {/* Desktop Video */}
      <video
        className="w-screen min-h-full object-cover sm:flex hidden brightness-110"
        autoPlay
        muted
        playsInline
        loop
        src="/homepage/homef.webm"
      ></video>

      {/* Mobile Video */}
      <video
        className="w-screen min-h-full object-cover sm:hidden flex"
        autoPlay
        muted
        playsInline
        loop
        src="/homepage/homemob.webm"
      ></video>

      {/* vidbg.svg overlay on top of video but under heading */}
      <img
        src="/homepage/vidbg.svg"
        alt="Background Overlay"
        className="absolute top-0 max-w-full left-0 w-full h-full object-cover z-[20] pointer-events-none "
      />

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full min-h-full bg-black bg-opacity-60 z-30"></div> */}
      <div className="max-w-full absolute top-0 left-0 w-full min-h-full bg-[linear-gradient(to_top,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0.3)_10%,_rgba(0,0,0,0.3)_90%,_rgba(0,0,0,0.7)_100%)] z-10"></div>

      {/* Heading */}
      {/* <div className="absolute top-[75%] md:top-1/2 left-[max(5%,calc((100vw-1250px)/2))] md:right-0 right-[5%] z-40 -translate-y-1/2">
        <motion.h1
          className="fpt-600 max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[30px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] min-1600:text-[70px] "
          style={{ textShadow: "0.5px 0.5px 2px rgba(0,0,0,0.8)" }}
          variants={fadeIn2}
        >
          Delivering
          <br className="md:flex hidden" /> Grade A Industrial{" "}
          <br className="md:flex hidden" /> & Logistics Parks
        </motion.h1>
      </div> */}
    </div>
  );
};
export default VidLand;
