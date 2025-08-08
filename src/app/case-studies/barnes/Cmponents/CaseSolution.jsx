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
      <h4 className="fsans-400 text-[16px] text-[#fff] fix12">
        KSH INFRA executed a 2,00,000 sq. ft. turnkey facility with deep
        customizations across structure, and support infrastructure. Before
        finalizing the PEB order, Hindalco requested wider spans of 15m × 27m in
        two bays—deviating from our standard uniform spacing. KSH promptly
        re-engineered the entire PEB structure to meet this requirement,
        ensuring structural integrity and timely delivery, demonstrating our
        agility in handling client-specific design changes. Our in-house design,
        civil, electrical, and MEP teams coordinated closely with Hindalco to
        ensure seamless execution across all fronts.
      </h4>
      <div className="relative">
        <img
          src="/caseInside/casebgline.svg"
          className="absolute left-[50%] top-[-40px] h-[112%]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%]">
              Structural Engineering
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  PEB structure redesigned from foundation level to accommodate
                  the crane loads, bay spacing, and operational movement of 11
                  EOT cranes.
                </li>
                <li>
                  Timely crane track and rail installation to sync with Barnes’
                  equipment procurement schedules.
                </li>
                <li>
                  Provided isolation flooring in designated areas housing
                  precision manufacturing machines. The solution was tailored to
                  minimize floor vibrations and maintain operational accuracy of
                  sensitive equipment, as per Barnes&#39; technical
                  requirements.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%]">
              Electrical Infrastructure
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  3350 kVA power contract demand (950 kVA power in Phase 1
                  followed by 2400 kVA in Phase 2), both executed via express
                  feeder connections to ensure uninterrupted 24x7 operations.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%]">
              Thermal Insulation
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  Complete roof and side cladding insulation using rockwool
                  insulation, installed despite challenging monsoon conditions,
                  to ensure temperature control.
                </li>
                <li>
                  Installation of 09 HVLS fans in phase one operation area.
                </li>
              </ul>
            </p>
          </div>

          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 leading-[130%]">
              External Utilities &amp; Civil Works
              <div className="list-disc justify-start ml-[20px] w-full lg:grid-cols-2 grid pt-5 gap-10">
                <ul className="list-disc">
                  <li>Cooling tower platform</li>
                  <li>Liquid nitrogen storage zone</li>
                </ul>
                <ul className="list-disc">
                  <li>Scrap yard</li>
                  <li>Compressor room</li>
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
