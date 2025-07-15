// app/about/page.js (or wherever your route is)
import React from "react";
import AboutSec2 from "./AboutComponents/AboutSec2";
import AboutVision from "./AboutComponents/AboutVision";
import AboutOurLeadership from "./AboutComponents/AboutOurLeadership";
import AboutCap from "./AboutComponents/AboutCap";
import AboutGrowth from "./AboutComponents/AboutGrowth";
import Timeline from "../time/TimeLine";
import AboutStop from "./AboutComponents/AboutStop";
// import TimeCard from "../time/TimeCard"; // Optional

// ✅ This is how you set <title> and <meta> in App Router
export const metadata = {
  title:
    "KSH INFRA | Leading Developer of Grade A Industrial and Logistics Parks in India",
  description:
    "KSH INFRA develops world-class industrial and logistics parks, offering scalable solutions as leading logistics park developers in India.",
};

const AboutPage = () => {
  return (
    <>
      <AboutStop />
      <AboutSec2 />
      <AboutVision />
      <AboutOurLeadership />
      <div>
        <Timeline />
      </div>
      <AboutCap />
      <AboutGrowth />
      {/* <TimeCard /> */}
    </>
  );
};

export default AboutPage;
