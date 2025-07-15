"use client";
import React from "react";
import { motion } from "framer-motion";
import LineHead from "./Heading/LineHead";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for child elements
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 130 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};

const Esg = () => {
  return (
    <div className="h-fit">
      <div className="WContainer py-[56px] fix12">
        <LineHead heading={"SUSTAINABILITY"} clr="text-[#092241]" />
        <motion.div
          className="lg:flex md:gap-[20px] "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="lg:w-[40%]">
            <motion.h3
              variants={itemVariants}
              className="text-[#092241] text-3xl md:text-[60px] font-semibold leading-[105%]"
            >
              Safe Guarding the Nature is part of our DNA
            </motion.h3>
            <div className="pt-[32px]">
              <motion.h3
                variants={itemVariants}
                className="text-[18px] leading-[26px] text-[#6C8DAB]"
              >
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et
              </motion.h3>
              <div className="pt-[23px] flex flex-col gap-4 w-[305px]">
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">01</span>{" "}
                  Environment
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">02</span>{" "}
                  Social
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-[16px] fsans-600 leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]"
                >
                  <span className="font-bold text-red-700 pr-[11px]">03</span>{" "}
                  Governance
                </motion.p>
              </div>
              {/* <motion.div
                // initial={{ y: 130, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 1.5, delay: 0.5 }}
                // viewport={{ once: true }}
                variants={itemVariants}
                className="flex cursor-pointer group transition-transform duration-[400ms] items-center gap-4 pt-[45px] justify-between font-semibold text-[#092241] text-[16px] w-fit"
              >
                <img
                  src="/buttonarrows/redarico.svg"
                  className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
                  alt=""
                />
                Explore More
              </motion.div> */}

              <motion.button
                variants={itemVariants}
                className="flex pt-[45px] group transition-transform duration-[400ms] items-center justify-center gap-3"
              >
                <img
                  src="/buttonarrows/redarico.svg"
                  width={0}
                  height={0}
                  className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                  alt="Red Arrow Icon"
                />
                <p className="text-[#092241] text-[16px] fsans-600">
                  Explore More
                </p>
              </motion.button>
            </div>
          </div>
          <div className="hidden lg:w-[60%] md:flex items-center justify-center">
            <video
              src="/Esg/KSH Final Sustainability.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Esg;
