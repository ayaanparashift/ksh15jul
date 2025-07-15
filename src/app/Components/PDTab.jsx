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

// const tdata = [
//   {
//     title: "Growth",
//     description:
//       "At KSH INFRA, we invest in your career growth. Our structured career paths, mentorship programs, and skill-building opportunities, ensure that every team member has the tools to succeed and grow.",
//     image: "/Slideimgs/ssf1.png",
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

// const PDTab = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTabClick = (newIndex) => {
//     if (newIndex !== activeIndex) {
//       setActiveIndex(newIndex);
//     }
//   };

//   const handleNext = () => {
//     if (activeIndex < tdata.length - 1) {
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
//         <div className="leftCon bg-[#fff] w-full lg:w-[60%] lg:pr-0 pr-[max(5%,calc((100vw-1250px)/2))] pl-[max(5%,calc((100vw-1250px)/2))]">
//           {/* Heading & Tabs */}
//           <div className="md:flex items-center justify-between xl-1024:w-[90%] lg:w-[600px] pt-8 md:pt-[70px] border-b-[1px] md:pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Careers at KSH INFRA
//             </h1>
//             {/* <div className="tabs md:justify-center justify-between flex gap-4">
//               {tdata.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 h-[46px] transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-0 md:border-[2px] text-white rounded-[10px] ${
//                     activeIndex === index
//                       ? "md:bg-red-700 text-red-700 border-red-700"
//                       : "bg-transparent"
//                   }`}
//                   onClick={() => handleTabClick(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div> */}
//             <div className="tabs md:justify-center justify-between flex gap-4">
//               {tdata.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 h-[46px] md:font-normal font-bold transition-colors duration-500 border-[#09224150] border-0 md:border rounded-[10px]
//         ${
//           activeIndex === index
//             ? "md:bg-red-700 md:text-white  text-white border-red-700"
//             : "bg-transparent md:text-[#09224150] text-[#09224150]"
//         }`}
//                   onClick={() => handleTabClick(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Animated Content Section */}
//           <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <div
//                 key={activeIndex}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//                 className="text-white"
//               >
//                 <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-5 md:pt-10">
//                   {tdata[activeIndex].title}
//                 </h1>
//                 <p className="lg:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-base text-[#6C8DAB]">
//                   {tdata[activeIndex].description}
//                 </p>
//               </div>
//             </AnimatePresence>
//           </div>

//           <div className="flex items-center pt-[0]  md:w-[60%] justify-between pb-8 md:pb-[70px]">
//             <div
//               className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
//               // initial={{ x: 100, opacity: 0 }}
//               // whileInView={{ x: 0, opacity: 1 }}
//               // viewport={{ once: true }}
//               // transition={{ duration: 0.9, delay: 0.1 }}
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
//             </div>

//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tdata.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handleNext}
//                 disabled={activeIndex === tdata.length - 1}
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
//               {tdata.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <img
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
//               {tdata.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <img
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

// export default PDTab;

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
//       }}
//       className="w-full min-h-[645px] flex items-center"
//     >
//       <div className="bg-white  pl-[max(5%,calc((100vw-1250px)/2))] w-full pr-8 py-4 md:py-10 mx-auto border xl:min-h-[90%] mr-[max(5%,calc((100vw-1250px)/2))]">
//         {/* Heading and Tabs */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D7D7D7] pb-4 mb-4">
//           <h1 className="text-[#092241] spotlightheaddd fsans-600 text-[20px]">
//             KSH Chakan Park IV Overview
//           </h1>
//           <div className="flex gap-2 mt-3 md:mt-0 lg:overflow-auto overflow-scroll">
//             {tdata.map((tab, index) => (
//               <button
//                 key={tab.title}
//                 onClick={() => setActiveIndex(index)}
//                 className={`px-[12px] transition-colors duration-200 whitespace-nowrap text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center rounded-[10px] border-[#092241] border-opacity-30 border ${
//                   activeIndex === index
//                     ? "bg-[#E30613] border-[#E30613] text-[#fff] text-opacity-100"
//                     : "text-[#092241] text-opacity-50"
//                 }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col-reverse lg:flex-row items-start gap-6">
//           {/* Static description text */}
//           <div className="w-full lg:w-[50%] text-[#838383] text-[18px] flato-400 leading-relaxed pt-5 lg:pt-20">
//             The industrial park boasts IGBC pre-certified Platinum status,
//             highlighting KSH Infra’s dedication to green industrial development.
//             With exceptional planning and top-notch amenities, this fully
//             customisable, move-in ready industrial facility guarantees
//             uncompromised productivity, efficiency, and safety for your
//             workforce.
//           </div>

