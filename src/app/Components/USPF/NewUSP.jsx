// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import SwiperCard from "./SwiperCard";
// import LineHead from "../Heading/LineHead";
// import { motion } from "framer-motion";

// const Usp = () => {
//   const videoRef = useRef(null);
//   const swiperRef = useRef(null);
//   const [hasPlayed, setHasPlayed] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasPlayed && videoRef.current) {
//           videoRef.current.play();
//           setHasPlayed(true);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }
//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, [hasPlayed]);

//   // const swcontent = [
//   // const swcontent = [
//   //   {
//   //     title: "Safety-First Infrastructure",
//   //     icon: "/uspicons/sfirst.svg",
//   //     content:
//   //       "Our parks are designed with safety at the core—featuring motorized gates, CCTV surveillance, advanced fire detection and sprinkler systems, dedicated emergency planning, full backup lighting, and clear signage—ensuring complete regulatory compliance and tenant well-being.",
//   //   },
//   //   {
//   //     title: "Best-in-Class Quality Offering",
//   //     icon: "/uspicons/qual.svg",
//   //     content:
//   //       "KSH INFRA provides premium, built-to-suit infrastructure tailored to business needs, driven by an in-house team of expert architects and engineers ensuring seamless design, cost efficiency, faster delivery, and a zero-compromise approach to quality from layout to handover.",
//   //   },
//   //   {
//   //     title: "Trusted Partner for Industry Leaders",
//   //     icon: "/uspicons/hshake.svg",
//   //     content:
//   //       "KSH INFRA is the preferred infrastructure partner for marquee clients across automotive, FMCG, and manufacturing sectors including Atomberg, Autoneum, CTC Global and Mahindra Accelo and our proven credibility and reliability in mission-critical operations.",
//   //   },
//   //   {
//   //     title: "Superior Material Sourcing",
//   //     icon: "/uspicons/wrench.svg",
//   //     content:
//   //       "Backed by a specialized procurement team, we source high-grade materials from certified vendors to ensure long-lasting durability, structural performance, and enhanced energy efficiency—delivering long-term value and cost-effectiveness for our clients.",
//   //   },
//   //   {
//   //     title: "Sustainable by Design",
//   //     icon: "/uspicons/gfact.svg",
//   //     content:
//   //       "As an IGBC - certified developer, KSH INFRA is committed to sustainability through energy-efficient design, rainwater harvesting, solar power optionality, STP-based water recycling, and eco-sensitive landscaping—driving a greener industrial future.",
//   //   },
//   //   {
//   //     title: "Operational Efficiency Built-In",
//   //     icon: "/uspicons/effi.svg",
//   //     content:
//   //       "Every KSH INFRA park is designed to optimize workflow, reduce turnaround times, and boost productivity which streamline operations and provide real-time supply chain visibility.",
//   //   },
//   //   {
//   //     title: "Flexible, Multi-Client Ecosystem",
//   //     icon: "/uspicons/fmcli.svg",
//   //     content:
//   //       "Our infrastructure is built for multi-client compatibility, featuring adaptable layouts and collaborative spaces that enable synergies, cost-sharing, and scalable growth across diverse business models.",
//   //   },
//   //   {
//   //     title: "Faster Time-to-Serve",
//   //     icon: "/uspicons/fast.svg",
//   //     content:
//   //       "Backed by decades of expertise and a skilled in-house project team, KSH INFRA ensures accelerated construction timelines with uncompromised quality—giving clients a competitive edge through rapid delivery and precise execution.",
//   //   },
//   //   {
//   //     title: "Built for Long-Term Sustainability",
//   //     icon: "/uspicons/whs.svg",
//   //     content:
//   //       "Our developments are future-proofed with energy-efficient ventilation (6–8 air changes/hour), solar power options, and eco-conscious designs that minimize carbon footprint—ensuring long-term environmental, social, and business sustainability.",
//   //   },
//   //   {
//   //     title: "Client-Centric Approach",
//   //     icon: "/uspicons/target.svg",
//   //     content:
//   //       "We prioritize close collaboration from ideation to execution, delivering holistic, end-to-end project support with proactive problem-solving to ensure aligned growth and shared success",
//   //   },
//   // ];

