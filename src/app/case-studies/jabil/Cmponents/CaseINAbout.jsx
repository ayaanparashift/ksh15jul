import React from "react";

const CaseINAbout = () => {
  return (
    <div className="bg-[#092241]">
      <div className="flex flex-col md:flex-row gap-[45px] pb-[72px] md:pb-0 pt-[72px] mr-[0px] px-[20px] md:px-[0px] md:mr-[max(5%,calc((100vw-1250px)/2))] ">
        <div className="imgCon w-full">
          <img src="/caseInside/jabil.svg" alt="" />
        </div>

        <div className="content pt-[58px] ">
          <h1 className="fsans-400 text-3xl text-[#FFF34A] pb-4">About</h1>
          <div className="fsans-400 text-lg text-[#A1AEC7] space-y-4">
            <p>
              Jabil is a worldwide manufacturing services company headquartered
              in the US. They have over one hundred plants across 30 nations and
              are involved in healthcare, clean energy, automotive, defence,
              aerospace, telecommunications and various other industries.
            </p>
            <p>
              Jabil wanted to set up a light engineering and assembly plant for
              its Nacelle business. They needed a 75,000 square feet facility in
              Chakan, Pune. Jabil approached KSH INFRA for space in KSH Chakan
              Park I seeing that the park was a completely constructed facility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseINAbout;
