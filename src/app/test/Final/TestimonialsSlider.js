"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import LineHead from "../../Components/Heading/LineHead";

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
// const TestimonialSlider = () => {
//   return (
//     <div className="w-full min-h-[110vh] flex flex-col justify-center items-center py-16 bg-[#0b2a45] text-white">
//       <div className="mb-10 text-2xl fsans-600 fix12">What Our Clients Say</div>
//       <Swiper
//         modules={[EffectCoverflow]}
//         slidesPerView={1.5}
//         centeredSlides={true}
//         loop={true}
//         className="w-full px-10"
//       >
//         {testimonials.map((item) => (
//           <SwiperSlide key={item.id}>
//             {({ isActive }) => (
//               <div
//                 className={`transition-all w-full h-[540px] duration-500 ease-in-out shadow-xl bg-white text-black overflow-hidden mx-auto flex items-center justify-center ${
//                   isActive
//                     ? " scale-100 opacity-100 z-20"
//                     : " scale-90 opacity-60 z-10"
//                 }`}
//               >
//                 <div className="flex flex-col md:flex-row w-full h-full">
//                   <div className="md:w-[30%] w-full h-full">
//                     <img
//                       src={item.image}
//                       alt={item.company}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="md:w-[70%] w-full p-6 flex flex-col justify-center">
//                     <img
//                       src={item.logo}
//                       alt={`${item.company} logo`}
//                       className="w-auto max-w-[255px] h-[48px] mb-4"
//                     />
//                     <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//                       {item.content}
//                     </p>
//                     <div className="mt-auto">
//                       <div className="font-semibold text-black">
//                         {item.name}
//                       </div>
//                       <div className="text-sm text-red-600">
//                         {item.designation}
//                       </div>
//                       <div className="text-5xl text-gray-200 leading-none mt-4">
//                         “”
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

const TestimonialSlider = () => {
  return (
    <div className="w-full 2xl:min-h-[100vh] min-h-[110vh] min-1920:min-h-[60vh] flex flex-col gap-10 justify-center items-center py-16 bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white">
      <div className="text-2xl fsans-600 fix12 border-b border-[#D7D7D7] pb-5">
        What Our Clients Say
      </div>
      <Swiper
        modules={[Navigation, FreeMode, EffectCoverflow]}
        slidesPerView={1.3}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1.05,
          },
          1280: {
            slidesPerView: 1.3,
          },
          1536: {
            slidesPerView: 1.4,
          },
        }}
        className="w-full px-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`transition-all w-full 2xl:h-[540px] h-[75vh] duration-500 ease-in-out shadow-xl bg-white text-black mx-auto flex items-center justify-between ${
                  isActive
                    ? "scale-100 opacity-100 z-20"
                    : "scale-90 opacity-60 z-10"
                }`}
              >
                <div className="flex flex-col md:flex-row w-full h-full max-w-[1250px]">
                  <div className="md:w-[35%] w-full min-h-full">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="min-w-full min-h-full object-cover"
                    />
                  </div>
                  <div className="md:w-[65%] w-full p-10 flex flex-col justify-center  gap-5 2xl:gap-[15px]">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-auto 2xl:max-w-[255px] max-w-[150px] 2xl:h-[48px]"
                    />
                    <p className="fsans-400 text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] text-[#6C8DAB]">
                      {item.content}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <div className="fsans-700 text-[20px] leading-[130%] text-black">
                          {item.name}
                        </div>
                        <div className="text-[15px] leading-[130%] text-[#E30613]">
                          {item.designation}
                        </div>
                      </div>
                      <div className="2xl:scale-100 scale-75">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="161"
                          height="124"
                          viewBox="0 0 161 124"
                          fill="none"
                        >
                          <path
                            opacity="0.1"
                            d="M42.0941 0C49.2409 0 55.6337 2.16508 61.2724 6.49524C66.8456 10.8254 70.583 16.4349 72.4844 23.3238C73.7958 28.1132 74.4514 33.1651 74.4514 38.4794C74.4514 46.5492 72.8778 54.7175 69.7306 62.9841C66.5834 71.3164 62.256 79.1566 56.7483 86.5048C51.2407 93.8529 44.8807 100.709 37.6683 107.073C30.3904 113.503 22.5879 119.145 14.2608 124L0 109.73C14.8182 97.855 24.9483 88.6698 30.3904 82.1746C35.7668 75.6794 38.5535 69.2169 38.7502 62.7873C30.751 61.8688 24.0631 58.4243 18.6866 52.454C13.3101 46.4836 10.6219 39.4963 10.6219 31.4921C10.6219 22.7661 13.7035 15.3196 19.8668 9.15238C25.9646 3.05079 33.3736 0 42.0941 0ZM128.643 0C135.789 0 142.182 2.16508 147.821 6.49524C153.394 10.8254 157.132 16.4349 159.033 23.3238C160.344 28.1132 161 33.1651 161 38.4794C161 46.5492 159.426 54.7175 156.279 62.9841C153.132 71.3164 148.805 79.1566 143.297 86.5048C137.789 93.8529 131.429 100.709 124.217 107.073C116.939 113.503 109.136 119.145 100.809 124L86.5486 109.73C101.367 97.855 111.497 88.6698 116.939 82.1746C122.315 75.6794 125.102 69.2169 125.299 62.7873C117.3 61.8688 110.612 58.4243 105.235 52.454C99.8587 46.4836 97.1704 39.4963 97.1704 31.4921C97.1704 22.7661 100.252 15.3196 106.415 9.15238C112.513 3.05079 119.922 0 128.643 0Z"
                            fill="#6C8DAB"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* 👇 Navigation Buttons at bottom */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button className="slider-prev w-fit">
            <img className="w-10 h-10" src="/landingr.svg" alt="Previous" />
          </button>
          <button className="slider-next w-fit">
            <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
