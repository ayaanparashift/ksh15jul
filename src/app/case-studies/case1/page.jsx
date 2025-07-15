import React from "react";
import CaseINSec2 from "./Cmponents/CaseINSec2";
import CaseINAbout from "./Cmponents/CaseINAbout";
import CaseINChalleng from "./Cmponents/CaseINChalleng";
import CaseINBenefit from "./Cmponents/CaseINBenefit";
import CaseSolution from "./Cmponents/CaseSolution";
import CaseINForm from "./Cmponents/CaseINForm";
import CasINSpot from "./Cmponents/CasINSpot";
import FormSec from "../Components/FormSec";
import CSbgbl from "../Components/CSblbg";
// import BlogInsideSpot from "../bloginside/Components/BlogInsideSpot";

const page = () => {
  return (
    <>
      <CasINSpot />
      <CaseINSec2 />
      <CaseINAbout />
      <CaseINChalleng />
      <CaseSolution />
      <CaseINBenefit />
      <FormSec />
      <CSbgbl />
    </>
  );
};

export default page;
