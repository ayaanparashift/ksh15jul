"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const Accordion = ({ accordionData, acch, accw }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile(); // 👈 new hook here

  return (
    <div
      className={`w-full min-1920:max-w-[90%] pl-0 md:pl-[max(5%,calc((100vw-1250px)/2))] md:pr-[max(5%,calc((100vw-1250px)/2))] xl:pl-0 xl:ml-auto flex flex-col gap-[8px] ${
        acch > 450 ? "xl:h-fit" : "xl:h-[450px]"
      } ${accw > 80 ? "w-full" : "xl:w-[90%]"}`}
    >
      {accordionData.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full cursor-pointer p-5 backdrop-blur-md border border-transparent ${
              isActive ? "bg-[#6C8DAB]" : "bg-[#EEF0F390]"
            } transition-colors duration-300`}
          >
            {/* Title row */}
            <div className="flex items-center justify-between">
              <p
                className={`text-[16px] md:text-[22px] fsans-600 leading-[150%] font-semibold transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {item.title}
              </p>

              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12H6"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 12H12M12 12H6M12 12V6M12 12V18"
                    stroke="#E30613"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* Animated content container */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.7, 0, 0.4, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="text-white text-[14px] md:text-[16px] min-1920:text-[18px] leading-[150%] fsans-400 pt-2">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
