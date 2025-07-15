import React from "react";
import TabSec from "./TabSec";
import ParkOvBtn from "./ParkOvBtn";

const NavTab = () => {
  // return (
  //   <div
  //     style={{
  //       // background: "linear-gradient(-45deg, #092241 90%, #1757a7 10%)",
  //       background: "linear-gradient(126deg, #1757A7 -139.71%, #092241 34.21%)",
  //     }}
  //     className="w-[63%] h-full min-h-full flex flex-col items-start justify-start py-10 pl-[60px] min-1440:pl-[102px] pr-[66px]"
  //   >
  //     <h1 className="text-white w-fit flex items-start text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
  //       Parks
  //     </h1>
  //     <TabSec />
  //     {/* <ParkOvBtn /> */}
  //   </div>
  // );
  return (
    <div
      style={{
        // background: "linear-gradient(-45deg, #092241 90%, #1757a7 10%)",
        background: "linear-gradient(126deg, #1757A7 -139.71%, #092241 34.21%)",
      }}
      className="w-[60%] h-full min-h-full flex flex-col items-start justify-start py-10 pl-[max(5%,calc((100vw-1250px)/2))] 2xl:pr-[66px] pr-[30px]"
    >
      <h1 className="text-white w-fit flex items-start text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Parks
      </h1>
      <TabSec />
      {/* <ParkOvBtn /> */}
    </div>
  );
};

export default NavTab;
