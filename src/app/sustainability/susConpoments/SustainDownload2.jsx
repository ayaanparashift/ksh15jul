"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
const SustainDownload2 = () => {
  const tabs = [
    {
      id: 1,
      heading: "IGBC-PLATINUM CERTIFICATION",
      title: "IGBC",
      content:
        "The vision of the Indian Green Building Council (IGBC)—a part of the Confederation of Indian Industry (CII)—is to enable a sustainably built environment for all. KSH INFRA Chakan Park II Industrial park is going through a stringent process of innovation and improvement to achieve IGBC Platinum certification, the recognized standard of green infrastructure.",
      image: "./Sustainability/sustainDowloadLSlides/image83.png",
    },
    {
      id: 2,
      heading: "EDGE Certification",
      title: "EDGE",
      content:
        "EDGE certification helps buildings become more resource-efficient with sustainable design principles.",
      image: "/Sustainability/sustainDowloadLSlides/image83.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
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
    if (swiperRef.current && activeIndex < tabs.length - 1) {
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
      className="h-auto lg:h-[610px] flex overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 50%), url('/Sustainability/SustainabilitySec3Bg.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px]">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          viewport={{ amount: 0.3, once: true }}
          className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]"
        >
          {/* Heading & Tabs */}

          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-14 md:pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              Certifications
            </h1>
            {/* Tabs */}
            <div className="tabs flex gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
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
          <div className="relative w-full h-[370px] md:h-[300px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="absolute text-white "
              >
                <h1 className="text-xl  md:text-3xl  md:text-[40px] font-medium md:border-b-[8px] border-b-[5px] border-[#F7E327] w-fit pb-3 pt-7 md:pt-16">
                  {tabs[activeIndex].heading}
                </h1>
                <p className="md:w-[80%] pt-6 md:pt-8 md:pb-12 text-base text-[#6C8DAB]">
                  {tabs[activeIndex].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Buttons */}
          <div className="flex items-center md:pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between md:pb-[70px] pb-7">
            {/* <div className="flex items-center gap-4 text-[#fff] text-[16px] group transition-transform duration-[400ms] cursor-pointer">
              <img
                src="/buttonarrows/redarico.svg"
                className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
                alt=""
              />
              Explore Careers
            </div> */}
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
                {activeIndex + 1} / {tabs.length}
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                onClick={handleNext}
                disabled={activeIndex === tabs.length - 1}
              >
                <img className="h-10 w-10" src="/landingl.svg" alt="" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Swiper) */}
        <div className="rightCon relative w-full lg:w-[40%] h-full CertificationsRigthImgBg">
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
                  <img src={tab.image} alt={tab.title} className="  mx-auto" />
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
export default SustainDownload2;
// xl-1440:pl-[90px] xl-1536:pl-[138px] xl-1600:pl-[170px]

//  xl-1024:mr-[60px] xl-1280:mr-[75px] xl-1366:mr-[70px] xl-1440:mr-[105px] xl-1536:mr-[155px] xl-1600:mr-[] xl-1920:mr-[]
// image: "Sustainability/sustainDowloadLSlides/IGBC.png",
