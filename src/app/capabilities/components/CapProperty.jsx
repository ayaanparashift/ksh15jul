// "use client";
// import React, { useState } from "react";

// const CapProperty = () => {
//   const [openIndex, setOpenIndex] = useState(0); // Always keeps one item open

//   const accordionData = [
//     {
//       title: "FACILITY UPKEEP",
//       list: [
//         {
//           ttl: "Routine Maintenance",
//           content:
//             "Regular inspections and maintenance to prevent disruptions and ensure all systems function seamlessly.",
//         },
//         {
//           ttl: "Repair Management",
//           content:
//             "Prompt handling of repair needs to minimize downtime and maintain operational efficiency.",
//         },
//       ],
//       image: "Sustainability/Ethics&Compliance.png",
//     },
//     {
//       title: "SECURITY AND SAFETY",
//       list: [
//         {
//           ttl: "24/7 Surveillance",
//           content:
//             "Continuous monitoring using state-of-the-art security systems to ensure safety and security across the premises.",
//         },
//         {
//           ttl: "Emergency Response",
//           content:
//             "Well-defined protocols for quick response to any incidents, ensuring tenant safety and asset protection.",
//         },
//       ],
//       image: "Sustainability/SustainabilitySafety.png",
//     },
//     {
//       title: "TENANT RELATIONS",
//       list: [
//         {
//           ttl: "Dedicated Support",
//           content:
//             "On-site management teams provide immediate assistance and support to address tenant needs.",
//         },
//         {
//           ttl: "Regular Communication",
//           content:
//             "We keep tenants well-informed about park developments, maintenance schedules, and any changes affecting their operations.",
//         },
//       ],
//       image: "Sustainability/SustainabilityValueCreation.png",
//     },
//     {
//       title: "SUSTAINABILITY INITIATIVES",
//       list: [
//         {
//           ttl: "Eco-friendly Practices",
//           content:
//             "Implementation of green policies like waste reduction, energy efficiency, and sustainable resource management.",
//         },
//         {
//           ttl: "Continuous Improvement",
//           content:
//             "Regular assessments to identify opportunities for environmental enhancements.",
//         },
//       ],
//       image: "Sustainability/SustainabilityValueCreation.png",
//     },
//   ];

//   const toggleAccordion = (index) => {
//     if (openIndex !== index) {
//       setOpenIndex(index);
//     }
//   };
//   return (
//     <>
//       <div className="bg-[#092241]">
//         <div className="fix12 py-[100px] lg:flex gap-10">
//           <div className="imgCap flex-1 pb-8 lg:pb-0">
//             <img src="/Cap/capPro.png" alt="" />
//           </div>
//           <div className="conCap flex-1 flex flex-col justify-between">
//             <h1 className="md:text-[30px] text-[24px] fpt-500 leading-[33px] text-white border-b-[#D7D7D7] border-b-[1px] pb-2">
//               Property Management
//             </h1>

//             <div className="flex flex-col justify-between ">
//               <div className="flex flex-col gap-[34px] py-10  ">
//                 <h1 className="text-xl leading-[26px] fsans-600 text-[#E6E6E6]">
//                   Customer Delight. First.
//                 </h1>
//                 <p className="text-lg fsans-400 leading-7 text-[#CECECE]">
//                   At KSH INFRA, we manage our properties to keep everything
//                   functioning seamlessly. Our property management team
//                   prioritizes tenant satisfaction above all else. Our property
//                   management approach spans several focus areas:
//                 </p>
//               </div>

//               {/* Accordion Content */}
//               <div className="bg-[#EEF0F3] border border-[#D7D7D7]">
//                 {accordionData.map((item, index) => (
//                   <div
//                     key={index}
//                     className=" mx-[30px] border-[#000000] border-b-[1px] border-opacity-35 last:border-none"
//                   >
//                     <div
//                       className="flex items-center justify-between cursor-pointer"
//                       onClick={() => toggleAccordion(index)}
//                     >
//                       <h1 className="text-[#E30613] leading-[30px] fsans-600 text-base uppercase py-[20px]">
//                         {item.title}
//                       </h1>
//                       <img
//                         className="w-6 h-6 "
//                         src={
//                           openIndex === index
//                             ? "Cap/cap_minus.svg"
//                             : "Cap/cap_plus.svg"
//                         }
//                         alt=""
//                       />
//                     </div>

//                     <div
//                       className={`transition-all duration-500 ease-in-out ${
//                         openIndex === index
//                           ? "opacity-100 transform translate-y-0 scale-100"
//                           : "opacity-0 transform -translate-y-2 scale-95 pointer-events-none"
//                       }`}
//                     >
//                       {openIndex === index && (
//                         <div className="text-[#434343] flex flex-col gap-3 fsans-400 text-base  pb-6">
//                           {item.list.map((lit, index) => (
//                             <div key={lit.content}>
//                               <h3 className="text-xl">{lit.ttl}: </h3>
//                               <li className="m-0">{lit.content}</li>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CapProperty;

