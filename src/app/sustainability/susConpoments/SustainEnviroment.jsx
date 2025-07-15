// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import SwiperCard from "../../Components/USP/SwiperCard";
// import LineHead from "../../Components/Heading/LineHead";
// import { motion } from "framer-motion";
// const SustainEnviroment = () => {
//   const videoRef = useRef(null);
//   const [hasPlayed, setHasPlayed] = useState(false);

//   const swcontent = [
//     {
//       title: "Positioned at a prime location seamless connectivity",
//       icon: "/uspicons/icon1.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Equipped with modern warehousing facilities",
//       icon: "/uspicons/icon2.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Offers competitive pricing models and eco-friendly operations",
//       icon: "/uspicons/icon4.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//     {
//       title: "Positioned at a prime location seamless connectivity",
//       icon: "/uspicons/icon1.svg",
//       content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
//     },
//   ];

//   return (
//     <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
//       <div className="flex flex-col max-w-[100vw] h-fit">
//         <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto md:pt-[92px] h-fit flex flex-col">
//           <LineHead heading={"Environmental"} fontSize={44} lineHeigth={30} />
//         </div>
//         <div className="flex lg:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative ">
//           <div className="hidden min-1280:flex items-end justify-center bottom-[140px] absolute left-0 w-[675px]">
//             {/* <video
//               ref={videoRef}
//               src="/uspicons/USP.mp4"
//               className="min-w-full min-h-full scale-[1.3]"
//               muted
//             ></video> */}
//             <img
//               src="Sustainability/SustainEnvironmental.png"
//               className="min-w-full min-h-full scale-[1.3]"
//               alt=""
//             />
//           </div>
//           <div className="xl:w-full lg:w-[90%] xl-768:w-[90%] mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[765px] xl-1280:pl-[700px] pb-20">
//             <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
//               <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
//                 aliquid quas sapiente quaerat eligendi voluptatum necessitatibus
//                 natus, incidunt ipsa ipsum, sequi enim asperiores dolorum.
//                 Nobis, numquam totam! Ipsam, numquam facilis!
//               </p>
//             </motion.div>
//             <Swiper
//               slidesPerGroup={1}
//               className="max-w-full customsw"
//               spaceBetween={20} // Maintain good spacing
//               modules={[FreeMode, Navigation]}
//               loopAdditionalSlides={2}
//               freeMode={false}
//               centeredSlides={false}
//               navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//               speed={500}
//               loop={true} // Prevents right alignment issue
//               breakpoints={{
//                 320: { slidesPerView: 1 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 3, spaceBetween: 30 },
//                 1280: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1366: { slidesPerView: 2, spaceBetween: 20 }, // Ensures 2.5 slides at a time
//                 1440: { slidesPerView: 2.1, spaceBetween: 40 }, // Ensures 2.5 slides at a time
//                 1536: { slidesPerView: 2.2, spaceBetween: 30 }, // Ensures 2.5 slides at a time
//                 1600: { slidesPerView: 2.5, spaceBetween: 20 }, // Ensures 2.5 slides at a time
//                 1920: { slidesPerView: 3.3, spaceBetween: 30 }, // Ensures 2.5 slides at a time
//               }}
//             >
//               {swcontent.map((slide, index) => (
//                 <SwiperSlide key={slide.icon + index}>
//                   <SwiperCard
//                     content={slide.content}
//                     title={slide.title}
//                     icon={slide.icon}
//                   />
//                   {/* Add empty slides if needed */}
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-[90%]">
//               <a className="text-[#E30613] fsans-600 md:order-1  order-2 pt-4 text-base flex items-center gap-2 underline cursor-pointer">
//                 Learn more about our environmental thoughts
//                 <img src="/AboutPage/aboutSlide/envRedArrow.svg" alt="" />
//               </a>
//               <div className="flex gap-[14px] items-center justify-center md:order-2">
//                 <button className="arrowleft h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button className="arrowright h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SustainEnviroment;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "../../Components/USP/SwiperCard";
import LineHead from "../../Components/Heading/LineHead";
import { motion } from "framer-motion";

