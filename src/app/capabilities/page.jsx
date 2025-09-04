import CapAbout from "./componentsf/CapAbout";
import CapLand from "./componentsf/CapLand";
import CapLeasing from "./componentsf/CapLeasing";
import CapProperty from "./componentsf/CapProperty";
import CapEnq from "./componentsf/CapEnq";
import CapDev from "./componentsf/CapDev";
import CapSpot from "./componentsf/CapSpot";

export const metadata = {
  title:
    "KSH INFRA Capabilities | End-to-End Industrial Infrastructure Solutions",
  desc: "Explore KSH INFRA's comprehensive capabilities—from strategic land acquisition and capital deployment to project development, leasing, and property management.",
};
const page = () => {
  return (
    <>
      <CapSpot />
      <CapAbout />
      <CapLand />
      <CapDev />
      <CapLeasing />
      <CapProperty />
      <CapEnq />
    </>
  );
};

export default page;
