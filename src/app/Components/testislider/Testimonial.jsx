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

"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LineHead from "../Heading/LineHead";

const testimonials = [
  {
    text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
    name: "Sarah Mitchell - Small Business Owner",
  },
  {
    text: "Their team guided us through a tricky merger with unmatched professionalism.",
    name: "James Carter - CEO, TechWave",
  },
  {
    text: "I appreciate their proactive communication and transparent legal advice.",
    name: "Ayesha Khan - Startup Founder",
  },
  {
    text: "They bring clarity to complex legal issues, which is a rare and valuable trait.",
    name: "David Brooks - Angel Investor",
  },
  {
    text: "Highly responsive and always working in our best interest — I trust them fully.",
    name: "Meera Singh - Creative Director",
  },
  {
    text: "I appreciate their proactive communication and transparent legal advice.",
    name: "Ayesha Khan - Startup Founder",
  },
  {
    text: "They bring clarity to complex legal issues, which is a rare and valuable trait.",
    name: "David Brooks - Angel Investor",
  },
  {
    text: "Highly responsive and always working in our best interest — I trust them fully.",
    name: "Meera Singh - Creative Director",
  },
  {
    text: "I appreciate their proactive communication and transparent legal advice.",
    name: "Ayesha Khan - Startup Founder",
  },
  {
    text: "They bring clarity to complex legal issues, which is a rare and valuable trait.",
    name: "David Brooks - Angel Investor",
  },
  {
    text: "Highly responsive and always working in our best interest — I trust them fully.",
    name: "Meera Singh - Creative Director",
  },
  {
    text: "I appreciate their proactive communication and transparent legal advice.",
    name: "Ayesha Khan - Startup Founder",
  },
  {
    text: "They bring clarity to complex legal issues, which is a rare and valuable trait.",
    name: "David Brooks - Angel Investor",
  },
  {
    text: "Highly responsive and always working in our best interest — I trust them fully.",
    name: "Meera Singh - Creative Director",
  },
  {
    text: "I appreciate their proactive communication and transparent legal advice.",
    name: "Ayesha Khan - Startup Founder",
  },
  {
    text: "They bring clarity to complex legal issues, which is a rare and valuable trait.",
    name: "David Brooks - Angel Investor",
  },
  {
    text: "Highly responsive and always working in our best interest — I trust them fully.",
    name: "Meera Singh - Creative Director",
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
    <div className="xl:py-[100px] py-[50px] bg-white">
      <div className="fix12 px-4">
        <LineHead heading="Testimonials" />
        <h2 className="xl:text-5xl text-2xl font-semibold ">
          What Our Clients Say
        </h2>

        <div className="relative xl:py-[50px] py-5">
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
              1366: { slidesPerView: 3.5 }, // ≥1366px
              1024: { slidesPerView: 3 }, // ≥1024px
              640: { slidesPerView: 1.2 }, // ≥640px (optional for tablets)
              0: { slidesPerView: 1 }, // default (mobile)
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col">
                  <div className="flex flex-col justify-between rounded-xl p-6 h-[200px] bg-[#EEF0F3] text-black shadow">
                    <p className="text-lg leading-relaxed mb-6">{item.text}</p>
                    <div className="text-sm font-semibold">{item.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress bar */}
          <div className="mt-6 relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#6C8DAB] transition-all duration-500"
              ref={progressRef}
              style={{ width: "0%" }}
            ></div>
          </div>

          {/* Arrows */}
          <div className="flex gap-2 pt-5">
            <button className="swiper-prev">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrowp.svg"
                alt=""
              />
            </button>
            <button className="swiper-next">
              <img
                className="h-[41px] w-[41px]"
                src="/ParkPage/parrown.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
