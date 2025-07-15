"use client";
import React from "react";
import { motion } from "framer-motion";
const ParkInfo = () => {
  const stats = [
    { value: "1.2 MN SQ. FT.", label: "Total <br/> Area" },
    { value: "05 No.", label: "Total<br/>Buildings" },
    { value: "Pune,<br/>Maharashtra", label: "Park<br/>Location" },
  ];

  return (
    <div
      className="flex py-[84px] w-full justify-between items-center"
      id="park-highlight"
    >
      {/* Left Image */}
      <div className="flex md:flex-row flex-col fix12 justify-between items-center xl:gap-[160px] gap-[80px]">
        <div className="md:w-1/2 w-full relative">
          <img
            src="/ParkPage/chakan-2/c2sp.png"
            alt="Park Info"
            className="w-full"
          />
          {/* <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
            initial={{ x: 0 }}
            whileInView={{ x: "-100%" }}
            transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
          /> */}
        </div>

        {/* Right Stats Section */}
        <motion.div className="md:w-1/2 w-full space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between md:gap-0 gap-[20px]  items-center pb-4"
            >
              <div className="border-r w-1/2 md:w-[60%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center">
                <h1
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                  className="leading-[111%] text-[24px] md:text-[32px] fpt-600 xl:text-[44px] text-[#E72430]"
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: stat.label }}
                className="xl:text-[25px] md:text-[20px]  leading-[111%] text-[18px] fsans-600 text-[#253B57] text-right whitespace-pre-line"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ParkInfo;
