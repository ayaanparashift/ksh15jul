// "use client";
// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, AnimatePresence } from "framer-motion";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/effect-creative";
// import "swiper/css/effect-fade";

// import { Autoplay, EffectCreative } from "swiper/modules";

// import Link from "next/link";

// const tabsData = [
//   {
//     title: "Growth",
//     description:
//       "At KSH INFRA, we invest in your career growth. Our structured career paths, mentorship programs, and skill-building opportunities, ensure that every team member has the tools to succeed and grow.",
//     image: "/Slideimgs/Growth.png",
//     middleImage: "/Slideimgs/Growth-middle.png",
//   },
//   {
//     title: "Culture",
//     description:
//       "We foster a workplace built on collaboration, inclusivity, and innovation. Our dynamic environment encourages creativity, teamwork, and a strong sense of belonging, making KSH INFRA a great place to work.",
//     image: "/Slideimgs/Culture.png",
//     middleImage: "/Slideimgs/Culture-middle.png",
//   },
//   {
//     title: "Opportunities",
//     description:
//       "KSH INFRA has exciting career opportunities for everyone whether you’re just starting out or already have experience.  Join us and find a role that matches your ambitions and skills. Let’s help you build a rewarding career together !les that align with your ambitions and skills, helping you build a rewarding career.",
//     image: "/Slideimgs/Opportunities.png",
//     middleImage: "/Slideimgs/dart.png",
//   },
// ];
// const SlideSectionF = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [rights, setRights] = useState(false);
//   const [lefts, setLefts] = useState(false);

//   const swiperRef = useRef(null);
//   // Handle tab click (updates both tab and slide)
//   const handleTabClick = (index) => {
//     if (index !== activeIndex) {
//       setActiveIndex(index);
//       if (swiperRef.current) {
//         swiperRef.current.slideTo(index);
//       }
//     }
//   };
//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabsData.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//     setLefts(false);
//     setRights(true);
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//     setRights(false);
//     setLefts(true);
//   };
//   return (
//     <div
//       className="h-auto lg:h-[690px] flex overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px] ">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading & Tabs */}

//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH INFRA
//             </h1>
//             {/* Tabs */}
//             <div className="tabs flex gap-4">
//               {tabsData &&
//                 tabsData.map((tab, index) => (
//                   <button
//                     key={tab.title}
//                     className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
//                       activeIndex === index
//                         ? "bg-red-700 border-red-700"
//                         : "bg-transparent"
//                     }`}
//                     onClick={() => handleTabClick(index)}
//                   >
//                     {tab.title}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[350px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ x: 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -500, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="text-white" // Removed "absolute"
//               >
//                 <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
//                   {tabsData && tabsData[activeIndex].title}
//                 </h1>
//                 <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
//                   {tabsData && tabsData[activeIndex].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
//             <motion.div
//               className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//             >
//               {/* Adding a key based on acbtn to force remount if it changes */}
//               <Link
//                 href="/careers"
//                 className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600 text-[16px]">
//                   Explore More
//                 </p>
//               </Link>
//             </motion.div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tabsData.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handleNext}
//                 disabled={activeIndex === tabsData.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section (Dynamic Image) */}
//         <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
//           <motion.div className="w-full h-[217px] overflow-hidden mt-[125%]">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={tabsData?.[activeIndex]?.middleImage}
//                 initial={{
//                   opacity: 0,
//                   x: lefts ? "-100%" : rights ? "100%" : 0,
//                   y: lefts ? 60 : rights ? -60 : 0,
//                 }}
//                 animate={{ opacity: 1, x: 0, y: 0 }}
//                 exit={{
//                   opacity: 0,
//                   x: lefts ? "100%" : rights ? "-100%" : 0,
//                   y: lefts ? -60 : rights ? 60 : 0,
//                   transition: { duration: 0.8, ease: [0.7, 0, 0.4, 1] },
//                 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 src={tabsData?.[activeIndex]?.middleImage}
//                 className="w-full h-auto transition-opacity duration-500 ease-in-out object-cover"
//               />
//             </AnimatePresence>
//           </motion.div>
//         </div>

