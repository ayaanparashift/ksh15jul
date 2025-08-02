// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const award = {
//   id: 5,
//   heading:
//     "Realty + Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
//   title: "Realty + Conclave",
//   content:
//     "KSH INFRA has been celebrated as a rising force in the industrial and warehousing sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
//   image: "/Sustainability/awards/awc1.png",
// };

// const CertCard = () => {
//   return (
//     <div className="text-black">
//       <div className="flex">
//         <SingleCertCard
//           image={award.image}
//           title={award.title}
//           heading={award.heading}
//           content={award.content}
//         />
//       </div>
//     </div>
//   );
// };

// const SingleCertCard = ({ image, title, heading, content }) => {
//   return (
//     <div>
//       {/* Desktop Hover Card */}
//       <motion.div
//         className="relative w-[514px] h-[442px] overflow-hidden cursor-pointer hidden sm:block "
//         initial="rest"
//         whileHover="hover"
//         animate="rest"
//       >
//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <motion.div
//           className="absolute inset-0 bg-white text-[#474747] flex flex-col justify-center p-6"
//           variants={{
//             rest: { y: "100%" },
//             hover: { y: "0%" },
//           }}
//           transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//         >
//           <div className="text-[14px] fsans-700 uppercase mb-2">{title}</div>
//           <div className="text-[16px] fsans-600 mb-3">{heading}</div>
//           <div className="text-[14px] fsans-400 leading-[1.6]">{content}</div>
//         </motion.div>
//       </motion.div>

//       {/* Mobile Static Card */}
//       <div className="sm:hidden w-full max-w-[90vw] overflow-hidden flex flex-col">
//         <div className="w-full h-[220px]">
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         </div>
//         <div className="bg-white text-[#474747] p-4 flex flex-col gap-2">
//           <div className="text-[14px] fsans-700 uppercase">{title}</div>
//           <div className="text-[16px] fsans-600">{heading}</div>
//           <div className="text-[14px] fsans-400">{content}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertCard;

"use client";
import React from "react";
import { motion } from "framer-motion";

const certs = [
  {
    id: 1,
    heading: "IGBC-PLATINUM Certification",
    title: "IGBC",
    content:
      "The vision of the Indian Green Building Council (IGBC)—a Confederation of Indian Industry (CII) initiative—envisions a sustainably built environment for all. KSH INFRA Chakan Park II Industrial Park is undergoing a stringent innovation and improvement process to achieve IGBC Platinum certification, the recognized global standard for green infrastructure.",
    image: "/Sustainability/awards/igflip.png",
  },
  {
    id: 2,
    heading: "KSH INFRA Parks are EDGE-Certified",
    title: "EDGE",
    content:
      "Excellence in Design for Greater Efficiency (EDGE) is the global standard for green building certifications. Adopted in over 150 countries, EDGE ensures that industrial real estate is resource efficient and sustainable. KSH INFRA is proud to have this badge of honour with KSH INFRA Parks being EDGE certified, reinforcing our commitment to creating a green industrial future.",
    image: "/Sustainability/awards/edflip.png",
  },
];

const CertCard = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {certs.map((cert) => (
        <SingleCertCard key={cert.id} {...cert} />
      ))}
    </div>
  );
};

const SingleCertCard = ({ image, title, heading, content }) => {
  return (
    <div>
      {/* Desktop Hover Card */}
      <motion.div
        className="relative w-full aspect-[450/383] overflow-hidden cursor-pointer hidden sm:block"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Title patch always visible */}
        <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4">
          <div className="text-black text-[14px] fsans-700 uppercase">
            {title}
          </div>
        </div>

        {/* Slide Up Content */}
        <motion.div
          className="absolute inset-0 bg-white text-[#474747] flex flex-col justify-center p-6"
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        >
          <div className="text-[16px] fsans-600 mb-3">{heading}</div>
          <div className="text-[14px] fsans-400 leading-[1.6]">{content}</div>
        </motion.div>
      </motion.div>

      {/* Mobile Static Card */}
      <div className="sm:hidden w-full overflow-hidden flex flex-col mb-6">
        <div className="w-full aspect-[450/383] relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4">
            <div className="text-black text-[14px] fsans-700 uppercase">
              {title}
            </div>
          </div>
        </div>
        <div className="bg-white text-[#474747] p-4 flex flex-col gap-2">
          <div className="text-[16px] fsans-600">{heading}</div>
          <div className="text-[14px] fsans-400">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
