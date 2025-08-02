"use client";
import { useRef, useEffect } from "react";
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
    logo: "/testimonial/cttf.png",
    company: "CTC Global",
    content:
      "Working with KSH INFRA on their latest project, KSH INFRA Chakan Park 3 at Varale, has been an excellent experience. We are amazed at the speed and proficiency with which all the works were carried out and it was ensured that we got our building according to our plan, apart from the timely possession all other infrastructure works were also completed in time so as not to have any disturbance to our operations and there has been no delay in our project timelines, KSH INFRA has also been very flexible to making adjustments to our changing project plans and scope! In a nut shell I will say that KSH INFRA is extremely Customer centric  and understands and fulfils the needs of the clients. The Quality of work has been good and KSH INFRA was very open to making any changes that we needed in order to suit our production & machine requirements. The entire Park layout is good and attention to details such as broad roads, parking, security etc is good. We look forward to continuing our partnership with them in future endeavours.",
    name: "Mr. Shyam Datye",
    designation: "India Head, CTC Global",
  },
  {
    id: 3,
    image: "/blog/blog2.png",
    logo: "/testimonial/kltf.png",
    company: "Klingspor",
    content:
      "Our experience at KSH Talegaon Park I has been truly exceptional. We chose this facility after it successfully met our rigorous standards for infrastructure quality, as well as our comprehensive safety and security requirements. What set this collaboration apart was the outstanding support and responsiveness of the KSH INFRA team—extending well beyond our initial move-in period. Their commitment to service and professionalism has been evident throughout our journey. We deeply value the partnership we have forged through this project.",
    name: "Mr. Yogesh Barve",
    designation: "Managing Director, Klingspor",
  },
  {
    id: 4,
    image: "/blog/blog2.png",
    logo: "/testimonial/untf.png",
    company: "Unisource",
    content:
      "We were in search of a well-located and high-quality industrial infrastructure space for our business in Talegaon, and KSH INFRA emerged as the perfect partner. Even though KSH Talegaon I Park was their first project, we were impressed by the exceptional quality of construction and their professional, solution-oriented approach. The team's positive attitude and commitment to delivery made it a great experience collaborating with them. We are pleased to see KSH INFRA rapidly expanding its footprint across India, and we extend our best wishes for continued success and growth.",
    name: "Mr. Inder Aurora",
    designation: "Director, Unisource",
  },
  {
    id: 5,
    image: "/blog/blog2.png",
    logo: "/testimonial/kwtf.png",
    company: "Kawasaki",
    content:
      "TEAM KSH has provided us a world-class facility in Chakan Industrial area for our manufacturing operations. Team KSH was extremely supportive and professional in developing the facility for us. We were able to commence operations within two months from moving-in which was very beneficial for us.",
    name: "Naoki Matsumoto",
    designation: "Chairman, India (Kawasaki)",
  },
  {
    id: 6,
    image: "/blog/blog2.png",
    logo: "/testimonial/jbtf.png",
    company: "Jabil",
    content:
      "KSH has been very instrumental during our facility setup and with their expertise in construction and understanding of our manufacturing needs, their collaborative approach allowed them to capture critical requirements to deliver our factory on time.",
    name: "Todd Renner",
    designation: "Global Business Unit Manager, Jabil",
  },
  {
    id: 7,
    image: "/blog/blog2.png",
    logo: "/testimonial/cltf.png",
    company: "Callisons",
    content:
      "KSH Industrial Park at Chakan is a world class industrial facility. We feel privileged to be established here as ease of doing business, safety and security of the plant & workers, infrastructure and service provided by KSH is unparalleled. Rohit Hegde and his team have provided us tremendous support in establishing the business.",
    name: "Raj Ghogale",
    designation: "Managing Director, Callisons",
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
//
//
//
//
//

const TestimonialSlider = () => {
  // const scrollRef = useRef(null);
  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   const updateProgress = () => {
  //     const scrollHeight = el.scrollHeight;
  //     const clientHeight = el.clientHeight;
  //     const scrollTop = el.scrollTop;

  //     if (scrollHeight > clientHeight) {
  //       const maxScroll = scrollHeight - clientHeight;
  //       let scrollPercent = (scrollTop / maxScroll) * 122;
  //       if (scrollTop + clientHeight >= scrollHeight - 1) {
  //         scrollPercent = 122;
  //       }
  //       el.style.setProperty("--scrollbar-height", `${scrollPercent}%`);
  //     } else {
  //       el.style.setProperty("--scrollbar-height", `0%`);
  //     }
  //   };

  //   el.addEventListener("scroll", updateProgress);
  //   updateProgress();
  //   return () => el.removeEventListener("scroll", updateProgress);
  // }, []);
  return (
    <div className="w-full 2xl:min-h-[100vh] min-h-[110vh] min-1920:min-h-[60vh] lg:flex flex-col hidden gap-10 justify-center items-center py-16 bg-[url('/testimonial/testibg.webp')] bg-no-repeat bg-cover bg-center text-white">
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
                className={`transition-all w-full 2xl:h-[450px] h-[75vh] duration-500 ease-in-out shadow-xl bg-white text-black mx-auto flex items-center justify-between ${
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
                  <div className="md:w-[65%] w-full p-10 flex flex-col justify-center  gap-5 xl:gap-[25px]">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-auto 2xl:max-w-[255px] max-w-[150px] 2xl:h-[48px]"
                    />
                    <p className="fsans-400 styled-scroll2 h-[150px] custom-scroll text-[14px] 2xl:text-[16px] leading-[20px] 2xl:leading-[24px] text-[#6C8DAB]">
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
