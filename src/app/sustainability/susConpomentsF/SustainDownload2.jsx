// "use client";
// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, AnimatePresence } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// const SustainDownload2 = () => {
//   const tabs = [
//     {
//       id: 1,
//       heading: "IGBC-PLATINUM Certification",
//       title: "IGBC",
//       content:
//         "The vision of the Indian Green Building Council (IGBC)—a Confederation of Indian Industry (CII) initiative—envisions a sustainably built environment for all. KSH INFRA Chakan Park II Industrial Park is undergoing a stringent innovation and improvement process to achieve IGBC Platinum certification, the recognized global standard for green infrastructure.",
//       image: "./Sustainability/sustainDowloadLSlides/igbc.png",
//     },
//     {
//       id: 2,
//       heading: "KSH INFRA Parks are EDGE-Certified",
//       title: "EDGE",
//       content:
//         "Excellence in Design for Greater Efficiency (EDGE) is the global standard for green building certifications. Adopted in over 150 countries, EDGE ensures that industrial real estate is resource efficient and sustainable. KSH INFRA is proud to have this badge of honour with KSH INFRA Parks being EDGE certified, reinforcing our commitment to creating a green industrial future.",
//       image: "/Sustainability/sustainDowloadLSlides/edgec.png",
//     },
//     {
//       id: 3,
//       heading: "Excellence in Industrial Real Estate",
//       title: "Real Estate",
//       content:
//         "KSH INFRA has been recognized for its outstanding achievement in developing, designing, and delivering high-impact industrial spaces. The company has set new benchmarks in operational efficiency, innovative design, and sustainable development.",
//       image: "/Sustainability/sustainDowloadLSlides/edgec.png",
//     },
//     {
//       id: 4,
//       heading: "Excellence in Sustainable Industrial Infrastructure",
//       title: "Industrial Infrastructure",
//       content:
//         "KSH INFRA has been honored for its exceptional commitment to building environmentally responsible industrial parks. The team has prioritized sustainability, energy efficiency, and long-term ecological impact across all projects.",
//       image: "/Sustainability/sustainDowloadLSlides/edgec.png",
//     },
//     {
//       id: 5,
//       heading:
//         "Realty+ Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
//       title: "Realty + Conclave",
//       content:
//         "KSH INFRA has been celebrated as a rising force in the industrial and warehousing sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
//       image: "/Sustainability/sustainDowloadLSlides/edgec.png",
//     },
//     {
//       id: 6,
//       heading: "ET Edge Best Realty Brands 2025",
//       title: "ET Edge",
//       content:
//         "KSH INFRA has been recognized among the most trusted and visionary real estate brands in the country. The company has demonstrated excellence, credibility, and a strong customer-centric approach in all its developments.",
//       image: "/Sustainability/sustainDowloadLSlides/edgec.png",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [prev, setPrev] = useState(false);
//   const swiperRef = useRef(null);
//   // Handle tab click (updates both tab and slide)
//   const handleTabClick = (index) => {
//     if (index !== activeIndex) {
//       setPrev(index < activeIndex);
//       setActiveIndex(index);
//       if (swiperRef.current) {
//         swiperRef.current.slideTo(index);
//       }
//     }
//   };
//   // Handle navigation
//   const handleNext = () => {
//     setPrev(false);
//     if (swiperRef.current && activeIndex < tabs.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       swiperRef.current.slideNext();
//     }
//   };
//   const handlePrev = () => {
//     setPrev(true);
//     if (swiperRef.current && activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       swiperRef.current.slidePrev();
//     }
//   };
//   return (
//     <div
//       className="h-auto lg:h-[610px] flex overflow-hidden"
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 50%), url('/Sustainability/SustainabilitySec3Bg.png')",
//         backgroundSize: "100% 100%",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px]">
//         {/* Left Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.3, once: true }}
//           className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]"
//         >
//           {/* Heading & Tabs */}

