// import ChennaiFomHero from "./Components/ChennaiFomHero";
import ChennaiFomTabs from "./Components/ChennaiFomTabs";
import ChennaiFomGreenDevelopment from "./Components/ChennaiFomGreenDevelopment";
// import ChennaiFomCounters from "./Components/ChennaiFomCounters";
// import ChennaiFomSlideBlog from "./Components/ChennaiFomSlideBlog";
import NewsCards from "./Components/NewsCards";
import ParkInfo from "./Components/ParkInfo";
import ChennaiFomHero from "./Components/ChennaiFomHeroF";
import ChennaiFomCounters from "./Components/ChennaiFomCountersF";

const ChennaiFomPage = () => {
  return (
    <>
      <ChennaiFomHero />
      <ParkInfo />
      <ChennaiFomTabs />

      <ChennaiFomGreenDevelopment />
      <ChennaiFomCounters />
      <NewsCards />
    </>
  );
};

export default ChennaiFomPage;
