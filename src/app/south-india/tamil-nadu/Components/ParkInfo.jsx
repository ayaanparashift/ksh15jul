"use client";

import ParkInfoBase from "../../../Components/parkComponents/ParkInfoBase";
const stats = [
  { value: "1.26 MN SQ. FT.", label: "Total <br/> Area" },
  { value: "04", label: "Total<br/>Buildings" },
  { value: "Hosur,<br/>Bengaluru", label: "Park<br/>Location" },
];
const stats2 = [
  { value: "1.60 MN SQ. FT.", label: "Total <br/> Area" },
  { value: "04", label: "Total<br/>Buildings" },
  { value: "Sriperumbudur,<br/>Chennai", label: "Park<br/>Location" },
];
const ParkInfo = () => (
  <div className=" w-full">
    <div className="bg-[#eef0f3] lg:pt-20 pt-10">
      <div className="max-w-fit ml-[max(5%,calc((100vw-1250px)/2))]">
        <h2 className="text-[#092241] text-[24px] sm:text-[44px] fpt-600 md:leading-[48.84px] leading-[110%] whitespace-nowrap ">
          KSH Hosur Park I &nbsp;&nbsp;
        </h2>
        <div className="bg-[#F7E327] h-[8px] w-full "></div>
      </div>
      <ParkInfoBase
        stats={stats}
        imageSrc="/ParkPage/hosur-1/hsiteplan.jpg"
        valueColClassName="border-r w-[60%] md:w-[70%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center"
      />
    </div>
    <div className=" lg:pt-20 pt-10">
      <div className="max-w-fit ml-[max(5%,calc((100vw-1250px)/2))]">
        <h2 className="text-[#092241] text-[24px] sm:text-[44px] fpt-600 md:leading-[48.84px] leading-[110%] whitespace-nowrap ">
          KSH Chennai Park I &nbsp;&nbsp;
        </h2>
        <div className="bg-[#F7E327] h-[8px] w-full "></div>
      </div>
      <ParkInfoBase
        stats={stats2}
        imageSrc="/south/chpi.webp"
        valueColClassName="border-r w-[60%] md:w-[70%] border-[#B0B0B0] h-[60px] xl:h-[100px] flex items-center"
      />
    </div>
  </div>
);
export default ParkInfo;
