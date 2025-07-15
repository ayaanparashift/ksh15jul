"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Counter({ conval, Endval }) {
  const finalEndVal = Number(Endval);
  const count = useMotionValue(conval);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(conval.toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, finalEndVal, {
        duration: 1.7,
      });

      const unsubscribe = rounded.on("change", (v) => {
        setDisplayValue(v.toLocaleString()); // Format number with commas
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [isInView, finalEndVal]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      className="c_no"
    >
      {displayValue}
    </motion.p>
  );
}
