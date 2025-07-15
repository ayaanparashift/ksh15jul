"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Landing from "./Landing";
import VidLand from "./VidLand";

const LandingSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleEnquireClick = () => {
    setShowEnquire(true);
    document.body.style.overflow = "hidden"; // Disable vertical scrolling
    document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
  };

  const handleCloseEnquire = () => {
    setShowEnquire(false);
    document.body.style.overflow = "auto"; // Re-enable vertical scrolling
    document.body.style.overflowX = "hidden"; // Allow horizontal scroll again
  };

  return (
    <div className="h-auto relative ">
      <div
        className="relative overflow-hidden max-w-screen"
        // initial={{ maxWidth: 0 }}
        // whileInView={{ maxWidth: "100vw" }}
        // transition={{
        //   duration: 1,
        //   ease: [0.7, 0, 0.4, 1],
        // }}
        // viewport={{ amount: 0, once: true }}
        // style={{ maxWidth: "100vw" }}
      >
        <Swiper
          slidesPerGroup={1}
          className="max-w-full"
          speed={1000}
          spaceBetween={0}
          modules={[FreeMode, Navigation]}
          navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div
              className="overflow-hidden relative max-w-full"
              // initial={{ width: 0 }}
              // animate={{ width: activeIndex === 0 ? "100%" : 0 }}
              // transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            >
              <VidLand />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
            // initial={{ width: 0 }}
            // animate={{ width: activeIndex === 1 ? "100%" : 0 }}
            // transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            >
              <Landing isActive={activeIndex === 1} />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10">
          <p className="text-white opacity-60 fsans-400 text-[16px]">
            Explore the Advantage <br />
            with KSH INFRA
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="landingl w-fit">
              <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
            </button>
            <button className="landingr w-10 h-10">
              <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSwiper;
