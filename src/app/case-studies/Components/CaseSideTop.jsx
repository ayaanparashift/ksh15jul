// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const CaseSideTop = () => {
//   return (
//     <div>
//       <div className="fix12">
//         <div className="overflow-x-hidden h-fit w-full">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//             className="overflow-x-hidden h-fit whitespace-nowrap"
//           >
//             <h2
//               className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text`}
//             >
//               What our clients say!
//             </h2>
//           </motion.div>
//         </div>
//         <div>
//           <video src="/Career/SlideImgs/slidevid1.webm"></video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseSideTop;

// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999
// /9999999999999999999999999999999999999

// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const CaseSideTop = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div>
//       <div className="fix12">
//         <div className="overflow-x-hidden h-fit w-full">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//             className="overflow-x-hidden h-fit whitespace-nowrap"
//           >
//             <h2
//               className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text`}
//             >
//               What our clients say!
//             </h2>
//           </motion.div>
//         </div>
//         <div className="relative w-full">
//           {/* Video Element */}
//           <video
//             ref={videoRef}
//             src="/Career/SlideImgs/slidevid1.webm"
//             className="w-full"
//           />

//           {/* Custom Play/Pause Button */}
//           <button
//             onClick={togglePlayPause}
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           >
//             <img
//               src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"} // Replace with your custom icons
//               alt="Play/Pause"
//               className="w-12 h-12"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseSideTop;

//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999
//999999999999999999999999999999999999999999

// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const CaseSideTop = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="w-full h-fit">
//       <div className="fix12">
//         <div className="overflow-x-hidden h-fit w-full">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//             className="overflow-x-hidden h-fit whitespace-nowrap"
//           >
//             <h2
//               className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text`}
//             >
//               What our clients say!
//             </h2>
//           </motion.div>
//         </div>
//         <div
//           className="relative w-full max-h-[540px]"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Video Element */}
//           <video
//             ref={videoRef}
//             src="/Career/SlideImgs/slidevid1.webm"
//             className="w-full"
//           />

//           {/* Custom Play/Pause Button */}
//           <motion.button
//             onClick={togglePlayPause}
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"} // Replace with your custom icons
//               alt="Play/Pause"
//               className="w-12 h-12"
//             />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseSideTop;

// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999
// 999999999999999999999999909999999999999

// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import CaseBtmCard from "./CaseBtmCard";
// const CaseSideTop = () => {
//   const slides = [
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "A culture that builds your future",
//       subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Innovation at its best",
//       subtitle: "JOHN DOE | DEVELOPER",
//       description:
//         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//   ];
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 translate-y-[100px]">
//           <div className="overflow-x-hidden h-fit w-full">
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//               className="overflow-x-hidden h-fit whitespace-nowrap"
//             >
//               <h2
//                 className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text`}
//               >
//                 What our clients say!
//               </h2>
//             </motion.div>
//           </div>
//           <div
//             className="relative w-full h-[540px] flex items-center justify-center overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {/* Video Element */}
//             <video
//               ref={videoRef}
//               src="/Career/SlideImgs/slidevid1.webm"
//               className="w-full h-full object-cover"
//             />

