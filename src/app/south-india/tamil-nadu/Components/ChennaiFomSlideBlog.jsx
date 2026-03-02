"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const tabsData = [
  {
    title: "KSH Infra to Develop Second Industrial Park in Tamil Nadu",
    description: "",
    image: "/blog/blogin/sld/imp.webp",
    url: "https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/ksh-infra-to-develop-second-industrial-park-in-tamil-nadu-/76234",
  },
  {
    title:
      "KSH Infra to invest over Rs 550 crore in 60-acre logistics park in Tamil Nadu",
    description: "",
    image: "/blog/blogin/sld/evo.webp",
    url: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-to-invest-over-rs-550-crore-in-60-acre-logistics-park-in-tamil-nadu/articleshow/122392746.cms?from=mdr",
  },
];

const ChennaiFomSlideBlog = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < tabsData.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className="lg:py-[60px] pt-0 flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
      <div className="relative h-fit lg:h-[500px] flex lg:flex-row flex-col overflow-hidden w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px]">
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
          <div className="px-[5%] md:px-0 xl-768:pr-[40px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 w-full">
            <h2 className="text-xl pb-4 md:pb-0 text-white font-semibold">
              News
            </h2>
          </div>

          <div className="relative w-full h-[250px] lg:h-[150px] overflow-hidden px-[5%] md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                className="text-white"
              >
                <p className="md:w-[60%] max-w-full md:mx-0 mx-auto pt-6 md:pt-5 md:pb-5 text-[24px] line-clamp-4 text-[#6C8DAB]">
                  {tabsData[activeIndex].title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center pt-[0] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
            <motion.div
              className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <Link
                href={tabsData[activeIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
              >
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
              </Link>
            </motion.div>
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

        <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence>
              {tabsData.slice(0, activeIndex + 1).map((tab, idx) => (
                <motion.img
                  key={`img-${idx}`}
                  src={tab.image}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  style={{ zIndex: idx }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChennaiFomSlideBlog;
