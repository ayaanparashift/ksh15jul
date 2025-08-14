// // app/about/page.js (or wherever your route is)

// import AboutSec2 from "./AboutComponents/AboutSec2";
// import AboutVision from "./AboutComponents/AboutVision";
// import AboutOurLeadership from "./AboutComponents/AboutOurLeadership";
// import AboutCap from "./AboutComponents/AboutCap";
// import AboutGrowth from "./AboutComponents/AboutGrowth";
// import Timeline from "../time/TimeLine";
// import AboutStop from "./AboutComponents/AboutStop";
// // import TimeCard from "../time/TimeCard"; // Optional

// // ✅ This is how you set <title> and <meta> in App Router
// export const metadata = {
//   title:
//     "KSH INFRA | Leading Developer of Grade A Industrial and Logistics Parks in India",
//   description:
//     "KSH INFRA develops world-class industrial and logistics parks, offering scalable solutions as leading logistics park developers in India.",
// };

// const AboutPage = () => {
//   return (
//     <>
//       <AboutStop />
//       <AboutSec2 />
//       <AboutVision />
//       <AboutOurLeadership />
//       <div>
//         <Timeline />
//       </div>
//       <AboutCap />
//       <AboutGrowth />
//       {/* <TimeCard /> */}
//     </>
//   );
// };

// export default AboutPage;
//
//
//
//
//
//
//
//
//
//
//
//

import AboutF from "../Components/AboutF";
import CapabilitiesF from "../Components/CapabilityF";
import NewUSP from "../Components/USPF/NewUSP";
import PFetch from "../Components/CNPOF/PFetch";
import TrustedPartners from "../Components/TrustedPartners";
import EsgF from "../Components/EsgF";
import SlideSectionF from "../Components/SlideSectionF";
import BentoSlider from "../Components/BentoSlider";
import LandingSwiper from "../Components/LandingSwiper";
import Testimonial from "../Components/testislider/Testimonial";
import TestimonialsSlider from "../test/Final/TestimonialsSlider";
import Bento from "../Components/Bento";
import TestimonialF from "../test/Final/TestimonialF";

export const metadata = {
  title: "KSH INFRA Leading Industrial Park and Warehouse Developers in India",
  description:
    "KSH INFRA, a leading industrial infrastructure company, provides sustainable industrial parks solutions in India as trusted industrial park developers.",
};

// async function getHomeData() {
//   const res = await fetch(
//     "https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/home_page?slug=home",
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data[0] || null;
// }

export default async function Home() {
  // const homeData = await getHomeData();

  // console.log("Home CPT data (server):", homeData); // logs in terminal during build

  return (
    <>
      {/* if you want to see it in the browser console: */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `console.log("Home CPT data in browser:", ${JSON.stringify(
            homeData
          )})`,
        }}
      /> */}
      <LandingSwiper />
      <AboutF />
      <CapabilitiesF />
      <NewUSP />
      <PFetch />
      <TrustedPartners />
      <TestimonialF />
      <EsgF />
      <SlideSectionF />
      <BentoSlider />
    </>
  );
}
