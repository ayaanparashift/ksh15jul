import React from "react";

const ParkInsideSlider = () => {
  return (
    <>
      <div div className="fix12 bg-red-500 h-40">
        ParkInsideSlider
      </div>
      {/*  */}
      <div className="bg-[#212121]">
        <div className="bg-[#EEF0F3] h-40 ml-[max(5%,calc((100vw-1250px)/2))] pt-[53px] pb-[60px]">
          <div className="">
            <h1 className="text-[#092241] fsans-600 text-[20px] leading-[26px] border-b-[#09224157] border-b-[1px] w-[90%] pb-3">
              Defining Characteristics of Chakan, Maharashtra
            </h1>
          </div>

          <div className="bg-red-400 h-5">
            <div className="navSlider"></div>
            <div className="slideSlider"></div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ParkInsideSlider;
