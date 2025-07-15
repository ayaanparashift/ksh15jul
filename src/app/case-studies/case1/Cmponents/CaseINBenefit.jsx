import React from "react";

const CaseINBenefit = () => {
  return (
    <div className="bg-[url('/caseInside/caseInBenefitsBg.png')] sm:px-0 px-[20px] bg-no-repeat bg-cover">
      <div className="max-w-[1040px] mx-auto py-[100px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 caseBenefitGrid uppercase text-center">
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2">
            <img src="/caseInside/Intellenge.svg" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              INTELLIGENT ENERGY MANAGEMENT{" "}
            </h1>
          </div>
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2">
            <img src="/caseInside/cleanwater.svg/" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              Preserving water resources{" "}
            </h1>
          </div>
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2">
            <img src="/caseInside/mini.svg" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              Waste minimisation{" "}
            </h1>
          </div>
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2">
            <img src="/caseInside/better-health.svg" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              Wellbeing Factors{" "}
            </h1>
          </div>
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2">
            <img src="/caseInside/earth.svg" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              Positive environmental{" "}
            </h1>
          </div>
          <div className="h-[220px] bg-[#EEF0F3] flex flex-col px-11  items-center justify-center gap-2 ">
            <img src="/caseInside/susta.svg" alt="" />
            <h1 className="fsans-700 text-[22px] leading-[130%] text-[#092241]">
              Sustainable Development{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseINBenefit;
