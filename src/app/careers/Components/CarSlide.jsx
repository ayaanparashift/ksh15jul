// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import CareerSlideCard from "./CareerSlideCard";

// const sld = [
//   {
//     simgs: "/Career/finalcareer/akhil.webp",
//     image: "/Career/finalcareer/akhil.webp",
//     title: "Akhil Ilkar",
//     subtitle: "Purchase- INFRA",
//     description:
//       "I’ve been a part of KSH since 2017 and currently work as a Deputy Manager in the Electrical Department at KSH. Not only have I been able to execute my skills, I have also been able to learn more about my field through the various Industrial & Logistics Parks as well as through client interactions. I have been lucky enough to find my designs used in various projects for clients and that keeps driving me.",
//   },
//   {
//     simgs: "/Career/finalcareer/prajakta_butala.png",
//     image: "/Career/finalcareer/prajakta_butala.png",
//     title: "Prajakta Butala",
//     subtitle: "Finance & Accounting",
//     description:
//       "It has only been three months since I joined this team, I was immediately welcomed with warmth and found communication easy. We take on new challenges every day and find the best ways to convert them into opportunities. The senior team here is a constant force of encouragement. The work structure and atmosphere are well-defined and rather wonderful.",
//   },
//   {
//     simgs: "/Career/finalcareer/dilip_kadam.png",
//     image: "/Career/finalcareer/dilip_kadam.png",
//     title: "Dilip Kadam",
//     subtitle: "Civil- INFRA",
//     description:
//       "I can say without a doubt that it is one of the best places to work at. The company has a great work culture and the management is supportive. I have never felt like I am working for a company, but rather I feel like I am part of a family. The work is challenging and there is always something new to learn, which keeps me motivated.",
//   },
//   {
//     simgs: "/Career/finalcareer/mayur_bhiungade.png",
//     image: "/Career/finalcareer/mayur_bhiungade.png",
//     title: "Mayur Bhiungade",
//     subtitle: "Civil INFRA",
//     description:
//       "I come to work every day knowing that I will give all my energy to my job and own my responsibilities. The reason for that is the friendly and conducive work environment at KSH. I have access to some of the best mentors around and real opportunities to gain and enhance my knowledge and skills. I’ve never felt the need to hold an idea back because I know it will be heard and appreciated.",
//   },
//   {
//     simgs: "/Career/finalcareer/sunny_abraham_1x.webp",
//     image: "/Career/finalcareer/sunny_abraham_1x.webp",
//     title: "Sunny Abraham",
//     subtitle: "Designing INFRA",
//     description:
//       "The strength of a team can never be undermined. During the last eight years at KSH, I have been able to implement knowledge garnered over the past 35 years in the various multimodal Industrial & Logistics Parks. I’ve been able to express my concerns and ideas. Not only were they heard, but they were also received with gratitude. Coming back to teams, there have been moments where we pulled together to overcome seemingly humongous challenges with ease.",
//   },
//   {
//     simgs: "/Career/finalcareer/suraj_shah_1x.webp",
//     image: "/Career/finalcareer/suraj_shah_1x.webp",
//     title: "Suraj Shah",
//     subtitle: "Finance & Accounting",
//     description:
//       "The past four years with the KSH Design Department have been an eye-opener. The atmosphere encourages creativity and as an employee, you feel cared about. We feel the importance given to our clients and understand that we are KSH in everything we do. The trust and freedom that were given to me and my team allowed us to explore our potential. I am part of the KSH family.",
//   },
//   {
//     simgs: "/Career/finalcareer/vishram_khatavkar_1x.webp",
//     image: "/Career/finalcareer/vishram_khatavkar_1x.webp",
//     title: "Vishram Khatavakar",
//     subtitle: "Electrical INFRA",
//     description:
//       "I moved from the residential construction space into the industrial space with KSH, the work culture, team adherence and support helped me get through my personal troubles more than once. This alone is enough to inspire me, but there is more, the value given to employees is something I have experienced at this level. I encourage people who are willing to challenge their attitudes and push the boundaries to join this amazing team.",
//   },
//   {
//     simgs: "/Career/finalcareer/krishna__1x.webp",
//     image: "/Career/finalcareer/krishna__1x.webp",
//     title: "Krishna Vyas",
//     subtitle: "Designing INFRA",
//     description:
//       "The past nine years have been nothing short of glorious. I have learned and grown as a professional and a person. I enjoy every moment and find the team to be a sheer joy to work with. People here know they are valued; they bring enthusiasm and knowledge to the table every day. We have had a lot of opportunities to gel at sporting events, yoga sessions, communication seminars and other workshops that have helped me hone my skills. Both my team and I are filled with gratitude as we continue our journey with KSH.",
//   },
// ];

