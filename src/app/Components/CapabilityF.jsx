// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectFade } from "swiper/modules";
// import { AnimatePresence, motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import LineHead from "./Heading/LineHead";
// import Link from "next/link";
// import { tabs } from "./CapTabs";
// const CapabilitiesF = () => {
//   const swiperRef = useRef(null);
//   const [activeTab, setActiveTab] = useState(0);
//   const tabRefs = useRef([]);
//   const containerRef = useRef(null);
//   const hasInteracted = useRef(false); // 👈 NEW

//   const handleNext = () => {
//     hasInteracted.current = true; // 👈 NEW
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     hasInteracted.current = true; // 👈 NEW
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };

//   return (
//     <div className="bg-[#092241] overflow-hidden min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px]">
//       <div className="bg-[#092241] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px] h-full  overflow-hidden">
//         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col ">
//           {/* Left Container */}
//           <div className="leftCon pr-10 2xl:pr-20 w-full xl:w-1/2 py-5 flex flex-col justify-center">
//             <div className="overflow-hidden md:mr-10 mr-0">
//               <LineHead
//                 heading="WHAT WE DO. TO DELIVER VALUE."
//                 bclr="#d7d7d7"
//                 bopacity="34%"
//                 clr="text-white"
//               />
//               <p className="gradinetText md:mt-[-55px] max-w-fit text-[20px] leading-[26px]">
//                 Our capabilities cover every aspect of developing Industrial &
//                 Logistics Parks
//               </p>
//             </div>

