// "use client";
// import { motion } from "framer-motion";

// const PDTabPop = ({ src, onClose, bwidth }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//       className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000000]"
//     >
//       <div
//         className="relative w-[80vw] min-1366:w-auto"
//         style={bwidth >= 1280 ? { width: `${bwidth}px` } : undefined}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-[10%] -right-[5%] text-white text-3xl z-[100000000] w-[60px] h-[60px]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 60 60"
//             fill="none"
//             className="icon" // optional: you can add your own class for styling
//           >
//             <g clipPath="url(#clip0_1485_8906)">
//               <path
//                 d="M13.7779 13.7807C14.2116 13.3471 14.7998 13.104 15.4131 13.104C16.0264 13.104 16.6146 13.3471 17.0483 13.7807L29.9972 26.7296L42.9461 13.7807C43.3798 13.3471 43.968 13.104 44.5813 13.104C45.1946 13.104 45.7828 13.3471 46.2165 13.7807C46.6501 14.2144 46.8932 14.8026 46.8932 15.4159C46.8932 16.0292 46.6501 16.6174 46.2165 17.0511L33.2676 30L46.2165 42.9489C46.6501 43.3826 46.8932 43.9708 46.8932 44.5841C46.8932 45.1974 46.6501 45.7856 46.2165 46.2193C45.7828 46.6529 45.1946 46.896 44.5813 46.896C43.968 46.896 43.3798 46.6529 42.9461 46.2193L29.9972 33.2704L17.0483 46.2193C16.6146 46.6529 16.0264 46.896 15.4131 46.896C14.7998 46.896 14.2116 46.6529 13.7779 46.2193C13.3443 45.7856 13.1012 45.1974 13.1012 44.5841C13.1012 43.9708 13.3443 43.3826 13.7779 42.9489L26.7268 30L13.7779 17.0511C13.3443 16.6174 13.1012 16.0292 13.1012 15.4159C13.1012 14.8026 13.3443 14.2144 13.7779 13.7807Z"
//                 fill="#E30613"
//                 stroke="none"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_1485_8906">
//                 <rect width="60" height="60" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </button>
//         <img
//           src={src}
//           alt="popup"
//           className="w-full h-auto max-h-[90vh] shadow-lg"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default PDTabPop;

// "use client";
// import { motion } from "framer-motion";

// const PDTabPop = ({ src, onClose, bwidth }) => {
//   // Define width based on bwidth
// let computedWidth = "80vw";

// if (bwidth === 838) {
//   computedWidth = "838px"; // Always 838px
// } else if (bwidth === 1200) {
//   computedWidth = bwidth >= 1366 ? "1200px" : "60vw"; // 1200px if large screen, else 60vw
// } else if (bwidth >= 1366) {
//   computedWidth = `${bwidth}px`;
// } else if (bwidth < 900) {
//   computedWidth = "900px";
// }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
//       className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000000]"
//     >
//       <div className="relative" style={{ width: computedWidth }}>
//         <button
//           onClick={onClose}
//           className="absolute -top-[10%] -right-[5%] text-white text-3xl z-[100000000] w-[60px] h-[60px]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 60 60"
//             fill="none"
//             className="icon"
//           >
//             <g clipPath="url(#clip0_1485_8906)">
//               <path
//                 d="M13.7779 13.7807C14.2116 13.3471 14.7998 13.104 15.4131 13.104C16.0264 13.104 16.6146 13.3471 17.0483 13.7807L29.9972 26.7296L42.9461 13.7807C43.3798 13.3471 43.968 13.104 44.5813 13.104C45.1946 13.104 45.7828 13.3471 46.2165 13.7807C46.6501 14.2144 46.8932 14.8026 46.8932 15.4159C46.8932 16.0292 46.6501 16.6174 46.2165 17.0511L33.2676 30L46.2165 42.9489C46.6501 43.3826 46.8932 43.9708 46.8932 44.5841C46.8932 45.1974 46.6501 45.7856 46.2165 46.2193C45.7828 46.6529 45.1946 46.896 44.5813 46.896C43.968 46.896 43.3798 46.6529 42.9461 46.2193L29.9972 33.2704L17.0483 46.2193C16.6146 46.6529 16.0264 46.896 15.4131 46.896C14.7998 46.896 14.2116 46.6529 13.7779 46.2193C13.3443 45.7856 13.1012 45.1974 13.1012 44.5841C13.1012 43.9708 13.3443 43.3826 13.7779 42.9489L26.7268 30L13.7779 17.0511C13.3443 16.6174 13.1012 16.0292 13.1012 15.4159C13.1012 14.8026 13.3443 14.2144 13.7779 13.7807Z"
//                 fill="#E30613"
//               />
//             </g>
//             <defs>
//               <clipPath id="clip0_1485_8906">
//                 <rect width="60" height="60" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </button>
//         <img
//           src={src}
//           alt="popup"
//           className="w-full h-auto max-h-[80vh] shadow-lg"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default PDTabPop;
"use client";
import { motion } from "framer-motion";

const PDTabPop = ({ src, onClose, bwidth }) => {
  let computedWidth = "80vw";

  if (bwidth === 838) {
    computedWidth = "838px";
  } else if (bwidth === 1200) {
    computedWidth = bwidth >= 1366 ? "1200px" : "60vw";
  } else if (bwidth >= 1366) {
    computedWidth = `${bwidth}px`;
  } else if (bwidth < 900) {
    computedWidth = "900px";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.7, 0, 0.4, 1] }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[10000000]"
    >
      <div className="relative" style={{ width: computedWidth }}>
        <button
          onClick={onClose}
          className="absolute -top-[10%] -right-[5%] text-white text-3xl z-[100000000] w-[60px] h-[60px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            fill="none"
            className="icon"
          >
            <g clipPath="url(#clip0_1485_8906)">
              <path
                d="M13.7779 13.7807C14.2116 13.3471 14.7998 13.104 15.4131 13.104C16.0264 13.104 16.6146 13.3471 17.0483 13.7807L29.9972 26.7296L42.9461 13.7807C43.3798 13.3471 43.968 13.104 44.5813 13.104C45.1946 13.104 45.7828 13.3471 46.2165 13.7807C46.6501 14.2144 46.8932 14.8026 46.8932 15.4159C46.8932 16.0292 46.6501 16.6174 46.2165 17.0511L33.2676 30L46.2165 42.9489C46.6501 43.3826 46.8932 43.9708 46.8932 44.5841C46.8932 45.1974 46.6501 45.7856 46.2165 46.2193C45.7828 46.6529 45.1946 46.896 44.5813 46.896C43.968 46.896 43.3798 46.6529 42.9461 46.2193L29.9972 33.2704L17.0483 46.2193C16.6146 46.6529 16.0264 46.896 15.4131 46.896C14.7998 46.896 14.2116 46.6529 13.7779 46.2193C13.3443 45.7856 13.1012 45.1974 13.1012 44.5841C13.1012 43.9708 13.3443 43.3826 13.7779 42.9489L26.7268 30L13.7779 17.0511C13.3443 16.6174 13.1012 16.0292 13.1012 15.4159C13.1012 14.8026 13.3443 14.2144 13.7779 13.7807Z"
                fill="#E30613"
              />
            </g>
            <defs>
              <clipPath id="clip0_1485_8906">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img
          src={src}
          alt="popup"
          className="w-full h-auto max-h-[80vh] shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default PDTabPop;


