"use client";

import { motion } from "framer-motion";

const ParkInfoBase = ({
  stats,
  imageSrc,
  note,
  rootClassName = "flex pt-10 lg:pb-20 pb-10 w-full justify-between items-center",
  valueColClassName = "border-r w-1/2 md:w-[60%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center",
}) => {
  return (
    <div className={rootClassName} id="park-highlight">
      <div className="flex md:flex-row flex-col fix12 justify-between items-center 2xl:gap-[160px] lg:gap-[80px] gap-10">
        <div className="md:w-1/2 w-full relative">
          <img src={imageSrc} alt="Park Info" className="w-full" />
        </div>

        <motion.div className="md:w-1/2 w-full space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between md:gap-0 gap-[20px] items-center pb-4"
            >
              <div className={valueColClassName}>
                <h2
                  dangerouslySetInnerHTML={{ __html: stat.value }}
                  className="leading-[111%] text-[24px] md:text-[32px] fpt-600 xl:text-[44px] text-[#E72430]"
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: stat.label }}
                className="xl:text-[25px] md:text-[20px] leading-[111%] text-[18px] fsans-600 text-[#253B57] text-right whitespace-pre-line"
              />
            </div>
          ))}
          {note ? (
            <div>
              <p className="fsans-600 text-[#00000050] text-[16px]">{note}</p>
            </div>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
};

export default ParkInfoBase;