//             {/* Tabs */}
//             <div className="mt-6 overflow-hidden mr-0 md:mr-10 max-w-[600px]">
//               <div
//                 className="flex flex-wrap w-full gap-2 sm:gap-5" // 👈 changed from flex-nowrap to flex-wrap
//                 ref={containerRef}
//               >
//                 {tabs.map((tab, idx) => (
//                   <button
//                     key={tab.title}
//                     ref={(el) => (tabRefs.current[idx] = el)}
//                     className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
//                       activeTab === idx ? "bg-[#E30613] text-black" : ""
//                     }`}
//                     onClick={() => {
//                       hasInteracted.current = true; // 👈 NEW
//                       setActiveTab(idx);
//                     }}
//                   >
//                     {tab.title}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Animated Content */}
//             <div className="w-full pt-[30px] xl:pt-0 ">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeTab}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1, }}
//                   exit={{ y: -20, opacity: 0 }}
//                   transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//                   className="w-full contentArea overflow-hidden"
//                 >
//                   <div className="flex flex-col pt-5 2xl:pt-10 gap-4 xl-768:gap-10 h-[400px] xl:h-[350px] md:mr-10 mr-0 overflow-hidden">
//                     <h1 className="tabHeading text-2xl max-w-fit md:text-[40px] md:leading-[40px] lg:text-[30px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
//                       {tabs[activeTab].heading}
//                     </h1>
//                     <p
//                       className="tabContent fsans-400 text-[18px] gradinetText leading-[26px]"
//                       dangerouslySetInnerHTML={{
//                         __html: tabs[activeTab].content,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation & Explore More */}
//             <div className="flex items-center justify-between w-full pr-0 md:pr-10">
//               <Link
//                 href="/capabilities"
//                 className="flex group transition-transform duration-300 items-center gap-3"
//               >
//                 <img
//                   src="/buttonarrows/redarico.svg"
//                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
//                   alt="Red Arrow Icon"
//                 />
//                 <p className="text-white text-[16px]">Explore More</p>
//               </Link>
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
//                   onClick={() => {
//                     if (activeTab > 0) {
//                       const newIdx = activeTab - 1;
//                       setActiveTab(newIdx);
//                     }
//                   }}
//                   disabled={activeTab === 0}
//                 >
//                   <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
//                 </button>
//                 <button
//                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
//                   onClick={() => {
//                     if (activeTab < tabs.length - 1) {
//                       const newIdx = activeTab + 1;
//                       setActiveTab(newIdx);
//                     }
//                   }}
//                   disabled={activeTab === tabs.length - 1}
//                 >
//                   <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/*  */}
//           {/* Right Container */}
//           <div className="rightCon w-full h-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 flex flex-col overflow-hidden relative">
//             <div className="relative flex-[0.65] h-full">
//               <AnimatePresence>
//                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                   <motion.div
//                     key={`top-${idx}`}
//                     initial={{ y: "-100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "-100%" }}
//                     transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
//                     className="absolute top-0 left-0 w-full h-full"
//                     style={{ zIndex: idx }}
//                   >
//                     <Swiper
//                       modules={[EffectFade, Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       effect="fade"
//                       className="h-full w-full topSlider"
//                     >
//                       {tab.images.top.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             alt=""
//                             className="min-h-full min-w-full object-cover"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             <div className="flex flex-row flex-[0.35] relative h-full">
//               <div className="w-[50%] relative h-auto">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom1-${idx}`}
//                       initial={{ x: "-100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "-100%" }}
//                       transition={{
//                         duration: 0.7,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.2,
//                       }}
//                       className="absolute top-0 left-0 w-full h-full"
//                       style={{ zIndex: idx }}
//                     >
//                       <Swiper
//                         modules={[Pagination, Navigation]}
//                         pagination={{ clickable: true }}
//                         navigation
//                         className="h-full w-full bottomLeft"
//                       >
//                         {tab.images.bottom1.map((img) => (
//                           <SwiperSlide key={img}>
//                             <img
//                               src={img}
//                               alt=""
//                               className="w-full h-full object-cover"
//                             />
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               <div className="w-[50%] relative h-auto">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom2-${idx}`}
//                       initial={{ x: "100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "100%" }}
//                       transition={{
//                         duration: 0.7,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.4,
//                       }}
//                       className="absolute top-0 left-0 w-full h-full"
//                       style={{ zIndex: idx }}
//                     >
//                       <Swiper
//                         modules={[Pagination, Navigation]}
//                         pagination={{ clickable: true }}
//                         navigation
//                         className="h-full w-full bottomRight"
//                       >
//                         {tab.images.bottom2.map((img) => (
//                           <SwiperSlide key={img}>
//                             <img
//                               src={img}
//                               alt=""
//                               className="w-full h-full object-cover"
//                             />
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesF;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "./Heading/LineHead";
import Link from "next/link";
import { tabs } from "./CapTabs";
const CapabilitiesF = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const containerRef = useRef(null);
  const hasInteracted = useRef(false); // 👈 NEW

  const handleNext = () => {
    hasInteracted.current = true; // 👈 NEW
    if (swiperRef.current && activeIndex < tabs.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    hasInteracted.current = true; // 👈 NEW
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="bg-[#092241] overflow-hidden min-1920:h-[80vh] xl:h-[110vh] ">
      <div className="bg-[#092241] md:py-0 py-10 min-1920:h-[80vh] xl:h-[110vh] overflow-hidden">
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] h-full mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col md:justify-normal justify-center">
          {/* Left Container */}
          <div className="leftCon xl:pr-10 2xl:pr-20 w-full xl:w-1/2 md:py-5 flex flex-col min-h-full justify-center">
            <div className="overflow-hidden md:mr-10 mr-0">
              <LineHead
                heading="WHAT WE DO. TO DELIVER VALUE."
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
              <p className="gradinetText lg:mt-[-20px] xl:mt-[-55px] max-w-fit text-[20px] leading-[26px]">
                Our capabilities cover every aspect of developing Industrial &
                Logistics Parks
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-6 overflow-hidden mr-0 md:mr-10 max-w-[600px]">
              <div
                className="flex flex-wrap w-full min-1920:gap-3 gap-2" // 👈 changed from flex-nowrap to flex-wrap
                ref={containerRef}
              >
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.title}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    className={`px-3 whitespace-nowrap min-1920:h-[50px] min-1920:text-[18px] h-[36px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
                      activeTab === idx ? "bg-[#E30613] text-black" : ""
                    }`}
                    onClick={() => {
                      hasInteracted.current = true; // 👈 NEW
                      setActiveTab(idx);
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Animated Content */}
            <div className="w-full ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
                  className="w-full  contentArea overflow-hidden"
                >
                  <div className="flex pt-5 flex-col gap-4 xl-768:gap-10 md:h-[290px] h-[400px] xl:h-[300px] 2xl:h-[350px] md:mr-10 mr-0 overflow-hidden">
                    <h1 className="tabHeading text-2xl max-w-fit min-1920:text-[40px] min-1920:leading-[180%] md:text-[40px] md:leading-[40px] lg:text-[30px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
                      {tabs[activeTab].heading}
                    </h1>
                    <p
                      className="tabContent fsans-400 text-[16px] min-1920:text-[20px] min-1366:text-[18px] gradinetText leading-[26px]"
                      dangerouslySetInnerHTML={{
                        __html: tabs[activeTab].content,
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & Explore More */}
            <div className="flex items-center justify-between w-full pr-0 md:pr-10">
              <Link
                href="/capabilities"
                className="flex group transition-transform duration-300 items-center gap-3"
              >
                <img
                  src="/buttonarrows/redarico.svg"
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
                  alt="Red Arrow Icon"
                />
                <p className="text-white text-[16px]">Explore More</p>
              </Link>
              <div className="flex gap-2 items-center">
                <button
                  className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
                  onClick={() => {
                    if (activeTab > 0) {
                      const newIdx = activeTab - 1;
                      setActiveTab(newIdx);
                    }
                  }}
                  disabled={activeTab === 0}
                >
                  <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
                </button>
                <button
                  className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
                  onClick={() => {
                    if (activeTab < tabs.length - 1) {
                      const newIdx = activeTab + 1;
                      setActiveTab(newIdx);
                    }
                  }}
                  disabled={activeTab === tabs.length - 1}
                >
                  <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          {/* Right Container */}
          <div className="rightCon min-h-full w-full min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 hidden md:flex flex-col overflow-hidden relative">
            <div className="relative flex-[0.65] h-full">
              {/* <div className="relative min-1920:flex-[0.55] flex-[0.65] h-full"> */}
              <AnimatePresence>
                {tabs.slice(0, activeTab + 1).map((tab, idx) => (
                  <motion.div
                    key={`top-${idx}`}
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      duration: 1,
                      // ease: [0.7, 0, 0.3, 1],
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ zIndex: idx }}
                  >
                    <Swiper
                      modules={[EffectFade, Pagination, Navigation]}
                      pagination={{ clickable: true }}
                      navigation
                      effect="fade"
                      className="h-full w-full topSlider"
                    >
                      {tab.images.top.map((img) => (
                        <SwiperSlide key={img}>
                          <img
                            src={img}
                            alt=""
                            className="min-h-full min-w-full object-cover brightness-110"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-row flex-[0.35] relative h-full">
              {/* <div className="flex flex-row min-1920:flex-[0.45] flex-[0.35] relative h-full"> */}
              <div className="w-[50%] relative h-auto">
                <AnimatePresence>
                  {tabs.slice(0, activeTab + 1).map((tab, idx) => (
                    <motion.div
                      key={`bottom1-${idx}`}
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{
                        duration: 1,
                        // ease: [0.7, 0, 0.3, 1],
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.3,
                      }}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ zIndex: idx }}
                    >
                      <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation
                        className="h-full w-full bottomLeft"
                      >
                        {tab.images.bottom1.map((img) => (
                          <SwiperSlide key={img}>
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover brightness-110"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="w-[50%] relative h-auto">
                <AnimatePresence>
                  {tabs.slice(0, activeTab + 1).map((tab, idx) => (
                    <motion.div
                      key={`bottom2-${idx}`}
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        duration: 1,
                        // ease: [0.7, 0, 0.3, 1],
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.4,
                      }}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ zIndex: idx }}
                    >
                      <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation
                        className="h-full w-full bottomRight"
                      >
                        {tab.images.bottom2.map((img) => (
                          <SwiperSlide key={img}>
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover brightness-110"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="bg-[#092241] overflow-hidden min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px]">
  //     <div className="bg-[#092241] md:py-0 py-10 min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px] h-full  overflow-hidden">
  //       <div className="ml-[max(5%,calc((100vw-1250px)/2))] min-h-screen mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col md:justify-normal justify-center">
  //         {/* Left Container */}
  //         <div className="leftCon xl:pr-10 2xl:pr-20 w-full xl:w-1/2 md:py-5 flex flex-col min-h-full justify-center">
  //           <div className="overflow-hidden md:mr-10 mr-0">
  //             <LineHead
  //               heading="WHAT WE DO. TO DELIVER VALUE."
  //               bclr="#d7d7d7"
  //               bopacity="34%"
  //               clr="text-white"
  //             />
  //             <p className="gradinetText lg:mt-[-20px] xl:mt-[-55px] max-w-fit text-[20px] leading-[26px]">
  //               Our capabilities cover every aspect of developing Industrial &
  //               Logistics Parks
  //             </p>
  //           </div>

  //           {/* Tabs */}
  //           <div className="mt-6 overflow-hidden mr-0 md:mr-10 max-w-[600px]">
  //             <div
  //               className="flex flex-wrap w-full gap-2" // 👈 changed from flex-nowrap to flex-wrap
  //               ref={containerRef}
  //             >
  //               {tabs.map((tab, idx) => (
  //                 <button
  //                   key={tab.title}
  //                   ref={(el) => (tabRefs.current[idx] = el)}
  //                   className={`px-3 whitespace-nowrap h-[36px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
  //                     activeTab === idx ? "bg-[#E30613] text-black" : ""
  //                   }`}
  //                   onClick={() => {
  //                     hasInteracted.current = true; // 👈 NEW
  //                     setActiveTab(idx);
  //                   }}
  //                 >
  //                   {tab.title}
  //                 </button>
  //               ))}
  //             </div>
  //           </div>

  //           {/* Animated Content */}
  //           <div className="w-full pt-[30px] xl:pt-0 ">
  //             <AnimatePresence mode="wait">
  //               <motion.div
  //                 key={activeTab}
  //                 initial={{ y: 20, opacity: 0 }}
  //                 animate={{ y: 0, opacity: 1 }}
  //                 exit={{ y: -20, opacity: 0 }}
  //                 transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
  //                 className="w-full contentArea overflow-hidden"
  //               >
  //                 <div className="flex flex-col pt-0 xl:pt-5 2xl:pt-10 gap-4 xl-768:gap-10 md:h-[290px] h-[400px] xl:h-[350px] md:mr-10 mr-0 overflow-hidden">
  //                   <h1 className="tabHeading text-2xl max-w-fit md:text-[40px] md:leading-[40px] lg:text-[30px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
  //                     {tabs[activeTab].heading}
  //                   </h1>
  //                   <p
  //                     className="tabContent fsans-400 text-[16px] xl:text-[18px] gradinetText leading-[26px]"
  //                     dangerouslySetInnerHTML={{
  //                       __html: tabs[activeTab].content,
  //                     }}
  //                   />
  //                 </div>
  //               </motion.div>
  //             </AnimatePresence>
  //           </div>

  //           {/* Navigation & Explore More */}
  //           <div className="flex items-center justify-between w-full pr-0 md:pr-10">
  //             <Link
  //               href="/capabilities"
  //               className="flex group transition-transform duration-300 items-center gap-3"
  //             >
  //               <img
  //                 src="/buttonarrows/redarico.svg"
  //                 className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
  //                 alt="Red Arrow Icon"
  //               />
  //               <p className="text-white text-[16px]">Explore More</p>
  //             </Link>
  //             <div className="flex gap-2 items-center">
  //               <button
  //                 className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
  //                 onClick={() => {
  //                   if (activeTab > 0) {
  //                     const newIdx = activeTab - 1;
  //                     setActiveTab(newIdx);
  //                   }
  //                 }}
  //                 disabled={activeTab === 0}
  //               >
  //                 <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
  //               </button>
  //               <button
  //                 className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
  //                 onClick={() => {
  //                   if (activeTab < tabs.length - 1) {
  //                     const newIdx = activeTab + 1;
  //                     setActiveTab(newIdx);
  //                   }
  //                 }}
  //                 disabled={activeTab === tabs.length - 1}
  //               >
  //                 <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //         {/*  */}
  //         {/* Right Container */}
  //         <div className="rightCon min-h-full w-full min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 hidden md:flex flex-col overflow-hidden relative">
  //           <div className="relative flex-[0.65] h-full">
  //             <AnimatePresence>
  //               {tabs.slice(0, activeTab + 1).map((tab, idx) => (
  //                 <motion.div
  //                   key={`top-${idx}`}
  //                   initial={{ y: "-100%" }}
  //                   animate={{ y: 0 }}
  //                   exit={{ y: "-100%" }}
  //                   transition={{
  //                     duration: 1,
  //                     // ease: [0.7, 0, 0.3, 1],
  //                     ease: [0.4, 0, 0.2, 1],
  //                   }}
  //                   className="absolute top-0 left-0 w-full h-full"
  //                   style={{ zIndex: idx }}
  //                 >
  //                   <Swiper
  //                     modules={[EffectFade, Pagination, Navigation]}
  //                     pagination={{ clickable: true }}
  //                     navigation
  //                     effect="fade"
  //                     className="h-full w-full topSlider"
  //                   >
  //                     {tab.images.top.map((img) => (
  //                       <SwiperSlide key={img}>
  //                         <img
  //                           src={img}
  //                           alt=""
  //                           className="min-h-full min-w-full object-cover brightness-110"
  //                         />
  //                       </SwiperSlide>
  //                     ))}
  //                   </Swiper>
  //                 </motion.div>
  //               ))}
  //             </AnimatePresence>
  //           </div>

  //           <div className="flex flex-row flex-[0.35] relative h-full">
  //             <div className="w-[50%] relative h-auto">
  //               <AnimatePresence>
  //                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
  //                   <motion.div
  //                     key={`bottom1-${idx}`}
  //                     initial={{ x: "-100%" }}
  //                     animate={{ x: 0 }}
  //                     exit={{ x: "-100%" }}
  //                     transition={{
  //                       duration: 1,
  //                       // ease: [0.7, 0, 0.3, 1],
  //                       ease: [0.4, 0, 0.2, 1],
  //                       delay: 0.3,
  //                     }}
  //                     className="absolute top-0 left-0 w-full h-full"
  //                     style={{ zIndex: idx }}
  //                   >
  //                     <Swiper
  //                       modules={[Pagination, Navigation]}
  //                       pagination={{ clickable: true }}
  //                       navigation
  //                       className="h-full w-full bottomLeft"
  //                     >
  //                       {tab.images.bottom1.map((img) => (
  //                         <SwiperSlide key={img}>
  //                           <img
  //                             src={img}
  //                             alt=""
  //                             className="w-full h-full object-cover brightness-110"
  //                           />
  //                         </SwiperSlide>
  //                       ))}
  //                     </Swiper>
  //                   </motion.div>
  //                 ))}
  //               </AnimatePresence>
  //             </div>

  //             <div className="w-[50%] relative h-auto">
  //               <AnimatePresence>
  //                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
  //                   <motion.div
  //                     key={`bottom2-${idx}`}
  //                     initial={{ x: "100%" }}
  //                     animate={{ x: 0 }}
  //                     exit={{ x: "100%" }}
  //                     transition={{
  //                       duration: 1,
  //                       // ease: [0.7, 0, 0.3, 1],
  //                       ease: [0.4, 0, 0.2, 1],
  //                       delay: 0.4,
  //                     }}
  //                     className="absolute top-0 left-0 w-full h-full"
  //                     style={{ zIndex: idx }}
  //                   >
  //                     <Swiper
  //                       modules={[Pagination, Navigation]}
  //                       pagination={{ clickable: true }}
  //                       navigation
  //                       className="h-full w-full bottomRight"
  //                     >
  //                       {tab.images.bottom2.map((img) => (
  //                         <SwiperSlide key={img}>
  //                           <img
  //                             src={img}
  //                             alt=""
  //                             className="w-full h-full object-cover brightness-110"
  //                           />
  //                         </SwiperSlide>
  //                       ))}
  //                     </Swiper>
  //                   </motion.div>
  //                 ))}
  //               </AnimatePresence>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default CapabilitiesF;