//             {/* Custom Play/Pause Button */}
//             <motion.button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-full"
//         style={{
//           background: "linear-gradient(to right, #092241 50%, #ffffff 50%)",
//         }}
//       >
//         <div className="fix12 pt-[150px] pb-[50px]">
//           <div className="flex">
//             <div className="max-w-1/2 flex flex-col gap-[20px] w-1/2 pr-[100px]">
//               <h3 className="spotlightheaddd fsans-600 text-white text-[36px] leading-[130%]">
//                 What Its like to be with KSH as a ‘Partner’!
//               </h3>
//               <p className="fsans-600 text-[22px] leading-[130%] text-[#CECECE] uppercase">
//                 Susaina Michelle | sales Executive
//               </p>
//               <p className="fsans-400 text-[16px] leading-[26px] text-white">
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//                 dolor in reprehenderit in voluptate velit esse cillum dolore eu
//                 fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
//                 proident, sunt in culpa qui officia deserunt mollit anim id est
//                 laborum.
//               </p>
//             </div>
//             <div className="max-w-1/2 w-1/2 pl-[60px] flex flex-col-reverse gap-[24px]">
//               <div className="flex gap-[15px] justify-start mb-4">
//                 <button
//                   id="carprev"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt=""
//                   />
//                 </button>
//                 <button
//                   id="carnext"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowright.svg"
//                     alt=""
//                   />
//                 </button>
//               </div>
//               <motion.div
//                 initial={{ x: "-200px", opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Swiper
//                   // onSwiper={setThumbsSwiper}
//                   modules={[Navigation, Thumbs]}
//                   spaceBetween={40}
//                   slidesPerView={4}
//                   watchSlidesProgress
//                   navigation={{
//                     nextEl: "#carnext",
//                     prevEl: "#carprev",
//                   }}
//                   className="thumb-swiper"
//                   breakpoints={{
//                     320: {
//                       slidesPerView: 1,
//                       spaceBetween: 10,
//                     },
//                     1280: {
//                       slidesPerView: 2,
//                     },
//                   }}
//                 >
//                   {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                       <CaseBtmCard />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaseSideTop;

// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// "use client";
// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import CaseBtmCard from "./CaseBtmCard";

// const CaseSideTop = () => {
//   const slides = [
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "A culture that builds your future",
//       subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Innovation at its best",
//       subtitle: "JOHN DOE | DEVELOPER",
//       description:
//         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     },
//     {
//       video: "/Career/SlideImgs/slidevid1.webm",
//       title: "Leading the industry",
//       subtitle: "JANE SMITH | MANAGER",
//       description:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     },
//   ];

//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(slides[0]);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleThumbnailClick = (slide) => {
//     if (videoRef.current) {
//       videoRef.current.src = slide.video;
//       videoRef.current.load(); // Reset video
//       setIsPlaying(false);
//     }
//     setActiveSlide(slide);
//   };

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 translate-y-[100px]">
//           <div className="overflow-x-hidden h-fit w-full">
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//               className="overflow-x-hidden h-fit whitespace-nowrap"
//             >
//               <h2 className="leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text">
//                 What our clients say!
//               </h2>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ y: -100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="relative w-full h-[540px] flex items-center justify-center overflow-hidden"
//           >
//             <video ref={videoRef} className="w-full h-full object-cover">
//               <source src={activeSlide.video} type="video/webm" />
//             </video>
//             <motion.button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       <div
//         className="w-full overflow-hidden"
//         style={{
//           background: "linear-gradient(to right, #092241 50%, #ffffff 50%)",
//         }}
//       >
//         <div className="fix12 pt-[150px] pb-[50px]">
//           <div className="flex">
//             {/* Left Side (Text) */}
//             <motion.div
//               initial={{  opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.1, once: true }}
//               className="max-w-1/2 flex flex-col gap-[20px] w-1/2 pr-[100px]"
//             >
//               <h3 className="spotlightheaddd fsans-600 text-white text-[36px] leading-[130%]">
//                 {activeSlide.title}
//               </h3>
//               <p className="fsans-600 text-[22px] leading-[130%] text-[#CECECE] uppercase">
//                 {activeSlide.subtitle}
//               </p>
//               <p className="fsans-400 text-[16px] leading-[26px] text-white">
//                 {activeSlide.description}
//               </p>
//             </motion.div>

//             {/* Right Side (Thumbnails) */}
//             <div className="max-w-1/2 w-1/2 pl-[60px] flex flex-col-reverse gap-[24px]">
//               <div className="flex gap-[15px] justify-start mb-4">
//                 <button
//                   id="carprev"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt=""
//                   />
//                 </button>
//                 <button
//                   id="carnext"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowright.svg"
//                     alt=""
//                   />
//                 </button>
//               </div>
//               <motion.div
//                 initial={{ x: "200px", opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Swiper
//                   modules={[Navigation, Thumbs]}
//                   spaceBetween={40}
//                   slidesPerView={2}
//                   watchSlidesProgress
//                   navigation={{ nextEl: "#carnext", prevEl: "#carprev" }}
//                   className="thumb-swiper"
//                 >
//                   {slides.map((slide, index) => (
//                     <SwiperSlide
//                       key={index}
//                       onClick={() => handleThumbnailClick(slide)}
//                     >
//                       <CaseBtmCard />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaseSideTop;

// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999
// 99999999999999999999999999999999999999999

// "use client";
// import React, { useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import CaseBtmCard from "./CaseBtmCard";

// const slides = [
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "A culture that builds your future",
//     subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "Innovation at its best",
//     subtitle: "JOHN DOE | DEVELOPER",
//     description:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     video: "/Career/SlideImgs/slidevid1.webm",
//     title: "Leading the industry",
//     subtitle: "JANE SMITH | MANAGER",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
// ];
// const CaseSideTop = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [activeSlide, setActiveSlide] = useState(slides[0]);
//   const [videoKey, setVideoKey] = useState(activeSlide.video);
//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleThumbnailClick = (slide) => {
//     if (videoRef.current) {
//       videoRef.current.src = slide.video;
//       videoRef.current.load(); // Reset video
//       setIsPlaying(false);
//     }
//     setVideoKey(null);

//     setTimeout(() => {
//       // Then, update the video after a delay to ensure animation completes
//       setActiveSlide(slide);
//       setVideoKey(slide.video);
//     }, 400);
//     // setActiveSlide(slide);
//   };

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 translate-y-[100px]">
//           <div className="overflow-x-hidden h-fit w-full">
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
//               className="overflow-x-hidden h-fit whitespace-nowrap"
//             >
//               <h2 className="leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-white linehead-text">
//                 What our clients say!
//               </h2>
//             </motion.div>
//           </div>
//           <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="relative w-full h-[540px] flex items-center justify-center overflow-hidden"
//           >
//             <motion.video
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.1 }}
//               ref={videoRef}
//               className="w-full h-full object-cover opvid"
//             >
//               <source src={activeSlide.video} type="video/webm" />
//             </motion.video>

//             {/* Global CSS for opacity fade effect on main slider */}
//             <style jsx global>{`
//               .opvid {
//                 transition: opacity 0.5s ease-in-out;
//               }
//             `}</style>
//             <motion.button
//               onClick={togglePlayPause}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: isHovered ? 1 : 0 }}
//               transition={{ duration: 1 }}
//             >
//               <img
//                 src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
//                 alt="Play/Pause"
//                 className="w-12 h-12"
//               />
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-full overflow-hidden"
//         style={{
//           background: "linear-gradient(to right, #092241 50%, #ffffff 50%)",
//         }}
//       >
//         <div className="fix12 pt-[150px] pb-[50px]">
//           <div className="flex">
//             {/* Left Side (Text) */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.1, once: true }}
//               className="max-w-1/2 flex flex-col gap-[20px] w-1/2 pr-[100px]"
//             >
//               <h3 className="spotlightheaddd fsans-600 text-white text-[36px] leading-[130%]">
//                 {activeSlide.title}
//               </h3>
//               <p className="fsans-600 text-[22px] leading-[130%] text-[#CECECE] uppercase">
//                 {activeSlide.subtitle}
//               </p>
//               <p className="fsans-400 text-[16px] leading-[26px] text-white">
//                 {activeSlide.description}
//               </p>
//             </motion.div>

//             {/* Right Side (Thumbnails) */}
//             <div className="max-w-1/2 w-1/2 pl-[60px] flex flex-col-reverse gap-[24px]">
//               <div className="flex gap-[15px] justify-start mb-4">
//                 <button
//                   id="carprev"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt=""
//                   />
//                 </button>
//                 <button
//                   id="carnext"
//                   className="w-10 h-10 flex items-center justify-center"
//                 >
//                   <img
//                     className="h-10 w-10"
//                     src="/buttonarrows/arrowright.svg"
//                     alt=""
//                   />
//                 </button>
//               </div>
//               <motion.div
//                 initial={{ x: "200px", opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Swiper
//                   modules={[Navigation, Thumbs]}
//                   spaceBetween={40}
//                   slidesPerView={2}
//                   watchSlidesProgress
//                   navigation={{ nextEl: "#carnext", prevEl: "#carprev" }}
//                   className="thumb-swiper"
//                 >
//                   {slides.map((slide, index) => (
//                     <SwiperSlide
//                       key={index}
//                       onClick={() => handleThumbnailClick(slide)}
//                     >
//                       <CaseBtmCard />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaseSideTop;

// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999
// 9999999999999999999999999999999999999999

"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CaseBtmCard from "./CaseBtmCard";

const slides = [
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "A culture that builds your future",
    subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    video: "/spotlightvid.mp4",
    title: "Innovation at its best",
    subtitle: "JOHN DOE | DEVELOPER",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    video: "/Career/SlideImgs/slidevid1.webm",
    title: "Leading the industry",
    subtitle: "JANE SMITH | MANAGER",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const CaseSideTop = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleThumbnailClick = (slide) => {
    // Pause current video and reset playback
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setActiveSlide(slide);
  };

  return (
    <>
      <div className="w-full bg-[#092241]">
        <div className="fix12 translate-y-[100px]">
          <div className="overflow-x-hidden h-fit w-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
              className="overflow-x-hidden h-fit whitespace-nowrap"
            >
              <h2 className="leading-[111%] w-full md:text-[44px] sm:text-[32px] text-[24px] border-b xl:mb-[50px] mb-[36px] border-[#D7D7D7] fpt-700 text-white">
                What our clients say!
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[540px] flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={activeSlide.video}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                ref={videoRef}
                className="w-full h-full object-cover opvid"
              >
                <source src={activeSlide.video} type="video/webm" />
              </motion.video>
            </AnimatePresence>

            {/* Global CSS for opacity transition */}
            <style jsx global>{`
              .opvid {
                transition: opacity 0.5s ease-in-out;
              }
            `}</style>
            <motion.button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={isPlaying ? "/cst/play.svg" : "/cst/play.svg"}
                alt="Play/Pause"
                className="w-12 h-12"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{
          background: "linear-gradient(to right, #092241 50%, #ffffff 50%)",
        }}
      >
        <div className="fix12 pt-[150px] pb-[50px]">
          <div className="flex">
            {/* Left Side (Text) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
              className="max-w-1/2 w-1/2 pr-[100px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  className="flex flex-col gap-[20px] "
                  key={
                    activeSlide.title +
                    activeSlide.description +
                    activeSlide.video
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                >
                  <h3 className="spotlightheaddd fsans-700 text-white text-[36px] leading-[130%]">
                    {activeSlide.title}
                  </h3>
                  <p className="fsans-600 text-[22px] leading-[130%] text-[#CECECE] uppercase">
                    {activeSlide.subtitle}
                  </p>
                  <p className="fsans-400 text-[16px] leading-[26px] text-white">
                    {activeSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Side (Thumbnails) */}
            <div className="max-w-1/2 w-1/2 pl-[60px] flex flex-col-reverse gap-[24px]">
              <div className="flex gap-[15px] justify-start mb-4">
                <button
                  id="carprev"
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="h-10 w-10"
                    src="/buttonarrows/arrowleft.svg"
                    alt=""
                  />
                </button>
                <button
                  id="carnext"
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <img
                    className="h-10 w-10"
                    src="/buttonarrows/arrowright.svg"
                    alt=""
                  />
                </button>
              </div>
              <motion.div
                initial={{ x: "200px", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.1, once: true }}
              >
                <Swiper
                  modules={[Navigation, Thumbs]}
                  spaceBetween={40}
                  slidesPerView={2}
                  watchSlidesProgress
                  navigation={{ nextEl: "#carnext", prevEl: "#carprev" }}
                  className="thumb-swiper"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide
                      key={index}
                      onClick={() => handleThumbnailClick(slide)}
                    >
                      <CaseBtmCard />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseSideTop;
