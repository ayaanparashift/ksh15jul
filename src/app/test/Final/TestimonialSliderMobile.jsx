"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import TestiCard from "./TestiCard";

const testimonials = [
  {
    id: 1,
    image: "/blog/blog2.png",
    logo: "/testimonial/gedialogo.png",
    company: "GEDIA",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Mr. Amitabh Mathur",
    designation: "Managing Director, GEDIA India Automotive Components",
  },
  {
    id: 2,
    image: "/blog/blog2.png",
    logo: "/testimonial/gedialogo.png",
    company: "Tesla",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Ms. Claire Reynolds",
    designation: "Regional Director, Tesla Energy",
  },
  {
    id: 3,
    image: "/blog/blog2.png",
    logo: "/testimonial/gedialogo.png",
    company: "Siemens",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Mr. Rajeev Sharma",
    designation: "VP Operations, Siemens India",
  },
  {
    id: 4,
    image: "/blog/blog2.png",
    logo: "/testimonial/gedialogo.png",
    company: "Amazon",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Ms. Shruti Iyer",
    designation: "Director, Amazon Logistics South Asia",
  },
  {
    id: 5,
    image: "/blog/blog2.png",
    logo: "/testimonial/gedialogo.png",
    company: "Microsoft",
    content:
      "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Mr. Deepak Nair",
    designation: "Infrastructure Head, Microsoft India",
  },
];

const TestimonialSliderMobile = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      const scrollTop = el.scrollTop;

      if (scrollHeight > clientHeight) {
        const maxScroll = scrollHeight - clientHeight;
        let scrollPercent = (scrollTop / maxScroll) * 122;

        // 🔥 Snap to 100% if near bottom (due to rounding)
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          scrollPercent = 122;
        }

        el.style.setProperty("--scrollbar-height", `${scrollPercent}%`);
      } else {
        el.style.setProperty("--scrollbar-height", `0%`);
      }
    };

    el.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  // return (
  //   <div className="w-full min-h-screen lg:hidden flex flex-col bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white py-12 px-4">
  //     <div className="text-xl fsans-600 border-b border-[#D7D7D7] pb-4 mb-6">
  //       What Our Clients Say
  //     </div>
  //     <Swiper
  //       modules={[Navigation]}
  //       slidesPerView={1}
  //       spaceBetween={20}
  //       loop={true}
  //       navigation={{
  //         nextEl: ".slider-next-mob",
  //         prevEl: ".slider-prev-mob",
  //       }}
  //       className="w-full"
  //     >
  //       {testimonials.map((item) => (
  //         <SwiperSlide key={item.id}>
  //           <div className="w-full h-[75vh] bg-white text-black overflow-hidden flex flex-col">
  //             <div className="h-[30%] w-full">
  //               <img
  //                 src={item.image}
  //                 alt={item.company}
  //                 className="w-full h-full object-cover"
  //               />
  //             </div>
  //             <div
  //               ref={scrollRef}
  //               className="h-[70%] custom-scroll p-5 flex flex-col justify-between gap-4"
  //             >
  //               <img
  //                 src={item.logo}
  //                 alt={`${item.company} logo`}
  //                 className="max-w-[180px] h-auto"
  //               />
  //               <p className="fsans-400 text-sm leading-[20px] text-[#6C8DAB]">
  //                 {item.content}
  //               </p>
  //               <div className="flex flex-col gap-1">
  //                 <div className="fsans-700 text-[18px] text-black">
  //                   {item.name}
  //                 </div>
  //                 <div className="text-sm text-[#E30613]">
  //                   {item.designation}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //       {/* Navigation buttons for mobile (if needed) */}
  //       <div className="flex items-center justify-center gap-3 mt-6">
  //         <button className="slider-prev-mob">
  //           <img src="/landingr.svg" className="w-8 h-8" alt="Prev" />
  //         </button>
  //         <button className="slider-next-mob">
  //           <img src="/landingl.svg" className="w-8 h-8" alt="Next" />
  //         </button>
  //       </div>
  //     </Swiper>
  //   </div>
  // );
  return (
    <div className="w-full min-h-screen lg:hidden flex flex-col bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white py-12 px-4">
      <div className="text-xl fsans-600 border-b border-[#D7D7D7] pb-4 mb-6">
        What Our Clients Say
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".slider-next-mob",
          prevEl: ".slider-prev-mob",
        }}
        className="w-full"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestiCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="slider-prev-mob">
          <img src="/landingr.svg" className="w-8 h-8" alt="Prev" />
        </button>
        <button className="slider-next-mob">
          <img src="/landingl.svg" className="w-8 h-8" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSliderMobile;