//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-14 md:pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Certifications
//             </h1>
//           </div>
//           {/* Tabs */}
//           <div className="pt-[40px]">
//             <div className="tabs flex gap-4">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 h-[46px] whitespace-nowrap border-[#D7D7D7] border-opacity-30 border-[2px] text-white rounded-[10px] ${
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
//           <div className="relative xl-1920:w-[80%] xl-1024:w-[90%] lg:w-[600px] h-[320px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ x: prev ? -500 : 500, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: prev ? 500 : -500, opacity: 0 }}
//                 transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
//                 className="absolute text-white"
//               >
//                 <h1 className="text-xl  md:text-3xl  md:text-[40px] font-medium md:border-b-[8px] border-b-[5px] border-[#F7E327] w-fit pb-3 pt-5 md:pt-8">
//                   {tabs[activeIndex].heading}
//                 </h1>
//                 <p className="pt-6 md:pt-2 text-base text-[#6C8DAB]">
//                   {tabs[activeIndex].content}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//           {/* Navigation Buttons */}
//           <div className="flex items-center md:pt-[5px] px-[5%] md:px-0 md:w-[60%] justify-between ">
//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <div className="text-base text-[#6C8DAB]">
//                 {activeIndex + 1} / {tabs.length}
//               </div>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={handleNext}
//                 disabled={activeIndex === tabs.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Section (Swiper) */}
//         <div className="rightCon relative w-full lg:w-[40%] h-full CertificationsRigthImgBg">
//           <div className="flex items-center justify-center h-full xl-768:py-6">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             >
//               {tabs.map((tab) => (
//                 <SwiperSlide
//                   key={tab.id}
//                   className="flex items-center justify-center "
//                 >
//                   <img src={tab.image} alt={tab.title} className="mx-auto" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           <motion.div
//             initial={{ x: 0 }}
//             whileInView={{ x: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.3, once: true }}
//             className="absolute left-0 top-0 w-full h-full bgSusDown z-20"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SustainDownload2;
"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
const tabs = [
  {
    id: 1,
    heading: "IGBC-PLATINUM Certification",
    title: "IGBC",
    content:
      "The vision of the Indian Green Building Council (IGBC)—a Confederation of Indian Industry (CII) initiative—envisions a sustainably built environment for all. KSH INFRA Chakan Park II Industrial Park is undergoing a stringent innovation and improvement process to achieve IGBC Platinum certification, the recognized global standard for green infrastructure.",
    image: "./Sustainability/sustainDowloadLSlides/igbc.png",
  },
  {
    id: 2,
    heading: "KSH INFRA Parks are EDGE-Certified",
    title: "EDGE",
    content:
      "Excellence in Design for Greater Efficiency (EDGE) is the global standard for green building certifications. Adopted in over 150 countries, EDGE ensures that industrial real estate is resource efficient and sustainable. KSH INFRA is proud to have this badge of honour with KSH INFRA Parks being EDGE certified, reinforcing our commitment to creating a green industrial future.",
    image: "/Sustainability/sustainDowloadLSlides/edgec.png",
  },
  {
    id: 3,
    heading: "Excellence in Industrial Real Estate",
    title: "Real Estate",
    content:
      "KSH INFRA has been recognized for its outstanding achievement in developing, designing, and delivering high-impact industrial spaces. The company has set new benchmarks in operational efficiency, innovative design, and sustainable development.",
    image: "/Sustainability/sustainDowloadLSlides/3rdtab.png",
  },
  {
    id: 4,
    heading: "Excellence in Sustainable Industrial Infrastructure",
    title: "Industrial Infrastructure",
    content:
      "KSH INFRA has been honored for its exceptional commitment to building environmentally responsible industrial parks. The team has prioritized sustainability, energy efficiency, and long-term ecological impact across all projects.",
    image: "/Sustainability/sustainDowloadLSlides/4thtab.png",
  },
  {
    id: 5,
    heading:
      "Realty + Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
    title: "Realty + Conclave",
    content:
      "KSH INFRA has been celebrated as a rising force in the industrial and warehousing sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
    image: "/Sustainability/sustainDowloadLSlides/5thtab.png",
  },
  {
    id: 6,
    heading: "ET Edge Best Realty Brands 2025",
    title: "ET Edge",
    content:
      "KSH INFRA has been recognized among the most trusted and visionary real estate brands in the country. The company has demonstrated excellence, credibility, and a strong customer-centric approach in all its developments.",
    image: "/Sustainability/sustainDowloadLSlides/6thtab.png",
  },
];
const SustainDownload2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prev, setPrev] = useState(false);
  const swiperRef = useRef(null);

  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setPrev(index < activeIndex);
      setActiveIndex(index);
      if (swiperRef.current) swiperRef.current.slideTo(index);
    }
  };

  const handleNext = () => {
    setPrev(false);
    if (swiperRef.current && activeIndex < tabs.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    setPrev(true);
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div
      className="h-auto lg:h-[610px] flex overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 50%), url('/Sustainability/SustainabilitySec3Bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px]">
        {/* Left Section */}
        <div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.3, once: true }}
          className="leftCon overflow-hidden bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]"
        >
          {/* Heading  */}

          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-14 md:pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Awards & Certifications
            </h1>
          </div>
          {/* Tabs */}
          <div className="pt-[40px] md:px-0 px-[5%] mr-0 md:mr-24">
            <div className="tabs flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id || index}
                  className={`px-3 h-[36px] whitespace-nowrap border-[#D7D7D7] border-opacity-30 border-[2px] text-white rounded-[10px] transition-all duration-200 ${
                    activeIndex === index
                      ? "bg-red-700 border-red-700"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Content Section */}
          <div className="relative xl-1920:w-[80%] pt-5 xl-1024:w-[90%] lg:w-[600px] h-[300px] md:h-[250px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
                className="absolute text-white"
              >
                <h2 className="text-[20px] max-w-fit xl:text-[28px] md:text-[24px] font-medium leading-[110%] md:border-b-[8px] border-b-[5px] border-[#F7E327]  pb-0 pt-5">
                  {tabs[activeIndex].heading}
                </h2>
                <p className="pt-6 md:pt-2 text-base text-[#6C8DAB]">
                  {tabs[activeIndex].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Buttons */}
          <div className="flex md:pb-0 pb-5 items-center md:pt-[5px] px-[5%] md:px-0 md:w-[60%] justify-between ">
            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <img className="h-10 w-10" src="/landingr.svg" alt="" />
              </button>

              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabs.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Swiper) */}
        <div className="rightCon overflow-hidden relative w-full lg:w-[40%] h-full CertificationsRigthImgBg">
          <div className="flex items-center justify-center h-full xl-768:py-6">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {tabs.map((tab) => (
                <SwiperSlide
                  key={tab.id}
                  className="flex items-center justify-center "
                >
                  <img src={tab.image} alt={tab.title} className="mx-auto" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.3, once: true }}
            className="absolute left-0 top-0 w-full h-full bgSusDown z-20"
          />
        </div>
      </div>
    </div>
  );
};

// const SustainDownload2 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleTabClick = (index) => {
//     if (index !== activeIndex) {
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div
//       className="h-auto lg:h-[610px] flex overflow-hidden"
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 50%), url('/Sustainability/SustainabilitySec3Bg.png')",
//         backgroundSize: "100% 100%",
//       }}
//     >
//       <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px]">
//         {/* Left Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.3, once: true }}
//           className="leftCon overflow-hidden bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]"
//         >
//           {/* Heading */}
//           <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-14 md:pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
//             <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
//               Certifications
//             </h1>
//           </div>
//           {/* Tabs */}
//           <div className="pt-[40px] md:px-0 px-[5%] mr-0 md:mr-24">
//             <div className="tabs flex flex-wrap gap-2 md:gap-4">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab.id || index}
//                   className={`px-3 h-[46px] whitespace-nowrap border-[#D7D7D7] border-opacity-30 border-[2px] text-white rounded-[10px] transition-all duration-200 ${
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
//           <div className="relative xl-1920:w-[80%] xl-1024:w-[90%] lg:w-[600px] h-[300px] md:h-[250px] overflow-hidden px-[5%] md:px-0">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -20, opacity: 0 }}
//                 transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
//                 className="absolute text-white"
//               >
//                 <h1 className="text-[20px] max-w-fit md:text-[28px] font-medium leading-[120%] md:border-b-[8px] border-b-[5px] border-[#F7E327] pb-0 pt-5">
//                   {tabs[activeIndex].heading}
//                 </h1>
//                 <p className="pt-6 md:pt-4 text-base text-[#6C8DAB]">
//                   {tabs[activeIndex].content}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//           {/* Navigation Buttons */}
//           <div className="flex md:pb-0 pb-5 items-center md:pt-[5px] px-[5%] md:px-0 md:w-[60%] justify-between">
//             <div className="flex gap-2 items-center">
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
//                 disabled={activeIndex === 0}
//               >
//                 <img className="h-10 w-10" src="/landingr.svg" alt="" />
//               </button>
//               <button
//                 className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
//                 onClick={() =>
//                   setActiveIndex((prev) => Math.min(prev + 1, tabs.length - 1))
//                 }
//                 disabled={activeIndex === tabs.length - 1}
//               >
//                 <img className="h-10 w-10" src="/landingl.svg" alt="" />
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Section (Images) */}
//         <div className="rightCon overflow-hidden relative w-full lg:w-[40%] h-full CertificationsRigthImgBg">
//           <div className="flex items-center justify-center h-full xl-768:py-6">
//             <AnimatePresence>
//               {tabs.slice(0, activeIndex + 1).map((tab, idx) => (
//                 <motion.div
//                   key={`image-${idx}`}
//                   initial={{ x: "100%" }}
//                   animate={{ x: 0 }}
//                   exit={{ x: "100%" }}
//                   transition={{
//                     duration: 0.7,
//                     ease: [0.7, 0, 0.3, 1],
//                     delay: 0.4,
//                   }}
//                   className="absolute top-0 left-0 w-full h-full"
//                   style={{ zIndex: idx }}
//                 >
//                   <img
//                     src={tab.image}
//                     alt={tab.title}
//                     className="w-full h-full object-contain mx-auto"
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//           <motion.div
//             initial={{ x: 0 }}
//             whileInView={{ x: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.3, once: true }}
//             className="absolute left-0 top-0 w-full h-full bgSusDown z-20"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default SustainDownload2;
