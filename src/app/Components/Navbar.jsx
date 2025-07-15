// "use client";

// import React, { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import NavMain from "./Nav/NavMain";
// import MobNav from "./Nav/MobNav";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const pathname = usePathname();

//   // ➤ only run when `pathname` changes
//   useEffect(() => {
//     if (!menuOpen) return; // → do nothing if it's already closed

//     setIsClosing(true);
//     const t = setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(t);
//   }, [pathname]); // ← remove `menuOpen` here!

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 500);
//   };

//   return (
//     <>
//       {/* header stays put */}
//       <div
//         className="fixed top-0 left-0 w-screen h-[100px]
//                       bg-gradient-to-b from-gray-800 to-transparent
//                       z-[50] flex items-center justify-center"
//       >
//         <div className="md:px-[40px] px-[20px] w-full flex justify-between">
//           <Link href="/">
//             <img
//               src="/nav/kshlogo.svg"
//               className="h-full w-[185px]"
//               alt="Logo"
//             />
//           </Link>
//           <div
//             className="flex items-center gap-2 cursor-pointer p-2"
//             onClick={() => setMenuOpen(true)}
//           >
//             <span className="text-white font-semibold">Menu</span>
//             <img src="/hbrg.svg" alt="Hamburger" />
//           </div>
//         </div>
//       </div>

//       {/* overlay */}
//       <AnimatePresence>
//         {(menuOpen || isClosing) && (
//           <>
//             <div className="hidden md:block">
//               <NavMain onClose={handleClose} />
//             </div>
//             <div className="block md:hidden">
//               <MobNav onClose={handleClose} />
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavMain from "./Nav/NavMain";
import MobNav from "./Nav/MobNav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    setIsClosing(true);
    const t = setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 0);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-screen overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        // transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
        transition={{ duration: 0.2 }}
        className={`fixed top-0 inset-x-0 h-[100px] z-[1000000] 
        flex items-center justify-center transition-colors duration-500
        ${
          atTop
            ? // ? "bg-gradient-to-b from-gray-800 to-transparent"
              ""
            : "bg-[#EEF0F3]  "
        }`}
      >
        <div className="fix12 flex justify-between w-full max-w-7xl">
          <Link href="/">
            <img
              src={atTop ? "/nav/kshlogo.svg" : "/nav/bkl.svg"}
              className="w-[186.56px] h-[65.12px]"
              alt="Logo"
            />
          </Link>
          <div
            className="flex items-center gap-2 cursor-pointer p-2"
            onClick={() => setMenuOpen(true)}
          >
            <span
              className={` ${
                atTop ? "text-white" : "text-black"
              }  font-semibold`}
            >
              Menu
            </span>
            <img src={atTop ? "/hbrg.svg" : "/hbrgBlack.svg"} alt="Hamburger" />
          </div>
        </div>
      </motion.div>
      {/* --------------- */}

      {/* overlay nav */}
      <AnimatePresence>
        {(menuOpen || isClosing) && (
          <>
            <div className="hidden xl:block">
              <NavMain onClose={handleClose} />
            </div>
            <div className="block xl:hidden">
              <MobNav onClose={handleClose} />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
