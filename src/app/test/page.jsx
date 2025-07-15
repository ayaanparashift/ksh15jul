// "use client";
// import { motion } from "framer-motion";

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.8, // Stagger effect for child elements
// //       transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 10 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
// // };

// const A = () => {
//   return (
//     <>
//       {/* <motion.div
//         className="h-72 p-10"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//       >
//         <motion.h1 variants={itemVariants}>Lorem, ipsum.</motion.h1>
//         <motion.p variants={itemVariants}>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
//           voluptas et dicta deserunt delectus repellat suscipit! Iste quo
//           consequatur maxime!
//         </motion.p>
//       </motion.div> */}

//       {/* <div className="flex justify-between">
//         <motion.div
//           initial={{ x: 0, opacity: 0 }}
//           whileInView={{ x: 100, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           className="bg-red-600 leftCon"
//         >
//           Come from left side of screen
//         </motion.div>
//         <motion.div
//           initial={{ x: 0, opacity: 0 }}
//           whileInView={{ x: -100, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="bg-yellow-200 rigthCon"
//         >
//           Come from Rigth side of screen
//           <motion.div transition={{ delay: 0.3 }}>explore more</motion.div>
//         </motion.div>
//       </div> */}

//       <div className="flex justify-between">
//         <motion.div
//           initial={{ x: 0, opacity: 0 }}
//           whileInView={{ x: 100, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           className="bg-red-600 leftCon"
//         >
//           Come from left side of screen
//         </motion.div>

//         <motion.div
//           initial={{ x: 0, opacity: 0 }}
//           whileInView={{ x: -100, opacity: 1 }}
//           transition={{ duration: 0.9 }}
//           className="bg-yellow-200 rigthCon"
//         >
//           Come from Right side of screen
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.9, delay: 0.1 }} // Added delay for stagger effect
//             className="bg-pink-500"
//           >
//             explore more
//           </motion.div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default A;

import React from "react";
import NewUsp from "../Components/USP/NewUSP";
import TimeLine from "./TimeLine";
import Aniamtion from "./Aniamtion";
import Animation from "./Aniamtion";
import TestUsp from "./TestUsp";
import ParkInsideSlider from "./testUsp/ParkInsideSlider";
import Navlist from "../Components/Nav/Navlist";
import Nav from "../Components/Nav/Nav";
import NavMain from "../Components/Nav/NavMain";

const page = () => {
  return (
    <div>
      <NavMain />
    </div>
  );
};

export default page;
