"use client";

import React, { useState } from "react";
import ParkMapCard from "./ParkMapCard";

const ParkCharAcc = ({ titleHtml, cardContent, imageClassName = "xl:flex min-1920:scale-125 items-end lg:top-[10%] xl-1366:top-[5%] justify-center mt-0 xl:absolute relative lg:left-[-100px] xl-1366:left-[-150px] w-full lg:w-[800px] xl-1366:w-[875px] hidden" }) => {
  const [cheight, setCHeight] = useState("440px");

  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-[50px] max-w-[1250px] w-[90%] mx-auto lg:pt-[92px] h-fit flex flex-col">
          <div className="overflow-x-hidden h-fit w-full">
            <div className="overflow-x-hidden h-fit whitespace-nowrap">
              <h2
                dangerouslySetInnerHTML={{ __html: titleHtml }}
                className="md:text-[44px] text-[22px] leading-[111%] w-full pb-[10px] border-b xl:mb-[66px] mb-[36px] text-[#092241] border-[#d7d7d7]"
              />
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit h-fit lg:gap-0 gap-5 relative">
          <div className={imageClassName}>
            <img src="/ParkPage/chakan-1/parkinf.png" alt="Sus" className="" />
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] xl:pb-[110px] min-1280:pl-[540px] min-1366:pl-[600px] min-1440:pl-[665px] pb-14">
            <ParkMapCard items={cardContent.map((c, i) => ({ ...c, id: i + 1, icon: "/ParkPage/mapicons/clock.svg", km: "" }))} activeIndex={-1} onSelectAirport={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkCharAcc;