//         {/* Right Section (Swiper) */}
//         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
//           <Swiper
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             effect={"creative"}
//             creativeEffect={{
//               prev: {
//                 shadow: true,
//                 translate: [0, 0, -400],
//               },
//               next: {
//                 translate: ["100%", 0, 0],
//               },
//             }}
//             speed={1000}
//             modules={[EffectCreative, Autoplay]}
//             className="mySwiper"
//           >
//             {tabsData &&
//               tabsData.map((tab) => (
//                 <SwiperSlide key={tab.title}>
//                   <img
//                     // src={`/Slideimgs/${tab.image}.png`}
//                     src={tab.image}
//                     alt={tab}
//                     className="max-w-none w-full xl-1440:w-auto xl-1366:w-auto xl-1280:w-auto xl-1024:w-auto"
//                   />
//                 </SwiperSlide>
//               ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SlideSectionF;
"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import { Autoplay, EffectCreative } from "swiper/modules";

import Link from "next/link";

const tabsData = [
  {
    title: "Growth",
    description:
      "At KSH INFRA, we invest in your career growth. Our structured career paths, mentorship programs, and skill-building opportunities, ensure that every team member has the tools to succeed and grow.",
    image: "/Slideimgs/ssf1.png",
    middleImage: "/Slideimgs/Growth-middle.png",
  },
  {
    title: "Culture",
    description:
      "We foster a workplace built on collaboration, inclusivity, and innovation. Our dynamic environment encourages creativity, teamwork, and a strong sense of belonging, making KSH INFRA a great place to work.",
    image: "/Slideimgs/Culture.png",
    middleImage: "/Slideimgs/Culture-middle.png",
  },
  {
    title: "Opportunities",
    description:
      "KSH INFRA has exciting career opportunities for everyone whether you’re just starting out or already have experience.  Join us and find a role that matches your ambitions and skills. Let’s help you build a rewarding career together !les that align with your ambitions and skills, helping you build a rewarding career.",
    image: "/Slideimgs/Opportunities.png",
    middleImage: "/Slideimgs/dart.png",
  },
];

// const SlideSectionF = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [rights, setRights] = useState(false);
//   const [prevIndex, setPrevIndex] = useState(null);
//   const [lefts, setLefts] = useState(false);
//   const [direction, setDirection] = useState("next"); // string "next" or "prev"
//   const swiperRef = useRef(null);
//   // Handle tab click (updates both tab and slide)

//   const handleTabClick = (newIndex) => {
//     if (newIndex === activeIndex) return;
//     setDirection(newIndex > activeIndex ? "next" : "prev");
//     setPrevIndex(activeIndex);
//     setActiveIndex(newIndex);
//   };

