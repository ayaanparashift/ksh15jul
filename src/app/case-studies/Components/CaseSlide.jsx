"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import SlideCard from "./SlideCard";

const CaseSlide = () => {
  const CaseStudyContent = [
    {
      Title: "Done and Delivered. On Time Jabil KSH INFRA",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "/case-studies/jabil",
      Image: "/caseInside/jabilspot.png",
    },
    {
      Title:
        "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
      Description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/case-studies/kawasaki",
      Image: "/caseInside/caseInsideSpot.png",
    },
    // Add more case study objects here...
  ];

  return (
    <div className="z-10 relative py-[60px] flex gap-[30px] flex-col w-full overflow-hidden">
      <motion.div
        className="ml-[max(5%,calc((100vw-1250px)/2))]"
        id="slidercontpp2"
      >
        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: ".swiper-button-prev-case",
            nextEl: ".swiper-button-next-case",
          }}
          spaceBetween={40}
          speed={300}
          freeMode={true}
          preventInteractionOnTransition={true}
          allowTouchMove={false}
          touchMoveStopPropagation={true}
          breakpoints={{
            400: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 1.001, spaceBetween: 15 },
            768: { slidesPerView: 1.2, spaceBetween: 20 },
            1024: { slidesPerView: 1.4, spaceBetween: 30 },
            1280: { slidesPerView: 1.7, spaceBetween: 43 },
            1441: { slidesPerView: 1.89, spaceBetween: 43 },
          }}
        >
          {CaseStudyContent.map((content, index) => (
            <SwiperSlide key={index}>
              <SlideCard
                title={content.Title}
                description={content.Description}
                image={content.Image}
                url={content.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className="fix12">
        <motion.div className="flex gap-[14px] items-center justify-start">
          <button className="swiper-button-prev-case h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/AboutPage/timeline/whitearrowleft.svg"
              alt="ArrowLeft"
            />
          </button>
          <button className="swiper-button-next-case h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/AboutPage/timeline/whitearrowright.svg"
              alt="ArrowRight"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default CaseSlide;
