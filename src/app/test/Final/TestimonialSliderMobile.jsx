"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import TestiCard from "./TestiCard";

const TestimonialSliderMobile = ({ testimonials }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const scrollTop = el.scrollTop;

      if (scrollHeight > clientHeight) {
        const maxScroll = scrollHeight - clientHeight;
        let scrollPercent = (scrollTop / maxScroll) * 122;

        // 🔥 Snap to 100% if near bottom (due to rounding)
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          scrollPercent = 122;
        }

        el.style.setProperty("--scrollbar-height", `${scrollPercent}%`);
      } else {
        el.style.setProperty("--scrollbar-height", `0%`);
      }
    };

    el.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  // return (
  //   <div className="w-full min-h-screen lg:hidden flex flex-col bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white py-12 px-4">
  //     <div className="text-xl fsans-600 border-b border-[#D7D7D7] pb-4 mb-6">
  //       What Our Clients Say
  //     </div>
  //     <Swiper
  //       modules={[Navigation]}
  //       slidesPerView={1}
  //       spaceBetween={20}
  //       loop={true}
  //       navigation={{
  //         nextEl: ".slider-next-mob",
  //         prevEl: ".slider-prev-mob",
  //       }}
  //       className="w-full"
  //     >
  //       {testimonials.map((item) => (
  //         <SwiperSlide key={item.id}>
  //           <div className="w-full h-[75vh] bg-white text-black overflow-hidden flex flex-col">
  //             <div className="h-[30%] w-full">
  //               <img
  //                 src={item.image}
  //                 alt={item.company}
  //                 className="w-full h-full object-cover"
  //               />
  //             </div>
  //             <div
  //               ref={scrollRef}
  //               className="h-[70%] custom-scroll p-5 flex flex-col justify-between gap-4"
  //             >
  //               <img
  //                 src={item.logo}
  //                 alt={`${item.company} logo`}
  //                 className="max-w-[180px] h-auto"
  //               />
  //               <p className="fsans-400 text-sm leading-[20px] text-[#6C8DAB]">
  //                 {item.content}
  //               </p>
  //               <div className="flex flex-col gap-1">
  //                 <div className="fsans-700 text-[18px] text-black">
  //                   {item.name}
  //                 </div>
  //                 <div className="text-sm text-[#E30613]">
  //                   {item.designation}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //       {/* Navigation buttons for mobile (if needed) */}
  //       <div className="flex items-center justify-center gap-3 mt-6">
  //         <button className="slider-prev-mob">
  //           <img src="/landingr.svg" className="w-8 h-8" alt="Prev" />
  //         </button>
  //         <button className="slider-next-mob">
  //           <img src="/landingl.svg" className="w-8 h-8" alt="Next" />
  //         </button>
  //       </div>
  //     </Swiper>
  //   </div>
  // );
  return (
    <div className="w-full min-h-fit lg:hidden flex flex-col bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white py-12 px-4">
      <div className="text-xl fsans-600 border-b border-[#D7D7D7] pb-4 mb-6">
        What Our Clients Say
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".slider-next-mob",
          prevEl: ".slider-prev-mob",
        }}
        className="w-full"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestiCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="slider-prev-mob">
          <img src="/landingr.svg" className="w-8 h-8" alt="Prev" />
        </button>
        <button className="slider-next-mob">
          <img src="/landingl.svg" className="w-8 h-8" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSliderMobile;
