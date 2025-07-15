"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const InvesRelaSpot = () => {
  return (
    <div className="relative bg-[#092241] h-[50vh] md:h-[100vh] z-0 overflow-hidden">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          className="text-[#D7D7D7A3] text-base fsans-400"
        >
          {" "}
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; Investor
        </p>
        <h1
          // initial={{ width: 0 }}
          // whileInView={{ width: "fit-content" }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden ftp-500 text-white border-b-[6px] border-[#F7E327] "
        >
          Investor Relations
        </h1>
      </div>
      <img
        // initial={{ opacity: 0, translateY: "100px" }}
        // whileInView={{ opacity: 1, translateY: 0 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        // viewport={{ amount: 0.1, once: true }}
        src="/investorRel/irspot.webp"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full -z-10"
        alt=""
      />
    </div>
  );
};

export default InvesRelaSpot;

// investorRelationSpot;
