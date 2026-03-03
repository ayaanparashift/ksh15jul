"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquireNow from "../../../Components/EnquireNow";

const ChennaiFomHero = () => {
  const [showEnquire, setShowEnquire] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState(0);

  const mapTabs = [
    {
      title: "Chennai",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d4536.664621443366!2d79.79894433132155!3d12.905910574724702!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzIyLjMiTiA3OcKwNDcnNTkuOCJF!5e0!3m2!1sen!2sin!4v1772533207496!5m2!1sen!2sin",
    },
    {
      title: "Hosur",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.708727700312!2d77.95131339999999!3d12.601438199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badd5005bf8ec2d%3A0x6fc352b9c63e655e!2sKSH%20Hosur%20Park%20I!5e0!3m2!1sen!2sin!4v1772517243315!5m2!1sen!2sin",
    },
  ];

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
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] mr-[max(5%,calc((100vw-1250px)/2))] pt-[120px] lg:pt-[150px] pb-12 flex items-center lg:justify-center justify-evenly min-1366:gap-[80px] md:gap-[50px] gap-[20px] lg:flex-row flex-col-reverse">
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

          <div className="xl:w-1/2 flex flex-col justify-center items-end w-full">
            <div className="w-full lg:w-[688.5px] 2xl:w-[810px] max-w-full">
              <div className="tabs md:justify-start justify-start flex lg:gap-2 mb-4">
                {mapTabs.map((tab, index) => (
                  <button
                    key={tab.title}
                    className={`px-[12px] text-[16px] fsans-600 py-[10px] flex-1 flex items-center justify-center border-b-[4px] lg:border lg:rounded-[10px] rounded-none h-[46px] w-full lg:w-[220px] transition-colors duration-500 border-opacity-50
          ${
            activeMapTab === index
              ? "lg:bg-[#E30613] lg:text-white border-[#E30613]"
              : "bg-transparent md:text-black border-[#D7D7D7] text-gray-500"
          }`}
                    onClick={() => setActiveMapTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mapTabs[activeMapTab].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
                >
                  <iframe
                    src={mapTabs[activeMapTab].iframe}
                    className="w-full h-[300px] lg:h-[400px] 2xl:h-[500px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${mapTabs[activeMapTab].title} map`}
                  ></iframe>
                </motion.div>
              </AnimatePresence>
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
