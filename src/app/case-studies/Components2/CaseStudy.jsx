// "use client";

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import SlideCard from "./SlideCard";
// import "swiper/css";

// const CaseStudy = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   const CaseStudyContent = [
//     {
//       Title: (
//         <>
//           Done and Delivered. On Time
//           <br />— Jabil KSH INFRA
//         </>
//       ),
//       url: "/case-studies/jabil",
//       Image: "/caseInside/jabilspot.png",
//     },
//     {
//       Title:
//         "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
//       url: "/case-studies/kawasaki",
//       Image: "/caseInside/caseInsideSpot.png",
//     },
//     {
//       Title:
//         "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
//       url: "/case-studies/kawasaki",
//       Image: "/caseInside/caseInsideSpot.png",
//     },
//     {
//       Title:
//         "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
//       url: "/case-studies/kawasaki",
//       Image: "/caseInside/caseInsideSpot.png",
//     },
//     // Add more items here if needed...
//   ];

//   return (
//     <div className="z-10 relative py-[60px] w-full">
//       <div className="fix12">
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           modules={[Navigation]}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           breakpoints={{
//             1024: { slidesPerView: 2 },
//           }}
//         >
//           {CaseStudyContent.map((content, index) => (
//             <SwiperSlide key={index}>
//               <SlideCard
//                 title={content.Title}
//                 image={content.Image}
//                 url={content.url}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <div className="flex items-center justify-start gap-3 mt-8">
//           <button ref={prevRef} className="landingl w-fit">
//             <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
//           </button>
//           <button ref={nextRef} className="landingr w-10 h-10">
//             <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudy;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SlideCard from "./SlideCard";
import "swiper/css";
import "swiper/css/navigation";

const CaseStudy = () => {
  const CaseStudyContent = [
    {
      Title: (
        <>
          Done and Delivered. On Time
          <br />— Jabil KSH INFRA
        </>
      ),
      url: "/case-studies/jabil",
      Image: "/caseInside/jabspot.jpg",
    },
    {
      Title:
        "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
      url: "/case-studies/kawasaki",
      Image: "/caseInside/kwspot.jpg",
    },
    {
      Title: "Hindalco, a flagship company of the Aditya Birla Group.",
      url: "/case-studies/hindalco",
      Image: "/caseInside/hindspot.png",
    },
    {
      Title: "Barnes, a global moulding solutions manufacturer.",
      url: "/case-studies/barnes",
      Image: "/caseInside/barnes.png",
    },
  ];

  return (
    <div className="z-10 relative py-[60px] w-full">
      <div className="fix12">
        <Swiper
          spaceBetween={30}
          speed={1000}
          slidesPerGroup={2}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            1024: { slidesPerView: 2, slidesPerGroup: 2 },
          }}
        >
          {CaseStudyContent.map((content, index) => (
            <SwiperSlide key={index}>
              <SlideCard
                title={content.Title}
                image={content.Image}
                url={content.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (just class based now) */}
        <div className="flex items-center justify-start gap-3 mt-8">
          <button className="landingl custom-prev w-fit">
            <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
          </button>
          <button className="landingr custom-next w-10 h-10">
            <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
