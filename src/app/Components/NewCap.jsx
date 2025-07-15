// // // "use client";
// // // import React, { useState, useRef, useEffect } from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation, Pagination, EffectFade } from "swiper/modules";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";
// // // import "swiper/css/effect-fade";
// // // import LineHead from "./Heading/LineHead";
// // // import Link from "next/link";

// // // const CapabilitiesF = () => {
// // //   const tabs = [
// // //     {
// // //       title: "Land Acquisition",
// // //       heading: (
// // //         <>
// // //           Land <br /> Acquisition
// // //         </>
// // //       ),
// // //       content:
// // //         "We find the perfect locations for your business success. Our Industrial & Logistics Parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
// // //       images: {
// // //         top: ["/OurCapabilities/landtop.png"],
// // //         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
// // //         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Capital Deployment",
// // //       heading: (
// // //         <>
// // //           Capital <br /> Deployment
// // //         </>
// // //       ),
// // //       content:
// // //         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
// // //       images: {
// // //         top: ["/OurCapabilities/Cap_top1.png"],
// // //         bottom1: ["/OurCapabilities/capBottom1_1.png"],
// // //         bottom2: ["/OurCapabilities/capBottom2_1.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Project Development",
// // //       heading: <>Project Development</>,
// // //       content:
// // //         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
// // //       images: {
// // //         top: ["/OurCapabilities/DevTop1.png"],
// // //         bottom1: ["/OurCapabilities/DevBottom1.png"],
// // //         bottom2: ["/OurCapabilities/DevBottom2.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Leasing",
// // //       heading: <>Leasing</>,
// // //       content:
// // //         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
// // //       images: {
// // //         top: ["/OurCapabilities/lease.png"],
// // //         bottom1: ["/OurCapabilities/leasBottom1.png"],
// // //         bottom2: ["/OurCapabilities/leasBottom2.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Property Management",
// // //       heading: (
// // //         <>
// // //           Property <br /> Management
// // //         </>
// // //       ),
// // //       content:
// // //         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
// // //       images: {
// // //         top: ["/OurCapabilities/propertyTop.png"],
// // //         bottom1: ["/OurCapabilities/propertyBottom1.png"],
// // //         bottom2: ["/OurCapabilities/propertyBottom2.png"],
// // //       },
// // //     },
// // //   ];
// // //   const swiperRef = useRef(null);

// // //   const [visibleCount, setVisibleCount] = useState(5);
// // //   const [visibleTabStart, setVisibleTabStart] = useState(0);
// // //   const [activeTab, setActiveTab] = useState(0);
// // //   const containerRef = useRef(null);
// // //   const tabRefs = useRef([]);
// // //   const hasInteracted = useRef(false); // 👈 NEW

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       const width = window.innerWidth;
// // //       if (width > 1280) {
// // //         setVisibleCount(5);
// // //       } else if (width > 1024) {
// // //         setVisibleCount(4);
// // //       } else if (width > 768) {
// // //         setVisibleCount(3);
// // //       } else {
// // //         setVisibleCount(2);
// // //       }
// // //     };
// // //     handleResize();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   // Shift visible window when active tab changes
// // //   const shiftTabWindow = (newIndex) => {
// // //     if (newIndex < visibleTabStart) {
// // //       setVisibleTabStart(newIndex);
// // //     } else if (newIndex > visibleTabStart + visibleCount - 1) {
// // //       setVisibleTabStart(newIndex - visibleCount + 1);
// // //     }
// // //   };

// // //   // Scroll active tab into view
// // //   useEffect(() => {
// // //     if (!hasInteracted.current) return; // 👈 NEW
// // //     const currentTab = tabRefs.current[activeTab];
// // //     if (currentTab && containerRef.current) {
// // //       currentTab.scrollIntoView({
// // //         behavior: "smooth",
// // //         inline: "center",
// // //         block: "nearest",
// // //       });
// // //     }
// // //   }, [activeTab]);
// // //   const handleNext = () => {
// // //     hasInteracted.current = true; // 👈 NEW
// // //     if (swiperRef.current && activeIndex < tabs.length - 1) {
// // //       setActiveIndex(activeIndex + 1);
// // //       swiperRef.current.slideNext();
// // //     }
// // //   };

// // //   const handlePrev = () => {
// // //     hasInteracted.current = true; // 👈 NEW
// // //     if (swiperRef.current && activeIndex > 0) {
// // //       setActiveIndex(activeIndex - 1);
// // //       swiperRef.current.slidePrev();
// // //     }
// // //   };
// // //   return (
// // //     <div className="bg-[#092241] overflow-hidden min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px]">
// // //       <div className="bg-[#092241] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px] h-full  overflow-hidden">
// // //         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
// // //           {/* Left Container */}
// // //           <div className="leftCon overflow-hidden w-full xl:w-1/2 py-10 flex flex-col justify-center">
// // //             <div className="pt-[40px] overflow-hidden">
// // //               <LineHead
// // //                 heading="WHAT WE DO. TO DELIVER VALUE."
// // //                 bclr="#d7d7d7"
// // //                 bopacity="34%"
// // //                 clr="text-white"
// // //               />
// // //               <p className="gradinetText md:mt-[-45px] max-w-fit text-[20px] leading-[26px]">
// // //                 Our capabilities cover every aspect of developing <br />
// // //                 Industrial & Logistics Parks
// // //               </p>
// // //             </div>

