"use client";
import { motion } from "framer-motion";
const CapLand = () => {
  return (
    <>
      <div className="bg-[#092241]">
        <div className="fix12 flex flex-col lg:flex-row gap-10 py-24">
          <div className="LeftCon flex-1 relative overflow-hidden">
            <img src="/Cap/caplan.png" alt="" />
            {/* <motion.div
              // initial={{ x: 0 }}
              // whileInView={{ x: "-100%" }}
              // viewport={{ once: true, amount: 0.3 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="absolute top-0 left-0 w-full h-full bg-[#092241]"
            /> */}
          </div>
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true, amount: 0.3 }}
            // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="rigCon flex-1 flex flex-col gap-10"
          >
            <h1
              className="text-3xl ftp-500 text-white leading-[33px] border-b-[#D7D7D7] border-b-[1px] pb-2"
              id="landaquisition"
            >
              Land Acquisition
            </h1>

            <div className="">
              <h1 className="text-xl fsans-600 leading-[26px] text-[#E6E6E6] pb-[34px]">
                Strategic Locations for Business Advantage
              </h1>
              <p className="text-lg leading-[28px] fsans-400 text-[#CECECE]">
                Our experts see opportunities others miss and turn them into
                successful developments. We find the best land by studying
                markets closely and predicting city growth patterns. We choose
                locations with easy access, strong growth potential and
                alignment with economic development plans. Every site we select
                creates a solid foundation for your industrial success. We don't
                just acquire land - we secure your future advantage through
                strategic positioning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capital */}
      <div className="bg-[#fff]">
        <div className="fix12 flex lg:flex-row-reverse flex-col gap-10 py-24">
          <div className="LeftCon flex-1 relative overflow-hidden">
            {/* <img src="/Cap/capCapital.png" alt="" /> */}
            <img src="/OurCapabilities/captf.png" alt="" />
            {/* <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="absolute top-0 left-0 w-full h-full bg-[#fff]"
            /> */}
          </div>
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true, amount: 0.3 }}
            // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="rigCon flex-1 flex flex-col gap-10"
          >
            <h1 className="text-3xl ftp-500 text-[#092241] leading-[33px] border-b-[#828282] border-b-[1px] pb-2">
              Capital Deployment
            </h1>

            <div className="">
              <h1 className="text-xl fsans-600 leading-[26px] text-[#1C1C1C] pb-[34px]">
                Creating Value for Businesses
              </h1>
              <p className="text-lg leading-[28px] fsans-400 text-[#434343]">
                We invest with precision, focusing on assets that can deliver
                strong returns. We invest in infrastructure improvements and
                technological enhancements that not only boost the value of our
                properties but also attract leading tenants seeking modern and
                efficient spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapLand;