//   const onSlideChange = (swiper) => {
//     const newIndex = swiper.activeIndex;
//     setDirection(newIndex > activeIndex ? "next" : "prev");
//     setActiveIndex(newIndex);
//   };
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabsData.length - 1) {
//       setDirection("next");
//       swiperRef.current.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setDirection("prev");
//       swiperRef.current.slidePrev();
//     }
//   };
//   return (
//     <div
//       className="h-auto lg:h-[690px] flex overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px] ">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading & Tabs */}

//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH INFRA
//             </h1>
//             {/* Tabs */}
//             <div className="tabs flex gap-4">
//               {tabsData &&
//                 tabsData.map((tab, index) => (
//                   <button
//                     key={tab.title}
//                     className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
//                       activeIndex === index
//                         ? "bg-red-700 border-red-700"
//                         : "bg-transparent"
//                     }`}
//                     onClick={() => handleTabClick(index)}
//                   >
//                     {tab.title}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[350px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="text-white" // Removed "absolute"
//               >
//                 <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
//                   {tabsData && tabsData[activeIndex].title}
//                 </h1>
//                 <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
//                   {tabsData && tabsData[activeIndex].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
//             <motion.div
//               className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//             >
//               {/* Adding a key based on acbtn to force remount if it changes */}
//               <Link
//                 href="/careers"
//                 className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600 text-[16px]">
//                   Explore More
//                 </p>
//               </Link>
//             </motion.div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 landingr h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tabsData.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50 landingl"
//                 onClick={handleNext}
//                 disabled={activeIndex === tabsData.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Middle Section (Dynamic Image) */}
//         {/* <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
//           <div className="w-full h-[217px] overflow-hidden mt-[125%] relative">
//             {tabsData?.map((tab, index) => (
//               <motion.img
//                 key={tab.middleImage}
//                 src={tab.middleImage}
//                 initial={false}
//                 animate={{
//                   opacity: activeIndex === index ? 1 : 0,
//                   zIndex: activeIndex === index ? 2 : 1,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.7, 0, 0.4, 1],
//                 }}
//                 className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity"
//                 style={{ pointerEvents: "none" }}
//               />
//             ))}
//           </div>
//         </div> */}

//         <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
//           <div className="w-full h-[217px] overflow-hidden mt-[125%] relative">
//             <AnimatePresence>
//               {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <motion.img
//                   key={tab.middleImage}
//                   src={tab.middleImage}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.7, 0, 0.3, 1],
//                     delay: 0.4,
//                   }}
//                   className="w-full h-auto object-cover absolute top-0 left-0"
//                   style={{ zIndex: idx, pointerEvents: "none" }}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//         {/* Right Section (Swiper) */}
//         {/* <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
//           <Swiper
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             effect={"creative"}
//             creativeEffect={{
//               prev: {
//                 shadow: true,
//                 translate: [0, 0, -400],
//               },
//               next: {
//                 translate: ["100%", 0, 0],
//               },
//             }}
//             speed={1000}
//             modules={[EffectCreative, Autoplay]}
//             className="mySwiper"
//           >
//             {tabsData &&
//               tabsData.map((tab) => (
//                 <SwiperSlide key={tab.title}>
//                   <img
//                     // src={`/Slideimgs/${tab.image}.png`}
//                     src={tab.image}
//                     alt={tab}
//                     className="max-w-none w-full xl-1440:w-auto xl-1366:w-auto xl-1280:w-auto xl-1024:w-auto"
//                   />
//                 </SwiperSlide>
//               ))}
//           </Swiper>
//         </div> */}
//         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
//           {/* <div className="relative w-full h-full overflow-hidden">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               onSlideChange={onSlideChange}
//               modules={[Autoplay]}
//               className="mySwiper w-full h-full invisible"
//             >
//               {tabsData.map((_, i) => (
//                 <SwiperSlide key={`empty-${i}`} />
//               ))}
//             </Swiper>

//             <div className="absolute inset-0">
//               <AnimatePresence>
//                 {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                   <motion.img
//                     key={`img-${idx}`}
//                     src={tab.image}
//                     alt={tab.title}
//                     initial={{
//                       x:
//                         idx === activeIndex
//                           ? direction === "next"
//                             ? "100%"
//                             : "-100%"
//                           : 0,
//                     }}
//                     animate={{ x: 0 }}
//                     exit={{
//                       x:
//                         idx === activeIndex
//                           ? direction === "next"
//                             ? "-100%"
//                             : "100%"
//                           : 0,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.2,
//                     }}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     style={{ zIndex: idx }}
//                   />
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div> */}

//           <div className="relative w-full h-full overflow-hidden">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               onSlideChange={onSlideChange}
//               modules={[Autoplay, Navigation]}
//               className="mySwiper w-full h-full invisible"
//             >
//               {tabsData.map((_, i) => (
//                 <SwiperSlide key={`empty-${i}`} />
//               ))}
//             </Swiper>

//             <div className="absolute inset-0">
//               <AnimatePresence>
//                 {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                   <motion.img
//                     key={`img-${idx}`}
//                     src={tab.image}
//                     alt={tab.title}
//                     initial={{ x: "100%" }}
//                     animate={{ x: 0 }}
//                     exit={{ x: "100%" }}
//                     transition={{
//                       duration: 0.5,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.2,
//                     }}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     style={{ zIndex: idx }}
//                   />
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const SlideSectionF = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState("next"); // "next" or "prev"
//   const swiperRef = useRef(null);

