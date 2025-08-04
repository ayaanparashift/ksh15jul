import LineHead from "../../Components/Heading/LineHead";
import CertCard from "./CertCard";

const Certificates = () => {
  return (
    <div className="w-full bg-[#092241] ">
      <div className="flex fix12 flex-col justify-center py-[80px]">
        <div>
          <LineHead heading="Awards" clr="text-white" />
        </div>
        <div>
          <CertCard />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
