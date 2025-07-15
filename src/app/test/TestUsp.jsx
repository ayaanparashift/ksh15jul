// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import SwiperCard from "./SwiperCard";
// import LineHead from "../Heading/LineHead";
// import { motion } from "framer-motion";
// const Usp = () => {
//   const videoRef = useRef(null);
//   const [hasPlayed, setHasPlayed] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasPlayed) {
//           videoRef.current.play();
//           setHasPlayed(true); // Ensure it plays only once
//         }
//       },
//       { threshold: 0.5 } // Adjust threshold for sensitivity
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, [hasPlayed]);

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
//           <LineHead heading={"10 USPs Inside Our Parks"} />
//         </div>
//         <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative ">
//           <div className="flex items-end justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px]">
//             <video
//               ref={videoRef}
//               src="/uspicons/USP.mp4"
//               className="min-w-full min-h-full scale-100 xl:scale-[1.3]"
//               muted
//             ></video>
//           </div>
//           <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[565px]">
//             <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
//               <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
//                 aliquid quas sapiente quaerat eligendi voluptatum necessitatibus
//                 natus, incidunt ipsa ipsum, sequi enim asperiores dolorum.
//                 Nobis, numquam totam! Ipsam, numquam facilis!
//               </p>
//               <div className="flex gap-[14px] items-center justify-center">
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
//             </motion.div>

//             {/* <div className="w-full sm:w-[90%] mx-auto xl:w-auto">
//               <Swiper
//                 slidesPerGroup={1}
//                 spaceBetween={20}
//                 modules={[FreeMode, Navigation]}
//                 loopAdditionalSlides={2}
//                 freeMode={false}
//                 centeredSlides={false}
//                 navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//                 speed={500}
//                 loop={true}
//                 breakpoints={{
//                   450: { slidesPerView: 1, spaceBetween: 10 },
//                   768: { slidesPerView: 2.5, spaceBetween: 20 },
//                   1366: { slidesPerView: 2.5, spaceBetween: 40 },
//                   1536: { slidesPerView: 3, spaceBetween: 40 },
//                   1920: { slidesPerView: 4, spaceBetween: 40 },
//                 }}
//               >
//                 {swcontent.map((slide, index) => (
//                   <SwiperSlide key={slide.icon + index}>
//                     <SwiperCard
//                       content={slide.content}
//                       title={slide.title}
//                       icon={slide.icon}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div> */}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Usp;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "../Components/USP/SwiperCard";
import LineHead from "../Components/Heading/LineHead";
import { motion } from "framer-motion";

const TestUsp = () => {
  const videoRef = useRef(null);
  const swiperRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed && videoRef.current) {
          videoRef.current.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]);

  const swcontent = [
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Equipped with modern warehousing facilities",
      icon: "/uspicons/icon2.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Offers competitive pricing models and eco-friendly operations",
      icon: "/uspicons/icon4.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
  ];

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto md:pt-[92px] h-fit flex flex-col">
          <LineHead heading={"10 USPs Inside Our Parks"} />
        </div>
        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative">
          <div className="flex items-end bottom-[85px] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px]">
            <video
              ref={videoRef}
              src="/uspicons/USP.mp4"
              className="min-w-full min-h-full scale-100 xl:scale-[1.3]"
              muted
            ></video>
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] lg:pb-[110px] xl:pl-[565px]">
            {/* Text & Navigation Buttons */}
            <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                aliquid quas sapiente quaerat eligendi voluptatum necessitatibus
                natus, incidunt ipsa ipsum, sequi enim asperiores dolorum.
                Nobis, numquam totam! Ipsam, numquam facilis!
              </p>
              <div className="flex gap-[14px] items-center justify-center">
                <button className="arrowleft h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button className="arrowright h-[41px] w-[41px]">
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
              className="xl:w-full sm:w-[90%] mx-auto customsw "
              spaceBetween={20} // Maintain good spacing
              modules={[FreeMode, Navigation]}
              loopAdditionalSlides={2}
              freeMode={false}
              centeredSlides={false}
              navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
              speed={500}
              loop={true} // Prevents right alignment issue
              breakpoints={{
                250: { slidesPerView: 0, spaceBetween: 10 },
                400: { slidesPerView: 1.2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                769: { slidesPerView: 3, spaceBetween: 20 },
                1279: { slidesPerView: 2.5, spaceBetween: 20 },
                1366: { slidesPerView: 2.5, spaceBetween: 40 }, // Ensures 2.5 slides at a time
                1536: { slidesPerView: 3, spaceBetween: 40 }, // Ensures 2.5 slides at a time
                1920: { slidesPerView: 4, spaceBetween: 40 }, // Ensures 2.5 slides at a time
              }}
            >
              {swcontent.map((slide, index) => (
                <SwiperSlide key={slide.icon + index}>
                  <SwiperCard
                    content={slide.content}
                    title={slide.title}
                    icon={slide.icon}
                  />
                  {/* Add empty slides if needed */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestUsp;