//   const handleTabClick = (newIndex) => {
//     if (newIndex === activeIndex) return;
//     setDirection(newIndex > activeIndex ? "next" : "prev");
//     setActiveIndex(newIndex);
//   };

//   const onSlideChange = (swiper) => {
//     const newIndex = swiper.activeIndex;
//     setDirection(newIndex > activeIndex ? "next" : "prev");
//     setActiveIndex(newIndex);
//   };

//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabsData.length - 1) {
//       setDirection("next");
//       swiperRef.current.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setDirection("prev");
//       swiperRef.current.slidePrev();
//     }
//   };

//   return (
//     <div
//       className="h-auto lg:h-[690px] flex overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px] ">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading & Tabs */}
//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH INFRA
//             </h1>
//             {/* Tabs */}
//             <div className="tabs flex gap-4">
//               {tabsData &&
//                 tabsData.map((tab, index) => (
//                   <button
//                     key={tab.title}
//                     className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
//                       activeIndex === index
//                         ? "bg-red-700 border-red-700"
//                         : "bg-transparent"
//                     }`}
//                     onClick={() => handleTabClick(index)}
//                   >
//                     {tab.title}
//                   </button>
//                 ))}
//             </div>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[350px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="text-white"
//               >
//                 <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
//                   {tabsData && tabsData[activeIndex].title}
//                 </h1>
//                 <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
//                   {tabsData && tabsData[activeIndex].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
//             <motion.div
//               className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//             >
//               <Link
//                 href="/careers"
//                 className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600 text-[16px]">
//                   Explore More
//                 </p>
//               </Link>
//             </motion.div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 landingr h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tabsData.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50 landingl"
//                 onClick={handleNext}
//                 disabled={activeIndex === tabsData.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section (Dynamic Image) */}
//         <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
//           <div className="w-full h-[217px] overflow-hidden mt-[125%] relative">
//             <AnimatePresence>
//               {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <motion.img
//                   key={tab.middleImage}
//                   src={tab.middleImage}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.7, 0, 0.3, 1],
//                     delay: 0.4,
//                   }}
//                   className="w-full h-auto object-cover absolute top-0 left-0"
//                   style={{ zIndex: idx, pointerEvents: "none" }}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Section (Swiper) */}
//         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
//           <div className="relative w-full h-full overflow-hidden">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               onSlideChange={onSlideChange}
//               modules={[Autoplay, Navigation]}
//               className="mySwiper w-full h-full invisible"
//             >
//               {tabsData.map((_, i) => (
//                 <SwiperSlide key={`empty-${i}`} />
//               ))}
//             </Swiper>

//             <div className="absolute inset-0">
//               <AnimatePresence>
//                 {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                   <motion.img
//                     key={`img-${idx}`}
//                     src={tab.image}
//                     alt={tab.title}
//                     initial={{ x: "100%" }}
//                     animate={{ x: 0 }}
//                     exit={{ x: "100%" }}
//                     transition={{
//                       duration: 0.5,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.4,
//                     }}
//                     className="w-full h-full object-cover absolute top-0 left-0"
//                     style={{ zIndex: idx }}
//                   />
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????
// ???????????????????????????????????????????????????

// const SlideSectionF = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTabClick = (newIndex) => {
//     if (newIndex !== activeIndex) {
//       setActiveIndex(newIndex);
//     }
//   };