// export const CarSlide = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="w-full pt-[70px] overflow-visible">
//       {/* Main Section */}
//       <div className="w-full lg:bg-[linear-gradient(to_bottom,#ffffff_90%,#092241_10%)]">
//         <div className="fix12">
//           <motion.h1
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//             className="md:text-[44px] text-[24px] text-[#092241] leading-[111%] w-full pb-[10px] border-b border-[#D7D7D7] whitespace-nowrap overflow-hidden"
//           >
//             What our team says!
//           </motion.h1>

//           <Swiper
//             modules={[Thumbs]}
//             spaceBetween={40}
//             thumbs={{
//               swiper:
//                 thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//             }}
//             speed={800}
//             className="main-swiper"
//           >
//             {sld.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex lg:flex-row flex-col w-full gap-[35px] lg:gap-[40px] pt-[55px]">
//                   <motion.div
//                     initial={{ y: "-50px", opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//                     viewport={{ amount: 0.1, once: false }}
//                     className="relative z-10 w-fit bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center flex justify-center items-center px-[8%] py-[12%] lg:px-[60px] lg:py-[60px] lg:ml-10 shadow-[4px_4px_34px_rgba(0,0,0,0.15)]"
//                   >
//                     <img
//                       className="w-full h-full"
//                       src={slide.image}
//                       alt={slide.title}
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
//                     viewport={{ amount: 0.1, once: false }}
//                     className="flex flex-col flex-1"
//                   >
//                     <div className="flex flex-col gap-[10px] lg:gap-[30px]">
//                       <h3 className="fsans-600 text-[26px] md:text-[36px] text-[#181818]">
//                         {slide.title}
//                       </h3>
//                       <p className="md:text-[22px] text-[18px] text-[#4F4F4F] leading-[130%]">
//                         {slide.subtitle}
//                       </p>
//                       <p className="text-[16px] fsans-400 text-[#434343] leading-[26px]">
//                         {slide.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <style jsx global>{`
//             .main-swiper .swiper-slide {
//               overflow: visible !important;
//               * {
//                 color: black;
//                 transition: color 0.8s;
//               }
//             }
//             .thumb-swiper .swiper-slide-thumb-active {
//               background-color: white;
//               h3 {
//                 color: #092241;
//               }
//             }
//           `}</style>
//         </div>
//       </div>

//       {/* Thumbs Slider */}
//       <div className="bg-[#092241] pt-[35px] pb-[70px]">
//         <div className="fix12">
//           <div className="flex gap-[12px] md:gap-[14px] justify-end mb-4">
//             <button
//               id="carprev"
//               className="w-10 h-10 flex items-center justify-center"
//             >
//               <img className="h-10 w-10" src="/landingr.svg" alt="Prev" />
//             </button>
//             <button
//               id="carnext"
//               className="w-10 h-10 flex items-center justify-center"
//             >
//               <img className="h-10 w-10" src="/landingl.svg" alt="Next" />
//             </button>
//           </div>

//           <motion.div
//             initial={{ x: "-200px", opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.1, once: true }}
//           >
//             <Swiper
//               onSwiper={setThumbsSwiper}
//               modules={[Navigation, Thumbs]}
//               spaceBetween={0}
//               slidesPerView={4}
//               slidesPerGroup={4}
//               speed={1000}
//               watchSlidesProgress
//               navigation={{
//                 nextEl: "#carnext",
//                 prevEl: "#carprev",
//               }}
//               className="thumb-swiper"
//               breakpoints={{
//                 320: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 },
//                 768: { slidesPerView: 2.5, slidesPerGroup: 2.5 },
//                 1024: { slidesPerView: 3, slidesPerGroup: 3 },
//                 1366: { slidesPerView: 4, slidesPerGroup: 4 },
//               }}
//             >
//               {sld.map((slide, index) => (
//                 <SwiperSlide key={index}>
//                   {({ isActive }) => (
//                     <CareerSlideCard
//                       image={slide.simgs}
//                       title={slide.title}
//                       des={slide.subtitle}
//                       className={isActive ? "swiper-slide-thumb-active" : ""}
//                     />
//                   )}
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CareerSlideCard from "./CareerSlideCard";

