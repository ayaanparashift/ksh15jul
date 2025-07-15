// "use client";
// import React, { useState } from "react";
// import EnquireNow from "./EnquireNow";
// import { AnimatePresence, motion } from "framer-motion";
// import { Toaster } from "react-hot-toast";

// const GlobalEnquire = ({ children }) => {
//   const [showEnquire, setShowEnquire] = React.useState(false);

//   const handleEnquireClick = () => {
//     setShowEnquire(true);
//     document.body.style.overflow = "hidden"; // Disable vertical scrolling
//     document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
//   };

//   const handleCloseEnquire = () => {
//     setShowEnquire(false);
//     document.body.style.overflow = "auto"; // Re-enable vertical scrolling
//     document.body.style.overflowX = "hidden"; // Allow horizontal scroll again
//   };

//   return (
//     <div>
//       {children}

//       <button
//         className="text-[#092241] px-[10px] py-[25px] fixed top-[50%] z-[1000] shadow-sm border-t border-r border-l border-gray-200
//   bg-gradient-to-l from-white from-[39%] to-[#A4AFCA] -rotate-180 right-0 [writing-mode:tb-rl] fsans-600 text-[16px]"
//         onClick={handleEnquireClick}
//       >
//         Enquire Now
//       </button>
//       {/* EnquireNow Component */}
//       <AnimatePresence>
//         {showEnquire && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[1000000]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               onClick={handleCloseEnquire} // Optional: click outside to close
//             />

//             {/* Slide-in Form */}
//             <motion.div
//               className="fixed z-[1000000] top-0 right-0 min-h-screen w-[510px] overflow-hidden"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{
//                 x: "100%",
//                 transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
//               }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//             >
//               <EnquireNow closeEnquire={handleCloseEnquire} />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default GlobalEnquire;
"use client";
import React, { useState } from "react";
import EnquireNow from "./EnquireNow";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const GlobalEnquire = ({ children }) => {
  const [showEnquire, setShowEnquire] = React.useState(false);

  const handleEnquireClick = () => {
    setShowEnquire(true);
    document.body.style.overflow = "hidden"; // Disable vertical scrolling
    document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
  };

  const handleCloseEnquire = () => {
    setShowEnquire(false);
    document.body.style.overflow = "auto"; // Re-enable vertical scrolling
    document.body.style.overflowX = "hidden"; // Allow horizontal scroll again
  };

  return (
    <div>
      {children}

      <button
        className="text-[#092241] px-[10px] py-[25px] fixed top-[50%] z-[1000] shadow-sm border-t border-r border-l border-gray-200
  bg-gradient-to-l from-white from-[39%] to-[#A4AFCA] -rotate-180 right-0 [writing-mode:tb-rl] fsans-600 text-[16px]"
        onClick={handleEnquireClick}
      >
        Enquire Now
      </button>
      <AnimatePresence>
        {showEnquire && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[1000000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
            onClick={handleCloseEnquire}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEnquire && (
          <motion.div
            className="fixed z-[1000001] top-0 right-0 min-h-screen w-[510px] overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{
              x: "100%",
              transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
            }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          >
            <div>
              <EnquireNow closeEnquire={handleCloseEnquire} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalEnquire;
