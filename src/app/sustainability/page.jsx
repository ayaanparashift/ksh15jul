import React from "react";
import SustainSpotLigth from "./susConpomentsF/SustainSpotLigth";
import SustainSec2 from "./susConpomentsF/SustainSec2";
import SustainSocial from "./susConpomentsF/SustainSocial";
import SustainEnviroment from "./susConpomentsF/SustainEnviroment";
import Usp from "../Components/USP/Usp";
import SustainGovernence from "./susConpomentsF/SustainGovernence";
import SustainDownload from "./susConpomentsF/SustainDownload";
import SustainDownload2 from "./susConpomentsF/SustainDownload2";
import PopForm from "./susConpomentsF/PopForm";

// const metadata = {
//   title:
//     "Driving Sustainable Development: KSH INFRA's Commitment to Sustainability",
//   desc: "Discover how KSH INFRA is committed to sustainability through EDGE Certification, IGBC Platinum-compliant planning, environmental care, social impact norms, employee engagements, diversity and inclusion, and community actions.",
// };

export const metadata = {
  title:
    "Green Industrial & Logistics Park Development in India | Sustainable Infrastructure by KSH INFRA",
  description:
    "KSH INFRA leads green industrial and logistics park development through sustainable infrastructure, eco-friendly design, and energy-efficient Park in India.",
};
const page = () => {
  return (
    <>
      <SustainSpotLigth />
      <SustainSec2 />
      <SustainDownload />
      <SustainDownload2 />
      <SustainEnviroment />
      <SustainSocial />
      <SustainGovernence />
    </>
  );
};

export default page;