// // //             {/* Tabs */}
// // //             <div className="mt-6 overflow-hidden">
// // //               <div
// // //                 className="flex flex-nowrap overflow-hidden gap-4"
// // //                 ref={containerRef}
// // //               >
// // //                 {tabs
// // //                   .slice(visibleTabStart, visibleTabStart + visibleCount)
// // //                   .map((tab, idx) => {
// // //                     const absoluteIndex = visibleTabStart + idx;
// // //                     return (
// // //                       <button
// // //                         key={tab.title}
// // //                         ref={(el) => (tabRefs.current[absoluteIndex] = el)}
// // //                         className={`px-3 last:mr-0 md:last:mr-10 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
// // //                           activeTab === absoluteIndex
// // //                             ? "bg-[#E30613] text-black"
// // //                             : ""
// // //                         }`}
// // //                         onClick={() => {
// // //                           hasInteracted.current = true; // 👈 NEW
// // //                           setActiveTab(absoluteIndex);
// // //                           shiftTabWindow(absoluteIndex);
// // //                         }}
// // //                       >
// // //                         {tab.title}
// // //                       </button>
// // //                     );
// // //                   })}
// // //               </div>
// // //             </div>

// // //             {/* Animated Content */}
// // //             <div className="w-full pt-[30px] xl:pt-0 overflow-hidden">
// // //               <AnimatePresence mode="wait">
// // //                 <motion.div
// // //                   key={activeTab}
// // //                   initial={{ x: 300, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   exit={{ x: -300, opacity: 0 }}
// // //                   transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
// // //                   className="w-full contentArea overflow-hidden"
// // //                 >
// // //                   <div className="flex flex-col min-1440:pt-10 min-1024:pt-5 gap-4 xl-768:gap-10 h-[400px] md:mr-10 mr-0 overflow-hidden">
// // //                     <h1 className="tabHeading w-[40%] text-2xl md:text-[40px] md:leading-[50px] lg:text-[40px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
// // //                       {tabs[activeTab].heading}
// // //                     </h1>
// // //                     <p className="tabContent fsans-400 text-[20px] gradinetText leading-[26px]">
// // //                       {tabs[activeTab].content.split(" ").map((line, i) => (
// // //                         <React.Fragment key={i}>
// // //                           {line}
// // //                           <br />
// // //                           <br />
// // //                         </React.Fragment>
// // //                       ))}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               </AnimatePresence>
// // //             </div>

// // //             {/* Navigation & Explore More */}
// // //             <div className="flex items-center justify-between w-full md:pr-10">
// // //               <Link
// // //                 href="/capabilities"
// // //                 className="flex group transition-transform duration-300 items-center gap-3"
// // //               >
// // //                 <img
// // //                   src="/buttonarrows/redarico.svg"
// // //                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
// // //                   alt="Red Arrow Icon"
// // //                 />
// // //                 <p className="text-white text-[16px]">Explore More</p>
// // //               </Link>
// // //               <div className="flex gap-2 items-center">
// // //                 <button
// // //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// // //                   onClick={() => {
// // //                     if (activeTab > 0) {
// // //                       const newIdx = activeTab - 1;
// // //                       setActiveTab(newIdx);
// // //                       shiftTabWindow(newIdx);
// // //                     }
// // //                   }}
// // //                   disabled={activeTab === 0}
// // //                 >
// // //                   <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
// // //                 </button>
// // //                 <button
// // //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// // //                   onClick={() => {
// // //                     if (activeTab < tabs.length - 1) {
// // //                       const newIdx = activeTab + 1;
// // //                       setActiveTab(newIdx);
// // //                       shiftTabWindow(newIdx);
// // //                     }
// // //                   }}
// // //                   disabled={activeTab === tabs.length - 1}
// // //                 >
// // //                   <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Container */}
// // //           <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px]  xl:w-1/2 flex flex-col overflow-hidden">
// // //             <div className="flex-1">
// // //               <AnimatePresence mode="wait">
// // //                 <motion.div
// // //                   key={`top-${activeTab}`}
// // //                   initial={{ y: -100, opacity: 0 }}
// // //                   animate={{ y: 0, opacity: 1 }}
// // //                   exit={{ y: 100, opacity: 0 }}
// // //                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
// // //                   className="h-full w-full md:min-h-[375px]"
// // //                 >
// // //                   <Swiper
// // //                     modules={[EffectFade, Pagination, Navigation]}
// // //                     pagination={{ clickable: true }}
// // //                     navigation
// // //                     className="h-full w-full topSlider"
// // //                   >
// // //                     {tabs[activeTab].images.top.map((img) => (
// // //                       <SwiperSlide key={img}>
// // //                         <img
// // //                           src={img}
// // //                           alt=""
// // //                           className="min-h-full min-w-full object-cover"
// // //                         />
// // //                       </SwiperSlide>
// // //                     ))}
// // //                   </Swiper>
// // //                 </motion.div>
// // //               </AnimatePresence>
// // //             </div>
// // //             <div className="flex flex-row flex-1">
// // //               <div className="w-[50%] h-full">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={`bottom1-${activeTab}`}
// // //                     initial={{ x: -100, opacity: 0 }}
// // //                     animate={{ x: 0, opacity: 1 }}
// // //                     exit={{ x: -100, opacity: 0 }}
// // //                     transition={{
// // //                       duration: 1,
// // //                       ease: [0.7, 0, 0.3, 1],
// // //                       delay: 0.1,
// // //                     }}
// // //                     className="h-full w-full"
// // //                   >
// // //                     <Swiper
// // //                       modules={[Pagination, Navigation]}
// // //                       pagination={{ clickable: true }}
// // //                       navigation
// // //                       className="h-full w-full bottomLeft"
// // //                     >
// // //                       {tabs[activeTab].images.bottom1.map((img) => (
// // //                         <SwiperSlide key={img}>
// // //                           <img
// // //                             src={img}
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </SwiperSlide>
// // //                       ))}
// // //                     </Swiper>
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //               <div className="w-[50%] h-full">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={`bottom2-${activeTab}`}
// // //                     initial={{ x: 100, opacity: 0 }}
// // //                     animate={{ x: 0, opacity: 1 }}
// // //                     exit={{ x: 100, opacity: 0 }}
// // //                     transition={{
// // //                       duration: 1,
// // //                       ease: [0.7, 0, 0.3, 1],
// // //                       delay: 0.1,
// // //                     }}
// // //                     className="h-full w-full"
// // //                   >
// // //                     <Swiper
// // //                       modules={[Pagination, Navigation]}
// // //                       pagination={{ clickable: true }}
// // //                       navigation
// // //                       className="h-full w-full bottomright"
// // //                     >
// // //                       {tabs[activeTab].images.bottom2.map((img) => (
// // //                         <SwiperSlide key={img}>
// // //                           <img
// // //                             src={img}
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </SwiperSlide>
// // //                       ))}
// // //                     </Swiper>
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CapabilitiesF;

