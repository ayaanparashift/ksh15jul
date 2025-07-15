"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const SustainGovernence = () => {
  const [openIndex, setOpenIndex] = useState(0); // Always keeps one item open

  const accordionData = [
    {
      title: "Ethics & Compliance",
      content:
        "The KSH INFRA Code of Conduct Handbook, which we follow meticulously, sets a high standard for compliance. This encompasses every aspect of how our team interacts with internal and external stakeholders to how our projects are commissioned and managed.",
      image: "Sustainability/Ethics&Compliance.png",
    },
    {
      title: "Safety",
      content:
        "KSH INFRA parks offer top-notch amenities, prioritise safety protocols and facilities.  Safety is integral to our operations, allowing us to deliver reliable, compliant and sustainable infrastructure.",
      image: "Sustainability/SustainabilitySafety.png",
    },
    {
      title: "Value Creation",
      content:
        "We create value for society and our stakeholders in many ways, including job opportunities, tax payment support, participation in the supply chain, and investment in local communities.",
      image: "Sustainability/govb.png",
    },
  ];

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-[#092241]">
      <div className="min-1366:ml-[calc((100vw-1250px)/2)] xl-1280:ml-[60px] xl-1024:ml-[50px] pb-12 sm:pb-0">
        <div className="relative pt-14 pb-4 md:pt-16 md:pb-14 max-w-[1250px] overflow-hidden flex justify-start">
          {/* <motion.h1
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            className="ftp-500 md:text-[44px] sm:text-[32px] text-[24px] whitespace-nowrap overflow-hidden text-white border-[#D7D7D7] border-b-[1px] w-[90%] mx-auto lg:w-full"
          >
            Governance
          </motion.h1> */}

          <div className="origin-left w-full">
            <h1 className="ftp-500 md:text-[44px] sm:text-[32px] text-[24px] whitespace-nowrap overflow-hidden text-white border-[#D7D7D7] border-b-[1px] w-[90%] mx-auto lg:w-full">
              Governance
            </h1>
            <p className="gradinetText fix12 pt-10 text-[20px] leading-[26px]">
              At KSH INFRA, governance starts from our rigorous procurement
              processes that extends to every aspect of our supply chain.
              Complete transparency, efficiency, and clear accountability are
              essential components of our development strategy. Our governance
              protects your investment while delivering high growth.
            </p>
          </div>
          {/* <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute h-full left-0 top-0 bg-[#092241] z-20 w-full"
          /> */}
        </div>

        {/* Accordion Content */}
        <div className="flex justify-between max-w-screen xl-1280:gap-14">
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0.3 }}
            className="w-[90%] mx-auto left min-1024:w-auto min-1024:mx-0"
          >
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="xl-1024:w-[450px] xl:w-[525px] max-w-full border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h1 className="text-white fsans-700 md:text-[22px] text-[16px] uppercase py-5">
                    {item.title}
                  </h1>
                  <img
                    src={
                      openIndex === index
                        ? "Sustainability/faq_minus.svg"
                        : "Sustainability/faq_plus.svg"
                    }
                    alt=""
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index
                      ? "max-h-[300px] opacity-100 transform translate-y-0 scale-100"
                      : "max-h-0 opacity-0 transform -translate-y-2 scale-95"
                  }`}
                >
                  <p className="text-[#6C8DAB] fsans-400 text-base pt-0 pb-10">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Image Change with Fade-in Effect */}
          <div className="relative overflow-hidden hidden lg:block right">
            <AnimatePresence mode="wait">
              <motion.img
                key={accordionData[openIndex]?.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, ease: [0.7, 0, 0.4, 1] },
                }}
                viewport={{ once: false }}
                src={accordionData[openIndex]?.image}
                className="xl-1024:w-[475px] max-w-[700px] max-h-[509px] h-[509px]"
                alt="Accordion Image"
              />
            </AnimatePresence>
            {/* <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute h-full left-0 top-0 bg-[#092241] z-20 w-full"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainGovernence;
