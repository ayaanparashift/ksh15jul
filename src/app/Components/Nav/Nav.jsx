"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHover(false);
    }, 10000);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsHover(true);
  };

  return (
    <motion.div
      className="flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent fixed top-0 left-0 z-[1000000000] w-screen"
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="px-[40px] flex justify-between relative">
        <div>
          <Link href="/">
            <img
              src="/nav/kshlogo.svg"
              className="h-full w-full object-cover max-w-[180px]"
              alt="Nav Logo"
            />
          </Link>
        </div>

        <motion.div className="flex gap-[20px] justify-center items-center cursor-pointer relative p-2">
          <div className="text-white font-semibold text-[16px]">Menu</div>
          <img src="/hbrg.svg" alt="Hamburger Menu" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
