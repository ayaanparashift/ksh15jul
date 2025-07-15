import React from "react";

const CaseINChalleng = () => {
  return (
    <div className="bg-[url('/caseInside/challengeSecBg.png')]">
      <div className="max-w-[1047px] mx-auto px-[20px] md:px-[0px] pt-[82px] pb-[95px]">
        <div className="topConetbnt flex flex-col items-center text-center gap-[24px] pb-[60px]">
          <h1 className="w-fit fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
            CHALLENGES
          </h1>
          <p className="fsans-600 text-lg text-[#101021]">
            While KSH INFRA facility was ready-to-use, it needed significant
            customisations and alterations to suit Jabil’s manufacturing and
            assembly requirements, such as
          </p>
        </div>
        <div className="caseStChallengebtmCon">
          <ul className="grid grid-cols-1 md:grid-cols-2 fsans-400 text-base leading-[26px] text-[#101021] abc">
            <li className="pl-3 ml-[40px]">
              A 100-tonne crane housed within the facility
            </li>
            <li className="pl-3 ml-[40px]">Loading pits for raw material</li>
            <li className="pl-3 ml-[40px]">
              Loading pits for finished products
            </li>
            <li className="pl-3 ml-[40px]">
              Availability of 6000 square feet of plug-and-play office space,
              canteen, locker rooms, and toilets
            </li>
            <li className="pl-3 ml-[40px]">
              1000 KVA electrical infrastructure
            </li>
            <li className="pl-3 ml-[40px]">
              Redesigning fire protection system based on FM Global Standards
            </li>
          </ul>
        </div>
        <div className="topConetbnt flex flex-col items-center text-center gap-[32px] pt-[85px]">
          <p className="fsans-600 text-lg text-[#101021]">
            KSH INFRA had a period of 90 days to prepare the space for Jabil,
            ensuring it was fully functional to obtain approvals and commence
            manufacturing and assembly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseINChalleng;