// const sld = [
//   {
//     simgs: "/Career/finalcareer/akhil.webp",
//     image: "/Career/finalcareer/akhil.webp",
//     title: "Akhil Ilkar",
//     subtitle: "Purchase",
//     description:
//       "Being trusted to lead with precision and ownership makes all the difference. At KSH INFRA, every role contributes meaningfully to a shared mission.",
//   },
//   {
//     simgs: "/Career/finalcareer/prajakta_butala.png",
//     image: "/Career/finalcareer/prajakta_butala.png",
//     title: "Prajakta Butala",
//     subtitle: "Finance & Accounting",
//     description:
//       "At KSH INFRA, finance drives strategy, not just numbers. The trust, transparency, and sense of ownership here make every challenge an opportunity to contribute.",
//   },

//   {
//     simgs: "/Career/finalcareer/prach.jpg",
//     image: "/Career/finalcareer/prach.jpg",
//     title: "Prachi Kurlekar",
//     subtitle: "Marketing",
//     description:
//       "At KSH INFRA, brand building is rooted in trust, clarity, and collaboration. The supportive culture empowers me to lead impactful communication across every platform.",
//   },
//   {
//     simgs: "/Career/finalcareer/mayur_bhiungade.png",
//     image: "/Career/finalcareer/mayur_bhiungade.png",
//     title: "Mayur Bhiungade",
//     subtitle: "Projects",
//     description:
//       "Watching land evolve into industrial ecosystems is more than work—it’s purpose. At KSH INFRA, I’m empowered to lead with precision and deliver infrastructure that endures.",
//   },
//   {
//     simgs: "/Career/finalcareer/sunny_abraham_1x.webp",
//     image: "/Career/finalcareer/sunny_abraham_1x.webp",
//     title: "Sunny Abraham",
//     subtitle: "Projects",
//     description:
//       "Shaping the future of industrial infrastructure requires more than just technical design—it demands foresight and collaboration. At KSH INFRA, I’m empowered to lead with purpose and innovation.",
//   },
//   {
//     simgs: "/Career/finalcareer/suraj_shah_1x.webp",
//     image: "/Career/finalcareer/suraj_shah_1x.webp",
//     title: "Suraj Shah",
//     subtitle: "Projects",
//     description:
//       "Leading the Planning Department at KSH INFRA has been an empowering experience. The freedom to shape my work, backed by unwavering support and a balanced environment, fosters both professional and personal growth.",
//   },
//   {
//     simgs: "/Career/finalcareer/vishram_khatavkar_1x.webp",
//     image: "/Career/finalcareer/vishram_khatavkar_1x.webp",
//     title: "Vishram Khatavakar",
//     subtitle: "Projects",
//     description:
//       "Every project at KSH INFRA is a new blueprint for growth. With trust, freedom, and support, I’ve been able to lead, learn, and deliver with purpose.",
//   },
//   {
//     simgs: "/Career/finalcareer/krishna__1x.webp",
//     image: "/Career/finalcareer/krishna__1x.webp",
//     title: "Krishna Vyas",
//     subtitle: "Finance & Accounting",
//     description:
//       "What truly sets KSH INFRA apart is the unwavering trust and collaborative spirit that fuels our work. The freedom to take initiative, backed by strong leadership, makes every challenge an opportunity to grow.",
//   },
//   {
//     simgs: "/Career/finalcareer/nave.jpg",
//     image: "/Career/finalcareer/nave.jpg",
//     title: "Naveen Kotian",
//     subtitle: "Projects",
//     description:
//       "Having worked with KSH INFRA as a contractor, coming onboard full-time felt less like a transition and more like coming home. The freedom to focus on quality, backed by a supportive and approachable team, makes every project meaningful.",
//   },
//   {
//     simgs: "/Career/finalcareer/dhan.jpg",
//     image: "/Career/finalcareer/dhan.jpg",
//     title: "Dhanashri Sharma",
//     subtitle: "Legal",
//     description:
//       "In just two months at KSH INFRA, I’ve experienced a seamless transition, thanks to the support and collaboration within the team. It’s empowering to be in a place where your contribution matters from day one.",
//   },
//   {
//     simgs: "/Career/finalcareer/jey.jpg",
//     image: "/Career/finalcareer/jey.jpg",
//     title: "Jeyaur Rahman",
//     subtitle: "Projects",
//     description:
//       "There’s a genuine sense of belonging at KSH INFRA—where guidance is easy to find, and learning is part of the daily rhythm. With every project, I’ve gained hands-on experience, felt supported by my seniors, and grown with a team that values hard work and mutual respect.",
//   },
//   {
//     simgs: "/Career/finalcareer/swap.jpg",
//     image: "/Career/finalcareer/swap.jpg",
//     title: "Swapnil Godse",
//     subtitle: "Projects",
//     description:
//       "At KSH INFRA, project execution goes beyond timelines—it’s about teamwork, ownership, and delivering with purpose. The strong team bonding and positive work culture make every challenge achievable.",
//   },
//   {
//     simgs: "/Career/finalcareer/samp.jpg",
//     image: "/Career/finalcareer/samp.jpg",
//     title: "Sampathkumar V",
//     subtitle: "Projects",
//     description:
//       "At KSH INFRA, project execution is driven by trust, teamwork, and a strong sense of ownership. Leading operations in South India, I’m empowered to deliver impactful infrastructure with confidence and collaboration.",
//   },
//   {
//     simgs: "/Career/finalcareer/jeet.jpg",
//     image: "/Career/finalcareer/jeet.jpg",
//     title: "Jeet Bhanushali",
//     subtitle: "Leasing",
//     description:
//       "At KSH INFRA, business development goes beyond targets—it’s about ownership, collaboration, and client-focused growth. The environment here empowers you to lead, learn, and make an impact.",
//   },
//   {
//     simgs: "/Career/finalcareer/shubh.png",
//     image: "/Career/finalcareer/shubh.png",
//     title: "Shubham Jain",
//     subtitle: "Projects",
//     description:
//       "Executing projects on ground has taught me the value of coordination—and at KSH INFRA, that teamwork turns challenges into milestones. The learning here is continuous, and every role truly counts.",
//   },
//   {
//     simgs: "/Career/finalcareer/aksh.jpg",
//     image: "/Career/finalcareer/aksh.jpg",
//     title: "Akshay Sutar",
//     subtitle: "Finance & Accounting",
//     description:
//       "What I enjoy most at KSH INFRA is the freedom to take ownership and deliver with accuracy. The finance role here goes beyond numbers—it’s about impact and collaboration.",
//   },
//   {
//     simgs: "/Career/finalcareer/mahi.png",
//     image: "/Career/finalcareer/mahi.png",
//     title: "Mahima Israni",
//     subtitle: "Legal",
//     description:
//       "What stands out at KSH INFRA is the seamless integration of compliance into every process. The open communication and team collaboration create an environment where ethics are truly lived every day.",
//   },
//   {
//     simgs: "/Career/finalcareer/pponk.png",
//     image: "/Career/finalcareer/pponk.png",
//     title: "Prajakta Ponkshe",
//     subtitle: "Projects",
//     description:
//       "KSH INFRA fosters a truly collaborative environment where every designer is empowered to align creativity with practical execution. The seamless interaction between departments and the constant sense of belonging here makes every challenge worth tackling.",
//   },
//   {
//     simgs: "/Career/finalcareer/plad.png",
//     image: "/Career/finalcareer/plad.png",
//     title: "Priya Ladi",
//     subtitle: "Purchase",
//     description:
//       "Some workplaces hand you tasks. KSH INFRA hands you trust. From aligning with site teams to floating contractor enquiries, I’ve always felt empowered to take decisions that matter.",
//   },
//   {
//     simgs: "/Career/finalcareer/sain.jpg",
//     image: "/Career/finalcareer/sain.jpg",
//     title: "Chetan Sainani",
//     subtitle: "Finance & Taxation",
//     description:
//       "The blend of ownership, clarity, and collaboration at KSH INFRA creates a work environment where finance is a strategic partner. It’s empowering to see how our numbers shape decisions and drive growth.",
//   },
//   {
//     simgs: "/Career/finalcareer/paya.png",
//     image: "/Career/finalcareer/paya.png",
//     title: "Payal Kinikar",
//     subtitle: "Projects",
//     description:
//       "The transition into KSH INFRA felt seamless—thanks to a culture that values collaboration, respect, and ownership. Being heard, supported, and trusted from day one has made all the difference.",
//   },
//   {
//     simgs: "/Career/finalcareer/muke.jpg",
//     image: "/Career/finalcareer/muke.jpg",
//     title: "Mukesh Kumar",
//     subtitle: "Projects",
//     description:
//       "Being on-site at KSH INFRA isn’t just about supervision—it’s about stepping up, solving in real time, and learning from people who genuinely have your back. That kind of support builds confidence fast.",
//   },
//   {
//     simgs: "/Career/finalcareer/rahu.png",
//     image: "/Career/finalcareer/rahu.png",
//     title: "Rahul Dhase",
//     subtitle: "Billing & QS",
//     description:
//       "KSH INFRA values precision and teamwork—two things essential in billing and costing. It’s a great place to work, with supportive staff and a professional work culture.",
//   },
//   {
//     simgs: "/Career/finalcareer/mann.jpg",
//     image: "/Career/finalcareer/mann.jpg",
//     title: "Mann Jain",
//     subtitle: "Investements",
//     description:
//       "KSH INFRA offers a collaborative, high-trust environment where initiative is rewarded. From deal sourcing to financial analysis, every step is a chance to grow and contribute meaningfully.",
//   },
// ];

