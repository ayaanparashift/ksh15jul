import React from "react";

const CaseINAbout = () => {
  return (
    <div className="bg-[#092241]">
      <div className="flex gap-[45px] pt-[72px] mr-[max(5%,calc((100vw-1250px)/2))]">
        <div className="imgCon w-full">
          <img src="/caseInside/kawa.svg" alt="" />
        </div>

        <div className="content pt-[58px] ">
          <h1 className="fsans-400 text-3xl text-[#FFF34A] pb-4">About</h1>
          <div className="fsans-400 text-lg text-[#A1AEC7] space-y-4">
            <p>
              Kawasaki is a global motorcycle manufacturing company known across
              the world for their performance bikes, daily commute vehicles,
              motors, energy and industrial equipment. Kawasaki has
              manufacturing plants across the world. India Kawasaki Motors
              Private Limited is a subsidiary of Kawasaki Motors Limited, Japan.
            </p>
            <p>
              Kawasaki motors sought its first manufacturing plant in India at
              Chakan, Pune. They approached KSH INFRA with a requirement of
              250,000 square feet for manufacturing, assembly, and warehousing
              for its R&D division.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseINAbout;