const SustainEnviroment = () => {
  const swcontent = [
    {
      title: "Strategic Locations for Business Growth",
      icon: "/uspicons/icon1.svg",
      content: "Positioned near major hubs for efficiency and savings.",
    },
    {
      title: "Customizable Facilities for Every Need",
      icon: "/uspicons/icon2.svg",
      content: "Offers ‘Build-to-Suit’ and ‘Ready-to-Move’ options.",
    },
    {
      title: "Ready-to-Move Facilities Available",
      icon: "/uspicons/icon4.svg",
      content: "Pre-built, equipped spaces for immediate occupancy.",
    },
    {
      title: "Commitment to Sustainable Practices",
      icon: "/uspicons/icon1.svg",
      content: "Features solar power and Miyawaki green areas.",
    },
    {
      title: "Comprehensive Security Measures",
      icon: "/uspicons/icon1.svg",
      content: "Utilizes drones and traditional measures for safety.",
    },
    {
      title: "Advanced Emergency Preparedness",
      icon: "/uspicons/icon1.svg",
      content: "Quick response teams and medical services on-site.",
    },
    {
      title: "Active Community Engagement",
      icon: "/uspicons/icon1.svg",
      content: "Hosts events and provides spaces for wellness.",
    },
    {
      title: "Streamlined Transportation and Logistics",
      icon: "/uspicons/icon1.svg",
      content: "Supports efficient transport with smart docking.",
    },
    {
      title: "Innovative Facility Management Systems",
      icon: "/uspicons/icon1.svg",
      content: "Uses mobile apps for dynamic facility oversight.",
    },
    {
      title: "Smart Energy and Resource Management",
      icon: "/uspicons/icon1.svg",
      content: "Employs technology to minimize energy costs.",
    },
  ];

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto lg:pt-[92px] h-fit flex flex-col">
          <LineHead heading={"10 USPs Inside Our Parks"} />
        </div>
        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative">
          <div className="lg:flex items-end bottom-0 xl:bottom-[85px] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px] hidden ">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              src="Sustainability/SustainEnvironmental.png"
              alt="Sus"
            />
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[565px] pb-14">
            {/* Text & Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]"
            >
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
                KSH INFRA is dedicated to providing solutions that not only meet
                but adapt to the evolving demands of industries, ensuring our
                clients achieve their business objectives with utmost efficacy.
              </p>
              <div className="flex gap-[14px] items-center justify-center">
                <button id="arrowleft" className="h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button id="arrowright" className="h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
              </div>
            </motion.div>

            {/* Swiper Slider */}
            <Swiper
              slidesPerGroup={1}
              className="xl:w-full sm:w-[90%] mx-auto customsw"
              spaceBetween={20} // Maintain good spacing
              modules={[Navigation]} // Removed FreeMode as it's not used
              // loopAdditionalSlides={2}
              // centeredSlides={false}
              navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
              speed={500}
              loop={true} // Optional: set loop={false} to test performance if needed
              breakpoints={{
                250: { slidesPerView: 1, spaceBetween: 10 }, // Changed from 0 to 1
                400: { slidesPerView: 1.2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                769: { slidesPerView: 3, spaceBetween: 20 },
                1279: { slidesPerView: 2.5, spaceBetween: 20 },
                1366: { slidesPerView: 2.5, spaceBetween: 40 },
                1536: { slidesPerView: 3, spaceBetween: 40 },
                1920: { slidesPerView: 4, spaceBetween: 40 },
              }}
            >
              {swcontent.map((slide, index) => (
                <SwiperSlide key={slide.icon + index}>
                  <SwiperCard
                    content={slide.content}
                    title={slide.title}
                    icon={slide.icon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainEnviroment;
