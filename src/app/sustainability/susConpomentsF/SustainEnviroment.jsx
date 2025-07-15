"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCard from "../../Components/USPF/SwiperCard";
import { motion } from "framer-motion";
import Popup from "./Popup";
import Accordion from "../../Components/USPF/USPAcc";

const SustainEnviroment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cheight, setCHeight] = useState("440px");

  useEffect(() => {
    // Function to update cheight based on window height
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight < 700) {
        setCHeight("400px");
      } else if (windowHeight > 800) {
        setCHeight("500px");
      } else {
        setCHeight("440px");
      }
    };

    // Initial check
    updateHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  const swcontent = [
    {
      title: "Intelligent Energy Management",
      // icon: "/Sustainability/icons/sus1.svg",
      content:
        "Optimizing energy consumption for efficiency and sustainability.",
    },
    {
      title: "Preserving Water Resources",
      // icon: "/Sustainability/icons/sus2.svg",
      content: "Implementing smart water conservation and recycling systems.",
    },
    {
      title: "Waste Minimization and Segregation",
      // icon: "/Sustainability/icons/sus3.svg",
      content: "Reducing, reusing, and recycling for a cleaner environment.",
    },
    {
      title: "Well-being",
      // icon: "/Sustainability/icons/sus4.svg",
      content:
        "Prioritizing employee health, safety, and a balanced work environment.",
    },
    {
      title: "A Positive Environmental Effect",
      // icon: "/Sustainability/icons/sus5.svg",
      content: "Reducing carbon footprint through eco-friendly initiatives.",
    },
    {
      title: "Sustainable Development Policy",
      // icon: "/Sustainability/icons/sus6.svg",
      content:
        "Building infrastructure with long-term environmental responsibility.",
    },
  ];

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto lg:pt-[92px] h-fit flex flex-col">
          <div className="overflow-x-hidden h-fit w-full">
            <div
              // initial={{ width: 0 }}
              // whileInView={{ width: "100%" }}
              // viewport={{ once: true, amount: 0.1 }}
              // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
              className="overflow-x-hidden h-fit whitespace-nowrap"
            >
              <h2 className="md:text-[44px] text-[22px] leading-[111%] w-full pb-[10px] border-b xl:mb-[66px] mb-[36px] text-[#092241] border-[#d7d7d7]">
                KSH INFRA Parks:
                <br className="lg:hidden flex" /> Committed to the Environment
              </h2>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit h-fit lg:gap-0 gap-5 relative">
          <div className="xl:flex hidden items-end lg:top-[10%] xl-1366:top-[5%] justify-center mt-0 xl:absolute relative lg:left-[-100px] xl-1366:left-[-150px] w-full lg:w-[800px] xl-1366:w-[875px] hidden">
            <img
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              // viewport={{ once: true, amount: 0.3 }}
              src="Sustainability/SustainEnvironmental.png"
              alt="Sus"
              className="min-1440:scale-125"
            />
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] xl:pb-[110px] min-1280:pl-[540px] min-1366:pl-[600px] min-1440:pl-[665px] pb-14">
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              // viewport={{ once: true, amount: 0.3 }}
              className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto lg:mr-[max(5%,calc((100vw-1250px)/2))]"
            >
              <p className="fsans-400 text-[16px] leading-[26px] text-[#434343] z-[1]">
                KSH INFRA Parks are a great example of how KSH INFRA is driving
                sustainable environmental practices while creating modern,
                high-quality warehousing and industrial parks.
              </p>
            </div>

            {/* <Swiper
              slidesPerGroup={1}
              className="xl:w-full sm:w-[90%] mx-auto customsw"
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
              speed={500}
              loop={true}
              breakpoints={{
                250: { slidesPerView: 1, spaceBetween: 10 },
                400: { slidesPerView: 1.2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                769: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 2.4, spaceBetween: 10 },
                1336: { slidesPerView: 2.3, spaceBetween: 20 },
                1536: { slidesPerView: 2.8, spaceBetween: 20 },
                1920: { slidesPerView: 3.2, spaceBetween: 10 },
              }}
            >
              {swcontent.map((slide, index) => (
                <SwiperSlide key={slide.icon + index}>
                  <SwiperCard
                    cardHeight={cheight}
                    transform="uppercase"
                    content={slide.content}
                    title={slide.title}
                    fsize="16px"
                    icon={slide.icon}
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
            <Accordion accw={90} acch={650} accordionData={swcontent} />
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ ease: [0.7, 0, 0.4, 1], duration: 1.4 }}
              // viewport={{ once: true, amount: 0.3 }}
              className=" flex sm:flex-row flex-col sm:items-center items-start justify-between gap-[20px] sm:gap-[92px] w-full xl:pl-0 pl-[max(5%,calc((100vw-1250px)/2))] pr-[max(5%,calc((100vw-1250px)/2))]"
            >
              <div
                onClick={() => setIsPopupOpen(true)}
                className=" flex gap-[5px] z-[1] cursor-pointer items-center group"
              >
                <p className="fsans-600 text-[16px] leading-[auto] text-[#E30613] underline">
                  Learn more about our environmental thoughts
                </p>
                <img
                  className="w-[24px] h-[24px] rotate-45 group-hover:rotate-0 transition-transform duration-[500ms]"
                  src="/buttonarrows/redarup.svg"
                  alt=""
                />
              </div>
              {/* <div className="flex gap-[14px] items-center justify-center">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default SustainEnviroment;