//   const swcontent = [
//     {
//       title: "Client-Centric Approach",
//       icon: "/uspicons/target.svg",
//       content:
//         "We prioritize close collaboration from ideation to execution, delivering holistic, end-to-end project support with proactive problem-solving to ensure aligned growth and shared success.",
//     },

//     {
//       title: "Trusted Partner for Industry Leaders",
//       icon: "/uspicons/hshake.svg",
//       content:
//         "We are preferred infrastructure partner for marquee clients across automotive, FMCG, and manufacturing sectors including Atomberg, Autoneum, CTC Global and Mahindra Accelo and our proven credibility and reliability in mission-critical operations.",
//     },
//     {
//       title: "Best-in-Class Quality Offering",
//       icon: "/uspicons/qual.svg",
//       content:
//         "We provide premium, built-to-suit infrastructure tailored to business needs, driven by an in-house team of expert architects and engineers ensuring seamless design, cost efficiency, faster delivery, and a zero-compromise approach to quality from layout to handover.",
//     },
//     {
//       title: "Delivered Ahead, Delivered Right",
//       icon: "/uspicons/fast.svg",
//       content:
//         "Backed by decades of expertise and a skilled in-house project team, we insure accelerated construction timelines with uncompromised quality—giving clients a competitive edge through rapid delivery and precise execution.",
//     },
//     {
//       title: "Flexible & Multi-Client Ecosystem",
//       icon: "/uspicons/fmcli.svg",
//       content:
//         "Our infrastructure is built for multi-client compatibility, featuring adaptable layouts and collaborative spaces that enable synergies, cost-sharing, and scalable growth across diverse business models.",
//     },
//     {
//       title: "Operational Efficiency",
//       icon: "/uspicons/effi.svg",
//       content:
//         "Every KSH INFRA park is designed to optimize workflow, reduce turnaround times, and boost productivity which streamline operations and provide real-time supply chain visibility.",
//     },
//     {
//       title: "Safety-First Infrastructure",
//       icon: "/uspicons/sfirst.svg",
//       content:
//         "Our parks are designed with safety at the core—featuring motorized gates, CCTV surveillance, advanced fire detection and sprinkler systems, dedicated emergency planning, full backup lighting, and clear signage—ensuring complete regulatory compliance and tenant well-being.",
//     },
//     {
//       title: "Superior Material Sourcing",
//       icon: "/uspicons/wrench.svg",
//       content:
//         "Backed by a specialized procurement team, we source high-grade materials from certified vendors to ensure long-lasting durability, structural performance, and enhanced energy efficiency—delivering long-term value and cost-effectiveness for our clients.",
//     },
//     {
//       title: "Sustainable by Design",
//       icon: "/uspicons/gfact.svg",
//       content:
//         "As an IGBC - certified developer, we are committed to sustainability through energy-efficient design, rainwater harvesting, solar power optionality, STP-based water recycling, and eco-sensitive landscaping—driving a greener industrial future.",
//     },

//     {
//       title: "Smart Infra for a Cleaner Future",
//       icon: "/uspicons/whs.svg",
//       content:
//         "Our developments are future-proofed with energy-efficient ventilation (6–8 air changes/hour), solar power options, and eco-conscious designs that minimize carbon footprint—ensuring long-term environmental, social, and business sustainability.",
//     },
//   ];
//   return (
//     <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
//       <div className="flex flex-col max-w-[100vw] h-fit">
//         <div className="relative z-10 pt-20 max-w-[1250px] w-[90%] mx-auto xl:pt-[92px] h-fit flex flex-col">
//           <LineHead heading={"Key Differentiators of KSH INFRA Parks"} />
//         </div>
//         <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative">
//           <div className="xl:flex hidden items-end bottom-0 xl:bottom-[30px] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px]">
//             <video
//               ref={videoRef}
//               src="/uspicons/USP.mp4"
//               className="min-w-full min-h-full scale-100 xl:scale-[1.3]"
//               muted
//             ></video>
//           </div>

