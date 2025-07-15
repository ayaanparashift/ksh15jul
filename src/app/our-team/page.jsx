import React from "react";
import Spotlight from "./Components/Spotlight";
import TabTeam from "./Components/TabTeam";

export const metadata = {
  title: "Our Teams",
  description: "Our Teams - KSH INFRA",
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
