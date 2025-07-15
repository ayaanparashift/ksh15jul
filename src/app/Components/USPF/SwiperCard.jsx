// "use client";
// import { motion } from "framer-motion";
// const SwiperCard = ({ title, icon, content }) => {
//   return (
//     <div className="flex flex-wrap gap-4">
//       <div className="flex relative group w-full sm:w-[320px] flex-col bg-[#EEF0F3] justify-between h-[410px] p-[40px]">
//         {/* SVG Icon */}
//         <div className="flex relative z-20 justify-start items-start">
//           <img
//             src={icon}
//             alt="Icon"
//             className="transition-all duration-700 ease-[0.7,0,0.4,1]
//                    group-hover:invert group-hover:brightness-0 group-hover:contrast-100 w-[100px] h-[100px]"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="flex relative z-20 flex-col gap-[18px]">
//           <h3 className="text-[#092241] transition-all ease-[0.7,0,0.4,1] duration-500 group-hover:text-[#EEF0F3] fsans-700 text-[18px] md:text-[22px] leading-[130%] break-words">
//             {title}
//           </h3>
//           <p className="fsans-400 group-hover:text-[#EEF0F3] transition-all ease-[0.7,0,0.4,1] duration-500 relative z-20 text-[18px] leading-[26px] text-[#6C8DAB] break-words">
//             {content}
//           </p>
//         </div>

//         {/* Expanding Background */}
//         <div className="absolute h-0 group-hover:h-[410px] bottom-0 w-full bg-[#6C8DAB] transition-all ease-[0.7,0,0.4,1] duration-500 left-0 z-10" />
//       </div>
//     </div>
//   );
// };

// export default SwiperCard;

"use client";
import { motion } from "framer-motion";

const SwiperCard = ({ title, icon, content, cardHeight, cardno }) => {
  return (
    <div
      className="flex flex-wrap gap-4"
      style={{ height: cardHeight || "540px" }}
    >
      <div className="flex gap-[20px] relative group w-full min-1920:w-[350px] sm:w-[360px] flex-col bg-[#EEF0F3] justify-between p-[30px]">
        {/* <div className="absolute left-0 top-[25px] z-[10000]">
          <h2 className="text-[5vw] leading-[0px] fpt-700 text-[#4b4b4b80] group-hover:text-[white] transition-colors duration-500">
            {cardno}
          </h2>
        </div> */}
        {/* SVG Icon */}
        <div className="flex relative z-20 justify-start items-start">
          <img
            src={icon}
            alt="Icon"
            className="transition-all duration-700 ease-[0.7,0,0.4,1] 
                   group-hover:invert group-hover:brightness-0 group-hover:contrast-100 w-[100px] h-[100px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex relative z-20 flex-col flex-1">
          <div className="min-h-[64px] flex items-start">
            <h3 className="text-[#092241] transition-all ease-[0.7,0,0.4,1] duration-500 group-hover:text-[#EEF0F3] fsans-700 text-[22px] leading-[130%] break-words">
              {title}
            </h3>
          </div>
          <p className="fsans-400 group-hover:text-[#EEF0F3] transition-all ease-[0.7,0,0.4,1] duration-500 relative z-20 text-[16px] md:text-[18px] leading-[26px] text-[#6C8DAB] break-words">
            {content}
          </p>
        </div>

        {/* Expanding Background */}
        <div className="absolute h-0 group-hover:h-full bottom-0 w-full bg-[#6C8DAB] transition-all ease-[0.7,0,0.4,1] duration-500 left-0 z-10" />
      </div>
    </div>
  );
};

export default SwiperCard;
