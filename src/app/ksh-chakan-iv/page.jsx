import React from "react";
import ParkinSpot from "./componentsf/ParkinSpot";
import TabMenu from "./componentsf/TabsMenu";
import ParkOverview from "./componentsf/ParkOverview";
import ParkInfo from "./componentsf/ParkInfo";
import LastSw from "./componentsf/LastSw";
import CharSlide from "./componentsf/CharSlide";
import PhVdslider from "./componentsf/PhVdslider";
import ParkInfra from "../ksh-chakan-i/componentsf/ParkInfra";
import CharAcc from "../ksh-chakan-i/componentsf/CharAcc";
import MapSection from "./componentsf/MapSection";
import PDTab from "../Components/PDTab";

export const metadata = {
  title:
    "KSH Chakan IV Industrial Parks Solutions in Pune offering Plug and Play Industrial Park and Grade A Infrastructure Facilities",
  description:
    "KSH Chakan IV offers Grade A industrial parks in Chakan with modern infrastructure, built-to-suit warehouses, and strategic connectivity near Pune.",
};
const tabsData = [
  {
    title: "KSH Parks",
    image: "/ParkPage/chakan-1/cps.webp",
    simage: "/ParkPage/chakan-1/cpb.webp",
  },
  {
    title: "Notable Industries",
    image: "/ParkPage/chakan-1/cis.webp",
    simage: "/ParkPage/chakan-1/cib.webp",
  },
  {
    title: "Connectivity",
    image: "/ParkPage/chakan-1/ccs.webp",
    simage: "/ParkPage/chakan-1/ccb.webp",
  },
];
const page = () => {
  return (
    <div className="bg-[#EEF0F3]">
      <ParkinSpot />
      <TabMenu />
      {/* <ParkOverview /> */}

      <PDTab
          bwidth={1140}
          tdata={tabsData}
          para="Chakan, located near Pune, is one of India’s fastest-growing integrated industrial zones, strategically developed by MIDC as a key manufacturing and logistics corridor. Home to global automotive giants like Volkswagen, Bajaj Auto, and Mercedes Benz, it offers ready infrastructure, robust connectivity, and a growing talent pool. With metro connectivity and rapid social infrastructure underway, Chakan is set to become a benchmark for modern industrial development. KSH INFRA’s parks in Chakan further reinforce its position as a central hub driving India’s industrial growth."
          title="Chakan: A Thriving Industrial Hub in Pune"
        />
      <ParkInfo />
      <MapSection />
      {/* <CharSlide /> */}
      <CharAcc />
      <ParkInfra />
      <PhVdslider />
      <LastSw />
    </div>
  );
};

export default page;