// // "use client";
// // import React, { useState, useRef, useEffect } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, EffectFade } from "swiper/modules";
// // import { AnimatePresence, motion } from "framer-motion";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import "swiper/css/effect-fade";
// // import LineHead from "./Heading/LineHead";
// // import Link from "next/link";

// // const CapabilitiesF = () => {
// //   const tabs = [
// //     {
// //       title: "Land Acquisition",
// //       heading: <>Land Acquisition</>,
// //       content:
// //         "We find the perfect locations for your business success. Our Industrial & Logistics Parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
// //       images: {
// //         top: ["/OurCapabilities/landtop.png"],
// //         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
// //         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
// //       },
// //     },
// //     {
// //       title: "Capital Deployment",
// //       heading: <>Capital Deployment</>,
// //       content:
// //         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
// //       images: {
// //         top: ["/OurCapabilities/Cap_top1.png"],
// //         bottom1: ["/OurCapabilities/capBottom1_1.png"],
// //         bottom2: ["/OurCapabilities/capBottom2_1.png"],
// //       },
// //     },
// //     {
// //       title: "Project Development",
// //       heading: <>Project Development</>,
// //       content:
// //         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
// //       images: {
// //         top: ["/OurCapabilities/DevTop1.png"],
// //         bottom1: ["/OurCapabilities/DevBottom1.png"],
// //         bottom2: ["/OurCapabilities/DevBottom2.png"],
// //       },
// //     },
// //     {
// //       title: "Leasing",
// //       heading: <>Leasing</>,
// //       content:
// //         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
// //       images: {
// //         top: ["/OurCapabilities/lease.png"],
// //         bottom1: ["/OurCapabilities/leasBottom1.png"],
// //         bottom2: ["/OurCapabilities/leasBottom2.png"],
// //       },
// //     },
// //     {
// //       title: "Property Management",
// //       heading: <>Property Management</>,
// //       content:
// //         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.<br /><br />We take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
// //       images: {
// //         top: ["/OurCapabilities/propertyTop.png"],
// //         bottom1: ["/OurCapabilities/propertyBottom1.png"],
// //         bottom2: ["/OurCapabilities/propertyBottom2.png"],
// //       },
// //     },
// //   ];

// //   const swiperRef = useRef(null);
// //   const [activeTab, setActiveTab] = useState(0);
// //   const tabRefs = useRef([]);
// //   const containerRef = useRef(null);
// //   const hasInteracted = useRef(false); // 👈 NEW

// //   // useEffect(() => {                          // removed line
// //   //   const handleResize = () => {             // removed line
// //   //     const width = window.innerWidth;       // removed line
// //   //     if (width > 1280) {                    // removed line
// //   //       setVisibleCount(5);                  // removed line
// //   //     } else if (width > 1024) {             // removed line
// //   //       setVisibleCount(4);                  // removed line
// //   //     } else if (width > 768) {              // removed line
// //   //       setVisibleCount(3);                  // removed line
// //   //     } else {                               // removed line
// //   //       setVisibleCount(2);                  // removed line
// //   //     }                                      // removed line
// //   //   };                                       // removed line
// //   //   handleResize();                          // removed line
// //   //   window.addEventListener("resize", handleResize); // removed line
// //   //   return () => window.removeEventListener("resize", handleResize); // removed line
// //   // }, []);                                    // removed line

// //   // const shiftTabWindow = (newIndex) => {     // removed line
// //   //   if (newIndex < visibleTabStart) {        // removed line
// //   //     setVisibleTabStart(newIndex);          // removed line
// //   //   } else if (newIndex > visibleTabStart + visibleCount - 1) { // removed line
// //   //     setVisibleTabStart(newIndex - visibleCount + 1); // removed line
// //   //   }                                          // removed line
// //   // };                                           // removed line

// //   // useEffect(() => {                            // removed line
// //   //   if (!hasInteracted.current) return;        // removed line
// //   //   const currentTab = tabRefs.current[activeTab]; // removed line
// //   //   if (currentTab && containerRef.current) {  // removed line
// //   //     currentTab.scrollIntoView({              // removed line
// //   //       behavior: "smooth",                    // removed line
// //   //       inline: "center",                      // removed line
// //   //       block: "nearest",                      // removed line
// //   //     });                                      // removed line
// //   //   }                                          // removed line
// //   // }, [activeTab]);                             // removed line

// //   const handleNext = () => {
// //     hasInteracted.current = true; // 👈 NEW
// //     if (swiperRef.current && activeIndex < tabs.length - 1) {
// //       setActiveIndex(activeIndex + 1);
// //       swiperRef.current.slideNext();
// //     }
// //   };

// //   const handlePrev = () => {
// //     hasInteracted.current = true; // 👈 NEW
// //     if (swiperRef.current && activeIndex > 0) {
// //       setActiveIndex(activeIndex - 1);
// //       swiperRef.current.slidePrev();
// //     }
// //   };

// //   return (
// //     <div className="bg-[#092241] overflow-hidden min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px]">
// //       <div className="bg-[#092241] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px] h-full  overflow-hidden">
// //         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
// //           {/* Left Container */}
// //           <div className="leftCon pr-10 2xl:pr-20 overflow-hidden w-full xl:w-1/2 py-5 flex flex-col justify-center">
// //             <div className="overflow-hidden md:mr-10 mr-0">
// //               <LineHead
// //                 heading="WHAT WE DO. TO DELIVER VALUE."
// //                 bclr="#d7d7d7"
// //                 bopacity="34%"
// //                 clr="text-white"
// //               />
// //               <p className="gradinetText md:mt-[-55px] max-w-fit text-[20px] leading-[26px]">
// //                 Our capabilities cover every aspect of developing Industrial &
// //                 Logistics Parks
// //               </p>
// //             </div>

