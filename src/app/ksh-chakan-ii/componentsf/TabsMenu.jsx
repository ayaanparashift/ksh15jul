// "use client";
// import { useState } from "react";
// import Link from "next/link";

// const TabMenu = () => {
//   const tabs = [
//     { title: "Overview", link: "#park-overview" },
//     { title: "Park Highlights", link: "#park-highlight" },
//     { title: "Location & Connectivity", link: "#location-connectivity" },
//     { title: "Park Infrastructure", link: "#park-infrastructure" },
//     {
//       title: "Download Brochure",
//       link: "https://www.kshinfra.com/wp-content/uploads/2022/12/KSH-Infra-Chakan-Park-2-Brochure.pdf",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(false);

//   return (
//     <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
//       <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//         {tabs.map((tab, index) => (
//           <Link
//             href={tab.link}
//             key={index}
//             className={`
//               flex-1 lg:min-w-0 min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px]
//               ${
//                 activeIndex === index
//                   ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                   : "text-white hover:text-gray-300"
//               }
//               whitespace-nowrap
//             `}
//             onClick={() => setActiveIndex(index)}
//           >
//             {tab.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabMenu;

"use client";
import { useState } from "react";
import Link from "next/link";

const TabMenu = () => {
  const tabs = [
    { title: "Overview", link: "#park-overview" },
    { title: "Park Highlights", link: "#park-highlight" },
    { title: "Location & Connectivity", link: "#location-connectivity" },
    {
      title: "Download Brochure",
      link: "https://www.kshinfra.com/wp-content/uploads/2022/12/KSH-Infra-Chakan-Park-2-Brochure.pdf",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(false);

  // return (
  //   <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
  //     <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
  //       {tabs.map((tab, index) => {
  //         const isDownload = tab.title === "Download Brochure";
  //         const commonClasses = `
  //           flex-1 lg:min-w-0 min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px]
  //           ${
  //             activeIndex === index
  //               ? "text-[#F7E327] border-b-2 border-[#F7E327]"
  //               : "text-white hover:text-[#F7E327] hover:border-b-2 hover:border-[#F7E327]"
  //           }
  //           whitespace-nowrap
  //         `;

  //         return isDownload ? (
  //           <a
  //             href={tab.link}
  //             key={index}
  //             className={commonClasses}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             onClick={() => setActiveIndex(index)}
  //           >
  //             {tab.title}
  //           </a>
  //         ) : (
  //           <Link
  //             href={tab.link}
  //             key={index}
  //             className={commonClasses}
  //             onClick={() => setActiveIndex(index)}
  //           >
  //             {tab.title}
  //           </Link>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
      <div className="fix12 flex overflow-x-auto scrollbar-hide items-center">
        {tabs.map((tab, index) => {
          const isDownload = tab.title === "Download Brochure";
          const commonClasses = `
            flex-1 lg:min-w-0 min-w-[200px] text-center hover:text-[#F7E327] linkaf text-sm font-medium transition-colors pb-[15px]
            ${activeIndex === index ? "text-[#F7E327] active" : "text-white"}
            whitespace-nowrap
          `;

          return isDownload ? (
            <a
              key={index}
              href={tab.link}
              target="_blank"
              rel="noopener noreferrer"
              className={commonClasses}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </a>
          ) : (
            <Link
              key={index}
              href={tab.link}
              className={commonClasses}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TabMenu;
