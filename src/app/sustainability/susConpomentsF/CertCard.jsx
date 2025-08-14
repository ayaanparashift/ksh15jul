// "use client";

// import { motion } from "framer-motion";

// const certs = [
//   {
//     id: 3,
//     heading: "Excellence in Industrial Real Estate",
//     title: "Real Estate",
//     content:
//       "KSH INFRA has been recognized for its outstanding achievement in developing, designing, and delivering high-impact industrial spaces. The company has set new benchmarks in operational efficiency, innovative design, and sustainable development.",
//     image: "/Sustainability/sustslidesf/flip4f.png",
//   },
//   {
//     id: 4,
//     heading: "Excellence in Sustainable Industrial Infrastructure",
//     title: "Industrial Infrastructure",
//     content:
//       "KSH INFRA has been honored for its exceptional commitment to building environmentally responsible industrial parks. The team has prioritized sustainability, energy efficiency, and long-term ecological impact across all projects.",
//     image: "/Sustainability/sustslidesf/flip2f.png",
//   },
//   {
//     id: 5,
//     heading:
//       "Realty + Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
//     title: "Realty + Conclave",
//     content:
//       "KSH INFRA has been celebrated as a rising force in the industrial and warehousing sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
//     image: "/Sustainability/sustslidesf/flip1f.png",
//   },
//   {
//     id: 6,
//     heading: "ET Edge Best Realty Brands 2025",
//     title: "ET Edge",
//     content:
//       "KSH INFRA has been recognized among the most trusted and visionary real estate brands in the country. The company has demonstrated excellence, credibility, and a strong customer-centric approach in all its developments.",
//     image: "/Sustainability/sustslidesf/flip3f.png",
//   },
// ];

// const CertCard = () => {
//   return (
//     <div className="grid sm:grid-cols-2 gap-6 w-full">
//       {certs.map((cert) => (
//         <SingleCertCard key={cert.id} {...cert} />
//       ))}
//     </div>
//   );
// };

// const SingleCertCard = ({ image, title, heading, content }) => {
//   return (
//     <div>
//       {/* Desktop Hover Card */}
//       <motion.div
//         className="relative w-full aspect-[450/383] overflow-hidden cursor-pointer hidden sm:block"
//         initial="rest"
//         whileHover="hover"
//         animate="rest"
//       >
//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Title patch always visible */}
//         <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4">
//           <div className="text-black text-[14px] fsans-700 uppercase">
//             {title}
//           </div>
//         </div>

//         {/* Slide Up Content */}
//         <motion.div
//           className="absolute inset-0 bg-white text-[#474747] flex flex-col justify-center p-6"
//           variants={{
//             rest: { y: "100%" },
//             hover: { y: "0%" },
//           }}
//           transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//         >
//           <div className="text-[16px] fsans-600 mb-3">{heading}</div>
//           <div className="text-[14px] fsans-400 leading-[1.6]">{content}</div>
//         </motion.div>
//       </motion.div>

//       {/* Mobile Static Card */}
//       <div className="sm:hidden w-full overflow-hidden flex flex-col mb-6">
//         <div className="w-full aspect-[450/383] relative">
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//           <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4">
//             <div className="text-black text-[14px] fsans-700 uppercase">
//               {title}
//             </div>
//           </div>
//         </div>
//         <div className="bg-white text-[#474747] p-4 flex flex-col gap-2">
//           <div className="text-[16px] fsans-600">{heading}</div>
//           <div className="text-[14px] fsans-400">{content}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertCard;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";

// import { motion } from "framer-motion";

// const certs = [
//   {
//     id: 3,
//     heading: "Excellence in Industrial Real Estate",
//     title: "Real Estate",
//     content:
//       "KSH INFRA has been recognized for its outstanding achievement in developing, designing, and delivering high-impact industrial spaces. The company has set new benchmarks in operational efficiency, innovative design, and sustainable development.",
//     image: "/Sustainability/sustslidesf/flip4f.png",
//   },
//   {
//     id: 4,
//     heading: "Excellence in Sustainable Industrial Infrastructure",
//     title: "Industrial Infrastructure",
//     content:
//       "KSH INFRA has been honored for its exceptional commitment to building environmentally responsible industrial parks. The team has prioritized sustainability, energy efficiency, and long-term ecological impact across all projects.",
//     image: "/Sustainability/sustslidesf/flip2f.png",
//   },
//   {
//     id: 5,
//     heading:
//       "Realty + Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
//     title: "Realty + Conclave",
//     content:
//       "KSH INFRA has been celebrated as a rising force in the industrial and warehousing sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
//     image: "/Sustainability/sustslidesf/flip1f.png",
//   },
//   {
//     id: 6,
//     heading: "ET Edge Best Realty Brands 2025",
//     title: "ET Edge",
//     content:
//       "KSH INFRA has been recognized among the most trusted and visionary real estate brands in the country. The company has demonstrated excellence, credibility, and a strong customer-centric approach in all its developments.",
//     image: "/Sustainability/sustslidesf/flip3f.png",
//   },
// ];

// const CertCard = () => {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
//       {certs.map((cert) => (
//         <SingleCertCard key={cert.id} {...cert} />
//       ))}
//     </div>
//   );
// };

// const SingleCertCard = ({ image, title, heading, content }) => {
//   return (
//     <div>
//       {/* Desktop Hover Card */}
//       <motion.div
//         className="relative w-full sm:block hidden overflow-hidden cursor-pointer"
//         initial="rest"
//         whileHover="hover"
//         animate="rest"
//       >
//         {/* Image + Title Container */}
//         <div className="flex flex-col gap-0">
//           {/* Image wrapper */}
//           <div className="w-full h-[400px] flex items-end justify-center bg-white overflow-hidden py-5">
//             <img
//               src={image}
//               alt={title}
//               className="max-w-full max-h-full object-contain"
//             />
//           </div>

