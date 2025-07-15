"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import SwiperCard from "./SwiperCard";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Overview",
    description: "This is the first card.",
    image: "/image1.jpg",
  },
  {
    title: "Infrastructure",
    description: "This is the second card.",
    image: "/image2.jpg",
  },
  {
    title: "Logistics",
    description: "This is the third card.",
    image: "/image3.jpg",
  },
  {
    title: "Sustainability",
    description: "This is the fourth card.",
    image: "/image4.jpg",
  },
];

const TS = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Function to handle tab clicks and change active slide
  const handleTabClick = (index) => {
    setActiveIndex(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div className="bg-white w-full p-8">
      <div className="flex justify-center space-x-4 mb-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-lg font-semibold ${
              activeIndex === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SwiperCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TS;
