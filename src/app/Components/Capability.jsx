"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "./Heading/LineHead";
const Capabilities = () => {
  const tabs = [
    {
      title: "Land Acquisition",
      heading: (
        <>
          Land <br /> Acquisition
        </>
      ),
      content:
        "We find the perfect locations for your business success. Our Industrial & Logistics Parks offer excellent connectivity and room for logistics and operations to thrive. Our meticulous experts carefully select sites with the best access to transportation and growing markets. When you move in, you'll have everything you need to operate efficiently today and expand tomorrow.",
      images: {
        top: ["/OurCapabilities/land_top1.png"],
        bottom1: ["/OurCapabilities/land_bottom1_1.png"],
        bottom2: ["/OurCapabilities/land_bottom2_1.png"],
      },
    },
    {
      title: "Capital Deployment",
      heading: (
        <>
          {" "}
          Capital <br /> Deployment{" "}
        </>
      ),
      content:
        "Our smart capital deployment approach and strong partnerships help us build start-of-the-art facilities suitable for a whole range of industries. We know how to use capital wisely to allocate resources across people, technology, and the environment to deliver infrastructure that fits exactly what your business needs.",
      images: {
        top: ["/OurCapabilities/Cap_top1.png"],
        bottom1: ["/OurCapabilities/capBottom1_1.png"],
        bottom2: ["/OurCapabilities/capBottom2_1.png"],
      },
    },
    {
      title: "Development ",
      heading: <> Development</>,
      content:
        "From initial planning to final execution, our experienced team oversees every aspect of project development, ensuring timely delivery of high-quality, customizable industrial and warehousing facilities.",
      images: {
        top: ["/OurCapabilities/DevTop1.png"],
        bottom1: ["/OurCapabilities/DevBottom1.png"],
        bottom2: ["/OurCapabilities/DevBottom2.png"],
      },
    },
    {
      title: "Leasing ",
      heading: <> Leasing </>,
      content:
        "We offer flexible leasing options, including built-to-suit and ready-to-move-in spaces, catering to the unique needs of businesses and ensuring a seamless operational setup.",
      images: {
        top: ["/OurCapabilities/leasTop.png"],
        bottom1: ["/OurCapabilities/leasBottom1.png"],
        bottom2: ["/OurCapabilities/leasBottom2.png"],
      },
    },
    {
      title: "Property Management",
      heading: (
        <>
          {" "}
          Property <br /> Management{" "}
        </>
      ),
      content:
        "Our dedicated property management services ensure the continuous maintenance and operational efficiency of our parks, providing clients with a hassle-free experience and allowing them to focus on their core business activities.",
      images: {
        top: ["/OurCapabilities/propertyTop.png"],
        bottom1: ["/OurCapabilities/propertyBottom1.png"],
        bottom2: ["/OurCapabilities/propertyBottom2.png"],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
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

  // Fade in
  const fadeInX = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  return (
    <div className="bg-[#092241] ">
      {/* <div className="bg-[#092241] md:h-auto h-fit flex items-end justify-end"> */}
      <div className="bg-[#092241] md:h-auto h-fit ">
        {/* <div className="border-white w-full  maxTab xl-1024:ml-[44px] xl-1280:ml-[59px] xl-1366:ml-[60px] xl-1440:ml-[90px] xl-1536:ml-[137px] xl-1600:ml-[175px] xl-1920:ml-[17.5%]  lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden"> */}
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
          <div className="leftCon flex-1 max-h-[600px] ">
            <div className="pt-[40px]">
              <LineHead
                heading="Our Capabilities"
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>
            {/* Tabs */}
            <div className="tabs flex flex-nowrap  overflow-x-scroll overflow-y-hidden gap-4  xl-768:w-[95%] xl-1024:w-[90%] min-1280:w-[90%]">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 whitespace-nowrap h-[46px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px]
                                ${
                                  activeTab === index
                                    ? "bg-[#E30613] text-black"
                                    : ""
                                }`}
                  onClick={() => setActiveTab(index)} // Update active tab
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* Animated Content Section */}
            <div className="w-full pt-[30px] xl:pt-0">
              <motion.div
                key={activeTab} // Re-render on tab change
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // exit={{ x: -1000, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                className="w-[516px] xl-1024:w-[400px] contentArea xl-768:w-full"
              >
                <div className="flex flex-col  xl:pt-10 gap-7 xl-1280:h-[350px]  xl-1366:h-[300px] xl-768:w-full  w-[516px] xl-1024:w-[400px] contentArea xl-1024:h-[300px] h-[250px] xl-768:h-auto xl-768:gap-10 xl-1440:h-[330px] 2xl:h-[390px] ">
                  <h1 className="tabHeading text-4xl md:text-[40px] md:leading-[66px] lg:text-[60px] fpt-500 text-white font-medium border-b-[8px] border-[#F7E327] ]">
                    {tabs[activeTab].heading}
                    {/* dangerouslySetInnerHTML= {{ __html: tabs[activeTab].heading }} */}
                  </h1>
                  <p className="tabContent text-xl gradinetText xl-1024:text-lg">
                    {tabs[activeTab].content}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center xl-1366:pt-20 pt-[35px] xl:w-[60%] xl-1280:w-[80%] xl-1024:w-[90%] xl-1440:w-[90%] md:w-[100%] w-[100%] justify-between">
              {/* <div className="flex items-center gap-4 text-[#fff] text-[16px] group transition-transform duration-[400ms] cursor-pointer">
                <img
                  src="/buttonarrows/redarico.svg"
                  className="group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer"
                  alt=""
                />
                Explore Capabilities
              </div> */}

              <button className="flex group transition-transform duration-[400ms] items-center justify-center gap-3">
                <img
                  src="/buttonarrows/redarico.svg"
                  width={0}
                  height={0}
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                  alt="Red Arrow Icon"
                />
                <p className="text-[#ffffff] text-[16px] fsans-600">
                  Explore More
                </p>
              </button>

              <div className="flex gap-2 items-center">
                <button
                  className="rounded-full border flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.max(prev - 1, 0));
                    handleNext();
                  }}
                  disabled={activeTab === 0}
                >
                  <img className="w-10 h-10" src="/landingr.svg" alt="" />
                </button>
                <div className="text-base text-[#6C8DAB]">
                  {activeTab + 1} / {tabs.length}
                </div>

                <button
                  className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={() => {
                    setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
                    handlePrev();
                  }}
                  disabled={activeTab === tabs.length - 1}
                >
                  <img className="w-10 h-10" src="/landingl.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* Right Container with Swipers */}
          <div className="rightCon flex-1 lg:max-w-[50%]">
            {/* Top Image Swiper */}
            <div>
              <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="h-full w-full topSlider"
              >
                {tabs[activeTab].images.top.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div>
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex h-full">
              {/* Bottom Left Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full bottomLeft"
                >
                  {tabs[activeTab].images.bottom1.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Bottom Right Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full bottomright"
                >
                  {tabs[activeTab].images.bottom2.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Capabilities;
