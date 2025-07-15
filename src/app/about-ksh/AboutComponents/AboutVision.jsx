import { motion } from "framer-motion";
const AboutVision = () => {
  return (
    <>
      <div className="flex ">
        <div className="bg-[#092241] py-32 px-[5%] lg:px-0 lg:w-full  lg:pl-[7%] lg:pr-[5%] xl-1920:pl-[17%]">
          <div className="flex flex-col min-768:flex-row gap-11 xl-1024:gap-11 xl:flex-row justify-between h-fit">
            <div className="hidden xl:block xl:w-[531px]" />

            <div className="xl:w-[531px] w-full h-full flex flex-col justify-end">
              <h1
                // initial={{ y: 100 }}
                // whileInView={{ y: -20 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-transparent z-10 fpt-700 text-6xl xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mt-[-20px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Purpose
              </h1>

              <div className="relative z-20 overflow-hidden mt-[20px]">
                <div>
                  <img
                    className="min-w-full"
                    src="./AboutPage/purpose.png"
                    alt=""
                  />
                </div>
                <div className="bg-white text-base fsans-600 relative">
                  <p className="md:p-[35px] p-[20px] gradinetText2 ">
                    Reimagining and inspiring a green industrial future by
                    focusing efforts on developing sustainable industrial and
                    warehousing infrastructure
                  </p>
                </div>
                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                  initial={{ y: 0 }}
                  whileInView={{ y: "-100%" }}
                  transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                /> */}
              </div>
            </div>
          </div>

          {/* vision mission */}
          <div className="flex flex-col min-768:flex-row gap-11 xl-1024:gap-11 xl:flex-row justify-between xl:h-[856px] mt-[50px] xl:mt-[-120px]">
            <div className="xl-768:flex-1 xl-1024:flex-1 xl:flex-none xl:w-[531px]">
              <h1
                // initial={{ y: 100 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-transparent z-10 relative fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Vision
              </h1>
              <div className="relative z-20 overflow-hidden">
                <div className="">
                  <img
                    className="h-auto w-full"
                    src="./AboutPage/vision.png"
                    alt=""
                  />
                </div>
                <div className="bg-white text-base fsans-600">
                  <p className="md:p-[35px] p-[20px] gradinetText2 ">
                    Creating highly functional, transformative, carbon-neutral,
                    and sustainable warehousing and industrial park solutions
                    across key markets in India
                  </p>
                </div>
                {/* <div
                  className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                  initial={{ y: 0 }}
                  whileInView={{ y: "-100%" }}
                  transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                /> */}
              </div>
            </div>

            <div className="xl-768:flex-1 xl-1024:flex-1 xl:flex-none xl:w-[531px] h-full flex flex-col justify-end  ">
              <h1
                // initial={{ y: 100 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-transparent z-10 fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Mission
              </h1>

              <div className="relative z-20 overflow-hidden">
                <div>
                  <img
                    className="h-auto w-full"
                    src="./AboutPage/mission.png"
                    alt=""
                  />
                </div>

                <div className="bg-white text-base fsans-600 relative">
                  <p className="md:p-[35px]  p-[20px] gradinetText2">
                    Becoming the preferred industrial real-estate partner to the
                    logistics, eCommerce, and manufacturing sectors and
                    attracting institutional capital from India and beyond by
                    demonstrating excellence in corporate governance
                  </p>
                </div>
                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                  initial={{ y: 0 }}
                  whileInView={{ y: "-100%" }}
                  transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                /> */}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className=" xl-1024:pt-20 xl:pt-28  gap-11 flex flex-col lg:flex-row justify-between items-center xl-1024:items-end xl-768:items-start pt-11 lg:pt-0">
            <div className="flex-1 xl:flex-none xl:w-[531px]">
              <h1
                // initial={{ y: 100 }}
                // whileInView={{ y: 0 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-transparent z-10 relative fpt-700 text-6xl  xl:text-[140px] font-bold stroke-[#6C8DAB] xl:mb-[-30px] mb-[-7px]"
                style={{ WebkitTextStroke: "1px #6C8DAB" }}
              >
                Values
              </h1>
              <div className="relative overflow-hidden z-20">
                <div className="">
                  <img src="./AboutPage/values.png" alt="" />
                </div>
                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                  initial={{ y: 0 }}
                  whileInView={{ y: "-100%" }}
                  transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                  viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the block is visible
                /> */}
              </div>
            </div>

            <div className="flex-1 xl:flex-none parent lg:w-[535px]">
              <div className="flex flex-col lg:flex-row md:gap-0 gap-5 ">
                <div
                  // initial={{ opacity: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                  // viewport={{ amount: 0.1, once: true }}
                  className="flex-1 lg:h-[150px] xl-1024:pb-4 xl-1024:h-auto lg:pr-[35px] lg:border-r-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white">
                    Leadership
                  </h1>
                  <p className="text-[#C1C1C1] text-sm">
                    We lead with vision, innovation, and excellence, setting new
                    industry standards while empowering our people to drive
                    positive, meaningful change.
                  </p>
                </div>
                <div
                  // initial={{ opacity: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1,
                  //   ease: [0.7, 0, 0.4, 1],
                  //   delay: 0.1,
                  // }}
                  // viewport={{ amount: 0.1, once: true }}
                  className="flex-1 lg:h-[150px] xl-1024:h-auto  lg:pl-[35px] "
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white">
                    Teamwork
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    Collaboration is at the heart of everything we do. We
                    believe in working together, leveraging diverse strengths,
                    and achieving success as one team.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row md:gap-0 gap-5 ">
                <div
                  // initial={{ opacity: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1,
                  //   ease: [0.7, 0, 0.4, 1],
                  //   delay: 0.2,
                  // }}
                  // viewport={{ amount: 0.1, once: true }}
                  className="flex-1 lg:h-[150px] xl-1024:h-auto pr-[35px] lg:border-r-[1px] lg:border-t-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0), rgba(185, 140, 140, 0.70)) 30",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pb-[6px] text-white pt-5">
                    Responsible
                  </h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    We are committed to ethical business practices,
                    sustainability, and accountability, ensuring that our
                    actions have a positive impact on all stakeholders and the
                    environment.
                  </p>
                </div>
                <div
                  // initial={{ opacity: 0 }}
                  // whileInView={{ opacity: 1 }}
                  // transition={{
                  //   duration: 1,
                  //   ease: [0.7, 0, 0.4, 1],
                  //   delay: 0.3,
                  // }}
                  // viewport={{ once: true, amount: 0.3 }}
                  className="flex-1  lg:h-[150px] xl-1024:h-auto lg:pl-[35px] lg:border-t-[1px] border-solid border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(to top right, rgba(221, 221, 221, 0), rgba(185, 140, 140, 0.70)) 30",
                  }}
                >
                  <h1 className="text-3xl fpt-500 pt-5 text-white ">Care</h1>
                  <p className="text-[#C1C1C1] text-sm ">
                    Care for people, communities, and the planet. With care we
                    foster a supportive, inclusive, and respectful workplace
                    while contributing to the well-being of society as a whole.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EEF0F3] w-[7%] xl-1920:w-[22%] xl-1600:w-[13.5%] xl-1536:w-[11%] xl-1440:w-[7.5%] xl-1366:w-[5.5%]  hidden min-1366:block"></div>
      </div>
    </>
  );
};

export default AboutVision;
