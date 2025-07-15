"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const FormSec = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="relative mb-[85px]">
      <img
        src="/Career/formbg.png"
        alt="Blue bg"
        className="absolute w-full top-0 left-0 z-10"
      />
      <div className="flex relative z-50 xl:pt-[50px]">
        <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 px-[30px] py-[47px] overflow-hidden">
          <div className="lg:pb-[50px] pb-[20px] max-w-fit">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="fpt-600 xl:text-[60px] lg:text-[40px] md:text-[32px] text-[20px] text-white leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
            >
              Join Us
            </motion.h1>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0 }}
              className="bg-[#F7E327] h-[10px] w-full"
            ></motion.div>
          </div>
          {/* White Mask Layer */}
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            action=""
            className="flex flex-col gap-[24px] pb-[75px] sm:gap-[40px] relative z-10"
          >
            {/* Name & Company Name */}
            <div className="flex sm:flex-row flex-col gap-[24px]">
              <input
                type="text"
                placeholder="Name"
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
              />
            </div>
            {/* Phone & Email */}
            <div className="flex sm:flex-row flex-col gap-[24px]">
              <input
                type="email"
                placeholder="Email"
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full"
              />
            </div>
            {/* Subject */}

            {/* Message */}

            <div className="w-full flex justify-between">
              <button
                type="submit"
                className="bg-[#E30613] w-fit gap-[10px] px-[21px] py-[14px] flex items-center text-base fsans-600 text-white justify-around rounded-3xl"
              >
                <p>Submit</p>
                <img src="/rightUpArrow.svg" alt="Arrow" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default FormSec;