//           {/* Image on the right changes based on tab */}
//           <div className="w-full flex justify-end lg:w-[50%]">
//             <img
//               src={tdata[activeIndex].image}
//               alt={tdata[activeIndex].title}
//               className="lg:min-w-[521px] h-[352px] shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//       {/*  */}
//       {/*  */}
//       {/*  */}
//       {/*  */}
//       {/*  */}
//     </div>
//   );

// return (
//   <div
//     id="park-overview"
//     style={{
//       background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
//     }}
//     className="w-full min-h-[645px] flex items-center"
//   >
//     <div className="bg-white pl-[max(5%,calc((100vw-1250px)/2))] w-full pr-8 py-10 md:py-10 mx-auto border xl:min-h-[90%] mr-[max(5%,calc((100vw-1250px)/2))]">
//       {/* Heading */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D7D7D7] pb-4 mb-4">
//         <h1 className="text-[#092241] spotlightheaddd fsans-600 text-[20px]">
//           {title}
//         </h1>

//         {/* DESKTOP TABS */}
//         <div className="gap-2 mt-3 md:mt-0 hidden md:flex">
//           {tdata.map((tab, index) => (
//             <button
//               key={tab.title}
//               onClick={() => setActiveIndex(index)}
//               className={`px-[12px] transition-colors duration-200 whitespace-nowrap text-[16px] fsans-600 py-[10px] rounded-[10px] border border-[#092241] border-opacity-30
//             ${
//               activeIndex === index
//                 ? "bg-[#E30613] border-[#E30613] text-[#fff]"
//                 : "text-[#092241] text-opacity-50"
//             }`}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>

//         {/* MOBILE TABS */}
//         <div className="flex gap-2 mt-3 md:mt-0 overflow-scroll md:hidden">
//           {tdata.map((tab, index) => (
//             <button
//               key={tab.title}
//               onClick={() => setActiveIndex(index)}
//               className={`px-[12px] transition-all duration-500 whitespace-nowrap text-[16px] fsans-600 py-[10px]
//             ${
//               activeIndex === index
//                 ? "text-[#E30613]"
//                 : "text-[#092241] text-opacity-50"
//             }`}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col-reverse lg:flex-row items-start gap-6 overflow-visible relative">
//         {/* Static description text */}
//         <div className="w-full lg:w-[50%] text-[#838383] text-[18px] flato-400 leading-relaxed pt-5 lg:pt-20">
//           {para}
//         </div>