//   const handleNext = () => {
//     if (activeIndex < tabsData.length - 1) {
//       setActiveIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (activeIndex > 0) {
//       setActiveIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <div
//       className="h-auto lg:h-[690px] flex overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
//         {/* Left Section */}
//         <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
//           {/* Heading & Tabs */}
//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH INFRA
//             </h1>
//             <div className="tabs flex gap-4">
//               {tabsData.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 h-[46px] transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
//                     activeIndex === index
//                       ? "bg-red-700 border-red-700"
//                       : "bg-transparent"
//                   }`}
//                   onClick={() => handleTabClick(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[350px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="text-white"
//               >
//                 <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-10">
//                   {tabsData[activeIndex].title}
//                 </h1>
//                 <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
//                   {tabsData[activeIndex].description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="flex items-center pt-[0] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
//             <motion.div
//               className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//             >
//               <Link
//                 href="/careers"
//                 className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   width={0}
//                   height={0}
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-[#ffffff] fsans-600 text-[16px]">
//                   Explore More
//                 </p>
//               </Link>
//             </motion.div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tabsData.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handleNext}
//                 disabled={activeIndex === tabsData.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section (Dynamic Image) */}
//         <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
//           <div className="w-full h-[217px] overflow-hidden mt-[125%] relative">
//             <AnimatePresence>
//               {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <motion.img
//                   key={`middle-${idx}`}
//                   src={tab.middleImage}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.7, 0, 0.3, 1],
//                     delay: 0.4,
//                   }}
//                   className="w-full h-auto object-cover absolute top-0 left-0"
//                   style={{ zIndex: idx, pointerEvents: "none" }}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Section (Image Slider with z-index stacking) */}
//         <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
//           <div className="relative w-full h-full overflow-hidden">
//             <AnimatePresence>
//               {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <motion.img
//                   key={`img-${idx}`}
//                   src={tab.image}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.7, 0, 0.3, 1],
//                     delay: 0.4,
//                   }}
//                   className="w-full h-full object-cover absolute top-0 left-0"
//                   style={{ zIndex: idx }}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideSectionF;
const SlideSectionF = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (newIndex) => {
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (activeIndex < tabsData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="h-auto lg:h-[690px] flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] lg:pr-0 pr-[max(5%,calc((100vw-1250px)/2))] pl-[max(5%,calc((100vw-1250px)/2))]">
          {/* Heading & Tabs */}
          <div className="md:flex items-center justify-between xl-1024:w-[90%] lg:w-[600px] pt-8 md:pt-[70px] border-b-[1px] md:pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Careers at KSH INFRA
            </h1>
            {/* <div className="tabs md:justify-center justify-between flex gap-4">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 h-[46px] transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-0 md:border-[2px] text-white rounded-[10px] ${
                    activeIndex === index
                      ? "md:bg-red-700 text-red-700 border-red-700"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div> */}
            <div className="tabs md:justify-center justify-between flex gap-4">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 h-[46px] md:font-normal font-bold transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-0 md:border-[2px] rounded-[10px]
        ${
          activeIndex === index
            ? "md:bg-red-700 md:text-white  text-[#fff] border-red-700"
            : "bg-transparent md:text-white text-gray-500"
        }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Content Section */}
          <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                className="text-white"
              >
                <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-5 md:pt-10">
                  {tabsData[activeIndex].title}
                </h1>
                <p className="lg:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
                  {tabsData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center pt-[0]  md:w-[60%] justify-between pb-8 md:pb-[70px]">
            <div
              className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
              // initial={{ x: 100, opacity: 0 }}
              // whileInView={{ x: 0, opacity: 1 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.9, delay: 0.1 }}
            >
              <Link
                href="/careers"
                className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
              >
                <img
                  src="/buttonarrows/redarico.svg"
                  width={0}
                  height={0}
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                  alt="Red Arrow Icon"
                />
                <p className="text-[#ffffff] fsans-600 text-[16px]">
                  Explore More
                </p>
              </Link>
            </div>

            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <img className="h-10 w-10" src="/landingr.svg" alt="" />
              </button>
              <div className="text-base text-[#6C8DAB]">
                {activeIndex + 1} / {tabsData.length}
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabsData.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section (Dynamic Image) */}
        <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
          <div className="w-full h-[217px] overflow-hidden mt-[125%] relative">
            <AnimatePresence>
              {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
                <motion.img
                  key={`middle-${idx}`}
                  src={tab.middleImage}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="w-full h-auto object-cover absolute top-0 left-0"
                  style={{ zIndex: idx, pointerEvents: "none" }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Section (Image Slider with z-index stacking) */}
        <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence>
              {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
                <motion.img
                  key={`img-${idx}`}
                  src={tab.image}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  style={{ zIndex: idx }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSectionF;
