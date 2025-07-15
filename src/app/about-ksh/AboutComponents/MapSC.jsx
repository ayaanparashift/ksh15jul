import React from "react";

const MapSC = () => {
  return (
    <div className="h-[272px] flex items-center justify-between px-10 bg-blue-300 gap-10 w-full">
      <div className="flex-[0.5]">
        <img src="/firstinfra.jpg" className="object-cover" alt="first infra" />
      </div>
      <div className="flex flex-col gap-10 flex-1 w-full">
        <h2 className="text-5xl border-b-[10px] border-[#F7E327] font-bold overflow-hidden text-ellipsis max-w-fit">
          Chakan IV
        </h2>
        <div className="flex flex-col gap-[5px] w-full">
          <div className="flex w-full min-w-0">
            <p className="w-[70%] flex-1">CITY</p>
            <p className="w-[30%] flex-1">Pune, Maharashtra</p>
          </div>
          <div className="flex w-full min-w-0">
            <p className="w-[70%] flex-1">TOTAL AREA</p>
            <p className="w-[30%] flex-1">0.36MN. SQ. FT.</p>
          </div>
          <div className="flex w-full min-w-0">
            <p className="w-[70%] flex-1">TOTAL BUILDINGS</p>
            <p className="w-[30%] flex-1">02 BUILDINGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSC;