// //             {/* Tabs */}
// //             <div className="mt-6 overflow-hidden mr-0 md:mr-10 max-w-[600px]">
// //               <div
// //                 className="flex flex-wrap w-full gap-2 sm:gap-5" // 👈 changed from flex-nowrap to flex-wrap
// //                 ref={containerRef}
// //               >
// //                 {tabs.map((tab, idx) => (
// //                   <button
// //                     key={tab.title}
// //                     ref={(el) => (tabRefs.current[idx] = el)}
// //                     className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
// //                       activeTab === idx ? "bg-[#E30613] text-black" : ""
// //                     }`}
// //                     onClick={() => {
// //                       hasInteracted.current = true; // 👈 NEW
// //                       setActiveTab(idx);
// //                     }}
// //                   >
// //                     {tab.title}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Animated Content */}
// //             <div className="w-full pt-[30px] xl:pt-0 overflow-hidden">
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={activeTab}
// //                   initial={{ x: 300, opacity: 0 }}
// //                   animate={{ x: 0, opacity: 1 }}
// //                   exit={{ x: -300, opacity: 0 }}
// //                   transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
// //                   className="w-full contentArea overflow-hidden"
// //                 >
// //                   <div className="flex flex-col pt-5 2xl:pt-10 gap-4 xl-768:gap-10 h-[400px] xl:h-[300px] md:mr-10 mr-0 overflow-hidden">
// //                     <h1 className="tabHeading text-2xl max-w-fit md:text-[40px] md:leading-[40px] lg:text-[30px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
// //                       {tabs[activeTab].heading}
// //                     </h1>
// //                     <p
// //                       className="tabContent fsans-400 text-[18px] gradinetText leading-[26px]"
// //                       dangerouslySetInnerHTML={{
// //                         __html: tabs[activeTab].content,
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>

// //             {/* Navigation & Explore More */}
// //             <div className="flex items-center justify-between w-full pr-0 md:pr-10">
// //               <Link
// //                 href="/capabilities"
// //                 className="flex group transition-transform duration-300 items-center gap-3"
// //               >
// //                 <img
// //                   src="/buttonarrows/redarico.svg"
// //                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
// //                   alt="Red Arrow Icon"
// //                 />
// //                 <p className="text-white text-[16px]">Explore More</p>
// //               </Link>
// //               <div className="flex gap-2 items-center">
// //                 <button
// //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// //                   onClick={() => {
// //                     if (activeTab > 0) {
// //                       const newIdx = activeTab - 1;
// //                       setActiveTab(newIdx);
// //                     }
// //                   }}
// //                   disabled={activeTab === 0}
// //                 >
// //                   <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
// //                 </button>
// //                 <button
// //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// //                   onClick={() => {
// //                     if (activeTab < tabs.length - 1) {
// //                       const newIdx = activeTab + 1;
// //                       setActiveTab(newIdx);
// //                     }
// //                   }}
// //                   disabled={activeTab === tabs.length - 1}
// //                 >
// //                   <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Container */}
// //           {/* <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px]  xl:w-1/2 flex flex-col overflow-hidden">
// //             <div className="flex-1">
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={`top-${activeTab}`}
// //                   initial={{ y: -100 }}
// //                   animate={{ y: 0 }}
// //                   exit={{ y: 100 }}
// //                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
// //                   className="h-full w-full md:min-h-[375px]"
// //                 >
// //                   <Swiper
// //                     modules={[EffectFade, Pagination, Navigation]}
// //                     pagination={{ clickable: true }}
// //                     navigation
// //                     className="h-full w-full topSlider"
// //                   >
// //                     {tabs[activeTab].images.top.map((img) => (
// //                       <SwiperSlide key={img}>
// //                         <img
// //                           src={img}
// //                           alt=""
// //                           className="min-h-full min-w-full object-cover"
// //                         />
// //                       </SwiperSlide>
// //                     ))}
// //                   </Swiper>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //             <div className="flex flex-row flex-1">
// //               <div className="w-[50%] h-full">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={`bottom1-${activeTab}`}
// //                     initial={{ x: -100 }}
// //                     animate={{ x: 0 }}
// //                     exit={{ x: -100 }}
// //                     transition={{
// //                       duration: 1,
// //                       ease: [0.7, 0, 0.3, 1],
// //                       delay: 0.1,
// //                     }}
// //                     className="h-full w-full"
// //                   >
// //                     <Swiper
// //                       modules={[Pagination, Navigation]}
// //                       pagination={{ clickable: true }}
// //                       navigation
// //                       className="h-full w-full bottomLeft"
// //                     >
// //                       {tabs[activeTab].images.bottom1.map((img) => (
// //                         <SwiperSlide key={img}>
// //                           <img
// //                             src={img}
// //                             className="w-full h-full object-cover"
// //                           />
// //                         </SwiperSlide>
// //                       ))}
// //                     </Swiper>
// //                   </motion.div>
// //                 </AnimatePresence>
// //               </div>
// //               <div className="w-[50%] h-full">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={`bottom2-${activeTab}`}
// //                     initial={{ x: 100 }}
// //                     animate={{ x: 0 }}
// //                     exit={{ x: 100 }}
// //                     transition={{
// //                       duration: 1,
// //                       ease: [0.7, 0, 0.3, 1],
// //                       delay: 0.1,
// //                     }}
// //                     className="h-full w-full"
// //                   >
// //                     <Swiper
// //                       modules={[Pagination, Navigation]}
// //                       pagination={{ clickable: true }}
// //                       navigation
// //                       className="h-full w-full bottomright"
// //                     >
// //                       {tabs[activeTab].images.bottom2.map((img) => (
// //                         <SwiperSlide key={img}>
// //                           <img
// //                             src={img}
// //                             className="w-full h-full object-cover"
// //                           />
// //                         </SwiperSlide>
// //                       ))}
// //                     </Swiper>
// //                   </motion.div>
// //                 </AnimatePresence>
// //               </div>
// //             </div>
// //           </div> */}
// //           <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px]  xl:w-1/2 flex flex-col overflow-hidden">
// //             <div className="flex-1">
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={`top-${activeTab}`}
// //                   initial={{ y: -100 }}
// //                   animate={{ y: 0 }}
// //                   exit={{ y: 100 }}
// //                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
// //                   className="h-full w-full md:min-h-[375px]"
// //                 >
// //                   <Swiper
// //                     modules={[EffectFade, Pagination, Navigation]}
// //                     pagination={{ clickable: true }}
// //                     navigation
// //                     className="h-full w-full topSlider"
// //                   >
// //                     {tabs[activeTab].images.top.map((img) => (
// //                       <SwiperSlide key={img}>
// //                         <img
// //                           src={img}
// //                           alt=""
// //                           className="min-h-full min-w-full object-cover"
// //                         />
// //                       </SwiperSlide>
// //                     ))}
// //                   </Swiper>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //             <div className="flex flex-row flex-1">
// //               <div className="w-[50%] h-full">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={`bottom1-${activeTab}`}
// //                     initial={{ x: -100 }}
// //                     animate={{ x: 0 }}
// //                     exit={{ x: -100 }}
// //                     transition={{
// //                       duration: 1,
// //                       ease: [0.7, 0, 0.3, 1],
// //                       delay: 0.1,
// //                     }}
// //                     className="h-full w-full"
// //                   >
// //                     <Swiper
// //                       modules={[Pagination, Navigation]}
// //                       pagination={{ clickable: true }}
// //                       navigation
// //                       className="h-full w-full bottomLeft"
// //                     >
// //                       {tabs[activeTab].images.bottom1.map((img) => (
// //                         <SwiperSlide key={img}>
// //                           <img
// //                             src={img}
// //                             className="w-full h-full object-cover"
// //                           />
// //                         </SwiperSlide>
// //                       ))}
// //                     </Swiper>
// //                   </motion.div>
// //                 </AnimatePresence>
// //               </div>
// //               <div className="w-[50%] h-full">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={`bottom2-${activeTab}`}
// //                     initial={{ x: 100 }}
// //                     animate={{ x: 0 }}
// //                     exit={{ x: 100 }}
// //                     transition={{
// //                       duration: 1,
// //                       ease: [0.7, 0, 0.3, 1],
// //                       delay: 0.1,
// //                     }}
// //                     className="h-full w-full"
// //                   >
// //                     <Swiper
// //                       modules={[Pagination, Navigation]}
// //                       pagination={{ clickable: true }}
// //                       navigation
// //                       className="h-full w-full bottomright"
// //                     >
// //                       {tabs[activeTab].images.bottom2.map((img) => (
// //                         <SwiperSlide key={img}>
// //                           <img
// //                             src={img}
// //                             className="w-full h-full object-cover"
// //                           />
// //                         </SwiperSlide>
// //                       ))}
// //                     </Swiper>
// //                   </motion.div>
// //                 </AnimatePresence>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CapabilitiesF;
// // // "use client";
// // // import React, { useState, useRef, useEffect } from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation, Pagination, EffectFade } from "swiper/modules";
// // // import { AnimatePresence, motion } from "framer-motion";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";
// // // import "swiper/css/effect-fade";
// // // import LineHead from "./Heading/LineHead";
// // // import Link from "next/link";

