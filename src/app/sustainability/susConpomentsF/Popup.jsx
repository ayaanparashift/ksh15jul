import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.3 }}
          className="fixed max-w-screen w-screen inset-0  flex  items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            className="flex flex-col md:flex-row-reverse max-w-full items-start pt-5 md:pt-10 pr-5 md:gap-0 gap-5 md:pr-10 bg-white"
          >
            <button
              onClick={onClose}
              className="w-full md:w-fit flex justify-end "
            >
              <img
                src="/Sustainability/closepopf.svg"
                alt="Close Popup"
                className="w-[40px] h-[40px]"
              />
            </button>
            <div className="bg-white md:pb-[40px] md:pl-[40px] pl-[20px] pb-[20px] w-[700px] max-w-full flex flex-col gap-[10px] md:gap-[20px] relative">
              {/* <button
              onClick={onClose}
              className="absolute top-[-10%] right-0 md:right-[-10%]"
            >
              <img
                src="/Sustainability/closepopf.svg"
                alt="Close Popup"
                className="w-[60px] h-[60px]"
              />
            </button> */}

              <p className="fsans-400 text-[14px] md:text-[16px] md:leading-[26px]">
                At KSH INFRA, our growth and development strategy is firmly
                rooted in genuine environmental cause. KSH INFRA Parks are a
                testament to this commitment—designed to deliver measurable
                operational savings while significantly reducing environmental
                impact. <br />
                Going beyond compliance with green building standards, we have
                integrated sustainable practices across the park, including the
                plantation of over 1,000 trees, creating a naturally vibrant and
                rejuvenating work environment for all stakeholders.
              </p>
              <p className="fsans-400 text-[14px] md:text-[16px] md:leading-[26px]">
                Here are just a few ways KSH INFRA leads the way in
                environmental responsibility:
              </p>
              <ul className="list-disc leading-[26px] fsans-400 pl-[20px] md:text-[16px] text-[14px]">
                <li>
                  Using material produced with the least amount of energy
                  expenditure
                </li>
                <li>
                  Sustainable usage of water resources, extending beyond the
                  lifecycle of a park
                </li>
                <li>
                  Efficient and eco-conscious construction processes, reducing
                  the need for carbon-intensive methods
                </li>
                <li>Effective waste management and recycling protocols</li>
                <li>
                  Creating future-proof, adaptable, customisable, and durable
                  designs
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
