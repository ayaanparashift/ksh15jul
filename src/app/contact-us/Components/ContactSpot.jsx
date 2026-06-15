"use client";
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const ContactSpot = () => {
//   return (
//     <div className="relative bg-[#092241] h-[430px] md:h-[100vh] min-1600:h-[100vh] overflow-hidden z-0">
//       {/* <div className=""> */}
//       <div className="fix12 pt-[140px] ">
//         <p
//           // initial={{ opacity: 0 }}
//           // whileInView={{ opacity: 1 }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="text-[#D7D7D7A3] text-[13px] md:text-base fsans-400"
//         >
//           {" "}
//           <Link
//             href="/"
//             className="hover:text-white transition-colors duration-300 text-[13px] sm:text-base"
//           >
//             Home
//           </Link>{" "}
//           &gt; Contact
//         </p>
//         <h1
//           // initial={{ width: 0 }}
//           // whileInView={{ width: "fit-content" }}
//           // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//           // viewport={{ amount: 0.1, once: true }}
//           className="md:text-[60px] text-[30px] md:w-[400px] w-fit fpt-500 text-white border-b-[8px] border-[#F7E327] whitespace-nowrap overflow-hidden max-w-fit"
//         >
//           Contact Us
//         </h1>
//       </div>
//       {/* <img
//         src="./contact/contactheader.webp"
//         className="absolute bottom-0 w-full object-cover"
//         alt=""
//       /> */}
//       <img
//         // initial={{ opacity: 0, translateY: "100px" }}
//         // whileInView={{ opacity: 1, translateY: 0 }}
//         // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
//         // viewport={{ amount: 0.1, once: true }}
//         src="./contact/conspotf.webp"
//         className="absolute bottom-0 -z-10 max-w-full"
//         alt=""
//       />
//     </div>
//   );
// };

// export default ContactSpot;


import { motion } from "framer-motion";
import Link from "next/link";

const ContactSpot = () => {
  return (
    <div className="relative bg-[#fff] h-[430px] md:h-[100vh] min-1600:h-[100vh] overflow-hidden z-0">
      {/* <div className=""> */}
      <div className="fix12 pt-[140px] ">
        <p className="text-[#00000040] text-[13px] md:text-base fsans-400">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-300 text-[13px] sm:text-base"
          >
            Home
          </Link>{" "}
          &gt; Contact
        </p>
        <h1 className="md:text-[60px] text-[30px] md:w-[400px] w-fit fpt-500 text-black border-b-[8px] border-[#F7E327] whitespace-nowrap overflow-hidden max-w-fit">
          Contact Us
        </h1>
      </div>
      <img
        src="./contact/conspotf.webp"
        className="absolute bottom-0 -z-10 max-w-full"
        alt=""
      />
    </div>
  );
};

export default ContactSpot;