// // // const CapabilitiesF = () => {
// // //   const tabs = [
// // //     {
// // //       title: "Land Acquisition",
// // //       heading: (
// // //         <>
// // //           Land <br /> Acquisition
// // //         </>
// // //       ),
// // //       content:
// // //         "We find the perfect locations for your business success. Our Industrial & Logistics Parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
// // //       images: {
// // //         top: ["/OurCapabilities/landtop.png"],
// // //         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
// // //         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Capital Deployment",
// // //       heading: (
// // //         <>
// // //           Capital <br /> Deployment
// // //         </>
// // //       ),
// // //       content:
// // //         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
// // //       images: {
// // //         top: ["/OurCapabilities/Cap_top1.png"],
// // //         bottom1: ["/OurCapabilities/capBottom1_1.png"],
// // //         bottom2: ["/OurCapabilities/capBottom2_1.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Project Development",
// // //       heading: <>Project Development</>,
// // //       content:
// // //         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
// // //       images: {
// // //         top: ["/OurCapabilities/DevTop1.png"],
// // //         bottom1: ["/OurCapabilities/DevBottom1.png"],
// // //         bottom2: ["/OurCapabilities/DevBottom2.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Leasing",
// // //       heading: <>Leasing</>,
// // //       content:
// // //         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
// // //       images: {
// // //         top: ["/OurCapabilities/lease.png"],
// // //         bottom1: ["/OurCapabilities/leasBottom1.png"],
// // //         bottom2: ["/OurCapabilities/leasBottom2.png"],
// // //       },
// // //     },
// // //     {
// // //       title: "Property Management",
// // //       heading: (
// // //         <>
// // //           Property <br /> Management
// // //         </>
// // //       ),
// // //       content:
// // //         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.\nWe take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
// // //       images: {
// // //         top: ["/OurCapabilities/propertyTop.png"],
// // //         bottom1: ["/OurCapabilities/propertyBottom1.png"],
// // //         bottom2: ["/OurCapabilities/propertyBottom2.png"],
// // //       },
// // //     },
// // //   ];
// // //   const swiperRef = useRef(null);

