// import AboutF from "./Components/AboutF";
// import CapabilitiesF from "./Components/CapabilityF";
// import NewUSP from "./Components/USPF/NewUSP";
// import PFetch from "./Components/CNPOF/PFetch";
// import TrustedPartners from "./Components/TrustedPartners";
// import EsgF from "./Components/EsgF";
// import SlideSectionF from "./Components/SlideSectionF";
// import BentoSlider from "./Components/BentoSlider";
// import LandingSwiper from "./Components/LandingSwiper";
// // import NavMain from "./Components/Nav/NavMain";
// // import Navlist from "./Components/Navlist";
// export const metadata = {
//   title: "KSH INFRA Leading Industrial Park and Warehouse Developers in India",
//   desc: "KSH INFRA, a leading industrial infrastructure company, provides sustainable industrial parks solutions in India as trusted industrial park developers.",
// };

// export default function Home() {
//   return (
//     <>
//       <LandingSwiper />
//       <AboutF />
//       <CapabilitiesF />
//       <NewUSP />
//       <PFetch />
//       <TrustedPartners />
//       <EsgF />
//       <SlideSectionF />
//       <BentoSlider />
//       {/* <NavMain /> */}
//       {/* <Navlist /> */}
//     </>
//   );
// }

import AboutF from "./Components/AboutF";
import CapabilitiesF from "./Components/CapabilityF";
import NewUSP from "./Components/USPF/NewUSP";
import PFetch from "./Components/CNPOF/PFetch";
import TrustedPartners from "./Components/TrustedPartners";
import EsgF from "./Components/EsgF";
import SlideSectionF from "./Components/SlideSectionF";
import BentoSlider from "./Components/BentoSlider";
import LandingSwiper from "./Components/LandingSwiper";
// import NavMain from "./Components/Nav/NavMain";
// import Navlist from "./Components/Navlist";

export const metadata = {
  title: "KSH INFRA Leading Industrial Park and Warehouse Developers in India",
  description:
    "KSH INFRA, a leading industrial infrastructure company, provides sustainable industrial parks solutions in India as trusted industrial park developers.",
};

async function getHomeData() {
  const res = await fetch(
    "https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/home_page?slug=home",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data[0] || null;
}

export default async function Home() {
  const homeData = await getHomeData();

  console.log("Home CPT data (server):", homeData); // logs in terminal during build

  return (
    <>
      {/* if you want to see it in the browser console: */}
      <script
        dangerouslySetInnerHTML={{
          __html: `console.log("Home CPT data in browser:", ${JSON.stringify(
            homeData
          )})`,
        }}
      />
      <LandingSwiper />
      <AboutF />
      <CapabilitiesF />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <EsgF />
      <SlideSectionF />
      <BentoSlider />

      {/* <NavMain /> */}
      {/* <Navlist /> */}
    </>
  );
}
