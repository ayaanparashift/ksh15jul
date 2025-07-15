// "use client";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   animate,
//   useInView,
// } from "framer-motion";
// import { useEffect, useState, useRef } from "react";

// const StatsSection = () => {
//   const plannedDev = 10;
//   const puneDev = 4;
//   const restDev = 3;
//   const expansionMar = "Mumbai, Bangalore, Chennai";

//   const useAnimatedNumber = (finalValue) => {
//     const count = useMotionValue(0);
//     const rounded = useTransform(count, Math.round);
//     const [displayValue, setDisplayValue] = useState("0");
//     const ref = useRef(null);
//     const isInView = useInView(ref, { amount: 0.2, once: true });

//     useEffect(() => {
//       if (isInView) {
//         const animation = animate(count, finalValue, {
//           duration: 1.9,
//           delay: 0.1,
//         });
//         const unsubscribe = rounded.on("change", (v) => {
//           setDisplayValue(v.toLocaleString());
//         });

//         return () => {
//           animation.stop();
//           unsubscribe();
//         };
//       }
//     }, [isInView, finalValue]);

//     return { ref, displayValue };
//   };

//   const plannedDevData = useAnimatedNumber(plannedDev);
//   const puneDevData = useAnimatedNumber(puneDev);
//   const restDevData = useAnimatedNumber(restDev);

//   return (
//     <div className="grid md:grid-cols-4 grid-cols-2 relative z-0 pb-0">
//       <motion.div
//         ref={plannedDevData.ref}
//         className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300"
//       >
//         <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
//           <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
//             06
//           </span>{" "}
//           Parks
//         </p>
//         <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
//           Total
//         </p>
//       </motion.div>
//       <motion.div
//         ref={plannedDevData.ref}
//         className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300"
//       >
//         <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
//           <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
//             {plannedDevData.displayValue} MN
//           </span>{" "}
//           SQ.FT.
//         </p>
//         <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
//           of Planned Development
//         </p>
//       </motion.div>

//       <motion.div
//         ref={puneDevData.ref}
//         className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300"
//       >
//         <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
//           <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
//             {puneDevData.displayValue} MN
//           </span>{" "}
//           SQ.FT.
//         </p>
//         <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
//           Developed (in Pune)
//         </p>
//       </motion.div>

//       <motion.div
//         ref={restDevData.ref}
//         className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300"
//       >
//         <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
//           <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
//             {restDevData.displayValue} MN
//           </span>{" "}
//           SQ.FT.
//         </p>
//         <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
//           Under Development
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default StatsSection;

const StatsSection = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 relative z-0 pb-0">
      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
            06
          </span>{" "}
          Parks
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Total
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
            10 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          of Planned Development
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            4 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Developed (in Pune)
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            3 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Under Development
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