// // //   const [visibleCount, setVisibleCount] = useState(5);
// // //   const [visibleTabStart, setVisibleTabStart] = useState(0);
// // //   const [activeTab, setActiveTab] = useState(0);
// // //   const containerRef = useRef(null);
// // //   const tabRefs = useRef([]);
// // //   const hasInteracted = useRef(false); // 👈 NEW

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       const width = window.innerWidth;
// // //       if (width > 1280) {
// // //         setVisibleCount(5);
// // //       } else if (width > 1024) {
// // //         setVisibleCount(4);
// // //       } else if (width > 768) {
// // //         setVisibleCount(3);
// // //       } else {
// // //         setVisibleCount(2);
// // //       }
// // //     };
// // //     handleResize();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   // Shift visible window when active tab changes
// // //   const shiftTabWindow = (newIndex) => {
// // //     if (newIndex < visibleTabStart) {
// // //       setVisibleTabStart(newIndex);
// // //     } else if (newIndex > visibleTabStart + visibleCount - 1) {
// // //       setVisibleTabStart(newIndex - visibleCount + 1);
// // //     }
// // //   };

// // //   // Scroll active tab into view
// // //   useEffect(() => {
// // //     if (!hasInteracted.current) return; // 👈 NEW
// // //     const currentTab = tabRefs.current[activeTab];
// // //     if (currentTab && containerRef.current) {
// // //       currentTab.scrollIntoView({
// // //         behavior: "smooth",
// // //         inline: "center",
// // //         block: "nearest",
// // //       });
// // //     }
// // //   }, [activeTab]);
// // //   const handleNext = () => {
// // //     hasInteracted.current = true; // 👈 NEW
// // //     if (swiperRef.current && activeIndex < tabs.length - 1) {
// // //       setActiveIndex(activeIndex + 1);
// // //       swiperRef.current.slideNext();
// // //     }
// // //   };

// // //   const handlePrev = () => {
// // //     hasInteracted.current = true; // 👈 NEW
// // //     if (swiperRef.current && activeIndex > 0) {
// // //       setActiveIndex(activeIndex - 1);
// // //       swiperRef.current.slidePrev();
// // //     }
// // //   };
// // //   return (
// // //     <div className="bg-[#092241] overflow-hidden min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px]">
// // //       <div className="bg-[#092241] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] min-1440:max-h-[780.5px] h-full  overflow-hidden">
// // //         <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
// // //           {/* Left Container */}
// // //           <div className="leftCon overflow-hidden w-full xl:w-1/2 py-10 flex flex-col justify-center">
// // //             <div className="pt-[40px] overflow-hidden">
// // //               <LineHead
// // //                 heading="WHAT WE DO. TO DELIVER VALUE."
// // //                 bclr="#d7d7d7"
// // //                 bopacity="34%"
// // //                 clr="text-white"
// // //               />
// // //               <p className="gradinetText md:mt-[-45px] max-w-fit text-[20px] leading-[26px]">
// // //                 Our capabilities cover every aspect of developing <br />
// // //                 Industrial & Logistics Parks
// // //               </p>
// // //             </div>

// // //             {/* Tabs */}
// // //             <div className="mt-6 overflow-hidden">
// // //               <div
// // //                 className="flex flex-nowrap overflow-hidden gap-4"
// // //                 ref={containerRef}
// // //               >
// // //                 {tabs
// // //                   .slice(visibleTabStart, visibleTabStart + visibleCount)
// // //                   .map((tab, idx) => {
// // //                     const absoluteIndex = visibleTabStart + idx;
// // //                     return (
// // //                       <button
// // //                         key={tab.title}
// // //                         ref={(el) => (tabRefs.current[absoluteIndex] = el)}
// // //                         className={`px-3 last:mr-0 md:last:mr-10 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 ${
// // //                           activeTab === absoluteIndex
// // //                             ? "bg-[#E30613] text-black"
// // //                             : ""
// // //                         }`}
// // //                         onClick={() => {
// // //                           hasInteracted.current = true; // 👈 NEW
// // //                           setActiveTab(absoluteIndex);
// // //                           shiftTabWindow(absoluteIndex);
// // //                         }}
// // //                       >
// // //                         {tab.title}
// // //                       </button>
// // //                     );
// // //                   })}
// // //               </div>
// // //             </div>

// // //             {/* Animated Content */}
// // //             <div className="w-full pt-[30px] xl:pt-0 overflow-hidden">
// // //               <AnimatePresence mode="wait">
// // //                 <motion.div
// // //                   key={activeTab}
// // //                   initial={{ x: 300, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   exit={{ x: -300, opacity: 0 }}
// // //                   transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
// // //                   className="w-full contentArea overflow-hidden"
// // //                 >
// // //                   <div className="flex flex-col min-1440:pt-10 min-1024:pt-5 gap-4 xl-768:gap-10 h-[400px] md:mr-10 mr-0 overflow-hidden">
// // //                     <h1 className="tabHeading w-[40%] text-2xl md:text-[40px] md:leading-[50px] lg:text-[40px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327]">
// // //                       {tabs[activeTab].heading}
// // //                     </h1>
// // //                     <p className="tabContent fsans-400 text-[20px] gradinetText leading-[26px]">
// // //                       {tabs[activeTab].content.split(" ").map((line, i) => (
// // //                         <React.Fragment key={i}>
// // //                           {line}
// // //                           <br />
// // //                           <br />
// // //                         </React.Fragment>
// // //                       ))}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               </AnimatePresence>
// // //             </div>

