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
//     <div className="py-[20px] pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] border-t border-[#092241] w-[40%]">
//       <div className="flex flex-col gap-[20px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[40px] leading-[300%] min-1440:gap-[50px] min-1366:leading-[200%] h-full items-end">
//         {navItem.map((index) => (
//           <div className="flex justify-between item-end" key={index.href}>
//             <Link
//               className="text-[#092F5F] fpt-600 min-1024:text-[36px] min-1440:text-[44px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
//               href={index.href}
//             >
//               <h2>{index.title}</h2>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Navlist;
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
//
//
//
// "use client";
// import Link from "next/link";
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navlist = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const navItem = [
//     { title: "About Us", href: "/about-ksh" },
//     { title: "Our Team", href: "/our-team" },
//     { title: "Capabilities", href: "/capabilities" },
//     { title: "Sustainability", href: "/sustainability" },
//     {
//       title: "Insights",
//       isDropdown: true,
//       children: [
//         { title: "Blogs", href: "/blogs" },
//         { title: "Case Study", href: "/case-study" },
//       ],
//     },
//     { title: "Investors", href: "/investors" },
//     { title: "Careers", href: "/careers" },
//     { title: "Contact us", href: "/contact-us" },
//   ];

//   return (
//     <div className="py-[20px] pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] border-t border-[#092241] w-[40%] relative">
//       <div className="flex flex-col gap-[10px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[30px] leading-[300%] min-1366:leading-[200%] h-full items-end">
//         {navItem.map((item, idx) =>
//           item.isDropdown ? (
//             <div key={item.title} className="w-full flex justify-end">
//               <button
//                 onClick={() =>
//                   setDropdownOpen(dropdownOpen === idx ? null : idx)
//                 }
//                 className="flex flex-col items-center gap-2 text-[#092F5F] fpt-600 transition-colors hover:text-[#E30613] duration-[500ms] relative"
//               >
//                 <span className="flex flex-row-reverse items-center gap-2 w-full">
//                   <h2 className="2xl:text-[36px] xl:text-[30px]">
//                     {item.title}
//                   </h2>
//                   <svg
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       dropdownOpen === idx ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </span>
//                 <AnimatePresence>
//                   {dropdownOpen === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.25 }}
//                       className="mt-2 right-0 bg-white leading-[150%] z-50 flex flex-col items-end gap-3 min-w-full"
//                     >
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className="text-[#092F5F] fpt-500 text-[20px] hover:text-[#E30613] transition-colors duration-300 w-full text-right"
//                         >
//                           {child.title}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </button>
//             </div>
//           ) : (
//             <div className="flex justify-between items-end" key={item.href}>
//               <Link
//                 className="text-[#092F5F] fpt-600 2xl:text-[36px] xl:text-[30px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
//                 href={item.href}
//               >
//                 <h2>{item.title}</h2>
//               </Link>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navlist;

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
//
//
//
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navlist = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const navItem = [
//     { title: "About Us", href: "/about-ksh" },
//     { title: "Our Team", href: "/our-team" },
//     { title: "Capabilities", href: "/capabilities" },
//     { title: "Sustainability", href: "/sustainability" },
//     {
//       title: "Insights",
//       isDropdown: true,
//       children: [
//         { title: "Blogs", href: "/blogs" },
//         { title: "Case Study", href: "/case-study" },
//       ],
//     },
//     { title: "Investors", href: "/investors" },
//     { title: "Careers", href: "/careers" },
//     { title: "Contact us", href: "/contact-us" },
//   ];

//   return (
//     <div className="py-[20px] pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] border-t border-[#092241] w-[40%] relative">
//       <motion.div
//         layout
//         className="flex flex-col gap-[10px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[30px] leading-[300%] min-1366:leading-[200%] h-full items-end"
//       >
//         {navItem.map((item, idx) =>
//           item.isDropdown ? (
//             <motion.div
//               key={item.title}
//               layout
//               className="w-full flex justify-end"
//             >
//               <button
//                 onClick={() =>
//                   setDropdownOpen(dropdownOpen === idx ? null : idx)
//                 }
//                 className="flex flex-col items-center gap-2 text-[#092F5F] fpt-600 transition-colors hover:text-[#E30613] duration-[500ms] relative"
//               >
//                 <span className="flex flex-row-reverse items-center gap-2 w-full">
//                   <h2 className="2xl:text-[36px] xl:text-[30px]">
//                     {item.title}
//                   </h2>
//                   <svg
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       dropdownOpen === idx ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </span>
//                 <AnimatePresence initial={false}>
//                   {dropdownOpen === idx && (
//                     <motion.div
//                       layout
//                       initial={{ height: 0 }}
//                       animate={{ height: "80px" }}
//                       exit={{ height: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="overflow-hidden leading-[150%] z-0 flex flex-col items-end gap-3 w-full pt-3"
//                     >
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className="text-[#092F5F] fpt-500 text-[20px] hover:text-[#E30613] transition-colors duration-300 w-full text-right"
//                         >
//                           {child.title}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               layout
//               className="flex justify-between items-end"
//               key={item.href}
//             >
//               <Link
//                 className="text-[#092F5F] fpt-600 2xl:text-[36px] xl:text-[30px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
//                 href={item.href}
//               >
//                 <h2>{item.title}</h2>
//               </Link>
//             </motion.div>
//           )
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Navlist;
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
//
//
//
//
//
//
//
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navlist = ({ onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navItem = [
    { title: "About Us", href: "/about-ksh" },
    { title: "Our Team", href: "/our-team" },
    { title: "Capabilities", href: "/capabilities" },
    { title: "Sustainability", href: "/sustainability" },
    {
      title: "Insights",
      isDropdown: true,
      children: [
        { title: "Blogs", href: "/blogs" },
        { title: "Case Studies", href: "/case-studies" },
        { title: "News", href: "/case-studies" },
        { title: "Press Release", href: "/case-studies" },
        { title: "Testimonials", href: "/#testimonials" },
      ],
    },
    { title: "Investors", href: "/investors" },
    { title: "Careers", href: "/careers" },
    { title: "Contact us", href: "/contact-us" },
  ];

  return (
    <div className="py-[20px] pr-[max(5%,calc((100vw-1250px)/2))] flex flex-col bg-[#fff] border-t border-[#092241] w-[40%] relative">
      <motion.div
        layout
        className="flex flex-col gap-[10px] min-1440:pt-5 min-1366:pt-3 min-1366:gap-[30px] leading-[300%] min-1366:leading-[200%] h-full items-end"
      >
        {navItem.map((item, idx) =>
          item.isDropdown ? (
            <motion.div
              key={item.title}
              layout
              className="w-full flex flex-col items-end"
            >
              {/* Dropdown Toggle */}
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === idx ? null : idx)
                }
                className={`flex flex-row-reverse items-center gap-2 ${
                  dropdownOpen !== null ? "text-[#E30613]" : "text-[#092F5F]"
                } fpt-600 transition-colors hover:text-[#E30613] duration-[500ms]`}
              >
                <h2 className="2xl:text-[36px] xl:text-[30px] text-[24px]">
                  {item.title}
                </h2>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    dropdownOpen === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              <AnimatePresence initial={false}>
                {dropdownOpen === idx && (
                  <motion.div
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden leading-[150%] flex flex-col justify-end items-end gap-3 w-full"
                  >
                    {item.children.map((child) => (
                      <Link
                        onClick={onClose}
                        key={child.href}
                        href={child.href}
                        className="text-[#092F5F] fpt-500 text-[20px] first-of-type:pt-5 hover:text-[#E30613] transition-colors duration-300 w-full text-right"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="flex justify-between items-end"
              key={item.href}
            >
              <Link
                onClick={onClose}
                className="text-[#092F5F] fpt-600 2xl:text-[36px] xl:text-[30px] text-[24px] transition-colors hover:text-[#E30613] duration-[500ms]"
                href={item.href}
              >
                <h2>{item.title}</h2>
              </Link>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Navlist;
