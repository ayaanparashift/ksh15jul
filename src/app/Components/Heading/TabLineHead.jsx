"use client";
import React from "react";
import { motion } from "framer-motion";

const TabLineHead = ({ heading, acbtn, setAcBtn }) => {
  const spotlight_btn_content = [
    { title: "Case Studies" },
    { title: "News" },
    { title: "Press Release" },
    // { title: "Others" },
  ];

  return (
    <div className="relative max-w-[1280px] border-b border-[#ffffff80] pb-[20px] lg:mb-[66px] mb-[36px] overflow-hidden whitespace-nowrap tablinehead">
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
        className="flex items-center justify-between w-full lg:gap-0 gap-[20px]"
      >
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff] tbhead">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] py-[10px] transition-colors duration-[600ms] flex-1 flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
                acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
              }`}
            >
              {btntitle.title}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Border Using Empty Div */}
      {/* <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] opacity-[0.34] bg-[#D7D7D7]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.34 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
      /> */}
    </div>
  );
};

export default TabLineHead;
