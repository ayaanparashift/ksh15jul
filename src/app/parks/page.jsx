import React from "react";
import ParkOverviewContent from "./ParkOverviewContent";
import TrustedPartners from "../Components/TrustedPartners";
import WhyKsh from "./WhyKsh";
import Usp from "../Components/USPF/NewUSP";
import ParkOverviewSpot from "./ParkOverviewSpot";
import ParkThreed from "./ParkThreed";
import MapNew from "../Components/MapComponents/MapNew";

export const metadata = {
  title:
    "KSH INFRA | Premium Industrial and Logistics Parks & Modern Infrastructure",
  description:
    "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
};
const page = () => {
  return (
    <>
      <div>
        <ParkOverviewSpot />
        <ParkOverviewContent />
        <MapNew />
        <Usp />
        <WhyKsh />
        <TrustedPartners paddingB={70} />
        {/* <ParkThreed />  */}
      </div>
    </>
  );
};

export default page;