//         {/* Image on the right changes based on tab */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={tdata[activeIndex].title}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0, once: false }}
//             className="w-full flex justify-end lg:w-[50%] overflow-visible"
//           >
//             <img
//               src={tdata[activeIndex].image}
//               alt={tdata[activeIndex].title}
//               className="lg:min-w-[521px] h-[352px] shadow-lg"
//               style={{ zIndex: activeIndex }}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   </div>
// );

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
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const PDTab = ({ tdata, title, para }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <div
//       id="park-overview"
//       style={{
//         background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
//       }}
//       className="w-full min-h-[645px] flex items-center"
//     >
//       <div className="bg-white pl-[max(5%,calc((100vw-1250px)/2))] w-full pr-[5%] lg:pr-8 py-10 md:py-10 mx-auto border xl:min-h-[90%] mr-[max(5%,calc((100vw-1250px)/2))]">
//         {/* Heading */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D7D7D7] pb-4 mb-4">
//           <h1 className="text-[#092241] spotlightheaddd fsans-600 text-[20px]">
//             {title}
//           </h1>

//           {/* DESKTOP TABS */}
//           <div className="gap-2 mt-3 md:mt-0 hidden md:flex">
//             {tdata.map((tab, index) => (
//               <button
//                 key={tab.title}
//                 onClick={() => setActiveIndex(index)}
//                 className={`px-[12px] transition-colors duration-200 whitespace-nowrap text-[16px] fsans-600 py-[10px] rounded-[10px] border border-[#092241] border-opacity-30
//                   ${
//                     activeIndex === index
//                       ? "bg-[#E30613] border-[#E30613] text-[#fff]"
//                       : "text-[#092241] text-opacity-50"
//                   }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>

//           {/* MOBILE TABS */}
//           <div className="flex gap-2 mt-3 md:mt-0 overflow-scroll md:hidden">
//             {tdata.map((tab, index) => (
//               <button
//                 key={tab.title}
//                 onClick={() => setActiveIndex(index)}
//                 className={`px-[12px] transition-all duration-500 whitespace-nowrap text-[16px] fsans-600 py-[10px]
//                   ${
//                     activeIndex === index
//                       ? "text-[#E30613]"
//                       : "text-[#092241] text-opacity-50"
//                   }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col-reverse lg:flex-row items-start gap-6 overflow-visible relative">
//           {/* Static description text */}
//           <div
//             className="w-full lg:w-[50%] text-[#838383] text-[18px] flato-400 leading-relaxed pt-5 lg:pt-20"
//             dangerouslySetInnerHTML={{ __html: para }}
//           ></div>

//           {/* Image on the right changes based on tab */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={tdata[activeIndex].title}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0, once: false }}
//               className="w-full flex justify-end lg:w-[50%] overflow-visible"
//             >
//               <img
//                 src={tdata[activeIndex].image}
//                 alt={tdata[activeIndex].title}
//                 className="xl:min-w-[521px] w-full  max-w-full h-[352px] shadow-lg"
//                 style={{ zIndex: activeIndex }}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PDTab;

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
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import PDTabPop from "./PDTabPop";

// const PDTab = ({ tdata, title, para }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [popupImage, setPopupImage] = useState(null);

//   return (
//     <div
//       id="park-overview"
//       style={{
//         background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
//       }}
//       className="w-full min-h-[645px] flex items-center"
//     >
//       <div className="bg-white pl-[max(5%,calc((100vw-1250px)/2))] w-full pr-[5%] lg:pr-8 py-10 md:py-10 mx-auto border xl:min-h-[90%] mr-[max(5%,calc((100vw-1250px)/2))]">
//         {/* Heading */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D7D7D7] pb-4 mb-4">
//           <h1 className="text-[#092241] spotlightheaddd fsans-600 text-[20px]">
//             {title}
//           </h1>

//           {/* DESKTOP TABS */}
//           <div className="gap-2 mt-3 md:mt-0 hidden md:flex">
//             {tdata.map((tab, index) => (
//               <button
//                 key={tab.title}
//                 onClick={() => setActiveIndex(index)}
//                 className={`px-[12px] transition-colors duration-200 whitespace-nowrap text-[16px] fsans-600 py-[10px] rounded-[10px] border border-[#092241] border-opacity-30
//                   ${
//                     activeIndex === index
//                       ? "bg-[#E30613] border-[#E30613] text-[#fff]"
//                       : "text-[#092241] text-opacity-50"
//                   }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>

//           {/* MOBILE TABS */}
//           <div className="flex gap-2 mt-3 md:mt-0 overflow-scroll md:hidden">
//             {tdata.map((tab, index) => (
//               <button
//                 key={tab.title}
//                 onClick={() => setActiveIndex(index)}
//                 className={`px-[12px] transition-all duration-500 whitespace-nowrap text-[16px] fsans-600 py-[10px]
//                   ${
//                     activeIndex === index
//                       ? "text-[#E30613]"
//                       : "text-[#092241] text-opacity-50"
//                   }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col-reverse lg:flex-row items-start gap-6 overflow-visible relative">
//           {/* Static description text */}
//           <div
//             className="w-full lg:w-[50%] text-[#838383] text-[18px] flato-400 leading-relaxed pt-5 lg:pt-20"
//             dangerouslySetInnerHTML={{ __html: para }}
//           ></div>

//           {/* Image on the right changes based on tab */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={tdata[activeIndex].title}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0, once: false }}
//               className="w-full flex justify-end lg:w-[50%] overflow-visible"
//             >
//               <img
//                 src={tdata[activeIndex].image}
//                 alt={tdata[activeIndex].title}
//                 onClick={() => setPopupImage(tdata[activeIndex].image)}
//                 className="xl:min-w-[521px] w-full max-w-full h-[352px] shadow-lg cursor-pointer hover:brightness-50 transition-all duration-300"
//                 style={{ zIndex: activeIndex }}
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Popup */}
//       <AnimatePresence>
//         {popupImage && (
//           <PDTabPop src={popupImage} onClose={() => setPopupImage(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PDTab;
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

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PDTabPop from "./PDTabPop";

