"use client";
// "use client";

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
//   {
//     text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
//     name: "Sarah Mitchell - Small Business Owner",
//   },
// ];

// export default function Testimonial() {
//   const progressRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slidesPerView = {
//     base: 1,
//     sm: 1.5,
//     md: 2.5,
//   };

//   const calculateVisibleSlides = () => {
//     if (typeof window === "undefined") return slidesPerView.base;
//     if (window.innerWidth >= 1024) return slidesPerView.md;
//     if (window.innerWidth >= 768) return slidesPerView.sm;
//     return slidesPerView.base;
//   };

//   return (
//     <div className="py-16 bg-white">
//       <div className="fix12 px-4">
//         <h2 className="text-3xl font-semibold mb-4">Why Clients Realy on Us</h2>
//         <p className="text-sm text-gray-500 mb-10 max-w-xl">
//           Specializing in business, entertainment, employment, and conflict
//           resolution, we advocate for entrepreneurs and stakeholders.
//         </p>

//         <div className="relative">
//           <Swiper
//             modules={[Navigation]}
//             slidesPerView={1.3}
//             spaceBetween={30}
//             slidesPerGroup={1}
//             navigation={{
//               nextEl: ".swiper-next",
//               prevEl: ".swiper-prev",
//             }}
//             onSlideChange={(swiper) => {
//               setActiveIndex(swiper.activeIndex);

//               // Fix progress bar logic
//               const total = swiper.slides.length - calculateVisibleSlides();
//               const progress = Math.min(
//                 (swiper.activeIndex / total) * 100,
//                 100
//               );
//               if (progressRef.current) {
//                 progressRef.current.style.width = `${progress}%`;
//               }
//             }}
//             breakpoints={{
//               1024: {
//                 slidesPerView: slidesPerView.md,
//               },
//               768: {
//                 slidesPerView: slidesPerView.sm,
//               },
//               0: {
//                 slidesPerView: slidesPerView.base,
//               },
//             }}
//           >
//             {testimonials.map((item, index) => {
//               const isActive = index === activeIndex;
//               return (
//                 <SwiperSlide key={index}>
//                   <div
//                     className={`rounded-xl p-6 h-full transition-all duration-300 ${
//                       isActive
//                         ? "bg-[#6C8DAB] text-white"
//                         : "bg-white text-black"
//                     } shadow`}
//                   >
//                     <p className="text-lg leading-relaxed mb-6">{item.text}</p>
//                     <div className="text-sm font-semibold">{item.name}</div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>

//           {/* Progress bar */}
//           <div className="mt-6 relative h-1 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="absolute top-0 left-0 h-full bg-[#6C8DAB] transition-all duration-500"
//               ref={progressRef}
//               style={{ width: "0%" }}
//             ></div>
//           </div>

//           {/* Arrows */}
//           <div className="flex gap-2 mt-4">
//             <button className="swiper-prev w-8 h-8 bg-[#6C8DAB] text-white rounded flex items-center justify-center">
//               ←
//             </button>
//             <button className="swiper-next w-8 h-8 bg-[#6C8DAB] text-white rounded flex items-center justify-center">
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Final Testimonial Component}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LineHead from "../Heading/LineHead";