const sld = [
  // Slide 1 (1 woman)
  {
    simgs: "/Career/finalcareer/prajakta_butala.png",
    image: "/Career/finalcareer/prajakta_butala.png",
    title: "Prajakta Butala",
    subtitle: "Finance & Accounting",
    description:
      "At KSH INFRA, finance drives strategy, not just numbers. The trust, transparency, and sense of ownership here make every challenge an opportunity to contribute.",
  },
  {
    simgs: "/Career/finalcareer/mayur_bhiungade.png",
    image: "/Career/finalcareer/mayur_bhiungade.png",
    title: "Mayur Bhiungade",
    subtitle: "Projects",
    description:
      "Watching land evolve into industrial ecosystems is more than work—it’s purpose. At KSH INFRA, I’m empowered to lead with precision and deliver infrastructure that endures.",
  },
  {
    simgs: "/Career/finalcareer/akhil.webp",
    image: "/Career/finalcareer/akhil.webp",
    title: "Akhil Ilkar",
    subtitle: "Purchase",
    description:
      "Being trusted to lead with precision and ownership makes all the difference. At KSH INFRA, every role contributes meaningfully to a shared mission.",
  },
  {
    simgs: "/Career/finalcareer/jeet.jpg",
    image: "/Career/finalcareer/jeet.jpg",
    title: "Jeet Bhanushali",
    subtitle: "Leasing",
    description:
      "At KSH INFRA, business development goes beyond targets—it’s about ownership, collaboration, and client-focused growth. The environment here empowers you to lead, learn, and make an impact.",
  },

  // Slide 2 (1 woman)
  {
    simgs: "/Career/finalcareer/prach.jpg",
    image: "/Career/finalcareer/prach.jpg",
    title: "Prachi Kurlekar",
    subtitle: "Marketing",
    description:
      "At KSH INFRA, brand building is rooted in trust, clarity, and collaboration. The supportive culture empowers me to lead impactful communication across every platform.",
  },
  {
    simgs: "/Career/finalcareer/sunny_abraham_1x.webp",
    image: "/Career/finalcareer/sunny_abraham_1x.webp",
    title: "Sunny Abraham",
    subtitle: "Projects",
    description:
      "Shaping the future of industrial infrastructure requires more than just technical design—it demands foresight and collaboration. At KSH INFRA, I’m empowered to lead with purpose and innovation.",
  },
  {
    simgs: "/Career/finalcareer/krishna__1x.webp",
    image: "/Career/finalcareer/krishna__1x.webp",
    title: "Krishna Vyas",
    subtitle: "Finance & Accounting",
    description:
      "What truly sets KSH INFRA apart is the unwavering trust and collaborative spirit that fuels our work. The freedom to take initiative, backed by strong leadership, makes every challenge an opportunity to grow.",
  },
  {
    simgs: "/Career/finalcareer/aksh.jpg",
    image: "/Career/finalcareer/aksh.jpg",
    title: "Akshay Sutar",
    subtitle: "Finance & Accounting",
    description:
      "What I enjoy most at KSH INFRA is the freedom to take ownership and deliver with accuracy. The finance role here goes beyond numbers—it’s about impact and collaboration.",
  },

  // Slide 3 (1 woman)
  {
    simgs: "/Career/finalcareer/mahi.png",
    image: "/Career/finalcareer/mahi.png",
    title: "Mahima Israni",
    subtitle: "Legal",
    description:
      "What stands out at KSH INFRA is the seamless integration of compliance into every process. The open communication and team collaboration create an environment where ethics are truly lived every day.",
  },
  {
    simgs: "/Career/finalcareer/suraj_shah_1x.webp",
    image: "/Career/finalcareer/suraj_shah_1x.webp",
    title: "Suraj Shah",
    subtitle: "Projects",
    description:
      "Leading the Planning Department at KSH INFRA has been an empowering experience. The freedom to shape my work, backed by unwavering support and a balanced environment, fosters both professional and personal growth.",
  },
  {
    simgs: "/Career/finalcareer/samp.jpg",
    image: "/Career/finalcareer/samp.jpg",
    title: "Sampathkumar V",
    subtitle: "Projects",
    description:
      "At KSH INFRA, project execution is driven by trust, teamwork, and a strong sense of ownership. Leading operations in South India, I’m empowered to deliver impactful infrastructure with confidence and collaboration.",
  },
  {
    simgs: "/Career/finalcareer/vishram_khatavkar_1x.webp",
    image: "/Career/finalcareer/vishram_khatavkar_1x.webp",
    title: "Vishram Khatavakar",
    subtitle: "Projects",
    description:
      "Every project at KSH INFRA is a new blueprint for growth. With trust, freedom, and support, I’ve been able to lead, learn, and deliver with purpose.",
  },

  // Slide 4 (1 woman)
  {
    simgs: "/Career/finalcareer/dhan.jpg",
    image: "/Career/finalcareer/dhan.jpg",
    title: "Dhanashri Sharma",
    subtitle: "Legal",
    description:
      "In just two months at KSH INFRA, I’ve experienced a seamless transition, thanks to the support and collaboration within the team. It’s empowering to be in a place where your contribution matters from day one.",
  },
  {
    simgs: "/Career/finalcareer/muke.jpg",
    image: "/Career/finalcareer/muke.jpg",
    title: "Mukesh Kumar",
    subtitle: "Projects",
    description:
      "Being on-site at KSH INFRA isn’t just about supervision—it’s about stepping up, solving in real time, and learning from people who genuinely have your back. That kind of support builds confidence fast.",
  },
  {
    simgs: "/Career/finalcareer/shubh.png",
    image: "/Career/finalcareer/shubh.png",
    title: "Shubham Jain",
    subtitle: "Projects",
    description:
      "Executing projects on ground has taught me the value of coordination—and at KSH INFRA, that teamwork turns challenges into milestones. The learning here is continuous, and every role truly counts.",
  },
  {
    simgs: "/Career/finalcareer/nave.jpg",
    image: "/Career/finalcareer/nave.jpg",
    title: "Naveen Kotian",
    subtitle: "Projects",
    description:
      "Having worked with KSH INFRA as a contractor, coming onboard full-time felt less like a transition and more like coming home. The freedom to focus on quality, backed by a supportive and approachable team, makes every project meaningful.",
  },

  // Slide 5 (1 woman)
  {
    simgs: "/Career/finalcareer/pponk.png",
    image: "/Career/finalcareer/pponk.png",
    title: "Prajakta Ponkshe",
    subtitle: "Projects",
    description:
      "KSH INFRA fosters a truly collaborative environment where every designer is empowered to align creativity with practical execution. The seamless interaction between departments and the constant sense of belonging here makes every challenge worth tackling.",
  },
  {
    simgs: "/Career/finalcareer/sain.jpg",
    image: "/Career/finalcareer/sain.jpg",
    title: "Chetan Sainani",
    subtitle: "Finance & Taxation",
    description:
      "The blend of ownership, clarity, and collaboration at KSH INFRA creates a work environment where finance is a strategic partner. It’s empowering to see how our numbers shape decisions and drive growth.",
  },
  {
    simgs: "/Career/finalcareer/jey.jpg",
    image: "/Career/finalcareer/jey.jpg",
    title: "Jeyaur Rahman",
    subtitle: "Projects",
    description:
      "There’s a genuine sense of belonging at KSH INFRA—where guidance is easy to find, and learning is part of the daily rhythm. With every project, I’ve gained hands-on experience, felt supported by my seniors, and grown with a team that values hard work and mutual respect.",
  },
  {
    simgs: "/Career/finalcareer/rahu.png",
    image: "/Career/finalcareer/rahu.png",
    title: "Rahul Dhase",
    subtitle: "Billing & QS",
    description:
      "KSH INFRA values precision and teamwork—two things essential in billing and costing. It’s a great place to work, with supportive staff and a professional work culture.",
  },

  // Slide 6 (2 women)
  {
    simgs: "/Career/finalcareer/plad.png",
    image: "/Career/finalcareer/plad.png",
    title: "Priya Ladi",
    subtitle: "Purchase",
    description:
      "Some workplaces hand you tasks. KSH INFRA hands you trust. From aligning with site teams to floating contractor enquiries, I’ve always felt empowered to take decisions that matter.",
  },
  {
    simgs: "/Career/finalcareer/paya.png",
    image: "/Career/finalcareer/paya.png",
    title: "Payal Kinikar",
    subtitle: "Projects",
    description:
      "The transition into KSH INFRA felt seamless—thanks to a culture that values collaboration, respect, and ownership. Being heard, supported, and trusted from day one has made all the difference.",
  },
  {
    simgs: "/Career/finalcareer/mann.jpg",
    image: "/Career/finalcareer/mann.jpg",
    title: "Mann Jain",
    subtitle: "Investements",
    description:
      "KSH INFRA offers a collaborative, high-trust environment where initiative is rewarded. From deal sourcing to financial analysis, every step is a chance to grow and contribute meaningfully.",
  },
  {
    simgs: "/Career/finalcareer/swap.jpg",
    image: "/Career/finalcareer/swap.jpg",
    title: "Swapnil Godse",
    subtitle: "Projects",
    description:
      "At KSH INFRA, project execution goes beyond timelines—it’s about teamwork, ownership, and delivering with purpose. The strong team bonding and positive work culture make every challenge achievable.",
  },
  {
    simgs: "/Career/finalcareer/dili.png",
    image: "/Career/finalcareer/dili.png",
    title: "Dilip Kadam",
    subtitle: "Projects",
    description:
      "In 13 years at KSH INFRA, I’ve grown personally and professionally in a culture where respect, opportunity, and teamwork drive a shared vision—proud to be part of this journey.",
  },
  {
    simgs: "/Career/finalcareer/khan.png",
    image: "/Career/finalcareer/khan.png",
    title: "Khanak Jha",
    subtitle: "Chief People's Officer",
    description:
      "Being part of KSH INFRA’s journey has been deeply fulfilling—shaping a people-first culture rooted in growth, respect, and continuous improvement is what truly defines our shared success.",
  },
  {
    simgs: "/Career/finalcareer/dine.jpg",
    image: "/Career/finalcareer/dine.jpg",
    title: "Dinesh Hebbar",
    subtitle: "Projects",
    description:
      "In over 10 years at KSH INFRA, I’ve witnessed our evolution from conventional layouts to smart, sustainable designs—driven by thoughtful planning, precise execution, and a passion for quality. It’s fulfilling to be part of a team shaping the future of industrial spaces in India",
  },
  {
    simgs: "/Career/finalcareer/amba.png",
    image: "/Career/finalcareer/amba.png",
    title: "Ambalika Handoo",
    subtitle: "HR",
    description:
      "As part of HR at KSH INFRA, I’m proud to belong to a workplace that values people, fosters growth, and promotes a healthy, collaborative culture where ideas are heard and contributions truly matter.",
  },
  {
    simgs: "/Career/finalcareer/niti.jpg",
    image: "/Career/finalcareer/niti.jpg",
    title: "Nitin Bhatia",
    subtitle: "Principal Investments",
    description:
      "Just a month into KSH INFRA, I’ve felt truly welcomed and inspired by the team’s collaboration, passion, and the company’s clear focus on innovation, sustainability, and growth—I’m excited to grow with the organization.",
  },
];

