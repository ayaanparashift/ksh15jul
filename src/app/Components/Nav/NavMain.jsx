"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavTab from "./NavTab";
import Navlist from "./Navlist";
import { useRouter } from "next/navigation";
import EnquireNow from "../../Components/EnquireNow";
import Link from "next/link";

const DURATION = 1;
const EASING = [0.7, 0, 0.4, 1];

export default function NavMain({ onClose }) {
  const router = useRouter();
  // const goToContact = () => router.push("/contact-us");
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

  // return (
  //   <>
  //     <motion.div
  //       key="navmain"
  //       initial={{ height: 0 }}
  //       animate={{ height: "100vh" }}
  //       exit={{ height: 0, transition: { duration: DURATION, ease: EASING } }}
  //       transition={{ duration: DURATION, ease: EASING }}
  //       className="fixed top-0 left-0 w-full z-[10000000] overflow-hidden"
  //     >
  //       <div className="w-full h-full flex flex-col">
  //         {/* Top Bar */}
  //         <div className="flex justify-between min-w-full bg-white ">
  //           <Link
  //             href="/"
  //             className="w-[63%] flex items-center pl-[max(5%,calc((100vw-1250px)/2))] py-[20px] border-r border-[#0E3464]"
  //           >
  //             <img
  //               src="/nav/bkl.svg"
  //               alt="Black KSH logo"
  //               className="h-[65.12px] w-[186.56px]"
  //             />
  //           </Link>
  //           <div className="flex gap-[30px] min-1440:gap-[85px] items-center py-[20px] flex-[0.4]  w-[37%] pr-[60px] min-1440:pr-[100px]">
  //             <div className="flex items-center gap-[10px]">
  //               {["/user.svg", "/search.svg"].map((icon, i) => (
  //                 <motion.div
  //                   key={i}
  //                   className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center"
  //                   initial={{ opacity: 0, y: -20 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.2, ease: EASING },
  //                   }}
  //                 >
  //                   <img src={icon} alt="Icon" />
  //                 </motion.div>
  //               ))}

  //               <motion.div
  //                 onClick={handleEnquireClick}
  //                 className="bg-[#E30613] w-[175px] flex items-center text-base fsans-600 text-white justify-around py-3 px-1 rounded-3xl cursor-pointer"
  //                 initial={{ opacity: 0, y: -20 }}
  //                 animate={{
  //                   opacity: 1,
  //                   y: 0,
  //                   transition: { duration: 0.2, ease: EASING },
  //                 }}
  //               >
  //                 <p>Enquire Now</p>
  //                 <img className="" src="/rightUpArrow.svg" alt="Arrow" />
  //               </motion.div>
  //             </div>

  //             {/* Close Button */}
  //             <div className="w-8 h-8 cursor-pointer" onClick={onClose}>
  //               <img src="/nav/close.svg" alt="Close" className="w-8 h-8" />
  //             </div>
  //           </div>
  //         </div>

  //         {/* Main Layout: Tabs + List */}
  //         <div className="flex flex-col lg:flex-row flex-grow overflow-y-hidden">
  //           <NavTab />
  //           <Navlist />
  //         </div>
  //       </div>
  //     </motion.div>

  //     <AnimatePresence>
  //       {showEnquire && (
  //         <>
  //           <motion.div
  //             className="fixed inset-0 bg-black bg-opacity-70 z-[1000000000]"
  //             onClick={handleCloseEnquire}
  //           />
  //           <motion.div
  //             className="fixed z-[10000000000] top-0 right-0 md:right-0 min-h-screen w-[510px] overflow-hidden"
  //             initial={{ x: "100%" }}
  //             animate={{ x: 0 }}
  //             exit={{ x: "100%" }}
  //             transition={{ duration: 1, ease: EASING }}
  //             onClick={(e) => e.stopPropagation()}
  //           >
  //             <EnquireNow closeEnquire={handleCloseEnquire} />
  //           </motion.div>
  //         </>
  //       )}
  //     </AnimatePresence>
  //   </>
  // );
  return (
    <>
      <motion.div
        key="navmain"
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        exit={{ height: 0, transition: { duration: DURATION, ease: EASING } }}
        transition={{ duration: DURATION, ease: EASING }}
        className="fixed top-0 left-0 w-full z-[10000000] overflow-hidden"
      >
        <div className="w-full h-full flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-between min-w-full bg-white ">
            <Link
              href="/"
              className="w-[60%] flex items-center pl-[max(5%,calc((100vw-1250px)/2))] py-[20px] border-r border-[#0E3464]"
            >
              <img
                src="/nav/bkl.svg"
                alt="Black KSH logo"
                className="h-[65.12px] w-[186.56px]"
              />
            </Link>
            <div className="flex gap-[30px] min-1440:gap-[55px] items-center py-[20px] flex-[0.4]  w-[40%] pr-[max(5%,calc((100vw-1250px)/2))]">
              <div className="flex items-center gap-[10px]">
                {["/user.svg", "/search.svg"].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.2, ease: EASING },
                    }}
                  >
                    <img src={icon} alt="Icon" />
                  </motion.div>
                ))}

                <motion.div
                  onClick={handleEnquireClick}
                  className="bg-[#E30613] w-[175px] flex items-center text-base fsans-600 text-white justify-around py-3 px-1 rounded-3xl cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2, ease: EASING },
                  }}
                >
                  <p>Enquire Now</p>
                  <img className="" src="/rightUpArrow.svg" alt="Arrow" />
                </motion.div>
              </div>

              {/* Close Button */}
              <div className="w-8 h-8 cursor-pointer" onClick={onClose}>
                <img src="/nav/close.svg" alt="Close" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Main Layout: Tabs + List */}
          <div className="flex flex-col lg:flex-row flex-grow overflow-y-hidden">
            <NavTab />
            <Navlist />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showEnquire && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000000000]"
              onClick={handleCloseEnquire}
            />
            <motion.div
              className="fixed z-[10000000000] top-0 right-0 md:right-0 min-h-screen w-[510px] overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: EASING }}
              onClick={(e) => e.stopPropagation()}
            >
              <EnquireNow closeEnquire={handleCloseEnquire} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
