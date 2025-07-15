// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   FiChevronDown,
//   FiChevronUp,
//   FiUser,
//   FiSearch,
//   FiX,
// } from "react-icons/fi";

// const MobNav = ({ onClose }) => {
//   const [openSections, setOpenSections] = useState({
//     parks: false,
//     pune: false,
//     bengaluru: false,
//   });

//   const toggle = (key) =>
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

//   // close on ESC
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   return (
//     <motion.div
//       key="mobile-nav"
//       initial={{ x: "100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "100%" }}
//       transition={{ ease: [0.7, 0, 0.4, 1], duration: 1 }}
//       className="fixed inset-0 w-full sm:w-2/3 bg-white p-6 overflow-y-auto z-[1000000]"
//     >
//       {/* HEADER */}
//       <div className="flex justify-end items-center gap-4 mb-6">
//         <img src="/nav/userico.svg" className="w-10 h-10 text-gray-700" />
//         <img src="/nav/search.svg" className="w-10 h-10 text-gray-700" />
//         <Link href="/contact-us" onClick={onClose}>
//           <p className="flex items-center fsans-600 text-white text-base bg-[#E30613] py-2 px-4 rounded-3xl">
//             Enquire Now
//             <img src="/rightUpArrow.svg" alt="" className="w-4 h-4 ml-2" />
//           </p>
//         </Link>
//         <button onClick={onClose} className="focus:outline-none">
//           <img src="/nav/close.svg" className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

//       {/* NAVLIST LINKS */}
//       <ul className="space-y-4 fsans-600 text-gray-700">
//         {[
//           { href: "/about-ksh", label: "About" },
//           { href: "/our-team", label: "Our Team" },
//           { href: "/capabilities", label: "Capabilities" },
//           { href: "/sustainability", label: "Sustainability" },
//           { href: "/investors", label: "Investors" },
//           { href: "/careers", label: "Career" },
//           { href: "/contact-us", label: "Contact" },
//         ].map(({ href, label }) => (
//           <li key={href}>
//             <Link
//               href={href}
//               onClick={onClose}
//               className="flex items-center space-x-2 text-lg hover:underline cursor-pointer"
//             >
//               <span>{label}</span>
//             </Link>
//           </li>
//         ))}

//         {/* PARKS */}
//         <li>
//           <button
//             onClick={() => toggle("parks")}
//             className="flex items-center space-x-2 text-lg font-semibold text-gray-700"
//           >
//             <span>Parks</span>
//             {openSections.parks ? (
//               <FiChevronUp className="w-5 h-5" />
//             ) : (
//               <FiChevronDown className="w-5 h-5" />
//             )}
//           </button>

//           <AnimatePresence>
//             {openSections.parks && (
//               <motion.ul
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="mt-2 pl-4 space-y-3 fsans-500 text-base text-gray-700 overflow-hidden"
//               >
//                 <li>
//                   <Link
//                     href="/parks"
//                     onClick={onClose}
//                     className="block hover:underline cursor-pointer"
//                   >
//                     Park Overview
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => toggle("pune")}
//                     className="flex items-center space-x-2 font-medium"
//                   >
//                     <span>Pune</span>
//                     {openSections.pune ? (
//                       <FiChevronUp className="w-4 h-4" />
//                     ) : (
//                       <FiChevronDown className="w-4 h-4" />
//                     )}
//                   </button>
//                   <AnimatePresence>
//                     {openSections.pune && (
//                       <motion.ul
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="mt-1 pl-4 space-y-2 fsans-400 text-sm overflow-hidden"
//                       >
//                         {[
//                           { href: "/ksh-chakan-iv", label: "KSH Chakan IV" },
//                           {
//                             href: "/ksh-chakan-iii",
//                             label: "KSH Chakan III",
//                           },
//                           { href: "/ksh-chakan-ii", label: "KSH Chakan II" },
//                           { href: "/ksh-chakan-i", label: "KSH Chakan I" },
//                           {
//                             href: "/ksh-talegaon-i",
//                             label: "KSH Talegaon I",
//                           },
//                         ].map(({ href, label }) => (
//                           <li key={href}>
//                             <Link
//                               href={href}
//                               onClick={onClose}
//                               className="block hover:underline cursor-pointer"
//                             >
//                               {label}
//                             </Link>
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => toggle("bengaluru")}
//                     className="flex items-center space-x-2 font-medium"
//                   >
//                     <span>Bengaluru</span>
//                     {openSections.bengaluru ? (
//                       <FiChevronUp className="w-4 h-4" />
//                     ) : (
//                       <FiChevronDown className="w-4 h-4" />
//                     )}
//                   </button>
//                   <AnimatePresence>
//                     {openSections.bengaluru && (
//                       <motion.ul
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="mt-1 pl-4 space-y-2 fsans-400 text-sm overflow-hidden"
//                       >
//                         <li>
//                           <Link
//                             href="/ksh-hosur-i"
//                             onClick={onClose}
//                             className="block hover:underline cursor-pointer"
//                           >
//                             KSH Hosur I
//                           </Link>
//                         </li>
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </li>
//               </motion.ul>
//             )}
//           </AnimatePresence>
//         </li>
//       </ul>
//     </motion.div>
//   );
// };