//           <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] pb-20 xl:pb-[110px] xl:pl-[565px]">
//             {/* Text & Navigation Buttons */}
//             <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
//               <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
//                 KSH INFRA builds solutions that meet and grow with your evolving
//                 industry needs. We create spaces that help you achieve your
//                 business goals more effectively.
//               </p>
//               <div className="flex gap-[14px] items-center justify-center">
//                 <button id="arrowleft" className="h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button id="arrowright" className="h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px]"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             </motion.div>

//             {/* Swiper Slider */}
//             <Swiper
//               slidesPerGroup={1}
//               className="xl:w-full sm:w-[90%] mx-auto customsw"
//               spaceBetween={20} // Maintain good spacing
//               modules={[Navigation]} // Removed FreeMode as it's not used
//               // loopAdditionalSlides={2}
//               // centeredSlides={false}
//               navigation={{ nextEl: "#arrowright", prevEl: "#arrowleft" }}
//               speed={500}
//               loop={false} // Optional: set loop={false} to test performance if needed
//               breakpoints={{
//                 250: { slidesPerView: 1, spaceBetween: 10 }, // Changed from 0 to 1
//                 400: { slidesPerView: 1.2, spaceBetween: 10 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 769: { slidesPerView: 2.3, spaceBetween: 20 },
//                 1279: { slidesPerView: 2.2, spaceBetween: 20 },
//                 1366: { slidesPerView: 2.5, spaceBetween: 40 },
//                 1536: { slidesPerView: 2.6, spaceBetween: 20 },
//                 1920: { slidesPerView: 3.4, spaceBetween: 40 },
//               }}
//             >
//               {swcontent.map((slide, index) => (
//                 <SwiperSlide key={slide.icon + index}>
//                   <SwiperCard
//                     cardno={index + 1}
//                     content={slide.content}
//                     title={slide.title}
//                     icon={slide.icon}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Usp;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "./SwiperCard";
import LineHead from "../Heading/LineHead";
import { motion } from "framer-motion";
import Accordion from "./USPAcc";

