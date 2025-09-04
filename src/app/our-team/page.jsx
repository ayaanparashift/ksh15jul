import Spotlight from "./Components/Spotlight";
import TabTeam from "./Components/TabTeam";

export const metadata = {
  title: "Our Team | KSH INFRA Experts Driving Industrial & Logistics Success",
  description:
    "Meet the KSH INFRA team driving industrial & logistics excellence with expertise, innovation, and sustainable growth across world-class projects.",
};

const page = () => {
  return (
    <>
      <div>
        <Spotlight />
        <TabTeam />
      </div>
    </>
  );
};

export default page;
