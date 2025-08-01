import React from "react";
import LineHead from "../../Components/Heading/LineHead";
import AwardCard from "./AwardCard";

const Awards = () => {
  return (
    <div className="w-full bg-[#092241] mt-10">
      <div className="flex fix12 flex-col justify-center py-[80px]">
        <div>
          <LineHead heading="Awards" clr="text-white" />
        </div>
        <div>
          <AwardCard />
        </div>
      </div>
    </div>
  );
};

export default Awards;