// export default MobNav;
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import EnquireNow from "../EnquireNow";

const EASING = [0.7, 0, 0.4, 1];

const MobNav = ({ onClose }) => {
  const [openSections, setOpenSections] = useState({
    parks: false,
    pune: false,
    bengaluru: false,
  });
  const [showEnquire, setShowEnquire] = useState(false);

  const toggle = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleOpenEnquire = () => setShowEnquire(true);
  const handleCloseEnquire = () => setShowEnquire(false);

  // close mobile nav on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Mobile Nav Drawer */}
      <motion.div
        key="mobile-nav"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ ease: EASING, duration: 1 }}
        className="fixed right-0 top-0 bottom-0 sm:w-1/2 w-full bg-white p-6 overflow-y-auto z-[1000000]"
      >
        {/* HEADER */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <img
            src="/nav/userico.svg"
            alt="User"
            className="w-10 h-10 text-gray-700"
          />
          <img
            src="/nav/search.svg"
            alt="Search"
            className="w-10 h-10 text-gray-700"
          />
          <button
            onClick={handleOpenEnquire}
            className="flex items-center fsans-600 text-white text-base bg-[#E30613] py-2 px-4 rounded-3xl"
          >
            Enquire Now
            <img src="/rightUpArrow.svg" alt="" className="w-4 h-4 ml-2" />
          </button>
          <button onClick={onClose} className="focus:outline-none">
            <img
              src="/nav/close.svg"
              alt="Close"
              className="w-6 h-6 text-gray-700"
            />
          </button>
        </div>

        {/* MAIN NAV LINKS */}
        <ul className="space-y-4 fsans-600 text-gray-700">
          {[
            { href: "/about-ksh", label: "About" },
            { href: "/our-team", label: "Our Team" },
            { href: "/capabilities", label: "Capabilities" },
            { href: "/sustainability", label: "Sustainability" },
            { href: "/investors", label: "Investors" },
            { href: "/careers", label: "Career" },
            { href: "/contact-us", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onClose}
                className="flex items-center space-x-2 text-lg hover:underline cursor-pointer"
              >
                <span>{label}</span>
              </Link>
            </li>
          ))}

          {/* PARKS SECTION */}
          <li>
            <button
              onClick={() => toggle("parks")}
              className="flex items-center space-x-2 text-lg font-semibold text-gray-700"
            >
              <span>Parks</span>
              {openSections.parks ? (
                <FiChevronUp className="w-5 h-5" />
              ) : (
                <FiChevronDown className="w-5 h-5" />
              )}
            </button>

            <AnimatePresence>
              {openSections.parks && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 pl-4 space-y-3 fsans-500 text-base text-gray-700 overflow-hidden"
                >
                  <li>
                    <Link
                      href="/parks"
                      onClick={onClose}
                      className="block hover:underline cursor-pointer"
                    >
                      Park Overview
                    </Link>
                  </li>

                  {/* Pune Subsection */}
                  <li>
                    <button
                      onClick={() => toggle("pune")}
                      className="flex items-center space-x-2 font-medium"
                    >
                      <span>Pune</span>
                      {openSections.pune ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSections.pune && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 pl-4 space-y-2 fsans-400 text-sm overflow-hidden"
                        >
                          {[
                            {
                              href: "/ksh-chakan-iv",
                              label: "KSH Chakan IV",
                            },
                            {
                              href: "/ksh-chakan-iii",
                              label: "KSH Chakan III",
                            },
                            {
                              href: "/ksh-chakan-ii",
                              label: "KSH Chakan II",
                            },
                            {
                              href: "/ksh-chakan-i",
                              label: "KSH Chakan I",
                            },
                            {
                              href: "/ksh-talegaon-i",
                              label: "KSH Talegaon I",
                            },
                          ].map(({ href, label }) => (
                            <li key={href}>
                              <Link
                                href={href}
                                onClick={onClose}
                                className="block hover:underline cursor-pointer"
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Bengaluru Subsection */}
                  <li>
                    <button
                      onClick={() => toggle("bengaluru")}
                      className="flex items-center space-x-2 font-medium"
                    >
                      <span>Bengaluru</span>
                      {openSections.bengaluru ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSections.bengaluru && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 pl-4 space-y-2 fsans-400 text-sm overflow-hidden"
                        >
                          <li>
                            <Link
                              href="/ksh-hosur-i"
                              onClick={onClose}
                              className="block hover:underline cursor-pointer"
                            >
                              KSH Hosur I
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </motion.div>

      {/* Enquire Now Overlay & Drawer */}
      <AnimatePresence>
        {showEnquire && (
          <>
            {/* Overlay backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-[1000000000]"
              onClick={handleCloseEnquire}
            />
            {/* Drawer */}
            <motion.div
              className="fixed z-[10000000000] top-0 right-0 md:right-0 min-h-screen w-[510px] overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: EASING }}
              onClick={(e) => e.stopPropagation()}
            >
              <EnquireNow closeEnquire={handleCloseEnquire} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobNav;
