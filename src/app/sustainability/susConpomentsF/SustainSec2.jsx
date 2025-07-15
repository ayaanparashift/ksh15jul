"use client";
import { motion } from "framer-motion";

const SustainSec2 = () => {
  return (
    <>
      <div className=" ">
        <div className="fix12 flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[6%] md:py-[90px] py-14">
          <div className="flex-1 flex flex-col justify-center xl:w-[538px] xl:min-h-[540px] ">
            <div className="w-fit">
              <h1
                // initial={{ opacity: 0, translateX: "-50px" }}
                // whileInView={{ opacity: 1, translateX: 0 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-[#141414] md:text-[44px] sm:text-[32px] text-[24px] fpt-500 md:leading-[48.84px] leading-[110%] pb-3"
              >
                Where Profit Meets Planet.
              </h1>
              <div
                // initial={{ opacity: 0, translateX: "-100px" }}
                // whileInView={{ opacity: 1, translateX: 0 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="bg-[#F7E327] h-[5px] w-[100%]"
              ></div>
            </div>{" "}
            <div
              // initial={{ opacity: 0, translateX: "-150px" }}
              // whileInView={{ opacity: 1, translateX: 0 }}
              // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
              // viewport={{ amount: 0.1, once: true }}
              className="text-[#434343] text-base flex flex-col justify-between pt-9 gap-3"
            >
              <p>
                At KSH INFRA, we are passionate about creating a sustainable
                future. We believe your business success and environmental
                responsibility go hand-in-hand. Therefore, every initiative,
                every project follows strict Green Building standards,
              </p>
              <p>
                {" "}
                We are proud of our EDGE Certification and IGBC Platinum—it's
                how we bring you industrial parks that are high-quality,
                efficient, and kind to our planet at the same time. When you
                choose KSH INFRA, you join our commitment to making a
                sustainable tomorrow.
              </p>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden md:flex-none lg:flex-1 xl:flex-none xl-768:h-[300px] xl-768:pt-4  xl:w-[640px] xl:min-h-[540px]  ">
            <img
              src="/AboutPage/sussec2.png"
              className="w-full h-full object-cover"
              alt=""
            />
            {/* <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              initial={{ x: 0 }}
              whileInView={{ x: "-100%" }}
              transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
            /> */}
          </div>
        </div>
        {/* <AboutCounter /> */}
      </div>
    </>
  );
};

export default SustainSec2;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Countersec from "../../Components/Counter/Countersec";
// import AboutCounter from "./AboutCounter";
// import AboutVision from "./AboutVision";

// const AboutSec2 = () => {
//   return (
//     <>
//       <div className=" ">
//         <div className="fix12 flex flex-col lg:flex-row justify-between gap-[20px] lg:gap-[5%] py-[98px]">
//           <div className="flex-1  xl:w-[538px] xl:min-h-[540px] ">
//             <div className="w-[80%]">
//               <motion.h1
//                 initial={{ opacity: 0, translateX: "-50px" }}
//                 whileInView={{ opacity: 1, translateX: 0 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="text-[#141414] md:text-[44px] sm:text-[32px] text-[24px] fpt-500 md:leading-[48.84px] leading-[110%] pb-3 whitespace-nowrap"
//               >
//                 Inspiring Green
//                 <br /> Development
//               </motion.h1>
//               <motion.div
//                 initial={{ opacity: 0, translateX: "-100px" }}
//                 whileInView={{ opacity: 1, translateX: 0 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="bg-[#F7E327] h-[5px] w-[80%]"
//               ></motion.div>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, translateX: "-150px" }}
//               whileInView={{ opacity: 1, translateX: 0 }}
//               transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ amount: 0.1, once: true }}
//               className="text-[#434343] text-base flex flex-col justify-between pt-9 gap-3"
//             >
//               <p>Transformative Infra Solutions that Accelerate Growth.</p>
//               <p>
//                 {" "}
//                 Having delivered over 4 million square feet of high-quality
//                 industrial and logistical assets, KSH INFRA is on a steady
//                 trajectory of expansion across key Indian markets with a
//                 targeted development of 10 million square feet over the next 5
//                 years.
//               </p>
//               <p>
//                 {" "}
//                 We construct Industrial & Logistics Parks that are greener,
//                 leaner, and more efficient. KSH believes in minimizing
//                 environmental impact and surrounding community stress induced by
//                 infrastructure development.
//               </p>
//               <p>
//                 {" "}
//                 The design and construction of high-quality energy- and
//                 resource-efficient industrial infrastructure stem from KSH INFRA
//                 core philosophy-Inspiring a green industrial future by driving
//                 sustainability and accelerating impact. We have time and again
//                 demonstrated how critical your successes are to us by ensuring
//                 long-term savings and timely delivery of complex projects.
//               </p>
//             </motion.div>
//           </div>

//           <div className="flex-1 xl:flex-none overflow-hidden relative xl:w-[640px] xl:min-h-[540px] bg-yellow-300 ">
//             <img
//               src="/AboutPage/aboutUsSec2.png"
//               className="w-full h-full object-cover"
//               alt=""
//             />

//             {/* Mask Animation */}
//             <motion.div
//               className="absolute top-0 left-0 w-full h-full bg-white"
//               initial={{ x: 0 }}
//               whileInView={{ x: "-100%" }}
//               transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
//               viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
//             />
//           </div>
//         </div>
//         <AboutCounter />
//       </div>
//     </>
//   );
// };

// export default AboutSec2;