//           {/* Always-visible Title */}
//           <div className="bg-white py-2 px-4">
//             <div className="text-black text-[18px] fsans-700 uppercase text-center">
//               {title}
//             </div>
//           </div>
//         </div>

//         {/* Hover Overlay Content */}
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full bg-white text-[#474747] flex flex-col justify-center p-6"
//           variants={{
//             rest: { y: "100%" },
//             hover: { y: "0%" },
//           }}
//           transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//         >
//           <div className="text-[24px] leading-[180%] fsans-600 mb-5">
//             {heading}
//           </div>
//           <div className="text-[18px] fsans-400 leading-[180%]">{content}</div>
//         </motion.div>
//       </motion.div>

//       {/* Mobile Static Card */}
//       <div className="sm:hidden w-full overflow-hidden flex flex-col mb-6">
//         {/* Image + Title stacked vertically */}
//         <div className="w-full flex flex-col gap-0 bg-white">
//           <div className="h-fit w-full flex items-end justify-center overflow-hidden py-5 px-4">
//             <img
//               src={image}
//               alt={title}
//               className="max-w-full max-h-full object-contain"
//             />
//           </div>
//           <div className="py-2 px-4">
//             <div className="text-black text-[18px] fsans-700 uppercase">
//               {title}
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="bg-white text-[#474747] p-4 flex flex-col gap-2">
//           <div className="text-[18px] fsans-600">{heading}</div>
//           <div className="text-[14px] fsans-400">{content}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertCard;

"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const certs = [
  {
    id: 3,
    heading: "Excellence in Industrial Real Estate",
    title: "Real Estate",
    content:
      "KSH INFRA has been recognized for its outstanding achievement in developing, designing, and delivering high-impact industrial spaces. The company has set new benchmarks in operational efficiency, innovative design, and sustainable development.",
    image: "/Sustainability/sustslidesf/flip4f.png",
  },
  {
    id: 4,
    heading: "Excellence in Sustainable Industrial Infrastructure",
    title: "Industrial Infrastructure",
    content:
      "KSH INFRA has been honored for its exceptional commitment to building environmentally responsible industrial parks. The team has prioritized sustainability, energy efficiency, and long-term ecological impact across all projects.",
    image: "/Sustainability/sustslidesf/flip2f.png",
  },
  {
    id: 5,
    heading:
      "Realty + Conclave & Excellence Awards 2025 – Emerging Developer of the Year, Industrial & Warehousing",
    title: "Realty + Conclave",
    content:
      "KSH INFRA has been celebrated as a rising force in the Industrial and Logistics  sector. The organization has made significant strides through continuous innovation, timely execution, and the development of future-ready infrastructure.",
    image: "/Sustainability/sustslidesf/flip1f.png",
  },
  {
    id: 6,
    heading: "ET Edge Best Realty Brands 2025",
    title: "ET Edge",
    content:
      "KSH INFRA has been recognized among the most trusted and visionary real estate brands in the country. The company has demonstrated excellence, credibility, and a strong customer-centric approach in all its developments.",
    image: "/Sustainability/sustslidesf/flip3f.png",
  },
];

const CertCard = () => {
  return (
    <div className="w-full">
      {/* Navigation buttons */}

      {/* Swiper Carousel */}
      <div className="">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
        >
          {certs.map((cert) => (
            <SwiperSlide key={cert.id}>
              <SingleCertCard {...cert} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-[15px] z-10 self-start pt-5">
          <button className="custom-prev">
            <img
              loading="eager"
              src="/landingr.svg"
              className="w-10 h-10"
              alt="Next"
            />
          </button>
          <button className="custom-next">
            <img
              loading="eager"
              src="/landingl.svg"
              className="w-10 h-10"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const SingleCertCard = ({ image, title, heading, content }) => {
  return (
    <div>
      {/* Desktop Hover Card */}
      <motion.div
        className="relative w-full sm:block hidden overflow-hidden cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Image + Title Container */}
        <div className="flex flex-col gap-0">
          {/* Image wrapper */}
          <div className="w-full h-[400px] flex items-end justify-center bg-white overflow-hidden py-5">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Always-visible Title */}
          <div className="bg-white py-5 px-4">
            <div className="text-black text-[18px] fsans-700 uppercase text-center">
              {title}
            </div>
          </div>
        </div>

        {/* Hover Overlay Content */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white text-[#474747] flex flex-col justify-center p-6"
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        >
          <div className="text-[26px] leading-[36px] text-black fpt-600 mb-5">
            {heading}
          </div>
          <div className="text-[18px] fsans-400 leading-[150%]">{content}</div>
        </motion.div>
      </motion.div>

      {/* Mobile Static Card */}
      <div className="sm:hidden w-full h-[650px] overflow-hidden flex flex-col bg-white p-4">
        {/* Image + Title stacked vertically */}
        <div className="w-full h-full flex flex-col gap-0 bg-white">
          <div className="h-full w-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="py-2">
            <div className="text-black text-[18px] fsans-700 uppercase">
              {title}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white text-[#474747] flex flex-col gap-2">
          <div className="text-[18px] text-black fpt-600">{heading}</div>
          <div className="text-[14px] fsans-400 h-[70px] styled-scroll">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertCard;
