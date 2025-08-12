const CaseSolution = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(117deg, #1B4273 -12.83%, #092241 64.77%)",
      }}
      className="flex flex-col items-center gap-[66px] md:px-[0px] px-[20px] pt-[71px] pb-[85px] caseSolBgGradients"
    >
      <h1 className="text-white w-fit fpt-600 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
        SOLUTION
      </h1>
      <p className="fsans-400 text-[16px] text-[#fff] lg:w-[975px] text-center">
        KSH INFRA delivered a 180,000 sq. ft. facility meeting Barnes’
        operational and technical standards.
        <br />
        <br />
        <strong>Key Deliverables:</strong>
      </p>
      <div className="relative">
        <img
          src="/caseInside/casebgline.svg"
          className="absolute left-[50%] top-[-40px] h-[112%]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%] w-full">
              Structural Engineering
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  PEB structure redesigned from the foundation to support crane
                  loads, bay spacing, and the operational movement of 11 EOT
                  cranes.
                </li>
                <li>
                  Crane track and rail installation aligned with Barnes’
                  equipment procurement schedule.
                </li>
                <li>
                  Isolated flooring in designated areas to minimise vibrations
                  and maintain the precision of sensitive equipment.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%] w-full">
              Electrical Infrastructure
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  3350 kVA power contract demand (950 kVA in Phase 1 and 2,400
                  kVA in Phase 2), both via express feeder connections for
                  uninterrupted 24x7 operations.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%] w-full">
              Thermal Insulation
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  Rockwool insulation for the complete roof and side cladding,
                  installed despite challenging monsoon conditions.
                </li>
                <li>
                  Installation of nine HVLS fans in the Phase 1 operational
                  area.
                </li>
              </ul>
            </p>
          </div>

          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 leading-[130%] w-full">
              External Utilities & Civil Works
              <div className="list-disc ml-[20px] max-w-full flex lg:flex-row flex-col justify-between pt-5 gap-10">
                <ul className="list-disc max-w-fit">
                  <li>Cooling tower platform.</li>
                </ul>
                <ul className="list-disc whitespace-nowrap max-w-fit">
                  <li>Liquid nitrogen storage zone.</li>
                </ul>
                <ul className="list-disc max-w-fit">
                  <li>Scrap yard.</li>
                </ul>
                <ul className="list-disc max-w-fit">
                  <li>Compressor room.</li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSolution;
