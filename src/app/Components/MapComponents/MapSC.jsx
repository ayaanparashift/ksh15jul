// "use client";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// const MapSC = ({ parkimg, title, city, tarea, tbuild, parkLink }) => {
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//         className="relative pb-[65px]"
//       >
//         <div className="h-[272px] flex items-center justify-between px-10 bg-white gap-10 w-full">
//           <div className="flex-[0.5]">
//             <img src={parkimg} className="object-cover" alt="first infra" />
//           </div>
//           <div className="flex flex-col gap-10 flex-1 w-full">
//             <h2 className="pb-[15px] text-5xl border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
//               {title}
//             </h2>
//             <div className="flex flex-col gap-[5px] w-full">
//               <div className="flex w-full min-w-0">
//                 <p className="w-[70%] flex-1 text-[#092241]">CITY</p>
//                 <p className="w-[30%] flex-1 text-[#092241]">{city}</p>
//               </div>
//               <div className="flex w-full min-w-0">
//                 <p className="w-[70%] flex-1 text-[#092241]">TOTAL AREA</p>
//                 <p className="w-[30%] flex-1 text-[#092241]">{tarea}</p>
//               </div>
//               <div className="flex w-full min-w-0">
//                 <p className="w-[70%] flex-1 text-[#092241]">TOTAL BUILDINGS</p>
//                 <p className="w-[30%] flex-1 text-[#092241]">{tbuild}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="pl-[6px] flex w-full justify-start h-fit">
//           <Link
//             href={parkLink}
//             className="flex mt-5 group transition-transform duration-[400ms] items-center justify-start gap-3"
//           >
//             <img
//               src="/buttonarrows/redarico.svg"
//               width={0}
//               height={0}
//               className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//               alt="Red Arrow Icon"
//             />
//             <p className="text-[#ffffff] text-[16px] fsans-600">Explore More</p>
//           </Link>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default MapSC;

"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MapSC = ({
  parkimg,
  title,
  city,
  tarea,
  tbuild,
  parkLink,
  isVisible = false,
}) => {
  return (
    <>
      <div className="relative pb-[65px]">
        <div className="h-[272px] flex items-center justify-between px-10 bg-white gap-10 w-full">
          <motion.div
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 1, delay: 0, ease: [0.7, 0, 0.4, 1] },
            }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 1 }}
            className="flex-[0.5]"
          >
            <img src={parkimg} className="object-cover" alt="infra" />
          </motion.div>
          <motion.div
            key={city}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, delay: 0, ease: [0.7, 0, 0.4, 1] },
            }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 1 }}
            className="flex flex-col gap-10 flex-1 w-full"
          >
            <h2 className="pb-[15px] text-5xl border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
              {title}
            </h2>
            <div className="flex flex-col gap-[5px] w-full">
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">CITY</p>
                <p className="w-[30%] flex-1 text-[#092241]">{city}</p>
              </div>
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">TOTAL AREA</p>
                <p className="w-[30%] flex-1 text-[#092241]">{tarea}</p>
              </div>
              <div className="flex w-full min-w-0">
                <p className="w-[70%] flex-1 text-[#092241]">TOTAL BUILDINGS</p>
                <p className="w-[30%] flex-1 text-[#092241]">{tbuild}</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="pl-[6px] flex w-full justify-start h-fit">
          <Link
            href={parkLink}
            className="flex mt-5 group transition-transform duration-[400ms] items-center justify-start gap-3"
          >
            <img
              src="/buttonarrows/redarico.svg"
              className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
              alt="Red Arrow Icon"
            />
            <p className="text-[#ffffff] text-[16px] fsans-600">Explore More</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MapSC;