// // //             {/* Navigation & Explore More */}
// // //             <div className="flex items-center justify-between w-full md:pr-10">
// // //               <Link
// // //                 href="/capabilities"
// // //                 className="flex group transition-transform duration-300 items-center gap-3"
// // //               >
// // //                 <img
// // //                   src="/buttonarrows/redarico.svg"
// // //                   className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300"
// // //                   alt="Red Arrow Icon"
// // //                 />
// // //                 <p className="text-white text-[16px]">Explore More</p>
// // //               </Link>
// // //               <div className="flex gap-2 items-center">
// // //                 <button
// // //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// // //                   onClick={() => {
// // //                     if (activeTab > 0) {
// // //                       const newIdx = activeTab - 1;
// // //                       setActiveTab(newIdx);
// // //                       shiftTabWindow(newIdx);
// // //                     }
// // //                   }}
// // //                   disabled={activeTab === 0}
// // //                 >
// // //                   <img src="/landingr.svg" className="w-10 h-10" alt="Prev" />
// // //                 </button>
// // //                 <button
// // //                   className="flex items-center justify-center disabled:brightness-75 hover:brightness-200"
// // //                   onClick={() => {
// // //                     if (activeTab < tabs.length - 1) {
// // //                       const newIdx = activeTab + 1;
// // //                       setActiveTab(newIdx);
// // //                       shiftTabWindow(newIdx);
// // //                     }
// // //                   }}
// // //                   disabled={activeTab === tabs.length - 1}
// // //                 >
// // //                   <img src="/landingl.svg" className="w-10 h-10" alt="Next" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Container */}
// // //           <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px]  xl:w-1/2 flex flex-col overflow-hidden">
// // //             <div className="flex-1">
// // //               <AnimatePresence mode="wait">
// // //                 <motion.div
// // //                   key={`top-${activeTab}`}
// // //                   initial={{ y: -100, opacity: 0 }}
// // //                   animate={{ y: 0, opacity: 1 }}
// // //                   exit={{ y: 100, opacity: 0 }}
// // //                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
// // //                   className="h-full w-full md:min-h-[375px]"
// // //                 >
// // //                   <Swiper
// // //                     modules={[EffectFade, Pagination, Navigation]}
// // //                     pagination={{ clickable: true }}
// // //                     navigation
// // //                     className="h-full w-full topSlider"
// // //                   >
// // //                     {tabs[activeTab].images.top.map((img) => (
// // //                       <SwiperSlide key={img}>
// // //                         <img
// // //                           src={img}
// // //                           alt=""
// // //                           className="min-h-full min-w-full object-cover"
// // //                         />
// // //                       </SwiperSlide>
// // //                     ))}
// // //                   </Swiper>
// // //                 </motion.div>
// // //               </AnimatePresence>
// // //             </div>
// // //             <div className="flex flex-row flex-1">
// // //               <div className="w-[50%] h-full">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={`bottom1-${activeTab}`}
// // //                     initial={{ x: -100, opacity: 0 }}
// // //                     animate={{ x: 0, opacity: 1 }}
// // //                     exit={{ x: -100, opacity: 0 }}
// // //                     transition={{
// // //                       duration: 1,
// // //                       ease: [0.7, 0, 0.3, 1],
// // //                       delay: 0.1,
// // //                     }}
// // //                     className="h-full w-full"
// // //                   >
// // //                     <Swiper
// // //                       modules={[Pagination, Navigation]}
// // //                       pagination={{ clickable: true }}
// // //                       navigation
// // //                       className="h-full w-full bottomLeft"
// // //                     >
// // //                       {tabs[activeTab].images.bottom1.map((img) => (
// // //                         <SwiperSlide key={img}>
// // //                           <img
// // //                             src={img}
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </SwiperSlide>
// // //                       ))}
// // //                     </Swiper>
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //               <div className="w-[50%] h-full">
// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={`bottom2-${activeTab}`}
// // //                     initial={{ x: 100, opacity: 0 }}
// // //                     animate={{ x: 0, opacity: 1 }}
// // //                     exit={{ x: 100, opacity: 0 }}
// // //                     transition={{
// // //                       duration: 1,
// // //                       ease: [0.7, 0, 0.3, 1],
// // //                       delay: 0.1,
// // //                     }}
// // //                     className="h-full w-full"
// // //                   >
// // //                     <Swiper
// // //                       modules={[Pagination, Navigation]}
// // //                       pagination={{ clickable: true }}
// // //                       navigation
// // //                       className="h-full w-full bottomright"
// // //                     >
// // //                       {tabs[activeTab].images.bottom2.map((img) => (
// // //                         <SwiperSlide key={img}>
// // //                           <img
// // //                             src={img}
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </SwiperSlide>
// // //                       ))}
// // //                     </Swiper>
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CapabilitiesF;

// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////
// ////

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

// const CapabilitiesF = () => {
//   const tabs = [
//     {
//       title: "Land Acquisition",
//       heading: <>Land Acquisition</>,
//       content:
//         "We find the perfect locations for your business success. Our Industrial & Logistics Parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
//       images: {
//         top: ["/OurCapabilities/landtop.png"],
//         bottom1: ["/OurCapabilities/land_bottom1_1.png"],
//         bottom2: ["/OurCapabilities/land_bottom2_1.png"],
//       },
//     },
//     {
//       title: "Capital Deployment",
//       heading: <>Capital Deployment</>,
//       content:
//         "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
//       images: {
//         top: ["/OurCapabilities/Cap_top1.png"],
//         bottom1: ["/OurCapabilities/capBottom1_1.png"],
//         bottom2: ["/OurCapabilities/capBottom2_1.png"],
//       },
//     },
//     {
//       title: "Project Development",
//       heading: <>Project Development</>,
//       content:
//         "From start to finish, our experienced professionals handle everything—planning, construction, and completion. You get high-quality custom industrial and warehousing facilities, delivered when you need them.",
//       images: {
//         top: ["/OurCapabilities/DevTop1.png"],
//         bottom1: ["/OurCapabilities/DevBottom1.png"],
//         bottom2: ["/OurCapabilities/DevBottom2.png"],
//       },
//     },
//     {
//       title: "Leasing",
//       heading: <>Leasing</>,
//       content:
//         "We offer flexible leases that work for you. Choose custom-built spaces, move-in ready spaces or whichever option fits your business for a smooth start.",
//       images: {
//         top: ["/OurCapabilities/lease.png"],
//         bottom1: ["/OurCapabilities/leasBottom1.png"],
//         bottom2: ["/OurCapabilities/leasBottom2.png"],
//       },
//     },
//     {
//       title: "Property Management",
//       heading: <>Property Management</>,
//       content:
//         "Our property management team keeps everything running smoothly. We handle all maintenance so that you can focus completely on your core business.<br /><br />We take care of your facility needs day in and day out. No hassles and no worries—just well-maintained properties that support your operations.",
//       images: {
//         top: ["/OurCapabilities/propertyTop.png"],
//         bottom1: ["/OurCapabilities/propertyBottom1.png"],
//         bottom2: ["/OurCapabilities/propertyBottom2.png"],
//       },
//     },
//   ];

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
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -20, opacity: 0 }}
//                   transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//                   className="w-full contentArea overflow-hidden"
//                 >
//                   <div className="flex flex-col pt-5 2xl:pt-10 gap-4 xl-768:gap-10 h-[400px] xl:h-[300px] md:mr-10 mr-0 overflow-hidden">
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

