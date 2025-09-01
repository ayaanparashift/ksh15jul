"use client";
import { motion } from "framer-motion";
const CapLeasing = () => {
  return (
    <>
      <div className="bg-[#fff]">
        <div className="fix12 flex flex-col lg:gap-10 lg:py-24 gap-5 py-10 lg:flex-row-reverse">
          <div className="LeftCon flex-1 relative overflow-hidden">
            <img src="/Cap/caplea.png" alt="" />
            {/* <div
              // initial={{ x: 0 }}
              // whileInView={{ x: "100%" }}
              // viewport={{ once: true, amount: 0.3 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              className="absolute top-0 left-0 w-full h-full bg-[#fff]"
            /> */}
          </div>
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true, amount: 0.3 }}
            // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            className="rigCon flex-1 flex flex-col lg:gap-10 gap-5"
          >
            <h1 className="text-3xl fpt-500 text-[#092241] leading-[33px] border-b-[#040404] border-b-[1px] pb-2">
              Leasing Management
            </h1>

            <div className="">
              <h1 className="text-xl fsans-600 leading-[26px] text-[#1C1C1C] lg:pb-[34px] pb-5">
                Matching Diverse Business Needs
              </h1>
              <p className="text-lg leading-[28px] fsans-400 text-[#434343]">
                Our leasing team listens carefully to what you need. We create
                flexible space solutions that fit your exact operations, from
                custom layouts to designs that can grow with your business. We
                make sure that our properties are suitable for diverse business
                activities. With us, your space will use every square foot
                efficiently, helping you make the most of your resources, while
                supporting all your activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapLeasing;
