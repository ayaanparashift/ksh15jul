"use client";
import { motion } from "framer-motion";
// import LineHead from "@/app/Components/Heading/LineHead";
import LineHead from "../../Components/Heading/LineHead";
import Link from "next/link";
const ParkOverview = () => {
  //   return (
  //     <div
  //       className="w-full h-fit lg:h-[594px] pt-[70px]"
  //       id="park-overview"
  //       style={{
  //         background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
  //       }}
  //     >
  //       <motion.div
  //         initial={{ "--bg-pos": "50% -120%" }} // Background starts at the bottom
  //         whileInView={{ "--bg-pos": "50% 50%" }} // Moves to the original position
  //         transition={{
  //           duration: 1.4,
  //           ease: [0.7, 0, 0.4, 1],
  //           property: "background-position",
  //         }}
  //         viewport={{ once: true, amount: 0.5 }}
  //         className="md:mr-[max(5%,calc((100vw-1250px)/2))] mr-0
  // h-[750px] lg:h-[502px] bg-[url(/ParkPage/pobg.webp)] bg-cover bg-no-repeat flex flex-col overflow-hidden"
  //         style={{
  //           backgroundPosition: "var(--bg-pos)",
  //           willChange: "background-position",
  //         }}
  //       >
  //         <div className="ml-[max(5%,calc((100vw-1250px)/2))] md:mr-0 mr-[max(5%,calc((100vw-1250px)/2))]  flex flex-col w-auto lg:w-[75%] xl:w-[40%] py-[70px]">
  //           <LineHead heading="About Talegaon, Pune" />
  //           <motion.h3
  //             initial={{ opacity: 0 }}
  //             whileInView={{ opacity: 1 }}
  //             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
  //             viewport={{ once: true, amount: 0.5 }}
  //             className="xl-1280:text-[22px] gradinetText3 leading-[130%] spotlightheaddd fsans-400 text-[20px] mt-[-20px] xl:1024:mt-[-40px] xl-1280:mt-[-20px]"
  //           >
  //             Talegaon I, located near the national highway connecting Mumbai and
  //             Pune, has emerged as a significant warehousing and logistics hub.
  //             KSH has established a presence in the center of this development in
  //             Talegaon I, Pune.
  //             <br /> <br />
  //             The Talegaon I hub comprises a number of industries including
  //             automobile, pharmaceutical, chemical, engineering, and food
  //             processing. <br />
  //             {/* <span className="inline-block">
  //               <Link
  //                 href="/ksh-chakan-iv"
  //                 className="fsans-700 underline hover:no-underline"
  //               >
  //                 Read More
  //               </Link>
  //             </span> */}
  //           </motion.h3>
  //           {/* <motion.p
  //             initial={{ opacity: 0 }}
  //             whileInView={{ opacity: 1 }}
  //             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
  //             viewport={{ once: true, amount: 0.5 }}
  //             className="flato-400 text-[18px] leading-[26px] text-[#6C8DAB] pt-[24px]"
  //           >
  //             The Talegaon I hub comprises a number of industries including
  //             automobile, pharmaceutical, chemical, engineering, and food
  //             processing.
  //           </motion.p> */}
  //         </div>
  //       </motion.div>
  //     </div>
  //   );
  return (
    <div
      className="w-full h-fit lg:h-[594px] pt-[70px] bg-white"
      id="park-overview"
      style={{
        background: "linear-gradient(to bottom, #141D28 70%, #EEF0F3 30%)",
      }}
    >
      <div
        className="md:mr-[max(5%,calc((100vw-1250px)/2))] lg:py-0 py-[70px] mr-0 
h-fit lg:h-[502px] flex flex-col overflow-hidden bg-white"
      >
        <div className="flex lg:flex-row flex-col w-full h-full items-center gap-10">
          <div className="min-h-full justify-start ml-[max(5%,calc((100vw-1250px)/2))] md:mr-0 mr-[max(5%,calc((100vw-1250px)/2))]  flex flex-col w-auto lg:w-[75%] xl:w-[40%] py-0 lg:py-[70px]">
            <LineHead heading="About Talegaon, Pune" />
            <motion.h3 className="xl-1280:text-[22px] gradinetText3 leading-[130%] spotlightheaddd fsans-400 text-[20px] mt-[-20px] xl:1024:mt-[-40px] xl-1280:mt-[-20px]">
              Talegaon I, located near the national highway connecting Mumbai
              and Pune, has emerged as a significant warehousing and logistics
              hub. KSH has established a presence in the center of this
              development in Talegaon I, Pune.
              <br /> <br />
              The Talegaon I hub comprises a number of industries including
              automobile, pharmaceutical, chemical, engineering, and food
              processing.
            </motion.h3>
          </div>
          <div className="w-fit">
            <img
              className="h-auto w-[500px] max-w-full"
              src="/ParkPage/tpov.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkOverview;
