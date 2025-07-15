// import Link from "next/link";
// import React from "react";

// const MapSCMob = ({ parkimg, title, city, tarea, tbuild, parkLink }) => {
//   return (
//     <div className="relative pb-0 w-screen max-w-screen md:pb-[50px] lg:pb-[65px] min-h-full md:min-h-[400px] lg:h-[500px] bg-white">
//       <div className="flex flex-col md:flex-row items-center justify-between py-5 px-5 md:px-8 lg:px-10 gap-5 md:gap-8 lg:gap-10 w-full bg-white">
//         <div className="flex-1 md:flex-[0.5] min-w-full md:min-w-[50%]">
//           <img
//             src={parkimg}
//             className="object-cover w-full h-[200px] md:h-[250px] lg:h-[272px]"
//             alt="first infra"
//           />
//         </div>
//         <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 flex-1 w-full">
//           <h2 className="text-[24px] md:text-3xl lg:text-5xl border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
//             {title}
//           </h2>
//           <div className="flex flex-col gap-[5px] w-full">
//             <div className="flex w-full min-w-0">
//               <p className="w-[70%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 CITY
//               </p>
//               <p className="w-[30%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 {city}
//               </p>
//             </div>
//             <div className="flex w-full min-w-0">
//               <p className="w-[70%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 TOTAL AREA
//               </p>
//               <p className="w-[30%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 {tarea}
//               </p>
//             </div>
//             <div className="flex w-full min-w-0">
//               <p className="w-[70%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 TOTAL BUILDINGS
//               </p>
//               <p className="w-[30%] flex-1 text-[#092241] text-[14px] md:text-[16px]">
//                 {tbuild}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full justify-start h-[60px]">
//         <Link
//           href={parkLink}
//           className="flex mt-2 ml-5 md:ml-8 lg:mt-5 group transition-transform duration-[400ms] items-start md:items-center justify-start gap-3"
//         >
//           <img
//             src="/buttonarrows/redarico.svg"
//             width={0}
//             height={0}
//             className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//             alt="Red Arrow Icon"
//           />
//           <p className="text-[16px] fsans-600 mt-[10px] text-black">
//             Explore More
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MapSCMob;
////
////
////
////
////
////
// import Link from "next/link";
// import React from "react";

// const MapSCMob = ({ parkimg, title, city, tarea, tbuild, parkLink }) => {
//   return (
//     <div className="relative pb-0 w-full lg:pb-8 md:pb-6 max-w-screen min-h-full md:h-[310px] bg-white">
//       <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 gap-4 md:gap-6 lg:gap-8 w-full bg-white">
//         <div className="flex-1 md:flex-[0.5] w-full md:w-auto">
//           <div className="relative w-full h-0 pb-[100%] md:pb-[100%] lg:pb-[100%]">
//             <img
//               src={parkimg}
//               className="absolute top-0 left-0 w-full h-full object-cover"
//               alt={`${title} park image`}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1 w-full">
//           <h2 className="text-[22px] md:text-[28px] lg:text-[32px] border-b-8 md:border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
//             {title}
//           </h2>
//           <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
//             <div className="flex w-full">
//               <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 CITY
//               </p>
//               <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 {city}
//               </p>
//             </div>
//             <div className="flex w-full">
//               <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 TOTAL AREA
//               </p>
//               <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 {tarea}
//               </p>
//             </div>
//             <div className="flex w-full">
//               <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 TOTAL BUILDINGS
//               </p>
//               <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
//                 {tbuild}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-fit justify-start h-12 md:h-14 lg:h-16">
//         <Link
//           href={parkLink}
//           className="flex mt-2 ml-4 md:ml-6 lg:ml-8 group hover:translate-x-1 transition-transform duration-300 items-center justify-start gap-2 md:gap-3"
//         >
//           <img
//             src="/buttonarrows/redarico.svg"
//             width={0}
//             height={0}
//             className="h-8 md:h-9 lg:h-10 w-8 md:w-9 lg:w-10 rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
//             alt="Red Arrow Icon"
//           />
//           <p className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-black">
//             Explore More
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MapSCMob;

import Link from "next/link";
import React from "react";

const MapSCMob = ({ parkimg, title, city, tarea, tbuild, parkLink }) => {
  return (
    <div className="relative pb-0 w-[770px] overflow-hidden max-w-[90vw] md:pb-6 xl:pb-8 min-h-full h-full mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-6 xl:py-8 xl:px-8 gap-4 md:gap-6 xl:gap-8 w-full bg-white">
        <div className="flex-1 md:flex-[0.5] w-full md:w-auto flex justify-center">
          <div className="relative w-[320px] h-[200px] md:w-[200px] md:h-[200px] max-w-full">
            <img
              src={parkimg}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={`${title} park image`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-8 flex-1 w-full">
          <h2 className="text-[22px] md:text-[28px] lg:text-[32px] border-b-8 md:border-b-[10px] border-[#F7E327] text-[#092241] font-bold overflow-hidden text-ellipsis max-w-fit">
            {title}
          </h2>
          <div className="flex flex-col gap-2 xl:gap-4 w-full">
            <div className="flex w-full">
              <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
                CITY
              </p>
              <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] lg:text-[16px]">
                {city}
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
                TOTAL AREA
              </p>
              <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] lg:text-[16px]">
                {tarea}
              </p>
            </div>
            <div className="flex w-full">
              <p className="w-[60%] md:w-[65%] flex-1 text-[#092241] text-[14px] md:text-[15px] lg:text-[16px]">
                TOTAL BUILDINGS
              </p>
              <p className="w-[40%] md:w-[35%] flex-1 text-[#092241] text-[14px] lg:text-[16px]">
                {tbuild}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:pb-0 pb-5 w-fit justify-start h-fit">
        <Link
          href={parkLink}
          className="flex ml-4 md:ml-6 lg:ml-8 group transition-transform duration-300 items-center justify-start gap-2 md:gap-3"
        >
          <img
            src="/buttonarrows/redarico.svg"
            width={0}
            height={0}
            className="h-8 md:h-9 lg:h-10 w-8 md:w-9 lg:w-10 rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
            alt="Red Arrow Icon"
          />
          <p className="text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-black">
            Explore More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MapSCMob;