export const CarSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full pt-[5%] lg:pt-[70px] overflow-visible">
      {/* Main Section */}
      <div className="w-full lg:bg-[linear-gradient(to_bottom,#ffffff_90%,#092241_10%)]">
        <div className="fix12 !overflow-visible">
          <h1
            // initial={{ width: 0 }}
            // whileInView={{ width: "100%" }}
            // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ amount: 0.1, once: true }}
            className="md:text-[44px] text-[24px] text-[#092241] leading-[111%] w-full pb-[10px] border-b border-[#D7D7D7] whitespace-nowrap overflow-hidden"
          >
            What our team says!
          </h1>

          <Swiper
            modules={[Thumbs, Navigation]}
            spaceBetween={40}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            speed={800}
            navigation={{
              nextEl: "#carnext",
              prevEl: "#carprev",
            }}
            className="main-swiper"
          >
            {sld.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex overflow-visible lg:flex-row flex-col w-full gap-[20px] lg:gap-[40px] pt-[20px] lg:pt-[55px]">
                  <motion.div
                    initial={{ y: "-50px", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ amount: 0.1, once: false }}
                    className="relative z-10 bg-[url(/Career/SlideImgs/slidethbg.png)] bg-cover bg-no-repeat bg-center flex justify-center items-center md:px-[5%] md:py-[5%] lg:px-0 lg:py-[60px] shadow-[4px_4px_34px_rgba(0,0,0,0.15)] overflow-visible"
                  >
                    <img
                      className="sm:w-[80%] w-full h-full"
                      src={slide.image}
                      alt={slide.title}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
                    viewport={{ amount: 0.1, once: false }}
                    className="flex flex-col flex-1"
                  >
                    <div className="flex flex-col gap-[10px] lg:gap-[30px]">
                      <h3 className="fsans-600 text-[26px] md:text-[36px] text-[#181818]">
                        {slide.title}
                      </h3>
                      <p className="md:text-[22px] text-[18px] text-[#4F4F4F] leading-[130%]">
                        {slide.subtitle}
                      </p>
                      <p className="text-[16px] fsans-400 text-[#434343] leading-[26px]">
                        {slide.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .main-swiper .swiper-slide {
              overflow: visible !important;
              * {
                color: black;
                transition: color 0.8s;
              }
            }
            .thumb-swiper .swiper-slide-thumb-active {
              background-color: #6c8dab;
              h3 {
                color: #ffffff;
              }
              * {
                color: #ffffff;
              }
            }
          `}</style>
        </div>
      </div>

      {/* Thumbs Slider */}
      <div className="bg-[#092241] pb-[70px]">
        <div className="fix12">
          <div className="flex lg:pt-0 pt-5 gap-[12px] md:gap-[14px] justify-end mb-4">
            <button
              id="carprev"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/landingr.svg" alt="Prev" />
            </button>
            <button
              id="carnext"
              className="w-10 h-10 flex items-center justify-center"
            >
              <img className="h-10 w-10" src="/landingl.svg" alt="Next" />
            </button>
          </div>

          <div
          // initial={{ x: "-200px", opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
          // viewport={{ amount: 0.1, once: true }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              spaceBetween={0}
              slidesPerView={4}
              slidesPerGroup={4}
              speed={1000}
              watchSlidesProgress
              className="thumb-swiper"
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 },
                768: { slidesPerView: 2.5, slidesPerGroup: 2.5 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                1366: { slidesPerView: 4, slidesPerGroup: 4 },
              }}
            >
              {sld.map((slide, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <CareerSlideCard
                      image={slide.simgs}
                      title={slide.title}
                      des={slide.subtitle}
                      className={isActive ? "swiper-slide-thumb-active" : ""}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
