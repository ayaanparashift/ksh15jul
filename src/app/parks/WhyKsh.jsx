// "use client";
// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectFade } from "swiper/modules";
// import { AnimatePresence, motion } from "framer-motion"; // Import motion
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// // import LineHead from "../../Components/Heading/LineHead";
// import LineHead from "../Components/Heading/LineHead";
// const WhyKsh = () => {
//   const tabs = [
//     {
//       title: "Build-to-Suit Solutions",
//       heading: "Build-to-Suit Solutions",
//       content:
//         "We design our build-to-suit facilities from scratch to match exactly what you need. You get to guide both design and construction, ensuring your final space works perfectly with your operations.\nEverything—from materials to layout to specialized infrastructure—is carefully built to boost your efficiency and productivity. Your inputs shape a facility that feels custom-made because it truly is.\nWhen you need a space that works precisely for your unique business requirements, our build-to-suit approach delivers results that standard facilities simply can't rival.",
//       images: {
//         // top: ["./parkOverview/bulitToStart.png"],
//         top: ["./parkOverview/builtToSuit.png"],
//       },
//     },
//     {
//       title: "Ready To Move",
//       heading: "Ready To Move",
//       content:
//         "Our ready-to-move facilities offer modern, pre-built spaces that meet the highest industrial standards. They're perfect when you need to set up quickly without waiting for construction.\nThese spaces come equipped with essential amenities and are designed with the flexibility to serve various industries. You get immediate access to a high-quality operational space that's ready when you are.\nFor businesses that need to move fast without compromising on quality, our ready-to-move options provide the perfect balance of speed and functionality.",
//       images: {
//         // top: ["./AboutPage/aboutSlide/ab1.jpg"],
//         top: ["./parkOverview/builtToSuit.png"],
//       },
//     },
//     {
//       title: "Leading Industry Standards",
//       heading: "Industry-Leading Standards",
//       content:
//         "We uphold the highest standards in Industrial & Logistics real estate. Our excellence shows in how we design, build, and manage facilities.\nWe match and exceed the expectations of customers and regulators by using high-quality materials, following sustainable practices, and adopting cutting-edge technology. Our strict safety compliance and dedicated support for tenants have made KSH INFRA a leader in quality and efficiency. With us, you get more than just space: you get a facility built and managed to exceptional standards that help your business perform better.",
//       images: {
//         // top: ["./AboutPage/aboutSlide/ab1.jpg"],
//         top: ["./parkOverview/builtToSuit.png"],
//       },
//     },
//   ];
//   const [activeTab, setActiveTab] = useState(0); // Track active tab index

