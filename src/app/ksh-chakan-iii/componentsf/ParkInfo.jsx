"use client";

import { motion } from "framer-motion";
const ParkInfo = () => {
  const stats = [
    { value: "1.50 MN SQ. FT.", label: "Total <br/> Area" },
    { value: "08", label: "Total<br/>Buildings" },
    { value: "Chakan,<br/>Pune", label: "Park<br/>Location" },
  ];

  return (
    <div
      className="flex md:py-[84px] py-10 w-full justify-between items-center"
      id="park-highlight"
    >
      {/* Left Image */}
      <div className="flex md:flex-row flex-col fix12 justify-between items-center xl:gap-[160px] lg:gap-[80px] gap-10">
        <div className="md:w-1/2 w-full relative">
          <img
            src="/ParkPage/chakan-3/ch3sp.png"
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
                <h2
                  className="leading-[111%] text-[24px] md:text-[32px] fpt-600 xl:text-[44px] text-[#E72430]"
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: stat.label }}
                className="xl:text-[25px] md:text-[20px]  leading-[111%] text-[18px] fsans-600 text-[#253B57] text-right whitespace-pre-line"
              />
            </div>
          ))}
          <div>
            <p className="fsans-600 text-[#00000050] text-[16px]">
              *Nearing Completion in December 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParkInfo;
