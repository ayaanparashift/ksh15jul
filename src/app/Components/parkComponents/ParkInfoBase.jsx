"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ParkCertificateEnquireForm from "./ParkCertificateEnquireForm";

const ParkInfoBase = ({
  stats,
  imageSrc,
  note,
  rootClassName = "flex pt-10 lg:pb-20 pb-10 w-full justify-between items-center",
  valueColClassName = "border-r w-1/2 md:w-[60%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center",
}) => {
  const [showEnquire, setShowEnquire] = useState(false);
  const pathname = usePathname();
  const sourceUrl = `https://www.kshinfra.com${pathname || ""}`;

  const openEnquire = () => {
    setShowEnquire(true);
  };

  const closeEnquire = () => {
    setShowEnquire(false);
  };

  useEffect(() => {
    document.body.style.overflow = showEnquire ? "hidden" : "auto";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [showEnquire]);

  return (
    <>
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
            {/* <div className="lg:pt-10">
              <motion.button
                onClick={openEnquire}
                className="bg-[#E30613] max-w-fit h-fit flex items-center text-base fsans-600 text-white px-[21px] py-[14px] gap-[10px] rounded-3xl group"
              >
                <p className="text-left flex items-center">
                  Read Our Environmental Certificate
                </p>
                <img
                  className="h-[24px] w-[24px] group-hover:-rotate-90 duration-300 transition-transform"
                  src="/downarrow.svg"
                  alt="Arrow"
                />
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showEnquire ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000]"
              onClick={closeEnquire}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.div
              className="fixed inset-0 z-[1001001] flex items-center justify-center lg:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={closeEnquire}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <motion.div
                onClick={(event) => event.stopPropagation()}
                className="lg:w-fit w-[90%] mx-auto max-h-[90vh] bg-[#092241] overflow-y-auto px-10 py-5 shadow-lg"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <ParkCertificateEnquireForm
                  closeEnquire={closeEnquire}
                  source={sourceUrl}
                />
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ParkInfoBase;