const Usp = () => {
  const videoRef = useRef(null);
  const swiperRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed && videoRef.current) {
          videoRef.current.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayed]);

  // const swcontent = [
  // const swcontent = [
  //   {
  //     title: "Safety-First Infrastructure",
  //     icon: "/uspicons/sfirst.svg",
  //     content:
  //       "Our parks are designed with safety at the core—featuring motorized gates, CCTV surveillance, advanced fire detection and sprinkler systems, dedicated emergency planning, full backup lighting, and clear signage—ensuring complete regulatory compliance and tenant well-being.",
  //   },
  //   {
  //     title: "Best-in-Class Quality Offering",
  //     icon: "/uspicons/qual.svg",
  //     content:
  //       "KSH INFRA provides premium, built-to-suit infrastructure tailored to business needs, driven by an in-house team of expert architects and engineers ensuring seamless design, cost efficiency, faster delivery, and a zero-compromise approach to quality from layout to handover.",
  //   },
  //   {
  //     title: "Trusted Partner for Industry Leaders",
  //     icon: "/uspicons/hshake.svg",
  //     content:
  //       "KSH INFRA is the preferred infrastructure partner for marquee clients across automotive, FMCG, and manufacturing sectors including Atomberg, Autoneum, CTC Global and Mahindra Accelo and our proven credibility and reliability in mission-critical operations.",
  //   },
  //   {
  //     title: "Superior Material Sourcing",
  //     icon: "/uspicons/wrench.svg",
  //     content:
  //       "Backed by a specialized procurement team, we source high-grade materials from certified vendors to ensure long-lasting durability, structural performance, and enhanced energy efficiency—delivering long-term value and cost-effectiveness for our clients.",
  //   },
  //   {
  //     title: "Sustainable by Design",
  //     icon: "/uspicons/gfact.svg",
  //     content:
  //       "As an IGBC - certified developer, KSH INFRA is committed to sustainability through energy-efficient design, rainwater harvesting, solar power optionality, STP-based water recycling, and eco-sensitive landscaping—driving a greener industrial future.",
  //   },
  //   {
  //     title: "Operational Efficiency Built-In",
  //     icon: "/uspicons/effi.svg",
  //     content:
  //       "Every KSH INFRA park is designed to optimize workflow, reduce turnaround times, and boost productivity which streamline operations and provide real-time supply chain visibility.",
  //   },
  //   {
  //     title: "Flexible, Multi-Client Ecosystem",
  //     icon: "/uspicons/fmcli.svg",
  //     content:
  //       "Our infrastructure is built for multi-client compatibility, featuring adaptable layouts and collaborative spaces that enable synergies, cost-sharing, and scalable growth across diverse business models.",
  //   },
  //   {
  //     title: "Faster Time-to-Serve",
  //     icon: "/uspicons/fast.svg",
  //     content:
  //       "Backed by decades of expertise and a skilled in-house project team, KSH INFRA ensures accelerated construction timelines with uncompromised quality—giving clients a competitive edge through rapid delivery and precise execution.",
  //   },
  //   {
  //     title: "Built for Long-Term Sustainability",
  //     icon: "/uspicons/whs.svg",
  //     content:
  //       "Our developments are future-proofed with energy-efficient ventilation (6–8 air changes/hour), solar power options, and eco-conscious designs that minimize carbon footprint—ensuring long-term environmental, social, and business sustainability.",
  //   },
  //   {
  //     title: "Client-Centric Approach",
  //     icon: "/uspicons/target.svg",
  //     content:
  //       "We prioritize close collaboration from ideation to execution, delivering holistic, end-to-end project support with proactive problem-solving to ensure aligned growth and shared success",
  //   },
  // ];

  // const swcontent = [
  //   {
  //     title: "Client-Centric Approach",
  //     icon: "/uspicons/target.svg",
  //     content:
  //       "We prioritize close collaboration from ideation to execution, delivering holistic, end-to-end project support with proactive problem-solving to ensure aligned growth and shared success.",
  //   },

  //   {
  //     title: "Trusted Partner for Industry Leaders",
  //     icon: "/uspicons/hshake.svg",
  //     content:
  //       "We are preferred infrastructure partner for marquee clients across automotive, FMCG, and manufacturing sectors including Atomberg, Autoneum, CTC Global and Mahindra Accelo and our proven credibility and reliability in mission-critical operations.",
  //   },
  //   {
  //     title: "Best-in-Class Quality Offering",
  //     icon: "/uspicons/qual.svg",
  //     content:
  //       "We provide premium, built-to-suit infrastructure tailored to business needs, driven by an in-house team of expert architects and engineers ensuring seamless design, cost efficiency, faster delivery, and a zero-compromise approach to quality from layout to handover.",
  //   },
  //   {
  //     title: "Delivered Ahead, Delivered Right",
  //     icon: "/uspicons/fast.svg",
  //     content:
  //       "Backed by decades of expertise and a skilled in-house project team, we insure accelerated construction timelines with uncompromised quality—giving clients a competitive edge through rapid delivery and precise execution.",
  //   },
  //   {
  //     title: "Flexible & Multi-Client Ecosystem",
  //     icon: "/uspicons/fmcli.svg",
  //     content:
  //       "Our infrastructure is built for multi-client compatibility, featuring adaptable layouts and collaborative spaces that enable synergies, cost-sharing, and scalable growth across diverse business models.",
  //   },
  //   {
  //     title: "Operational Efficiency",
  //     icon: "/uspicons/effi.svg",
  //     content:
  //       "Every KSH INFRA park is designed to optimize workflow, reduce turnaround times, and boost productivity which streamline operations and provide real-time supply chain visibility.",
  //   },
  //   {
  //     title: "Safety-First Infrastructure",
  //     icon: "/uspicons/sfirst.svg",
  //     content:
  //       "Our parks are designed with safety at the core—featuring motorized gates, CCTV surveillance, advanced fire detection and sprinkler systems, dedicated emergency planning, full backup lighting, and clear signage—ensuring complete regulatory compliance and tenant well-being.",
  //   },
  //   {
  //     title: "Superior Material Sourcing",
  //     icon: "/uspicons/wrench.svg",
  //     content:
  //       "Backed by a specialized procurement team, we source high-grade materials from certified vendors to ensure long-lasting durability, structural performance, and enhanced energy efficiency—delivering long-term value and cost-effectiveness for our clients.",
  //   },
  //   {
  //     title: "Sustainable by Design",
  //     icon: "/uspicons/gfact.svg",
  //     content:
  //       "As an IGBC - certified developer, we are committed to sustainability through energy-efficient design, rainwater harvesting, solar power optionality, STP-based water recycling, and eco-sensitive landscaping—driving a greener industrial future.",
  //   },

  //   {
  //     title: "Smart Infra for a Cleaner Future",
  //     icon: "/uspicons/whs.svg",
  //     content:
  //       "Our developments are future-proofed with energy-efficient ventilation (6–8 air changes/hour), solar power options, and eco-conscious designs that minimize carbon footprint—ensuring long-term environmental, social, and business sustainability.",
  //   },
  // ];

  const accordionData = [
    {
      title: "1. Strategic Locations with Seamless Connectivity",
      content:
        "Positioned near major hubs for cost efficiency and growth, our parks offer excellent access to highways, smart docking, and streamlined logistics that simplify transport and distribution.",
    },
    {
      title: "2. Customizable and Ready-to-Move Facilities",
      content:
        "Choose from pre-built spaces ready for immediate occupancy or fully custom-built solutions tailored to your operational needs, ensuring flexibility for evolving business demands.",
    },
    {
      title: "3. Advanced Safety and Emergency Preparedness",
      content:
        "Equipped with 24-hour security, CCTV, drone monitoring, and robust emergency response teams with on-site medical support, our parks prioritize safety at every level.",
    },
    {
      title: "4. Sustainable and Smart Resource Management",
      content:
        "From solar power and Miyawaki-inspired green areas to smart energy systems and eco-friendly practices, our parks are designed to minimize costs and reduce environmental impact.",
    },
    {
      title: "5. Community Engagement and Modern Facility Management",
      content:
        "Dynamic wellness spaces, community-focused initiatives, and innovative management apps come together to create environments that enhance productivity and well-being.",
    },
  ];
  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="relative z-10 pt-20 max-w-[1250px] w-[90%] mx-auto xl:pt-[92px] h-fit flex flex-col">
          <LineHead heading={"What Sets KSH INFRA Parks Ahead"} />
        </div>
        <div className="flex xl:flex-row flex-col-reverse md:p-0 px-5 pt-0 max-h-fit lg:gap-0 gap-5 relative">
          <div className="xl:flex hidden items-end bottom-0 xl:bottom-[30px] justify-center mt-0 xl:absolute relative xl:left-0 w-full xl:w-[700px]">
            <video
              ref={videoRef}
              src="/uspicons/USP.mp4"
              className="min-w-full min-h-full scale-100 xl:scale-[1.3]"
              muted
            ></video>
          </div>

          <div className="xl:w-full mx-auto flex flex-col h-fit max-w-full justify-center items-start gap-[33px] pb-20 xl:pb-[110px] xl:pl-[565px]">
            {/* Text & Navigation Buttons */}
            <motion.div className="flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] w-full sm:w-[90%] sm:mx-auto xl:w-auto xl-1024:mr-[50px] xl-1280:mr-[59px] xl-1366:mr-[55px] xl-1600:mr-[171px] xl-1536:mr-[145px] xl-1440:mr-[90px] xl-1920:mr-[29%]">
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB] z-[1]">
                KSH INFRA builds solutions that meet and grow with your evolving
                industry needs. We create spaces that help you achieve your
                business goals more effectively.
              </p>
            </motion.div>

            {/* Swiper Slider */}
            <Accordion accw={100} acch={450} accordionData={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
