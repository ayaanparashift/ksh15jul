import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import MapSection from "./componentsf/MapSection";
// import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import CharSlide from "./componentsf/CharSlide";
import ParkInfra from "./componentsf/ParkInfra";
import CharAcc from "./componentsf/CharAcc";
import PDTab from "../Components/PDTab";
// import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
export const metadata = {
  title: "KSH INFRA: Industrial & Warehouse Park in Hosur",
  description:
    "Discover KSH Hosur Warehouse Park, the first of KSH INFRA's industrial parks attracting global investors. Setting the benchmark for green industrial infrastructure.",
};
const tabsData = [
  {
    title: "Notable Industries",
    image: "/ParkPage/hosur-1/hisf.webp",
    simage: "/ParkPage/hosur-1/hibf.webp",
  },
  {
    title: "Connectivity",
    image: "/ParkPage/hosur-1/hcsf.webp",
    simage: "/ParkPage/hosur-1/hcbf.webp",
  },
];
const page = () => {
  return (
    <>
      <div className="bg-[#EEF0F3]">
        <ParkinSpot />
        <TabMenu />
        {/* <ParkOverview /> */}
          <PDTab
          bwidth={838}
          tdata={tabsData}
          para="Hosur, located on the outskirts of Bangalore, is fast becoming a leading destination for manufacturing and industrial expansion. Its strategic location, seamless connectivity, and access to a skilled workforce have attracted major players like Tata Electronics and a thriving network of companies in automotive, electronics, and engineering. With Bangalore’s innovation ecosystem next door and robust infrastructure on the rise, Hosur offers the perfect blend of scale, speed, and future-readiness for modern industrial growth."
          title="Hosur: The Next Industrial Powerhouse"
        />
        {/* <PDTab /> */}
        <ParkInfo />

        <MapSection />
        {/* <CharSlide /> */}
        <CharAcc />
        <ParkInfra />
        <PhVdslider />
        <LastSw />
      </div>
    </>
  );
};

export default page;
