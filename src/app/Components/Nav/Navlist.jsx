// "use client";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// const Navlist = () => {
//   const navItem = [
//     {
//       title: "About Us",
//       href: "/about-ksh",
//     },
//     {
//       title: "Our Team",
//       href: "/our-team",
//     },
//     {
//       title: "Capabilities",
//       href: "/capabilities",
//     },
//     {
//       title: "Sustainability",
//       href: "/sustainability",
//     },
//     {
//       title: "Investors",
//       href: "/investors",
//     },
//     {
//       title: "Careers",
//       href: "/careers",
//     },
//     {
//       title: "Contact us",
//       href: "/contact-us",
//     },
//   ];
//   return (
//     <div className="py-[20px] pr-[60px] min-1440:pr-[100px] flex flex-col bg-[#fff] border-t border-[#092241] w-[37%]">
//       <div className="flex flex-col gap-[20px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[40px] leading-[300%] min-1440:gap-[50px] min-1366:leading-[200%] h-full items-end">
//         {navItem.map((index) => (
//           <motion.div
//             initial={{ x: 0 }}
//             whileHover={{ x: -10 }}
//             className="flex justify-between item-end"
//             key={index.href}
//           >
//             <Link
//               className="text-[#092F5F] fpt-600 min-1024:text-[36px] min-1440:text-[44px] text-[24px]"
//               href={index.href}
//             >
//               <h2>{index.title}</h2>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navlist;

"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Navlist = () => {
  const navItem = [
    {
      title: "About Us",
      href: "/about-ksh",
    },
    {
      title: "Our Team",
      href: "/our-team",
    },
    {
      title: "Capabilities",
      href: "/capabilities",
    },
    {
      title: "Sustainability",
      href: "/sustainability",
    },
    {
      title: "Investors",
      href: "/investors",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact us",
      href: "/contact-us",
    },
  ];
  // return (
  //   <div className="py-[20px] pr-[60px] min-1440:pr-[100px] flex flex-col bg-[#fff] border-t border-[#092241] w-[37%]">
  //     <div className="flex flex-col gap-[20px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[40px] leading-[300%] min-1440:gap-[50px] min-1366:leading-[200%] h-full items-end">
  //       {navItem.map((index) => (
  //         <div className="flex justify-between item-end" key={index.href}>
  //           <Link
  //             className="text-[#092F5F] fpt-600 min-1024:text-[36px] min-1440:text-[44px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
  //             href={index.href}
  //           >
  //             <h2>{index.title}</h2>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="py-[20px] pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] border-t border-[#092241] w-[40%]">
      <div className="flex flex-col gap-[20px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[40px] leading-[300%] min-1440:gap-[50px] min-1366:leading-[200%] h-full items-end">
        {navItem.map((index) => (
          <div className="flex justify-between item-end" key={index.href}>
            <Link
              className="text-[#092F5F] fpt-600 min-1024:text-[36px] min-1440:text-[44px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
              href={index.href}
            >
              <h2>{index.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navlist;
