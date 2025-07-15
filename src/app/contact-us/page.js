import React from "react";
import ContactSpot from "./Components/ContactSpot";
import Contact from "./Components/Contact";
import Map from "./Components/Map";

export const metadata = {
  title:
    "Contact KSH INFRA Industrial & Logistics Park,Warehouse Solutions and Infrastructure Development in India",
  description:
    "Connect with KSH INFRA for expert guidance on industrial and logistics park solutions, infrastructure development, and project collaboration in India.",
};
const page = () => {
  return (
    <>
      <ContactSpot />
      <Contact />
      <Map />
    </>
  );
};

export default page;
