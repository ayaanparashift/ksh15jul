import React from "react";
import LineHead from "../../Components/Heading/LineHead";
import CertCard from "./CertCard";

const Certificates = () => {
  return (
    <div className="w-full bg-[#092241] mt-10">
      <div className="flex fix12 flex-col justify-center py-[80px]">
        <div>
          <LineHead heading="Certificates" clr="text-white" />
        </div>
        <div>
          <CertCard />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
