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
import TextT from "../Components/TextT";
// import BlogInsideSpot from "../bloginside/Components/BlogInsideSpot";
export const metadata = {
  title: "KSH INFRA & Barnes | Crane-Ready Industrial Manufacturing Facility",
  description:
    "KSH INFRA delivered a 180,000 sq. ft. crane-ready manufacturing facility for Barnes, featuring high-capacity power and precision infrastructure.",
};
const page = () => {
  return (
    <>
      <CasINSpot />
      <CaseINSec2 />
      {/* <CaseINAbout /> */}
      {/* <TextT /> */}
      <CaseINChalleng />
      <CaseSolution />
      {/* <CaseINBenefit /> */}
      <Res respara="KSH INFRA handed over the facility for operational readiness in August 2025. Barnes received a fully customised, crane-ready manufacturing unit with phased high-capacity power supply, robust utility infrastructure, and advanced thermal controls. With 11 cranes operating under one roof and critical power delivered on schedule, the project stands as a technically precise and well-coordinated industrial build." />
      {/* <FormSec /> */}
      <CSbgbl />
    </>
  );
};

export default page;