const PDTab = ({ tdata, title, para, bwidth }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupImage, setPopupImage] = useState(null);

  return (
    <div
      id="park-overview"
      style={{
        background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
      }}
      className="w-full min-h-[645px] flex items-center"
    >
      <div className="bg-white pl-[max(5%,calc((100vw-1250px)/2))] w-full pr-[5%] lg:pr-8 py-10 md:py-10 mx-auto border xl:min-h-[90%] mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-4 lg:gap-20">
          {/* LEFT COLUMN: Title + Content */}
          <div className="w-full lg:w-[50%]">
            <div className="flex items-end min-w-full h-[64px]">
              <h1 className="text-[#092241] border-b border-[#D7D7D7] spotlightheaddd fsans-600 text-[20px] w-full">
                {title}
              </h1>
            </div>
            <div
              className="text-[#838383] text-[18px] flato-400 leading-relaxed pt-4"
              dangerouslySetInnerHTML={{ __html: para }}
            ></div>
          </div>

          {/* RIGHT COLUMN: Tabs + Image */}
          <div className="w-full lg:w-[50%]">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              {/* Desktop Tabs */}
              <div className="justify-between w-full mt-3 md:mt-0 hidden md:flex pb-4 gap-2 h-[64px]">
                {tdata.map((tab, index) => (
                  <button
                    key={tab.title}
                    onClick={() => setActiveIndex(index)}
                    className={`px-[12px] w-full transition-colors duration-200 whitespace-nowrap text-[16px] fsans-600 py-[10px] rounded-[10px] border border-[#092241] border-opacity-30
                      ${
                        activeIndex === index
                          ? "bg-[#E30613] border-[#E30613] text-[#fff]"
                          : "text-[#092241] text-opacity-50"
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Mobile Tabs */}
              <div className="flex gap-2 mt-3 md:mt-0 overflow-scroll md:hidden">
                {tdata.map((tab, index) => (
                  <button
                    key={tab.title}
                    onClick={() => setActiveIndex(index)}
                    className={`px-[12px] transition-all duration-500 whitespace-nowrap text-[16px] fsans-600 py-[10px]
                      ${
                        activeIndex === index
                          ? "text-[#E30613]"
                          : "text-[#092241] text-opacity-50"
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Display */}
            {/* <AnimatePresence mode="wait">
              <motion.div
                key={tdata[activeIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
                className="w-full relative flex justify-end"
              >
                <img
                  src={tdata[activeIndex].image}
                  alt={tdata[activeIndex].title}
                  className="xl:min-w-[521px] w-full max-w-full h-[352px] border-2 border-[#D7D7D7]"
                  style={{ zIndex: activeIndex }}
                />
                <svg
                  className="absolute bottom-2 cursor-pointer left-2 hover:scale-110 transition-all duration-300"
                  width="40"
                  height="40"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setPopupImage(tdata[activeIndex].simage)}
                >
                  <rect width="28" height="28" fill="#092241" rx="3" ry="3" />

                  <polyline
                    points="17.5 6.5 21.5 6.5 21.5 10.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16.5"
                    y1="11"
                    x2="21.5"
                    y2="6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="10.5 21.5 6.5 21.5 6.5 17.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="17"
                    x2="6.5"
                    y2="21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="6.5 10.5 6.5 6.5 10.5 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="11"
                    x2="6.5"
                    y2="6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="21.5 17.5 21.5 21.5 17.5 21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16.5"
                    y1="17"
                    x2="21.5"
                    y2="21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </AnimatePresence> */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tdata[activeIndex].title + "-img-svg"} // ensure key is unique to current image
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
                className="w-full lg:h-auto h-[180px] relative flex justify-end"
              >
                <img
                  src={tdata[activeIndex].image}
                  alt={tdata[activeIndex].title}
                  className="xl:min-w-[521px] w-full max-w-full h-[352px] border-2 border-[#D7D7D7] lg:flex hidden"
                  style={{ zIndex: activeIndex }}
                />
                <img
                  src={tdata[activeIndex].simage}
                  alt={tdata[activeIndex].title}
                  className="xl:min-w-[521px] w-full max-w-full h-auto mt-5 lg:h-[352px] border-2 border-[#D7D7D7] lg:hidden flex"
                  style={{ zIndex: activeIndex }}
                />

                {/* <svg
                  className="absolute bottom-2 cursor-pointer left-2 hover:scale-110 transition-all duration-300 z-20 lg:flex hidden"
                  width="40"
                  height="40"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setPopupImage(tdata[activeIndex].simage)}
                >
                  <rect width="28" height="28" fill="#092241" rx="3" ry="3" />

                  <polyline
                    points="17.5 6.5 21.5 6.5 21.5 10.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16.5"
                    y1="11"
                    x2="21.5"
                    y2="6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="10.5 21.5 6.5 21.5 6.5 17.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="17"
                    x2="6.5"
                    y2="21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="6.5 10.5 6.5 6.5 10.5 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="11"
                    x2="6.5"
                    y2="6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polyline
                    points="21.5 17.5 21.5 21.5 17.5 21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16.5"
                    y1="17"
                    x2="21.5"
                    y2="21.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}

                <svg
                  className="w-10 h-10 text-white absolute bottom-2 cursor-pointer left-2 hover:scale-110 transition-all duration-300 z-20 lg:flex hidden bg-[#6C8DAB] p-1 rounded"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={() => setPopupImage(tdata[activeIndex].simage)}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                  />
                </svg>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Image Popup */}
      <AnimatePresence>
        {popupImage && (
          <PDTabPop
            bwidth={bwidth}
            src={popupImage}
            onClose={() => setPopupImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PDTab;