// // {accordionData.map((item, index) => (
// //     <div
// //       key={index}
// //       className="bg-yellow-400  border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
// //     >
// //       <div
// //         className="flex items-center justify-between cursor-pointer"
// //         onClick={() => toggleAccordion(index)}
// //       >
// //         <h1 className="text-white fsans-700 md:text-[22px] text-[16px] uppercase py-5">
// //           {item.title}
// //         </h1>
// //         <img
// //           src={
// //             openIndex === index
// //               ? "Sustainability/faq_minus.svg"
// //               : "Sustainability/faq_plus.svg"
// //           }
// //           alt=""
// //         />
// //       </div>
// //       <div
// //         className={`overflow-hidden transition-all duration-700 ease-in-out ${
// //           openIndex === index
// //             ? "max-h-[300px] opacity-100 transform translate-y-0 scale-100"
// //             : "max-h-0 opacity-0 transform -translate-y-2 scale-95"
// //         }`}
// //       >
// //         <p className="text-[#6C8DAB] fsans-400 text-base pt-3 pb-5">
// //           {item.content}
// //         </p>
// //       </div>
// //     </div>
// //   ))}

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CapProperty = () => {
  // You can start with openIndex = null if you'd prefer all sections closed initially.
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "FACILITY UPKEEP",
      list: [
        {
          ttl: "Routine Maintenance",
          content:
            "Regular inspections and maintenance to prevent disruptions and ensure all systems function seamlessly.",
        },
        {
          ttl: "Repair Management",
          content:
            "Prompt handling of repair needs to minimize downtime and maintain operational efficiency.",
        },
      ],
      image: "Sustainability/Ethics&Compliance.png",
    },
    {
      title: "SECURITY AND SAFETY",
      list: [
        {
          ttl: "24/7 Surveillance",
          content:
            "Continuous monitoring using state-of-the-art security systems to ensure safety and security across the premises.",
        },
        {
          ttl: "Emergency Response",
          content:
            "Well-defined protocols for quick response to any incidents, ensuring tenant safety and asset protection.",
        },
      ],
      image: "Sustainability/SustainabilitySafety.png",
    },
    {
      title: "TENANT RELATIONS",
      list: [
        {
          ttl: "Dedicated Support",
          content:
            "On-site management teams provide immediate assistance and support to address tenant needs.",
        },
        {
          ttl: "Regular Communication",
          content:
            "We keep tenants well-informed about park developments, maintenance schedules, and any changes affecting their operations.",
        },
      ],
      image: "Sustainability/SustainabilityValueCreation.png",
    },
    {
      title: "SUSTAINABILITY INITIATIVES",
      list: [
        {
          ttl: "Eco-friendly Practices",
          content:
            "Implementation of green policies like waste reduction, energy efficiency, and sustainable resource management.",
        },
        {
          ttl: "Continuous Improvement",
          content:
            "Regular assessments to identify opportunities for environmental enhancements.",
        },
      ],
      image: "Sustainability/SustainabilityValueCreation.png",
    },
  ];

  const toggleAccordion = (index) => {
    // To have multiple closed sections, set the open index to null if the user clicks an open accordion.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#092241]">
      <div className="fix12 py-[100px] lg:flex gap-10">
        <div className="imgCap flex-1 pb-8 lg:pb-0">
          <img src="/Cap/capPro.png" alt="Cap Project" />
        </div>
        <div className="conCap flex-1 flex flex-col justify-between">
          <h1 className="md:text-[30px] text-[24px] fpt-500 leading-[33px] text-white border-b-[#D7D7D7] border-b-[1px] pb-2">
            Property Management
          </h1>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-[34px] py-10">
              <h1 className="text-xl leading-[26px] fsans-600 text-[#E6E6E6]">
                Customer Delight. First.
              </h1>
              <p className="text-lg fsans-400 leading-7 text-[#CECECE]">
                At KSH INFRA, we manage our properties to keep everything
                functioning seamlessly. Our property management team prioritizes
                tenant satisfaction above all else. Our property management
                approach spans several focus areas:
              </p>
            </div>
            {/* Accordion Content */}
            <div className="bg-[#EEF0F3] border border-[#D7D7D7]">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="mx-[30px] border-[#000000] border-b-[1px] border-opacity-35 last:border-none"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1 className="text-[#E30613] leading-[30px] fsans-600 text-base uppercase py-[20px]">
                      {item.title}
                    </h1>
                    <img
                      className="w-6 h-6"
                      src={
                        openIndex === index
                          ? "Cap/cap_minus.svg"
                          : "Cap/cap_plus.svg"
                      }
                      alt=""
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          layout
                          className="text-[#434343] flex flex-col gap-3 fsans-400 text-base pb-6"
                        >
                          {item.list.map((lit) => (
                            <div key={lit.content}>
                              <h3 className="text-xl">{lit.ttl}:</h3>
                              <p className="m-0">{lit.content}</p>
                            </div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapProperty;
