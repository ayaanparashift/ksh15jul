import Link from "next/link";
import React from "react";

const BlogInsideSpot = () => {
  return (
    <div className="bg-[#092241]">
      <div className="fix12 py-20">
        <div className="pb-16">
          <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
            {" "}
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
            >
              Home
            </Link>{" "}
            &gt; Blog
          </p>

          <div className="space-y-7">
            <p className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]">
              Brand
            </p>
            <h1 className="fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white">
              Global Trade Trends: How New Tariffs are set to Shape the
              Logistics Landscape
            </h1>
          </div>
        </div>
        <div className="imgCon">
          <img src="/binside/bInsideSpot.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogInsideSpot;
