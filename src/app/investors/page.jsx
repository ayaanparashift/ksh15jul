import InvesterSec2 from "./components/InvesterSec2";
import InvesterCase from "./components/InvesterCase";
import InvesRelaSpot from "./components/InvesRelaSpot";
import InvFlip from "./components/InvFlip";
import InvflipF from "./components/InvflipF";

export const metadata = {
  title:
    "Strategic Investment Partner in Industrial & Logistics Park Development In India",
  description:
    "KSH INFRA partners in strategic investment to develop world-class industrial and logistics parks driving infrastructure growth across India.",
};

const page = () => {
  return (
    <>
      <InvesRelaSpot />
      <InvesterSec2 />
      {/* <InvesterCase /> */}
      <InvflipF />
    </>
  );
};

export default page;
