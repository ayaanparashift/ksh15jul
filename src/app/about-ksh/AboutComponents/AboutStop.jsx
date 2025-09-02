// import { motion } from "framer-motion";
// import Link from "next/link";
// const AboutStop = () => {
//   return (
//     <div className="relative bg-[#092241] h-[400px] md:h-[100vh] xl-1366:h-[100vh] xl-1024:h-[110vh] min-1600:h-[100vh] z-0 overflow-hidden">
//       {/* <div className=""> */}
//       <div className="fix12 xl:pt-[140px] pt-[120px]">
//         <p
//           // initial={{ opacity: 0 }}
//           // whileInView={{ opacity: 1 }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-base fsans-400"
//         >
//           {" "}
//           <Link
//             href="/"
//             className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
//           >
//             Home
//           </Link>{" "}
//           &gt; About
//         </p>
//         <h1
//           // initial={{ width: 0 }}
//           // whileInView={{ width: "fit-content" }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="text-[30px] sm:text-[60px] relative z-0 max-w-fit fpt-500 text-white border-b-[8px] border-[#F7E327] whitespace-nowrap overflow-hidden"
//         >
//           About Us
//         </h1>
//       </div>
//       <img
//         // initial={{ opacity: 0, translateY: "100px" }}
//         // whileInView={{ opacity: 1, translateY: 0 }}
//         // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         // viewport={{ amount: 0.1, once: true }}
//         src="/AboutPage/abspotfinal.webp"
//         className="absolute bottom-0 w-full h-auto z-10"
//         alt=""
//       />
//     </div>
//   );
// };

// export default AboutStop;
import { motion } from "framer-motion";
import Link from "next/link";
const AboutStop = () => {
  return (
    <div className="relative bg-[#fff] h-[400px] md:h-[100vh] xl-1366:h-[100vh] xl-1024:h-[110vh] min-1600:h-[100vh] z-0 overflow-hidden">
      <div className="fix12 xl:pt-[140px] pt-[120px] relative z-[1000]">
        <p className="text-[#00000040] text-base fsans-400">
          {" "}
          <Link
            href="/"
            className="hover:text-black transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; About
        </p>
        <h1 className="text-[30px] sm:text-[60px] relative z-0 max-w-fit fpt-500 text-black border-b-[8px] border-[#F7E327] whitespace-nowrap overflow-hidden">
          About Us
        </h1>
      </div>
      <img
        src="/AboutPage/abspotfinal.webp"
        className="absolute bottom-0 w-full h-auto z-0"
        alt=""
      />
    </div>
  );
};

export default AboutStop;
