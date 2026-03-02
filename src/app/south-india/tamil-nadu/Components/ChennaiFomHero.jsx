"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquireNow from "../../../Components/EnquireNow";

const ChennaiFomHero = () => {
  const [showEnquire, setShowEnquire] = useState(false);

  const handleEnquireClick = (e) => {
    e.preventDefault();
    setShowEnquire(true);
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
  };

  const handleCloseEnquire = () => {
    setShowEnquire(false);
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  };

  return (
    <>
      <div className="bg-[#fff] bg-cover bg-center z-0 relative">
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] lg:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] pt-[120px] lg:pt-[150px] pb-12 flex items-center lg:justify-center justify-evenly min-1366:gap-[80px] md:gap-[50px] gap-[20px] lg:flex-row flex-col-reverse">
          <div className="flex flex-col flex-1 max-w-full gap-5 min-1366:gap-10 justify-center relative">
            <div className="flex flex-col lg:max-w-fit">
              <motion.h1 className="fpt-500 xl:text-[50px] lg:text-[40px] md:text-[32px] text-[20px] text-black leading-[150%] md:leading-[105%] 2xl:text-[64px]">
                Grade A Industrial Spaces on <br className="lg:hidden" />
                Long-Term Lease
              </motion.h1>
              <motion.div className="bg-[#F7E327] h-[10px] w-full" />
            </div>

            <motion.p className="fsans-500 gradinetTextw text-[14px] lg:text-[14px] min-1366:text-[16px] leading-[26px]">
              Institutional-quality industrial and logistics infrastructure
              designed for scalability, operational efficiency, and long-term
              value creation. Secure, future-ready assets that support sustained
              business growth.
            </motion.p>
            <div>
              <motion.button
                onClick={handleEnquireClick}
                className="bg-[#E30613] max-w-fit h-[50px] flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group"
              >
                <p>Enquire Now</p>
                <img
                  className="h-[24px] w-[24px] group-hover:-rotate-90 duration-300 transition-transform"
                  src="/downarrow.svg"
                  alt="Arrow"
                />
              </motion.button>
            </div>
          </div>

          <div className="xl:flex-1 flex flex-col justify-center items-end">
            <div className="flex items-end justify-center flex-col lg:w-[688.5px] 2xl:w-[810px] lg:h-[476px] 2xl:h-[560px] max-w-full relative">
              <div className="relative">
                <div className="relative h-fit overflow-hidden flex lg:justify-center justify-end w-full">
                  <img
                    src="/south/southmap.webp"
                    className="object-cover w-full md:inline-block hidden"
                    alt="some"
                  />
                </div>
              </div>

              <div>
                <img
                  src="/south/southmapmob.webp"
                  className="object-cover md:hidden inline-block"
                  alt="some"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showEnquire && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000]"
              onClick={handleCloseEnquire}
            />

            <motion.div
              className="fixed inset-0 z-[1001001] flex justify-end"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              onClick={handleCloseEnquire}
              exit={{
                x: "100%",
                transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
              }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full md:w-[510px] h-full bg-white shadow-lg overflow-y-auto"
              >
                <EnquireNow closeEnquire={handleCloseEnquire} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChennaiFomHero;
