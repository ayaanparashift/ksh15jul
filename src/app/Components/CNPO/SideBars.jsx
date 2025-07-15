// "use client";
// import React from "react";

// const SideBars = ({ todos, activeSidebar, setActiveSidebar }) => {
//   return (
//     <div className="lg:w-fit flex flex-col gap-[20px] w-full sm:min-w-[305px]">
//       {todos && todos.length > 0 ? (
//         todos.map((item) => {
//           return (
//             <p
//               key={item.id}
//               onClick={() => setActiveSidebar(item.id)}
//               className="cursor-pointer border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300"
//               style={{
//                 color:
//                   activeSidebar === item.id
//                     ? "#ffffff"
//                     : "rgba(255,255,255,0.4)",
//                 borderBottomColor:
//                   activeSidebar === item.id
//                     ? "#D7D7D7"
//                     : "rgba(215,215,215,0.34)",
//               }}
//             >
//               {item.title}
//             </p>
//           );
//         })
//       ) : (
//         <p className="text-white">No Data Available</p>
//       )}
//     </div>
//   );
// };

// export default SideBars;

"use client";
import React from "react";
import { motion } from "framer-motion";

const SideBars = ({ todos, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="lg:w-fit flex flex-col gap-[20px] w-full sm:min-w-[305px]">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => (
          <motion.p
            key={item.id}
            onClick={() => setActiveSidebar(item.id)}
            className="cursor-pointer border-b pb-[20px] pr-[25px] max-w-[305px] transition-colors duration-300"
            style={{
              color:
                activeSidebar === item.id ? "#ffffff" : "rgba(255,255,255,0.4)",
              borderBottomColor:
                activeSidebar === item.id
                  ? "#D7D7D7"
                  : "rgba(215,215,215,0.34)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.7, 0, 0.4, 1],
            }}
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is in view
          >
            {item.title}
          </motion.p>
        ))
      ) : (
        <p className="text-white">No Data Available</p>
      )}
    </div>
  );
};

export default SideBars;
