// // CapEnq.js
// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import EnquireNow from "../../Components/EnquireNow";

// const CapEnq = () => {
//   // Add state for toggling the EnquireNow component
//   const [showEnquire, setShowEnquire] = useState(false);

//   const handleEnquireClick = () => {
//     setShowEnquire(true);
//     document.body.style.overflow = "hidden"; // Disable vertical scrolling
//     document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
//   };

//   const handleCloseEnquire = () => {
//     setShowEnquire(false);
//     document.body.style.overflow = "auto"; // Re-enable vertical scrolling
//     document.body.style.overflowX = "hidden"; // Maintain horizontal scroll setting if desired
//   };

//   return (
//     <div className="relative flex flex-col px-[max(5%,calc((100vw-1250px)/2))] items-center justify-center gap-6 capEnqBg lg:h-[292px] py-14 lg:py-0">
//       <h1 className="fpt-500 text-2xl text-center md:text-3xl lg:text-[44px] lg:leading-[50px] text-white">
//         Let's co-create the right solution for your business
//       </h1>
//       <button
//         onClick={handleEnquireClick} // Use the correct handler name
//         className="border-[#D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[10px] gap-3 rounded-[10px]"
//       >
//         Enquire Now <img src="/Cap/cap_enquire.svg" alt="Enquire Now" />
//       </button>

//       {/* AnimatePresence to control the component's mount/unmount with animation */}
//       <AnimatePresence>
//         {showEnquire && (
//           <>
//             <motion.div
//               className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[1000000]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               onClick={handleCloseEnquire} // Optional: click outside to close
//             />
//             <motion.div
//               className="absolute z-[10] top-0 right-0 md:right-0 min-h-screen w-[510px] overflow-hidden"
//               initial={{ x: "100%" }} // Start off the screen
//               animate={{ x: 0 }} // Slide in from the right
//               exit={{ x: "100%" }} // Slide out to the right on exit
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }} // Animation transition properties
//             >
//               <EnquireNow closeEnquire={handleCloseEnquire} />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CapEnq;

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnquireNow from "../../Components/EnquireNow";

const CapEnq = () => {
  const [showEnquire, setShowEnquire] = useState(false);

  const handleEnquireClick = () => {
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
    <div className="relative flex flex-col px-[max(5%,calc((100vw-1250px)/2))] items-center justify-center gap-6 capEnqBg lg:h-[292px] py-14 lg:py-0">
      <h1 className="fpt-500 text-2xl text-center md:text-3xl lg:text-[44px] lg:leading-[50px] text-white">
        Let's co-create the right solution for your business
      </h1>
      <button
        onClick={handleEnquireClick}
        className="border-[#D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[10px] gap-3 rounded-[10px] group hover:bg-white hover:text-black transition-colors duration-[500ms]"
      >
        Enquire Now
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:stroke-black transition-colors duration-[500ms]"
            d="M12.3251 8.24676L12.3093 3.18522C12.3059 2.08552 11.4152 1.19488 10.3155 1.19145L5.25399 1.1757M1.69651 11.8042L8.44599 5.05477"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {showEnquire && (
          <>
            {/* Full-screen dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000]"
              onClick={handleCloseEnquire}
            />

            {/* Full-screen slide-in panel */}
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
    </div>
  );
};

export default CapEnq;