//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   // Handle navigation
//   const handleNext = () => {
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   // Fade in
//   const fadeInX = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//     exit: {
//       opacity: 0,
//       x: 50,
//       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//     },
//   };
//   return (
//     <div className="bg-[#092241] 2xl:h-[706px]">
//       <div className="bg-[#092241] md:h-auto h-fit flex items-end justify-end  ">
//         <div className="border-white w-full maxTab  ml-[max(5%,calc((100vw-1250px)/2))] lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
//           {/* <div className="leftCon flex-1 md:max-h-[700px] "> */}
//           <div className="leftCon flex-1  ">
//             <div className="pt-[66px] xl-1024:pt-10">
//               <LineHead
//                 heading="Why Choose KSH INFRA?"
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//             </div>
//             {/* Tabs */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
//               viewport={{ once: true, amount: 0.3 }}
//               className="tabs flex flex-nowrap md:min-w-max overflow-x-auto overflow-y-hidden gap-4 pr-4
//              xl-768:w-[95%] xl-1024:w-[90%] xl-1280:w-[90%] xl-1440:w-[90%] scrollbar-hide"
//             >
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.title}
//                   className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
//                                 ${
//                                   activeTab === index
//                                     ? "bg-[#E30613] text-black"
//                                     : ""
//                                 }`}
//                   onClick={() => setActiveTab(index)} // Update active tab
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </motion.div>
//             {/* Animated Content Section */}
//             <div className="w-full h-fit xl:h-full">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab} // Re-render on tab change
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ y: -10, opacity: 0 }}
//                   transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//                   className="xl:w-[80%] w-full contentArea xl:h-auto h-[324px]"
//                 >
//                   {/* <div className="flex flex-col  md:h-[240px]"> */}
//                   <div className="flex flex-col">
//                     <h1 className="text-3xl xl-1024:text-xl pt-[57px] xl-1024:pt-7 pb-4 text-white fpt-500">
//                       {tabs[activeTab].heading}
//                     </h1>
//                     <p className="tabContent text-lg text-[#C1C1C1]    ">
//                       {tabs[activeTab].content
//                         .split("\n")
//                         .map((line, index) => (
//                           <React.Fragment key={index}>
//                             {line}
//                             <br />
//                             <br />
//                           </React.Fragment>
//                         ))}
//                     </p>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation Buttons */}
//             <div className=" flex flex-col gap-7 pt-12 xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[70%] w-[100%] justify-between">
//               {/* <div className="flex items-center gap-2">
//                 <h1 className="text-base text-[#fff]">FIND OUT MORE :</h1>{" "}
//                 <span className="text-[#F7E327] text-base">
//                   <a
//                     href={tabs[activeTab].links}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {tabs[activeTab].links}
//                   </a>
//                 </span>
//               </div> */}
//               {/* <div className="flex gap-2 items-center">
//                 <button
//                   className="rounded-full border flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.max(prev - 1, 0));
//                     handleNext();
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img className="w-10 h-10" src="/landingr.svg" alt="" />
//                 </button>
//                 <div className="text-base text-[#6C8DAB]">
//                   {activeTab + 1} / {tabs.length}
//                 </div>

//                 <button
//                   className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                   onClick={() => {
//                     setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
//                     handlePrev();
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img className="w-10 h-10" src="/landingl.svg" alt="" />
//                 </button>
//               </div> */}
//             </div>
//           </div>
//           {/* Right Container with Swipers */}
//           {/* <div className="rightCon flex-1 lg:max-w-[638px] min-h-full bg-red-500">
//             <div className="min-h-full">
//               <Swiper
//                 modules={[EffectFade, Pagination, Navigation]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 className="min-h-full w-full topSlider"
//               >
//                 {tabs[activeTab].images.top.map((img, idx) => (
//                   <SwiperSlide style={{ minHeight: "100%" }} key={idx}>
//                     <div className="relative overflow-hidden min-h-full">
//                       <img
//                         src={img}
//                         alt=""
//                         className="min-h-full w-full object-cover"
//                       />
//                       <motion.div
//                         initial={{ x: 0 }}
//                         whileInView={{ x: "100%" }}
//                         transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         className="absolute top-0 left-0 h-full w-full bg-[#092241] z-50"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div> */}
//           <div className="rightCon xl:block hidden flex-1 lg:max-w-[638px] min-h-full">
//             {/* Top Image Swiper */}
//             <div className="h-full min-h-full">
//               <Swiper
//                 modules={[EffectFade, Pagination, Navigation]}
//                 pagination={{ clickable: true }}
//                 navigation
//                 className="h-full w-full topSlider"
//               >
//                 {tabs[activeTab].images.top.map((img, idx) => (
//                   <SwiperSlide key={idx} className="h-full">
//                     <div className="relative overflow-hidden min-h-full">
//                       <img
//                         src={img}
//                         alt=""
//                         className="min-h-[100%] w-full object-cover"
//                       />
//                       <motion.div
//                         initial={{ x: 0 }}
//                         whileInView={{ x: "100%" }}
//                         transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         className="absolute top-0 left-0 h-full w-full bg-[#092241] z-50"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default WhyKsh;

