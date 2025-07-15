import React from "react";

const CaseSolution = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(117deg, #1B4273 -12.83%, #092241 64.77%)",
      }}
      className="flex flex-col items-center gap-[66px] md:px-[0px] px-[20px] pt-[71px] pb-[85px] caseSolBgGradients"
    >
      <h1 className="text-white w-fit fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
        The Solution
      </h1>

      <div className="relative">
        <img
          src="/caseInside/casebgline.svg"
          className="absolute left-[50%] top-[-40px] h-[112%]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              KSH INFRA consultants obtained all the required permissions from
              the MIDC for the operation.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              A 6000-sq.-ft. area was allocated to the manufacturing division.
              The ground floor was used as a showroom area.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              The aforesaid area was equipped with workstations, cabins,
              washroom blocks and conference rooms.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              Another 6000 square feet was converted into a corporate office for
              the R&D division.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              Temperature-controlled HVAC systems were installed in the
              production office, QC labs, and R&D facilities.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              200-lux lighting devices were installed in the warehouse in the
              manufacturing and assembly areas.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              800-lux lighting devices were installed in the QC labs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSolution;
