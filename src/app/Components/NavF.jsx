// "use client";

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import NavMain from "./Nav/NavMain";
// import MobNav from "./Nav/MobNav";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [atTop, setAtTop] = useState(true);
//   const pathname = usePathname();

//   // detect homepage
//   const isHome = pathname === "/";

//   // === original: hide on scroll down, show on scroll up ===
//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const updateScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setShowNavbar(false); // Scrolling down
//       } else {
//         setShowNavbar(true); // Scrolling up
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", updateScroll);
//     return () => window.removeEventListener("scroll", updateScroll);
//   }, []);

//   // === original: track if we're at the very top for bg change ===
//   useEffect(() => {
//     const handleTop = () => {
//       setAtTop(window.scrollY < 10);
//     };

//     window.addEventListener("scroll", handleTop);
//     return () => window.removeEventListener("scroll", handleTop);
//   }, []);

//   // close overlay on route change (kept)
//   useEffect(() => {
//     if (!menuOpen) return;
//     setIsClosing(true);
//     const t = setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(t);
//   }, [pathname, menuOpen]);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 0);
//   };

//   return (
//     <div className="max-w-screen overflow-hidden">
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: showNavbar ? 0 : -100 }}
//         transition={{ duration: 0.2 }}
//         className={`fixed top-0 inset-x-0 h-[100px] z-[1000000]
//         flex items-center justify-center transition-colors duration-500
//         ${atTop ? "" : "bg-[#EEF0F3]"}`}
//       >
//         <div className="fix12 flex justify-between w-full max-w-7xl">
//           <Link href="/">
//             <img
//               src={isHome ? "/nav/kshlogo.svg" : "/nav/bkl.svg"}
//               className="w-[186.56px] h-[65.12px]"
//               alt="Logo"
//             />
//           </Link>

//           <div
//             className="flex items-center gap-2 cursor-pointer p-2"
//             onClick={() => setMenuOpen(true)}
//           >
//             <span
//               className={`${
//                 isHome ? "text-white" : "text-black"
//               } font-semibold`}
//             >
//               Menu
//             </span>
//             <img
//               src={isHome ? "/hbrg.svg" : "/hbrgBlack.svg"}
//               alt="Hamburger"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* overlay nav */}
//       <AnimatePresence>
//         {(menuOpen || isClosing) && (
//           <>
//             <div className="hidden xl:block">
//               <NavMain onClose={handleClose} />
//             </div>
//             <div className="block xl:hidden">
//               <MobNav onClose={handleClose} />
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
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

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import NavMain from "./Nav/NavMain";
// import MobNav from "./Nav/MobNav";

// export default function NavF() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   // const [showNavbar, setShowNavbar] = useState(true);
//   const pathname = usePathname();

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const updateScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setShowNavbar(false); // Scrolling down
//       } else {
//         setShowNavbar(true); // Scrolling up
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", updateScroll);

//     return () => {
//       window.removeEventListener("scroll", updateScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) return;
//     setIsClosing(true);
//     const t = setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 500);
//     return () => clearTimeout(t);
//   }, [pathname]);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setMenuOpen(false);
//       setIsClosing(false);
//     }, 0);
//   };

//   const [showNavbar, setShowNavbar] = useState(true);
//   const [atTop, setAtTop] = useState(true);
//   // const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setAtTop(window.scrollY < 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="max-w-screen overflow-hidden">
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: showNavbar ? 0 : -100 }}
//         // transition={{ duration: 0.2, ease: [0.7, 0, 0.4, 1] }}
//         transition={{ duration: 0.2 }}
//         className={`fixed top-0 inset-x-0 h-[100px] z-[1000000]
//         flex items-center justify-center transition-colors duration-500
//         ${
//           atTop
//             ? // ? "bg-gradient-to-b from-gray-800 to-transparent"
//               ""
//             : "bg-[#EEF0F3]  "
//         }`}
//       >
//         <div className="fix12 flex justify-between w-full max-w-7xl">
//           <Link href="/">
//             <img
//               // src={atTop ? "/nav/kshlogo.svg" : "/nav/bkl.svg"}
//               src={atTop ? "/nav/bkl.svg" : "/nav/bkl.svg"}
//               className="w-[186.56px] h-[65.12px]"
//               alt="Logo"
//             />
//           </Link>
//           <div
//             className="flex items-center gap-2 cursor-pointer p-2"
//             onClick={() => setMenuOpen(true)}
//           >
//             <span
//               className={` ${
//                 atTop ? "text-black" : "text-black"
//               }  font-semibold`}
//             >
//               Menu
//             </span>
//             <img
//               src={atTop ? "/hbrgBlack.svg" : "/hbrgBlack.svg"}
//               alt="Hamburger"
//             />
//           </div>
//         </div>
//       </motion.div>
//       {/* --------------- */}

//       {/* overlay nav */}
//       <AnimatePresence>
//         {(menuOpen || isClosing) && (
//           <>
//             <div className="hidden xl:block">
//               <NavMain onClose={handleClose} />
//             </div>
//             <div className="block xl:hidden">
//               <MobNav onClose={handleClose} />
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavMain from "./Nav/NavMain";
import MobNav from "./Nav/MobNav";

export default function NavF() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  // properly-typed ref for the timeout id
  const closeTimeoutRef = useRef(null);

  // detect homepage
  const isHome = pathname === "/";

  // hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // track if at top
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close overlay on route change — keep close animation duration (500ms)
  useEffect(() => {
    // only act when menu is open and pathname changed (i.e. user navigated)
    if (!menuOpen) return;

    setIsClosing(true);

    // clear any previous timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      setMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 500);

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, [pathname]); // runs when route changes

  // clear any pending timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  const handleOpen = () => {
    // if a close timeout is pending, clear it — prevents half-close on quick toggles
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMenuOpen(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    // start closing animation and wait 500ms before unmounting
    setIsClosing(true);

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      setMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 0);
  };

  // decide assets & text color (homepage top shows white + kshlogo + hbrg)
  const logoSrc = isHome && atTop ? "/nav/kshlogo.svg" : "/nav/bkl.svg";
  const menuIcon = isHome && atTop ? "/hbrg.svg" : "/hbrgBlack.svg";
  const menuTextColor = isHome && atTop ? "text-white" : "text-black";

  return (
    <div className="max-w-screen overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.2 }}
        className={`fixed top-0 inset-x-0 h-[100px] z-[1000000]
        flex items-center justify-center transition-colors duration-500
        ${atTop ? "" : "bg-[#EEF0F3]"}`}
      >
        <div className="fix12 flex justify-between w-full max-w-7xl">
          <Link href="/">
            <img
              src={logoSrc}
              className="w-[186.56px] h-[65.12px]"
              alt="Logo"
            />
          </Link>

          <div
            className="flex items-center gap-2 cursor-pointer p-2"
            onClick={handleOpen}
          >
            <span className={`${menuTextColor} font-semibold`}>Menu</span>
            <img src={menuIcon} alt="Hamburger" />
          </div>
        </div>
      </motion.div>

      {/* overlay nav */}
      <AnimatePresence>
        {(menuOpen || isClosing) && (
          <>
            <div className="hidden xl:block">
              <NavMain onClose={handleClose} isClosing={isClosing} />
            </div>
            <div className="block xl:hidden">
              <MobNav onClose={handleClose} isClosing={isClosing} />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