//           {/* Right Container */}
//           {/*
//           <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px]  xl:w-1/2 flex flex-col overflow-hidden">
//             <div className="flex-1">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`top-${activeTab}`}
//                   initial={{ y: -100 }}
//                   animate={{ y: 0 }}
//                   exit={{ y: 100 }}
//                   transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
//                   className="h-full w-full md:min-h-[375px]"
//                 >
//                   <Swiper
//                     modules={[EffectFade, Pagination, Navigation]}
//                     pagination={{ clickable: true }}
//                     navigation
//                     className="h-full w-full topSlider"
//                   >
//                     {tabs[activeTab].images.top.map((img) => (
//                       <SwiperSlide key={img}>
//                         <img
//                           src={img}
//                           alt=""
//                           className="min-h-full min-w-full object-cover"
//                         />
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             <div className="flex flex-row flex-1">
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom1-${activeTab}`}
//                     initial={{ x: -100 }}
//                     animate={{ x: 0 }}
//                     exit={{ x: -100 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomLeft"
//                     >
//                       {tabs[activeTab].images.bottom1.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//               <div className="w-[50%] h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`bottom2-${activeTab}`}
//                     initial={{ x: 100 }}
//                     animate={{ x: 0 }}
//                     exit={{ x: 100 }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.7, 0, 0.3, 1],
//                       delay: 0.1,
//                     }}
//                     className="h-full w-full"
//                   >
//                     <Swiper
//                       modules={[Pagination, Navigation]}
//                       pagination={{ clickable: true }}
//                       navigation
//                       className="h-full w-full bottomright"
//                     >
//                       {tabs[activeTab].images.bottom2.map((img) => (
//                         <SwiperSlide key={img}>
//                           <img
//                             src={img}
//                             className="w-full h-full object-cover"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div> */}

//           {/*  */}
//           {/*  */}
//           {/*  */}
//           {/*  */}

//           {/* <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 flex flex-col overflow-hidden relative">

//             <div className="relative flex-1">
//               <AnimatePresence>
//                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                   <motion.img
//                     key={`top-${idx}`}
//                     src={tab.images.top[0]}
//                     initial={{ y: "-100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "-100%" }}
//                     transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     style={{ zIndex: idx }}
//                   />
//                 ))}
//               </AnimatePresence>
//             </div>

//             <div className="flex flex-row flex-1 relative">

//               <div className="w-[50%] h-full relative">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.img
//                       key={`bottom1-${idx}`}
//                       src={tab.images.bottom1[0]}
//                       initial={{ x: "-100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "-100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
//                       }}
//                       className="absolute top-0 left-0 w-full h-full object-cover"
//                       style={{ zIndex: idx }}
//                     />
//                   ))}
//                 </AnimatePresence>
//               </div>

//               <div className="w-[50%] h-full relative">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.img
//                       key={`bottom2-${idx}`}
//                       src={tab.images.bottom2[0]}
//                       initial={{ x: "100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
//                       }}
//                       className="absolute top-0 left-0 w-full h-full object-cover"
//                       style={{ zIndex: idx }}
//                     />
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div> */}

//           {/*  */}
//           {/*  */}
//           {/*  */}
//           {/*  */}

//           {/* <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 flex flex-col overflow-hidden relative">
//             <div className="relative flex-1 h-[65%] ">
//               <AnimatePresence>
//                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                   <motion.div
//                     key={`top-${idx}`}
//                     initial={{ y: "-100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "-100%" }}
//                     transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
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

//             <div className="flex flex-row flex-1 h-[35%]">
//               <div className="w-[50%] relative">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom1-${idx}`}
//                       initial={{ x: "-100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "-100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
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
//                               className="w-full h-auto md:h-full object-cover"
//                             />
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               <div className="w-[50%] relative">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom2-${idx}`}
//                       initial={{ x: "100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
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
//                               className="w-full h-auto md:h-full   object-cover"
//                             />
//                           </SwiperSlide>
//                         ))}
//                       </Swiper>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div> */}

//           {/*  */}
//           {/*  */}
//           {/*  */}
//           {/*  */}

//           {/* <div className="rightCon w-full min-h-[358.53px] min-1920:min-h-[870px] min-1440:min-h-[780.5px] min-1920:max-h-[870px] xl:w-1/2 flex flex-col overflow-hidden relative">
//             <div className="relative flex-[0.65]">
//               <AnimatePresence>
//                 {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                   <motion.div
//                     key={`top-${idx}`}
//                     initial={{ y: "-100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "-100%" }}
//                     transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
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

//             <div className="flex flex-row flex-[0.35] relative">
//               <div className="w-[50%] relative h-full">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom1-${idx}`}
//                       initial={{ x: "-100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "-100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
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

//               <div className="w-[50%] relative h-full">
//                 <AnimatePresence>
//                   {tabs.slice(0, activeTab + 1).map((tab, idx) => (
//                     <motion.div
//                       key={`bottom2-${idx}`}
//                       initial={{ x: "100%" }}
//                       animate={{ x: 0 }}
//                       exit={{ x: "100%" }}
//                       transition={{
//                         duration: 1,
//                         ease: [0.7, 0, 0.3, 1],
//                         delay: 0.1,
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
//           </div> */}

//           {/*  */}
//           {/*  */}
//           {/*  */}
//           {/*  */}

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
