import React from "react";
import CaseINSec2 from "./Cmponents/CaseINSec2";
import CaseINAbout from "./Cmponents/CaseINAbout";
import CaseINChalleng from "./Cmponents/CaseINChalleng";
import CaseINBenefit from "./Cmponents/CaseINBenefit";
import CaseSolution from "./Cmponents/CaseSolution";
import CaseINForm from "./Cmponents/CaseINForm";
import CasINSpot from "./Cmponents/CasINSpot";
// import FormSec from "../Components/FormSec";
import CSbgbl from "../Components/CSblbg";
import Res from "../Components/Res";
import VidT from "../Components/VidT";
// import BlogInsideSpot from "../bloginside/Components/BlogInsideSpot";
export const metadata = {
  title:
    "KSH INFRA Builds Kawasaki’s Built-to-Suit Industrial Infrastructure in Pune by KSH INFRA – Industrial Facility",
  description:
    "KSH INFRA’s built-to-suit facility for Kawasaki, designed with high-spec industrial infrastructure, efficient logistics access, and scalable warehouse manufacturing solutions.",
};
const page = () => {
  return (
    <>
      <CasINSpot />
      <CaseINSec2 />
      {/* <CaseINAbout /> */}
      <VidT />
      <CaseINChalleng />
      <CaseSolution />
      {/* <CaseINBenefit /> */}
      <Res
        respara="KSH INFRA delivered a complete, self-sustaining facility to Kawasaki Motors that combined manufacturing, assembly, and R&D capabilities. The turnkey solution allowed Kawasaki to begin operations on time.
"
      />
      <CSbgbl />

      {/* <FormSec /> */}
    </>
  );
};

export default page;
