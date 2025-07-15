import Link from "next/link";
import React from "react";

const CapEnq = () => {
  return (
    <div className="flex flex-col items-center px-[max(5%,calc((100vw-1250px)/2))] justify-center gap-6 capEnqBg lg:h-[292px] py-14 lg:py-0">
      <h1 className="fpt-500 text-2xl text-center  md:text-3xl lg:text-[44px] lg:leading-[50px] text-white">
        Let's co-create the right solution for your business
      </h1>
      <Link
        href="/contact-us"
        className="border-[D7D7D7] border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[10px] gap-3 rounded-[10px]"
      >
        Enquire Now <img src="/Cap/cap_enquire.svg" alt="" />
      </Link>
    </div>
  );
};

export default CapEnq;
