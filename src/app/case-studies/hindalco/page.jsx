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
  title: "KSH INFRA & Hindalco | Industrial & Logistics Facility Solutions",
  description:
    "Explore how KSH INFRA delivered a 200,000 sq. ft. turnkey industrial and logistics facility for Hindalco, ensuring efficiency, compliance, and scalability.",
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
      <Res
        respara="KSH INFRA handed over the facility within the stipulated timeline, meeting all technical and compliance requirements. Hindalco received a fully operational, compliant facility—from shop floor to executive office—delivered exactly as specified.
<br/><br/>
Satisfied with the delivery and professionalism, Hindalco awarded KSH INFRA a second facility of 235,000 sq. ft., further strengthening the partnership."
      />
      {/* <FormSec /> */}
      <CSbgbl />
    </>
  );
};

export default page;
