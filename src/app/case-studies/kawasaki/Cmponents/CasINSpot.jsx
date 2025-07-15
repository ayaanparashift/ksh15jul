"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CasINSpot = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center pt-[50px] overflow-hidden">
      <div className="fix12 pt-20 pb-[60px] overflow-hidden">
        <div className="pb-16">
          <p
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ amount: 0.1, once: true }}
            className="text-[#D7D7D7A3] text-base fsans-400 pb-7"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
            >
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/case-studies"
              className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
            >
              Case Studies
            </Link>{" "}
            &gt; Kawasaki
          </p>
          <div className="space-y-7">
            <h1
              // initial={{ width: 0 }}
              // whileInView={{ width: "fit-content" }}
              // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              // viewport={{ amount: 0.1, once: true }}
              className="md:text-[60px] text-[30px]  md:w-[400px] w-fit ftp-500 text-white border-b-[6px] border-[#F7E327] whitespace-nowrap overflow-hidden max-w-fit"
            >
              Kawasaki
            </h1>
          </div>
        </div>
        <div className="imgCon">
          <img
            // initial={{ opacity: 0, translateY: "100px" }}
            // whileInView={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ amount: 0.1, once: true }}
            src="/caseInside/caseInsideSpot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CasINSpot;
