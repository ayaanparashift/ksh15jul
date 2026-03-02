import ChennaiFomHero from "./Components/ChennaiFomHero";
import ChennaiFomTabs from "./Components/ChennaiFomTabs";
import ChennaiFomGreenDevelopment from "./Components/ChennaiFomGreenDevelopment";
import ChennaiFomCounters from "./Components/ChennaiFomCounters";
import ChennaiFomSlideBlog from "./Components/ChennaiFomSlideBlog";
import ParkInfo from "./Components/ParkInfo";

const ChennaiFomPage = () => {
  return (
    <>
      <ChennaiFomHero />
      <ParkInfo />
      <ChennaiFomTabs />
      <ChennaiFomSlideBlog />
      <ChennaiFomGreenDevelopment />
      <ChennaiFomCounters />
    </>
  );
};

export default ChennaiFomPage;
