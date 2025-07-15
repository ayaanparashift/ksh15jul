"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1400); // Ensure full animation cycle
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <>
          {/* Top Mask */}
          <motion.div
            key="page-mask-top"
            initial={{ y: 0, opacity: 1 }} // Ensure opacity is locked
            animate={{ y: "-100%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.6, 0.05, 0.01, 1] }}
            className="fixed top-0 left-0 w-full h-[50vh] bg-black z-[1000]"
          />

          {/* Bottom Mask */}
          <motion.div
            key="page-mask-bottom"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: "100%", opacity: 1 }}
            exit={{ y: "100%", opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="fixed bottom-0 left-0 w-full h-[50vh] bg-black z-[1000]"
          />
        </>
      )}

      {/* Page Content */}
      <motion.div
        key={pathname + "-content"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-[1001]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
