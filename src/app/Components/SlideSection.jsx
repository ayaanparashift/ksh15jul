"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import { Autoplay, EffectCreative } from "swiper/modules";
const SlideSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const tabs = ["Growth", "Culture", "Opportunities"];

  const tabsData = [
    {
      title: "Growth",
      description:
        "At KSH INFRA, we invest in your success. With structured career paths, mentorship programs, and skill-building opportunities, we ensure that every team member has the tools to grow and excel.",
      image: "/Slideimgs/Growth.png",
      middleImage: "/Slideimgs/Growth-middle.png",
    },
    {
      title: "Culture",
      description:
        "We foster a workplace built on collaboration, inclusivity, and innovation. Our dynamic environment encourages creativity, teamwork, and a strong sense of belonging, making KSH INFRA a great place to work.",
      image: "/Slideimgs/Culture.png",
      middleImage: "/Slideimgs/Culture-middle.png",
    },
    {
      title: "Opportunities",
      description:
        "Explore exciting career opportunities with KSH INFRA. Whether you’re an experienced professional or just starting, we offer roles that align with your ambitions and skills, helping you build a rewarding career.",
      image: "/Slideimgs/Opportunities.png",
      middleImage: "/Slideimgs/Opportunities-middle.png",
    },
  ];

  const swiperRef = useRef(null);
  // Handle tab click (updates both tab and slide)
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }
  };
  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabsData.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div
      className="h-auto lg:h-[690px] flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px] ">
        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
          {/* Heading & Tabs */}

          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Careers at KSH
            </h1>
            {/* Tabs */}
            <div className="tabs flex gap-4">
              {tabsData &&
                tabsData.map((tab, index) => (
                  <button
                    key={tab.title}
                    className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
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
          <div className="relative w-full h-[300px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
                className="text-white" // Removed "absolute"
              >
                <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
                  {tabsData && tabsData[activeIndex].title}
                </h1>
                <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
                  {tabsData && tabsData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
            <button className="flex group transition-transform duration-[400ms] items-center justify-center gap-3">
              <img
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] fsans-600 text-[16px]">
                Explore More
              </p>
            </button>

            <div className="flex gap-2 items-center">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handlePrev}
                disabled={activeIndex === 0}
              >
                <img className="h-10 w-10" src="/landingr.svg" alt="" />
              </button>
              <div className="text-base text-[#6C8DAB]">
                {activeIndex + 1} / {tabsData.length}
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabsData.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section (Dynamic Image) */}
        <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
          <motion.div className=" w-full h-fit">
            <motion.img
              key={tabsData && tabsData[activeIndex].middleImage}
              initial={{ y: 14 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.2 }}
              // exit={{ y: -100 }}
              src={tabsData && tabsData[activeIndex].middleImage}
              className="w-full h-auto transition-opacity duration-500 ease-in-out object-cover mt-[125%]"
            />
          </motion.div>
        </div>

        {/* Right Section (Swiper) */}
        <div className="rightCon w-full lg:w-[40%] min-h-full rigthSectionOfCarrer">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            speed={1000}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {tabsData &&
              tabsData.map((tab) => (
                <SwiperSlide key={tab.title}>
                  <img
                    // src={`/Slideimgs/${tab.image}.png`}
                    src={tab.image}
                    alt={tab}
                    className="max-w-none w-full xl-1440:w-auto xl-1366:w-auto xl-1280:w-auto xl-1024:w-auto"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SlideSection;
