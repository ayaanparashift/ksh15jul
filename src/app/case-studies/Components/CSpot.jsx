// "use client";
// import { motion } from "framer-motion";
// const CSpot = () => {
//   return (
//     <div className="relative bg-[url(/fistfold.png)] bg-cover bg-no-repeat h-screen max-h-screen z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[140px] ">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-base fsans-400"
//         >{`Home > Case Studies`}</motion.p>
//         <motion.h1
//           initial={{ width: 0 }}
//           whileInView={{ width: "fit-content" }}
//           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           viewport={{ amount: 0.1, once: true }}
//           className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden ftp-500 text-white border-b-[6px] border-[#F7E327] "
//         >
//           Case Studies
//         </motion.h1>
//       </div>
//       <motion.img
//         initial={{ opacity: 0, translateY: "100px" }}
//         whileInView={{ opacity: 1, translateY: 0 }}
//         transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         viewport={{ amount: 0.1, once: true }}
//         src="/cst/cspotbg.webp"
//         // className="absolute bottom-0 w-full h-[637px]"
//         className="absolute bottom-0 w-full "
//         alt=""
//       />
//     </div>
//   );
// };

// export default CSpot;

// investorRelationSpot;
// "use client";
// import { motion } from "framer-motion";
// import CaseSlide from "./CaseSlide";
import CaseStudy from "./CaseStudy";
import Link from "next/link";
const CSpot = () => {
  return (
    <div className="relative bg-[url(/fistfold.png)] bg-cover bg-no-repeat z-0 overflow-hidden">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <p
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          className="text-[#D7D7D7A3] text-base fsans-400"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; Case Studies
        </p>
        <h1
          initial={{ width: 0 }}
          // whileInView={{ width: "fit-content" }}
          // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          className="text-[28px] sm:text-[32px] md:text-[60px] max-w-fit whitespace-nowrap overflow-hidden ftp-500 text-white border-b-[6px] border-[#F7E327] "
        >
          Case Studies
        </h1>
      </div>
      {/* <motion.img
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ amount: 0.1, once: true }}
        src="/cst/cspotbg.webp"
        // className="absolute bottom-0 w-full h-[637px]"
        className="absolute bottom-0 w-full "
        alt=""
      /> */}
      <div className="relative z-10 w-full h-fit">
        {/* <CaseSlide /> */}
        <CaseStudy />
      </div>
    </div>
  );
};

export default CSpot;
