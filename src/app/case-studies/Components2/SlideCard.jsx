"use client";
// "use client";

// import Link from "next/link";

// const SlideCard = ({ title, image, url, comp }) => {
//   return (
//     <div className="flex flex-col bg-[#fff] xl:max-h-fit xl:h-fit xl-1280:w-[650px] w-full overflow-hidden">
//       <div className="xl:min-w-fit h-[240px] w-full max-w-full min-w-full overflow-hidden">
//         <div className="min-w-full h-[239px]">
//           <img
//             src={image}
//             alt="Case Study Image"
//             className="w-full object-cover h-full"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2 lg:max-h-[200px] lg:min-h-[200px] max-h-[200px] min-h-[200px] p-5 lg:p-[30px] ">
//         <p
//           className="text-[#e30613] fsans-600 text-[16px]"
//           dangerouslySetInnerHTML={{ __html: comp }}
//         />
//         <h3
//           className="fsans-600 text-[18px] md:text-[24px] spotlightheaddd"
//           dangerouslySetInnerHTML={{ __html: title }}
//         />

//         <div className="flex cursor-pointer group items-center justify-center font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit">
//           <Link
//             href={url}
//             className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//           >
//             <img
//               src="/buttonarrows/redarico.svg"
//               width={0}
//               height={0}
//               className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//               alt="Red Arrow Icon"
//             />
//             <p className="text-black text-[16px] fsans-600">Explore More</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideCard;
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import Link from "next/link";

// const SlideCard = ({ title, image, url, comp }) => {
//   return (
//     <div className="flex flex-col bg-[#092241] xl:max-h-auto xl:h-auto xl-1280:w-[650px] w-full overflow-hidden">
//       <div className="xl:min-w-fit h-[240px] w-full max-w-full min-w-full overflow-hidden">
//         <div className="min-w-full h-[239px]">
//           <img
//             src={image}
//             alt="Case Study Image"
//             className="w-full object-cover h-full"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-5 lg:max-h-[240px] lg:min-h-[240px] max-h-[220px] min-h-[220px] p-5 lg:p-[30px] ">
//         <p
//           className="text-[#e30613] fsans-600 text-[16px]z"
//           dangerouslySetInnerHTML={{ __html: comp }}
//         />
//         <h3
//           className="fsans-600 text-white text-[18px] md:text-[24px] spotlightheaddd"
//           dangerouslySetInnerHTML={{ __html: title }}
//         />

//         <div className="flex cursor-pointer group items-center justify-center font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit">
//           <Link
//             href={url}
//             className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
//           >
//             <img
//               src="/buttonarrows/redarico.svg"
//               width={0}
//               height={0}
//               className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//               alt="Red Arrow Icon"
//             />
//             <p className="text-white text-[16px] fsans-600">Explore More</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlideCard;

import Link from "next/link";

const SlideCard = ({ title, image, url, comp }) => {
  return (
    <div className="flex flex-col bg-[#092241] xl:max-h-auto xl:h-auto h-fit xl-1280:w-[650px] w-full overflow-hidden">
      <div className="xl:min-w-fit h-[239px] w-full max-w-full min-w-full overflow-hidden">
        <div className="min-w-full h-[239px]">
          <img
            src={image}
            alt="Case Study Image"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:max-h-[240px] lg:min-h-[240px] max-h-[220px] min-h-[220px] p-5 lg:p-[30px] ">
        <p
          className={`px-3 bg-[#E30613] py-1 min-1920:text-[18px] border border-[#D7D7D7] border-opacity-35 text-white rounded-[10px] transition-all duration-300 w-fit xl:w-[150px] flex items-center justify-center`}
        >
          {comp}
        </p>

        <h3
          className="fsans-600 text-white text-[16px] md:text-[24px] spotlightheaddd"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="flex cursor-pointer group items-center justify-center font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit">
          <Link
            href={url}
            className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
          >
            <img
              src="/buttonarrows/redarico.svg"
              width={0}
              height={0}
              className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
              alt="Red Arrow Icon"
            />
            <p className="text-white text-[16px] fsans-600">Explore More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
