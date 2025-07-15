import React from "react";

const TextT = () => {
  return (
    <div className="w-full bg-[url('/caseInside/cstbg.webp')] min-h-[450px] py-6 xl:py-[50px] bg-no-repeat bg-cover ">
      <div className="fix12 ">
        <div className="w-full flex flex-col">
          {/*  */}
          <div className="overflow-x-hidden h-fit w-full">
            <div
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // viewport={{ once: true, amount: 0.1 }}
              // transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              className="overflow-x-hidden h-fit md:whitespace-nowrap"
            >
              <h2
                className={`leading-[26px] w-full xl:text-[44px] text-[24px] pb-[20px] border-b xl:mb-[66px] mb-[36px]  fpt-500 text-[#fff] linehead-text`}
              >
                What our clients say!
              </h2>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:flex-row flex-col justify-between gap-0 bg-[#EEF0F3] min-h-fit">
            <div className="flex lg:w-[70%] flex-col-reverse lg:flex-col gap-[20px]  p-[20px] lg:p-[50px]">
              {/* <p className="fsans-700 text-[18px] lg:text-[22px] text-[#092241] uppercase">
                - Harshwardhan nagalipada
              </p> */}
              <p className="lg:text-[32px] text-[24px] fpt-400 text-[#424242] leading-[110%]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            {/* <div className="min-h-full lg:flex-row flex-col w-full lg:flex-[0.2] flex lg:pb-0 pb-5 lg:items-end">
              <img
                className="lg:w-[80%] w-[40px]"
                src="/caseInside/csq.png"
                alt=""
              />
            </div> */}
            <div className="flex-col lg:w-[30%] flex bg-[#6C8DAB] justify-start  p-[20px] lg:p-[50px]">
              <p className="fsans-700 text-[18px] lg:text-[28px] text-[#fff] uppercase">
                Harshwardhan nagalipada
              </p>
              <p className="text-left text-[#ffffff50] fsans-600 text-[16px] lg:text-[24px]">
                Designation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextT;
