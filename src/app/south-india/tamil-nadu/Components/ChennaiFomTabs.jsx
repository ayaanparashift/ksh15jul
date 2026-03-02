"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LineHead from "../../../Components/Heading/LineHead";

const ChennaiFomTabs = () => {
  const tabs = [
    {
      title: "Ready Move-In Industrial Spaces",
      heading: "Ready Move-In Industrial Spaces",
      content:
        "Fully developed, plug-and-play facilities that enable faster commissioning and immediate operational readiness - reducing downtime and accelerating market entry.",
      images: {
        top: ["/south/tab1.webp"],
      },
    },
    {
      title: "Built-to-Suit",
      heading: "Built-to-Suit",
      content:
        "Customized infrastructure solutions designed around your technical, operational, and expansion requirements - ensuring optimal layout efficiency and long-term functionality.",
      images: {
        top: ["/south/tab2.webp"],
      },
    },
    {
      title: "All Compliances in Place",
      heading: "All Compliances in Place",
      content:
        "Approvals, statutory clearances, and regulatory compliances meticulously managed - ensuring seamless occupancy and complete peace of mind.",
      images: {
        top: ["/south/tab3.webp"],
      },
    },
    {
      title: "Future-Ready Industrial Ecosystems",
      heading: "Future-Ready Industrial Ecosystems",
      content:
        "Strategically located parks built with sustainable design, smart infrastructure, and integrated amenities - creating efficient, green, and growth-oriented industrial environments.",
      images: {
        top: ["/south/tab4.webp"],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#092241] md:pb-0 pb-10 lg:h-[500px] 2xl:h-[500px]">
      <div className="bg-[#092241] h-full flex items-end justify-end">
        <div className="border-white w-full maxTab ml-[max(5%,calc((100vw-1250px)/2))] lg:pb-0 pb-[70px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden h-full">
          <div className="leftCon flex-1 h-full">
            <div className="2xl:pt-[66px] pt-10 xl-1024:pt-10">
              <LineHead
                heading="Why Choose KSH INFRA?"
                bclr="#d7d7d7"
                bopacity="34%"
                clr="text-white"
              />
            </div>

            <div className="tabs mt-[-5%] lg:pt-0 pt-5 flex flex-wrap overflow-x-auto gap-2 lg:gap-4 lg:pr-4 w-[95%] xl-1024:w-[90%] scrollbar-hide">
              {tabs.map((tab, index) => (
                <div
                  key={tab.title}
                  className={`lg:px-3 px-2 flex items-center justify-center cursor-pointer transition-colors duration-300 whitespace-nowrap h-[36px] lg:h-[46px] lg:!text-[16px] !text-[14px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] ${
                    activeTab === index ? "bg-[#E30613] text-black" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </div>
              ))}
            </div>

            <div className="w-full h-fit xl:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                  className="xl:w-[80%] w-full contentArea xl:h-auto h-[100px]"
                >
                  <div className="flex flex-col">
                    <h2 className="text-3xl xl-1024:text-xl pt-[20px] xl-1024:pt-7 pb-4 text-white fpt-600">
                      {tabs[activeTab].heading}
                    </h2>
                    <p className="tabContent text-base 2xl:text-lg text-[#C1C1C1]">
                      {tabs[activeTab].content
                        .split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                            <br />
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* <div className="rightCon xl:block hidden flex-1 lg:max-w-[638px] h-[706px] relative"> */}
          <div className="rightCon flex-1 w-full lg:max-w-[638px] !h-[500px] relative">
            <AnimatePresence>
              {tabs.slice(0, activeTab + 1).map((tab, idx) => (
                <motion.div
                  key={`top-${idx}`}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ zIndex: idx }}
                >
                  <img
                    src={tab.images.top[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChennaiFomTabs;
