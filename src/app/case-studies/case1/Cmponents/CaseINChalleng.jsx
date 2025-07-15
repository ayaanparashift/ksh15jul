import React from "react";

const CaseINChalleng = () => {
  return (
    <div className="bg-[url('/caseInside/challengeSecBg.png')]">
      <div className="max-w-[1047px] mx-auto px-[20px] md:px-[0px] pt-[82px] pb-[95px]">
        <div className="topConetbnt flex flex-col items-center text-center gap-[24px] pb-[60px]">
          <h1 className="w-fit fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
            The Challenge
          </h1>
          <p className="fsans-600 text-lg text-[#101021]">
            The initial requirement was for a 125,000 sq. ft. space; however,
            Kawasaki also required two separate office blocks, one each for
            manufacturing and R&D.
          </p>
        </div>
        <div className="caseStChallengebtmCon">
          <ul className="grid grid-cols-1 md:grid-cols-2 fsans-400 text-base leading-[26px] text-[#101021] abc">
            <li className="pl-3 ml-[40px]">
              Kawasaki wanted two facilities spanning an area of 125,000 sq. ft.
              each.Kawasaki wanted two facilities spanning an area of 125,000
              sq. ft. each.
            </li>
            <li className="pl-3 ml-[40px]">
              They required a 500 KVA sub-station to meet their energy
              requirements and a generator backup for their manufacturing
              division.
            </li>
            <li className="pl-3 ml-[40px]">
              They required a canteen block, washroom sections, production
              offices, Quality Check labs, and R&D engine testing labs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseINChalleng;
