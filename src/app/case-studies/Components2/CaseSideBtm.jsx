"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CaseBtmCard from "./CaseBtmCard";

const CaseSideBtm = () => {
  const slides = [
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "A culture that builds your future",
      subtitle: "SUSAINA MICHELLE | SALES EXECUTIVE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Innovation at its best",
      subtitle: "JOHN DOE | DEVELOPER",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      video: "/Career/SlideImgs/slidevid1.webm",
      title: "Leading the industry",
      subtitle: "JANE SMITH | MANAGER",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(to right, #092241 50%, #ffffff 50%)",
      }}
    >
      <div className="fix12 pt-[150px] pb-[50px]">
        <div className="flex">
          <div className="max-w-1/2 flex flex-col gap-[20px] w-1/2 pr-[100px]">
            <h3 className="spotlightheaddd fsans-600 text-white text-[36px] leading-[130%]">
              What Its like to be with KSH as a ‘Partner’!
            </h3>
            <p className="fsans-600 text-[22px] leading-[130%] text-[#CECECE] uppercase">
              Susaina Michelle | sales Executive
            </p>
            <p className="fsans-400 text-[16px] leading-[26px] text-white">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="max-w-1/2 w-1/2 pl-[60px] flex flex-col-reverse gap-[24px]">
            <div className="flex gap-[15px] justify-start mb-4">
              <button
                id="carprev"
                className="w-10 h-10 flex items-center justify-center"
              >
                <img
                  className="h-10 w-10"
                  src="/buttonarrows/arrowleft.svg"
                  alt=""
                />
              </button>
              <button
                id="carnext"
                className="w-10 h-10 flex items-center justify-center"
              >
                <img
                  className="h-10 w-10"
                  src="/buttonarrows/arrowright.svg"
                  alt=""
                />
              </button>
            </div>
            <motion.div
              initial={{ x: "-200px", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Swiper
                // onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs]}
                spaceBetween={40}
                slidesPerView={4}
                watchSlidesProgress
                navigation={{
                  nextEl: "#carnext",
                  prevEl: "#carprev",
                }}
                className="thumb-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <CaseBtmCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSideBtm;