"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import LineHead from "../../Components/Heading/LineHead";
import LineHead from "../Components/Heading/LineHead";
const WhyKsh = () => {
  const tabs = [
    {
      title: "Build-to-Suit Solutions",
      heading: "Build-to-Suit Solutions",
      content:
        "We design our build-to-suit facilities from scratch to match exactly what you need. You get to guide both design and construction, ensuring your final space works perfectly with your operations.\nEverything—from materials to layout to specialized infrastructure—is carefully built to boost your efficiency and productivity. Your inputs shape a facility that feels custom-made because it truly is.\nWhen you need a space that works precisely for your unique business requirements, our build-to-suit approach delivers results that standard facilities simply can't rival.",
      images: {
        // top: ["./parkOverview/bulitToStart.png"],
        top: ["./parkOverview/whyk1.webp"],
      },
    },
    {
      title: "Ready To Move",
      heading: "Ready To Move",
      content:
        "Our ready-to-move facilities offer modern, pre-built spaces that meet the highest industrial standards. They're perfect when you need to set up quickly without waiting for construction.\nThese spaces come equipped with essential amenities and are designed with the flexibility to serve various industries. You get immediate access to a high-quality operational space that's ready when you are.\nFor businesses that need to move fast without compromising on quality, our ready-to-move options provide the perfect balance of speed and functionality.",
      images: {
        // top: ["./AboutPage/aboutSlide/ab1.jpg"],
        top: ["./parkOverview/whyk2.webp"],
      },
    },
    {
      title: "Leading Industry Standards",
      heading: "Industry-Leading Standards",
      content:
        "We uphold the highest standards in Industrial & Logistics real estate. Our excellence shows in how we design, build, and manage facilities.\nWe match and exceed the expectations of customers and regulators by using high-quality materials, following sustainable practices, and adopting cutting-edge technology. Our strict safety compliance and dedicated support for tenants have made KSH INFRA a leader in quality and efficiency. With us, you get more than just space: you get a facility built and managed to exceptional standards that help your business perform better.",
      images: {
        // top: ["./AboutPage/aboutSlide/ab1.jpg"],
        top: ["./parkOverview/whyk3.webp"],
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabs.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };

  // Fade in
  const fadeInX = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  // return (
  //   <div className="bg-[#092241] 2xl:h-[706px]">
  //     <div className="bg-[#092241] min-h-full flex items-end justify-end  ">
  //       <div className="border-white w-full maxTab  ml-[max(5%,calc((100vw-1250px)/2))] lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
  //         {/* <div className="leftCon flex-1 md:max-h-[700px] "> */}
  //         <div className="leftCon flex-1  ">
  //           <div className="pt-[66px] xl-1024:pt-10">
  //             <LineHead
  //               heading="Why Choose KSH INFRA?"
  //               bclr="#d7d7d7"
  //               bopacity="34%"
  //               clr="text-white"
  //             />
  //           </div>
  //           {/* Tabs */}
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             whileInView={{ opacity: 1 }}
  //             transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
  //             viewport={{ once: true, amount: 0.3 }}
  //             className="tabs flex flex-nowrap md:min-w-max overflow-x-auto overflow-y-hidden gap-4 pr-4
  //            xl-768:w-[95%] xl-1024:w-[90%] xl-1280:w-[90%] xl-1440:w-[90%] scrollbar-hide"
  //           >
  //             {tabs.map((tab, index) => (
  //               <button
  //                 key={tab.title}
  //                 className={`px-3 transition-colors duration-300 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
  //                               ${
  //                                 activeTab === index
  //                                   ? "bg-[#E30613] text-black"
  //                                   : ""
  //                               }`}
  //                 onClick={() => setActiveTab(index)} // Update active tab
  //               >
  //                 {tab.title}
  //               </button>
  //             ))}
  //           </motion.div>
  //           {/* Animated Content Section */}
  //           <div className="w-full h-fit xl:h-full">
  //             <AnimatePresence mode="wait">
  //               <motion.div
  //                 key={activeTab} // Re-render on tab change
  //                 initial={{ y: 10, opacity: 0 }}
  //                 animate={{ x: 0, opacity: 1 }}
  //                 exit={{ y: -10, opacity: 0 }}
  //                 transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
  //                 className="xl:w-[80%] w-full contentArea xl:h-auto h-[324px]"
  //               >
  //                 {/* <div className="flex flex-col  md:h-[240px]"> */}
  //                 <div className="flex flex-col">
  //                   <h1 className="text-3xl xl-1024:text-xl pt-[20px] xl-1024:pt-7 pb-4 text-white fpt-500">
  //                     {tabs[activeTab].heading}
  //                   </h1>
  //                   <p className="tabContent text-lg text-[#C1C1C1]    ">
  //                     {tabs[activeTab].content
  //                       .split("\n")
  //                       .map((line, index) => (
  //                         <React.Fragment key={index}>
  //                           {line}
  //                           <br />
  //                           <br />
  //                         </React.Fragment>
  //                       ))}
  //                   </p>
  //                 </div>
  //               </motion.div>
  //             </AnimatePresence>
  //           </div>

  //           {/* Navigation Buttons */}
  //           <div className=" flex flex-col gap-7 pt-12 xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[70%] w-[100%] justify-between">
  //             {/* <div className="flex items-center gap-2">
  //               <h1 className="text-base text-[#fff]">FIND OUT MORE :</h1>{" "}
  //               <span className="text-[#F7E327] text-base">
  //                 <a
  //                   href={tabs[activeTab].links}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   {tabs[activeTab].links}
  //                 </a>
  //               </span>
  //             </div> */}
  //             {/* <div className="flex gap-2 items-center">
  //               <button
  //                 className="rounded-full border flex items-center justify-center disabled:opacity-50"
  //                 onClick={() => {
  //                   setActiveTab((prev) => Math.max(prev - 1, 0));
  //                   handleNext();
  //                 }}
  //                 disabled={activeTab === 0}
  //               >
  //                 <img className="w-10 h-10" src="/landingr.svg" alt="" />
  //               </button>
  //               <div className="text-base text-[#6C8DAB]">
  //                 {activeTab + 1} / {tabs.length}
  //               </div>

  //               <button
  //                 className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
  //                 onClick={() => {
  //                   setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
  //                   handlePrev();
  //                 }}
  //                 disabled={activeTab === tabs.length - 1}
  //               >
  //                 <img className="w-10 h-10" src="/landingl.svg" alt="" />
  //               </button>
  //             </div> */}
  //           </div>
  //         </div>
  //         {/* Right Container with Swipers */}
  //         {/* <div className="rightCon flex-1 lg:max-w-[638px] min-h-full bg-red-500">
  //           <div className="min-h-full">
  //             <Swiper
  //               modules={[EffectFade, Pagination, Navigation]}
  //               pagination={{ clickable: true }}
  //               navigation
  //               className="min-h-full w-full topSlider"
  //             >
  //               {tabs[activeTab].images.top.map((img, idx) => (
  //                 <SwiperSlide style={{ minHeight: "100%" }} key={idx}>
  //                   <div className="relative overflow-hidden min-h-full">
  //                     <img
  //                       src={img}
  //                       alt=""
  //                       className="min-h-full w-full object-cover"
  //                     />
  //                     <motion.div
  //                       initial={{ x: 0 }}
  //                       whileInView={{ x: "100%" }}
  //                       transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
  //                       viewport={{ once: true, amount: 0.3 }}
  //                       className="absolute top-0 left-0 h-full w-full bg-[#092241] z-50"
  //                     />
  //                   </div>
  //                 </SwiperSlide>
  //               ))}
  //             </Swiper>
  //           </div>
  //         </div> */}
  //         <div className="rightCon xl:block hidden flex-1 lg:max-w-[638px] min-h-full">
  //           {/* Top Image Swiper */}
  //           {/* <div className="h-full min-h-full">
  //             <Swiper
  //               modules={[EffectFade, Pagination, Navigation]}
  //               pagination={{ clickable: true }}
  //               navigation
  //               className="h-full w-full topSlider"
  //             >
  //               {tabs[activeTab].images.top.map((img, idx) => (
  //                 <SwiperSlide key={idx} className="h-full">
  //                   <div className="relative overflow-hidden min-h-full">
  //                     <img
  //                       src={img}
  //                       alt=""
  //                       className="min-h-[100%] w-full object-cover"
  //                     />
  //                     <motion.div
  //                       initial={{ x: 0 }}
  //                       whileInView={{ x: "100%" }}
  //                       transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
  //                       viewport={{ once: true, amount: 0.3 }}
  //                       className="absolute top-0 left-0 h-full w-full bg-[#092241] z-50"
  //                     />
  //                   </div>
  //                 </SwiperSlide>
  //               ))}
  //             </Swiper>
  //           </div> */}

  //           <div className="relative min-h-fit h-full ">
  //             <AnimatePresence>
  //               {tabs.slice(0, activeTab + 1).map((tab, idx) => (
  //                 <motion.div
  //                   key={`top-${idx}`}
  //                   initial={{ x: "100%" }}
  //                   animate={{ x: 0 }}
  //                   exit={{ x: "100%" }}
  //                   transition={{
  //                     duration: 0.5,
  //                     ease: [0.7, 0, 0.3, 1],
  //                     delay: 0.4,
  //                   }}
  //                   className="absolute top-0 left-0 w-full min-h-full"
  //                   style={{ zIndex: idx }}
  //                 >
  //                   <img
  //                     src={tab.images.top[0]}
  //                     alt=""
  //                     className="w-full min-h-full object-fill"
  //                   />
  //                 </motion.div>
  //               ))}
  //             </AnimatePresence>
  //             <motion.div
  //               className="absolute top-0 left-0 bg-[#092241] w-full h-full z-20"
  //               initial={{ x: 0 }}
  //               whileInView={{ x: "100%" }}
  //               transition={{
  //                 duration: 1,
  //                 ease: [0.7, 0, 0.4, 1],
  //                 delay: 1,
  //               }}
  //               viewport={{ amount: 0.5, once: true }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-[#092241] md:pb-0 pb-10 lg:h-[600px] 2xl:h-[706px]">
      <div className="bg-[#092241] h-full flex items-end justify-end">
        <div className="border-white w-full maxTab ml-[max(5%,calc((100vw-1250px)/2))] lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden h-full">
          {/* Left Container */}
          <div className="leftCon flex-1 h-full">
            <div className="2xl:pt-[66px] pt-10 xl-1024:pt-10">
              <LineHead
                heading="Why Choose KSH INFRA?"
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>

            {/* Tabs */}
            <div
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              // viewport={{ once: true, amount: 0.3 }}
              className="tabs mt-[-5%] flex flex-nowrap md:min-w-max overflow-x-auto overflow-y-hidden gap-4 pr-4
          xl-768:w-[95%] xl-1024:w-[90%] xl-1280:w-[90%] xl-1440:w-[90%] scrollbar-hide"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 transition-colors duration-300 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] ${
                    activeTab === index ? "bg-[#E30613] text-black" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full h-fit xl:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                  className="xl:w-[80%] w-full contentArea xl:h-auto h-[324px]"
                >
                  <div className="flex flex-col">
                    <h1 className="text-3xl xl-1024:text-xl pt-[20px] xl-1024:pt-7 pb-4 text-white fpt-500">
                      {tabs[activeTab].heading}
                    </h1>
                    <p className="tabContent text-base 2xl:text-lg text-[#C1C1C1]">
                      {tabs[activeTab].content
                        .split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                            <br />
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Container (Image Swiper or Animated Image) */}
          <div className="rightCon xl:block hidden flex-1 lg:max-w-[638px] h-[706px] relative">
            <AnimatePresence>
              {tabs.slice(0, activeTab + 1).map((tab, idx) => (
                <motion.div
                  key={`top-${idx}`}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ zIndex: idx }}
                >
                  <img
                    src={tab.images.top[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Overlay animation */}
            {/* <motion.div
              className="absolute top-0 left-0 bg-[#092241] w-full h-full z-20"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{
                duration: 1,
                ease: [0.7, 0, 0.4, 1],
                delay: 1,
              }}
              viewport={{ amount: 0.5, once: true }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyKsh;
