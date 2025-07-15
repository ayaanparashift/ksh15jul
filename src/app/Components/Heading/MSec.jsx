"use client";
import React from "react";
import { motion } from "framer-motion";

const MSec = ({ heading, clr, bclr, bopacity, fontSize, lineHeigth }) => {
  return (
    <div className="overflow-x-hidden h-fit w-full">
      <div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 2, ease: [0.7, 0, 0.4, 1] }}
        className="overflow-x-hidden h-fit md:whitespace-nowrap"
      >
        <h2
          className={`leading-[26px] w-full text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-black border-opacity-[0.34] fsans-600 text-[#092241] text-white MSec-text`}
          style={{ fontSize: `${fontSize}px`, lineHeight: `${lineHeigth}px` }}
        >
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default MSec;