const testimonials = [
  {
    text: "Our experience with KSH INFRA has been outstanding in every aspect. From the very beginning, their team showed a deep understanding of our requirements. Since our customer is one of the most reputed automotive OEMs a number of special requirements need to be executed in the factory floor for our production equipment. KSH willingly accepted to make all such changes and delivered a facility that reflects the highest standards of construction quality. The entire project was executed with remarkable timeliness, and the transaction process was smooth, transparent, and highly professional. KSH INFRA has truly performed beyond our expectations — not just as a developer, but as a trusted partner who enabled us to set up a world-class manufacturing facility with complete peace of mind. We deeply value this association and look forward to future collaborations.",
    name: "Mr. Amitabh Mathur,<br/>Managing Director, GEDIA India Automotive Components",
  },
  {
    text: "Working with KSH INFRA on their latest project, KSH INFRA Chakan Park III at Varale, has been an excellent experience. We are amazed at the speed and proficiency with which all the works were carried out and it was ensured that we got our building according to our plan, apart from the timely possession all other infrastructure works were also completed in time so as not to have any disturbance to our operations and there has been no delay in our project timelines, KSH INFRA has also been very flexible to making adjustments to our changing project plans and scope! In a nut shell I will say that KSH INFRA is extremely customer centric  and understands and fulfils the needs of the clients. The quality of work has been good and KSH INFRA was very open to making any changes that we needed in order to suit our production & machine requirements. The entire Park layout is good and attention to details such as broad roads, parking, security etc is good. We look forward to continuing our partnership with them in future endeavours.",
    name: "Mr. Shyam Datye,<br/>India Head, CTC Global",
  },
  {
    text: "Our experience at KSH Talegaon Park I has been truly exceptional. We chose this facility after it successfully met our rigorous standards for infrastructure quality, as well as our comprehensive safety and security requirements. What set this collaboration apart was the outstanding support and responsiveness of the KSH INFRA team—extending well beyond our initial move-in period. Their commitment to service and professionalism has been evident throughout our journey. We deeply value the partnership we have forged through this project.",
    name: "Mr . Yogesh Barve,<br/>Managing Director, Klingspor",
  },
  {
    text: "We were in search of a well-located and high-quality industrial infrastructure space for our business in Talegaon, and KSH INFRA emerged as the perfect partner. Even though KSH Talegaon I Park was their first project, we were impressed by the exceptional quality of construction and their professional, solution-oriented approach. The team's positive attitude and commitment to delivery made it a great experience collaborating with them. We are pleased to see KSH INFRA rapidly expanding its footprint across India, and we extend our best wishes for continued success and growth.",
    name: "Mr. Inder Aurora,<br/>Director, Unisource.",
  },

  {
    text: "TEAM KSH has provided us a world-class facility in Chakan Industrial area for our manufacturing operations. Team KSH was extremely supportive and professional in developing the facility for us. We were able to commence operations within two months from moving-in which was very beneficial for us.",
    name: "NAOKI MATSUMOTO,<br/>Chairman, India (Kawasaki)",
  },
  {
    text: "KSH has been very instrumental during our facility setup and with their expertise in construction and understanding of our manufacturing needs, their collaborative approach allowed them to capture critical requirements to deliver our factory on time.",
    name: "TODD RENNER,<br/>Global Business Unit Manager (Jabil)",
  },
  {
    text: "KSH Industrial Park at Chakan is a world class industrial facility. We feel privileged to be established here as ease of doing business, safety and security of the plant & workers, infrastructure and service provided by KSH is unparalleled. Rohit Hegde and his team have provided us tremendous support in establishing the business.",
    name: "RAJ GHOGALE,<br/>Managing Director (Callisons)",
  },
];

export default function Testimonial() {
  const progressRef = useRef(null);

  const onSlideChange = (swiper) => {
    if (progressRef.current) {
      const percentage =
        (swiper.activeIndex /
          (swiper.slides.length - swiper.params.slidesPerView)) *
        100;
      progressRef.current.style.width = `${Math.min(percentage, 100)}%`;
    }
  };

  return (
    <div className="xl:py-[100px] py-[50px] bg-[#092241]" id="testimonials">
      <div className="fix12">
        <p className="leading-[26px] w-full spotlightheaddd text-[20px] pb-[20px] border-b xl:mb-[66px] mb-[36px] border-[${bclr}] border-opacity-[${bopacity}] fsans-600 text-[#fff] ${clr} linehead-text">
          What Our Clients Say
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerGroup={1}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            onSlideChange={onSlideChange}
            breakpoints={{
              1024: { slidesPerView: 2.5 }, // ≥1024px

              0: { slidesPerView: 1 }, // default (mobile)
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-fit flex flex-col">
                  <div className="flex flex-col justify-between p-6 h-[280px] bg-[#EEF0F3] text-black shadow">
                    <div className="h-[177px] overflow-y-auto mb-5 lg:mb-6 custom-scroll">
                      <p className="lg:text-[18px] text-[16px] leading-[150%] text-left">
                        {item.text}
                      </p>
                    </div>

                    <div
                      className="text-sm font-semibold"
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress bar */}
          {/* <div className="mt-6 relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#F7E327] transition-all duration-500"
              ref={progressRef}
              style={{ width: "0%" }}
            ></div>
          </div> */}

          {/* Arrows */}
          <div className="flex gap-2 pt-5">
            <button className="swiper-prev">
              <img className="h-[41px] w-[41px]" src="/landingr.svg" alt="" />
            </button>
            <button className="swiper-next">
              <img className="h-[41px] w-[41px]" src="/landingl.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
