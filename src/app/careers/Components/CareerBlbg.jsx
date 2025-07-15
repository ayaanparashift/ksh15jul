import Link from "next/link";
import React from "react";

const CareerBlbg = () => {
  return (
    <div className="flex flex-col items-center px-[max(5%,calc((100vw-1250px)/2))] justify-center gap-6 capEnqBg lg:h-[292px] py-14 lg:py-0 ">
      <h1 className="fpt-600 text-2xl text-center  md:text-3xl lg:text-[44px] lg:leading-[50px] text-white">
        Let's build something great together.
      </h1>
      <Link
        id="joinusbtn"
        href="#join-us"
        className="border-[#D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[22px] gap-3 rounded-[10px] cursor-pointer group hover:bg-white transition-colors duration-[500ms]"
      >
        <p className="transition-colors duration-[500ms] z-[100] group-hover:text-black">
          Join Us
        </p>
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:stroke-black transition-colors duration-[500ms]"
            d="M12.3251 8.24676L12.3093 3.18522C12.3059 2.08552 11.4152 1.19488 10.3155 1.19145L5.25399 1.1757M1.69651 11.8042L8.44599 5.05477"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CareerBlbg;
