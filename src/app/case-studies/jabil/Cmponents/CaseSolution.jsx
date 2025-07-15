import React from "react";

const CaseSolution = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(117deg, #1B4273 -12.83%, #092241 64.77%)",
      }}
      className="flex flex-col items-center gap-[66px] md:px-[0px] px-[20px] pt-[71px] pb-[85px] caseSolBgGradients"
    >
      <h1 className="text-white w-fit fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[120%] border-b-[4px] border-b-[#F7E327]">
        SOLUTION
      </h1>
      <h4 className="fsans-400 text-[16px] text-[#fff]">
        The KSH INFRA team utilized their in-house expertise to successfully
        execute the customization plan. This is how we did it:{" "}
      </h4>
      <div className="relative">
        <img
          src="/caseInside/casebgline.svg"
          className="absolute left-[50%] top-[-40px] h-[112%]"
          alt=""
        />
        <div className="space-y-8">
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              Installation of a 100-tonne gantry crane transported on rails: A
              temporary foundation were made outside the facility to install and
              transport the crane.
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              The existing shopfloor was reengineered and reinforced: This
              allowed the crane to move 100 metres within the facility.
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 leading-[130%]">
              Jabil was provided with a ground-plus first-floor office block.
              This included the following facilities:
              <div className="list-disc ml-[20px] w-full lg:grid-cols-3 grid pt-5 gap-2">
                <ul className="list-disc">
                  <li>Reception</li>
                  <li>Canteen</li>
                  <li>Locker rooms</li>
                </ul>
                <ul className="list-disc">
                  <li>Toilet blocks</li>
                  <li>Work stations</li>
                  <li>Conference room</li>
                </ul>

                <ul className="list-disc">
                  <li>Additional cloakrooms</li>
                </ul>
              </div>
            </p>
          </div>
          <div className="text-white flex items-start max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-start text-base leading-[130%]">
              Enhanced fire and safety standards to meet Jabil's approval
              requirements.
              <ul className="list-disc ml-[20px] w-full flex flex-col items-start pt-5 gap-2">
                <li>
                  The existing sprinklers were upgraded to FM-approved
                  sprinklers.
                </li>
                <li>
                  A 1000 KVA substation was installed with the required
                  approvals from MSEDCL.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-white flex items-center max-w-[975px] caseSolGlass border-[1px] border-white justify-start sm:justify-center gap-5 p-7">
            <img src="/caseInside/caseSolshape.svg" alt="" />
            <p className="fsans-400 sm:text-center text-base leading-[130%]">
              Installing 300-lux LED lighting for efficient long-term energy
              use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSolution;
