"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TimeCard = ({ image, content, isAbove }) => {
  return (
    <div>
      <motion.div
        className={`${
          isAbove ? "topcard" : "bcard"
        } relative w-[300px] sm:block hidden h-[182px] overflow-hidden cursor-pointer`}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Image: covers the entire card */}
        <img
          src={image || "/time/t1.png"}
          alt="Time Card"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Animated overlay for content */}
        <motion.div
          className="absolute inset-0 bg-white flex items-center"
          variants={{
            rest: { y: "100%" }, // Hidden below the card initially
            hover: { y: "0%" }, // Slides up to reveal the content on hover
          }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        >
          <div className="p-4 text-[#474747] text-[14px] fsans-400">
            {content ||
              "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem "}
          </div>
        </motion.div>
      </motion.div>
      <div
        className={`sm:hidden border-[2px] border-white ${
          isAbove ? "topcard" : "bcard"
        } min-w-full h-[400px] overflow-hidden flex items-center flex-col cursor-pointer`}
      >
        {/* Image */}
        <div className="w-full h-[200px]">
          <img
            src={image || "/time/t1.png"}
            alt="Time Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Static Content Below Image */}
        <div className="h-full w-full flex items-center p-4 text-[#474747] text-[14px] fsans-400 bg-white">
          {content ||
            "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet"}
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
