// "use client";
// import { motion } from "framer-motion";
// import LineHead from "./Heading/LineHead";

// const BentoHeader = () => {
//   return (
//     <div className="">
//       <div>
//         <LineHead clr="text-white" bclr="red" heading="Our Blog" />
//       </div>
//       <div className="flex md:flex-row flex-col md:gap-0 gap-[30px] items-center justify-between max-w-full md:overflow-visible overflow-hidden">
//         <div className="lg:w-[60%] md:w-[50%] w-full ">
//           <motion.h2
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }} // Animation triggers only once
//             transition={{ duration: 0.9 }}
//             className="text-white xl:text-[88px]  md:leading-[105%] pb-[15px] lg:text-[60px] md:text-[40px] text-3xl fpt-600 w-fit max-w-fit border-b-[10px] border-[#F7E327] fpt-600"
//           >
//             Latest <br className="md:flex hidden" />
//             Insights
//           </motion.h2>
//         </div>
//         <motion.div
//           className="md:w-[50%] lg:w-[40%] w-full flex flex-col gap-[30px] "
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }} // Animation triggers only once
//           transition={{ duration: 0.9 }}
//         >
//           <motion.p className="gradinetText text-[16px] lg:text-[20px] fsans-400 ">
//             Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
//             tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrum exercitationem ullam corporis suscipit
//             laboriosam, nisi ut aliquid.
//           </motion.p>

//           <motion.div
//             className="flex  cursor-pointer group items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit"
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }} // Animation triggers only once
//             transition={{ duration: 0.9, delay: 0.1 }}
//           >
//             <img
//               src="/buttonarrows/redarico.svg"
//               className=" rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
//               alt=""
//             />
//             Explore More
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BentoHeader;

"use client";
import { motion } from "framer-motion";
import LineHead from "./Heading/LineHead";
import Image from "next/image";
const BentoHeader = () => {
  return (
    <div className="">
      <div>
        <LineHead clr="text-white" heading="News and Blogs" />
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-[30px] items-center justify-between max-w-full overflow-hidden">
        <div className="lg:w-[60%] md:w-[50%] w-full">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-white xl:text-[88px] md:leading-[105%] pb-[15px] lg:text-[60px] md:text-[40px] text-3xl fpt-600 w-fit max-w-fit border-b-[10px] border-[#F7E327] fpt-600"
          >
            Latest <br className="md:flex hidden" />
            Insights
          </motion.h2>
        </div>
        <motion.div
          className="md:w-[50%] lg:w-[40%] w-full flex flex-col md:pb-0 pb-[10px] justify-between md:gap-[30px] md:h-auto gap-[30px]"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <motion.p className="gradinetText text-[16px] lg:text-[20px] fsans-400">
            Stay updated with the latest trends, developments, and milestones at
            KSH INFRA. From industry insights to project updates, explore how
            we’re shaping the future of Industrial & Logistics infrastructure.
          </motion.p>

          <motion.div
            className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {/* Padding added to prevent clipping */}
            {/* <button className="flex group transition-transform duration-[400ms] items-center justify-center gap-3">
              <Image
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] fsans-600">
                Explore All Blog Articles
              </p>
            </button> */}

            <button className="flex group transition-transform duration-[400ms] items-center justify-center gap-3">
              <img
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] text-[16px] fsans-600">
                Explore More
              </p>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoHeader;
