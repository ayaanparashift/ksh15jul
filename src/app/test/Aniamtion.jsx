"use client";
import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }} // Start hidden from top
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }} // Reveal completely
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="flex flex-col items-center justify-center my-28"
    >
      {/* Line */}
      <motion.div
        className="line w-[2px] bg-red-500 h-[60px]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div className="Content bg-lime-300 p-3 overflow-hidden">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          deserunt!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Animation;
