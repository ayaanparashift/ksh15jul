"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
const CaseINForm = () => {
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
      <div className="flex relative z-50 xl:pt-[50px] mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="bg-[#141D28] flex flex-col items-stretch justify-center flex-1 pl-[max(5%,calc((100vw-1250px)/2))] pr-[60px] pt-[47px] sm:pb-0 pb-[47px] overflow-hidden">
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
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
              />
            </div>
            {/* Phone & Email */}
            <div className="flex sm:flex-row flex-col gap-[24px]">
              <input
                type="number"
                placeholder="Phone"
                className="border-b appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b bg-[#263548] text-white border-b-[#146BD7] outline-none fsans-400 text-[16px] leading-[111%] px-[10px] py-[14px] w-full sm:w-1/2"
              />
            </div>
            {/* Subject */}
            <div className="relative w-full">
              <select
                name="Subject"
                id="sub"
                className="w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
              >
                <option value="">Subject</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M19.5888 9.31081L13.4983 15.3051C13.3654 15.4366 13.186 15.5103 12.9991 15.5103C12.8122 15.5103 12.6328 15.4366 12.4999 15.3051L6.4094 9.31211C6.27569 9.18071 6.09572 9.10709 5.90825 9.10709C5.72078 9.10709 5.54081 9.18071 5.4071 9.31211C5.34126 9.3763 5.28893 9.45302 5.2532 9.53775C5.21747 9.62248 5.19907 9.71351 5.19907 9.80546C5.19907 9.89742 5.21747 9.98844 5.2532 10.0732C5.28893 10.1579 5.34126 10.2346 5.4071 10.2988L11.4963 16.2918C11.8974 16.6856 12.437 16.9062 12.9991 16.9062C13.5612 16.9062 14.1008 16.6856 14.5019 16.2918L20.5911 10.2988C20.6571 10.2346 20.7096 10.1578 20.7455 10.0729C20.7813 9.9881 20.7998 9.89692 20.7998 9.80481C20.7998 9.7127 20.7813 9.62152 20.7455 9.53667C20.7096 9.45182 20.6571 9.37502 20.5911 9.31081C20.4574 9.17941 20.2774 9.10579 20.09 9.10579C19.9025 9.10579 19.7225 9.17941 19.5888 9.31081Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            {/* Message */}
            <div className="w-full">
              <textarea
                className="h-[118px] resize-none w-full appearance-none outline-none border-b border-b-[#146BD7] bg-[#263548] text-white px-[10px] py-[14px]"
                name="Message"
                placeholder="Message"
                id="message"
              ></textarea>
            </div>
            <div className="w-full flex justify-between">
              <div>
                <button
                  type="button"
                  className="flex items-center gap-2 text-white text-lg border-b border-white hover:opacity-80"
                  onClick={handleClick}
                >
                  + Attach CV
                </button>
                <input type="file" ref={fileInputRef} className="hidden" />
              </div>
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
        <div className="min-h-full overflow-hidden relative">
          <img
            className="object-cover min-h-full min-w-full"
            src="/Career/careerformimg.png"
            alt=""
          />
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.1, once: true }}
            className="absolute top-0 left-0 bg-[url(/Career/formbg.png)] bg-cover bg-no-repeat h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default CaseINForm;
