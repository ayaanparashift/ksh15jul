// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";
// import Bento from "./Bento";
// import Bento2 from "./Bento2";
// import BentoHeaderF from "./BentoHeaderF";
// import BlogCard from "./BlogCard";
//////////////
//////////////
//////////////
//////////////
//////////////

// // const BlogCard = ({ href, bg, title, subtitle, height = "h-[585px]" }) => (
// //   <Link
// //     href={href}
// //     className={`
// //       relative ${height} transition-[transform] duration-300 ease-in-out
// //       w-full cursor-pointer bg-cover bg-center flex flex-col justify-end
// //       px-4 pb-[50px] gap-[10px]
// //     `}
// //     style={{ backgroundImage: `url(${bg})` }}
// //   >
// //     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-40" />
// //     <p className="fsans-400 text-[22px] leading-[130%] text-white relative z-50">
// //       {title}
// //     </p>
// //     <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50 relative z-50">
// //       {subtitle}
// //     </p>
// //     <button className="relative z-50">
// //       <img className="h-10 w-10" src="/buttonarrows/bentor1.svg" alt="Next" />
// //     </button>
// //   </Link>
// // );
// //
// // Flatten all six cards into a data array, copy‑pasting each card’s markup/classes:
// //
// const cards = [
//   {
//     href: "blogs/how-ksh-infras-grade-a-industrial-parks-power-operational-efficiency-for-modern-businesses",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/1.jpg",
//     title:
//       "How KSH INFRA’s Grade A Industrial Parks Power Operational Efficiency for Modern Businesses",
//     subtitle: "Road Freight | 29 Apr 25",
//   },
//   {
//     href: "blogs/how-industrial-parks-drive-local-economic-growth-in-india",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/04/240_1.webp",
//     title: "How Industrial Parks Drive Local Economic Growth in India",
//     subtitle: "Road Freight | 22 Apr 25",
//   },
//   {
//     href: "blogs/the-evolution-of-grade-a-industrial-and-logistics-parks-trends-and-insights",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/1.jpg",
//     title:
//       "The Evolution of Grade A Industrial and Logistics Parks: Trends and Insights",
//     subtitle: "Road Freight | 17 Feb 25",
//     height: "h-[585px]",
//   },
//   {
//     href: "/blogs/why-sustainable-industrial-and-logistics-parks-is-the-need-of-the-hour-for-indian-industry-2",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/freepik__the-style-is-candid-image-photography-with-natural__24755.png",
//     title:
//       "Why Sustainable Industrial and Logistics Parks is the Need of the Hour for Indian Industry",
//     subtitle: "Road Freight | 15 Feb 25",
//   },
//   {
//     href: "/blogs/the-impact-of-ergonomics-on-worker-productivity-and-safety",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/01/corridor-1280-inside-1280-warehouse-1280-dedicated-1280-selfstorage.webp",
//     title: "The Impact of Ergonomics on Worker Productivity and Safety",
//     subtitle: "Road Freight | 4 Jan 25",
//   },
//   {
//     href: "/blogs/top-challenges-in-logistics-and-industrial-real-estate-development-and-how-ksh-infra-solves-them",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/01/transport-1280-logistics-1280-concept.webp",
//     title:
//       "Top Challenges in Logistics and Industrial Real Estate Development—and How KSH INFRA Solves Them",
//     subtitle: "Road Freight | 4 Jan 25",
//     height: "h-[585px]",
//   },
// ];

// const BentoSlider = () => {
//   const [sliding, setSliding] = useState(false);

//   // desktop navigation refs
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [navReady, setNavReady] = useState(false);
//   useEffect(() => setNavReady(true), []);

//   // mobile slider instance ref
//   const mobilePrev = useRef(null);
//   const mobileNext = useRef(null);

//   return (
//     <div className="bg-[#092241] lg:pt-0 pt-20">
//       <div className="h-fit fix12">
//         <div className="flex flex-col gap-[0px] sm:gap-[98px] md:pb-[85px] relative">
//           <BentoHeaderF />

//           {/* === DESKTOP NAV (md+) === */}
//           <div className="hidden md:flex absolute top-[16.1%] sm:top-[40%] lg:top-[44%] right-0 z-10">
//             <div className="flex items-center gap-[14px]">
//               <button ref={prevRef} className="swiper-button-prev-landing">
//                 <img className="w-10 h-10" src="/landingr.svg" alt="Previous" />
//               </button>
//               <button ref={nextRef} className="swiper-button-next-landing">
//                 <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//               </button>
//             </div>
//           </div>

//           {/* === DESKTOP SWIPER === */}
//           <div className="hidden md:block">
//             <Swiper
//               modules={[Navigation, FreeMode]}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//               // navigation={true}
//               spaceBetween={20}
//               speed={300}
//               freeMode
//               preventInteractionOnTransition
//               touchMoveStopPropagation
//               onSlideChangeTransitionStart={() => setSliding(true)}
//               onSlideChangeTransitionEnd={() => setSliding(false)}
//               slidesPerView={1}
//               className="max-w-full"
//             >
//               <SwiperSlide>
//                 <Bento pointerEvents={!sliding} />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <Bento2 pointerEvents={!sliding} />
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           {/* Mobile Nav ///////////// */}
//           <div className="md:hidden py-8">
//             <div className="flex justify-end gap-4 mb-5">
//               <button ref={mobilePrev} className="w-10 h-10">
//                 <img src="/landingr.svg" className="w-full h-full" alt="Prev" />
//               </button>
//               <button ref={mobileNext} className="w-10 h-10">
//                 <img src="/landingl.svg" className="w-full h-full" alt="Next" />
//               </button>
//             </div>

//             {/* Mobile Swiper ////////// */}
//             <Swiper
//               modules={[Navigation, FreeMode]}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = mobilePrev.current;
//                 swiper.params.navigation.nextEl = mobileNext.current;
//               }}
//               // navigation={true}
//               spaceBetween={20}
//               speed={300}
//               freeMode
//               preventInteractionOnTransition
//               touchMoveStopPropagation
//               onSlideChangeTransitionStart={() => setSliding(true)}
//               onSlideChangeTransitionEnd={() => setSliding(false)}
//               slidesPerView={1}
//               className="max-w-full"
//             >
//               {cards.map((c, i) => (
//                 <SwiperSlide key={i}>
//                   <BlogCard {...c} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BentoSlider;

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";
// import Bento from "./Bento";
// import Bento2 from "./Bento2";
// import BentoHeaderF from "./BentoHeaderF";
// import BlogCard from "./BlogCard";

// const fetchBlogByPage = async () => {
//   const resp = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=6&page=1`,
//     { next: { revalidate: 60 } }
//   );

//   if (!resp.ok) {
//     throw new Error("Failed to fetch blog data");
//   }

//   const data = await resp.json();
//   return data;
// };

// const cards = [
//   {
//     href: "blogs/how-ksh-infras-grade-a-industrial-parks-power-operational-efficiency-for-modern-businesses",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/1.jpg",
//     title:
//       "How KSH INFRA’s Grade A Industrial Parks Power Operational Efficiency for Modern Businesses",
//     subtitle: "Road Freight | 29 Apr 25",
//   },
//   {
//     href: "blogs/how-industrial-parks-drive-local-economic-growth-in-india",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/04/240_1.webp",
//     title: "How Industrial Parks Drive Local Economic Growth in India",
//     subtitle: "Road Freight | 22 Apr 25",
//   },
//   {
//     href: "blogs/the-evolution-of-grade-a-industrial-and-logistics-parks-trends-and-insights",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/1.jpg",
//     title:
//       "The Evolution of Grade A Industrial and Logistics Parks: Trends and Insights",
//     subtitle: "Road Freight | 17 Feb 25",
//     height: "h-[585px]",
//   },
//   {
//     href: "/blogs/why-sustainable-industrial-and-logistics-parks-is-the-need-of-the-hour-for-indian-industry-2",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/02/freepik__the-style-is-candid-image-photography-with-natural__24755.png",
//     title:
//       "Why Sustainable Industrial and Logistics Parks is the Need of the Hour for Indian Industry",
//     subtitle: "Road Freight | 15 Feb 25",
//   },
//   {
//     href: "/blogs/the-impact-of-ergonomics-on-worker-productivity-and-safety",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/01/corridor-1280-inside-1280-warehouse-1280-dedicated-1280-selfstorage.webp",
//     title: "The Impact of Ergonomics on Worker Productivity and Safety",
//     subtitle: "Road Freight | 4 Jan 25",
//   },
//   {
//     href: "/blogs/top-challenges-in-logistics-and-industrial-real-estate-development-and-how-ksh-infra-solves-them",
//     bg: "https://www.kshinfra.com/wp-content/uploads/2025/01/transport-1280-logistics-1280-concept.webp",
//     title:
//       "Top Challenges in Logistics and Industrial Real Estate Development—and How KSH INFRA Solves Them",
//     subtitle: "Road Freight | 4 Jan 25",
//     height: "h-[585px]",
//   },
// ];

// if (loading) return <div>Loading...</div>;
// const BentoSlider = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const blogData = await fetchBlogByPage();
//         setBlogs(blogData);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const [sliding, setSliding] = useState(false);

//   // desktop navigation refs
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [navReady, setNavReady] = useState(false);
//   useEffect(() => setNavReady(true), []);

//   // mobile slider instance ref
//   const mobilePrev = useRef(null);
//   const mobileNext = useRef(null);

//   return (
//     <div className="bg-[#092241] lg:pt-0 pt-20">
//       <div className="h-fit fix12">
//         <div className="flex flex-col gap-[0px] sm:gap-[98px] md:pb-[85px] relative">
//           <BentoHeaderF />

//           {/* === DESKTOP NAV (md+) === */}
//           <div className="hidden md:flex absolute top-[16.1%] sm:top-[40%] lg:top-[44%] right-0 z-10">
//             <div className="flex items-center gap-[14px]">
//               <button ref={prevRef} className="swiper-button-prev-landing">
//                 <img className="w-10 h-10" src="/landingr.svg" alt="Previous" />
//               </button>
//               <button ref={nextRef} className="swiper-button-next-landing">
//                 <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//               </button>
//             </div>
//           </div>

//           {/* === DESKTOP SWIPER === */}
//           <div className="hidden md:block">
//             <Swiper
//               modules={[Navigation, FreeMode]}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//               // navigation={true}
//               spaceBetween={20}
//               speed={300}
//               freeMode
//               preventInteractionOnTransition
//               touchMoveStopPropagation
//               onSlideChangeTransitionStart={() => setSliding(true)}
//               onSlideChangeTransitionEnd={() => setSliding(false)}
//               slidesPerView={1}
//               className="max-w-full"
//             >
//               <SwiperSlide>
//                 <Bento pointerEvents={!sliding} />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <Bento2 pointerEvents={!sliding} />
//               </SwiperSlide>
//             </Swiper>
//           </div>

//           {/* Mobile Nav */}
//           <div className="md:hidden py-8">
//             <div className="flex justify-end gap-4 mb-5">
//               <button ref={mobilePrev} className="w-10 h-10">
//                 <img src="/landingr.svg" className="w-full h-full" alt="Prev" />
//               </button>
//               <button ref={mobileNext} className="w-10 h-10">
//                 <img src="/landingl.svg" className="w-full h-full" alt="Next" />
//               </button>
//             </div>

//             {/* Mobile swiper */}
//             <Swiper
//               modules={[Navigation, FreeMode]}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = mobilePrev.current;
//                 swiper.params.navigation.nextEl = mobileNext.current;
//               }}
//               // navigation={true}
//               spaceBetween={20}
//               speed={300}
//               freeMode
//               preventInteractionOnTransition
//               touchMoveStopPropagation
//               onSlideChangeTransitionStart={() => setSliding(true)}
//               onSlideChangeTransitionEnd={() => setSliding(false)}
//               slidesPerView={1}
//               className="max-w-full"
//             >
//               {cards.map((c, i) => (
//                 <SwiperSlide key={i}>
//                   <BlogCard {...c} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BentoSlider;

////
////
////
////
"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import BentoHeaderF from "./BentoHeaderF";
import Bento from "./Bento";
import Bento2 from "./Bento2";
import BlogCard from "./BlogCard";

const fetchBlogByPage = async () => {
  const resp = await fetch(
    `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=6&page=1`,
    { next: { revalidate: 60 } }
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const data = await resp.json();
  return data;
};

const BentoSlider = () => {
  const [blogs, setBlogs] = useState([]);
  const [sliding, setSliding] = useState(false);

  // Desktop navigation refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  // Mobile slider instance ref
  const mobilePrev = useRef(null);
  const mobileNext = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await fetchBlogByPage();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className="bg-[#092241] lg:pt-0 pt-20">
      <div className="h-fit fix12">
        <div className="flex flex-col gap-[0px] sm:gap-[98px] md:pb-[85px] relative">
          <BentoHeaderF />

          {/* === DESKTOP NAV (md+) === */}
          <div className="hidden md:flex absolute top-[16.1%] sm:top-[40%] lg:top-[44%] right-0 z-10">
            <div className="flex items-center gap-[14px]">
              <button ref={prevRef} className="swiper-button-prev-landing">
                <img className="w-10 h-10" src="/landingr.svg" alt="Previous" />
              </button>
              <button ref={nextRef} className="swiper-button-next-landing">
                <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
              </button>
            </div>
          </div>

          {/* === DESKTOP SWIPER === */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation, FreeMode]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={20}
              loop={true}
              speed={300}
              freeMode
              preventInteractionOnTransition
              touchMoveStopPropagation
              onSlideChangeTransitionStart={() => setSliding(true)}
              onSlideChangeTransitionEnd={() => setSliding(false)}
              slidesPerView={1}
              className="max-w-full"
            >
              <SwiperSlide>
                <Bento pointerEvents={!sliding} />
              </SwiperSlide>
              <SwiperSlide>
                <Bento2 pointerEvents={!sliding} />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden py-8">
            <div className="flex justify-end mt-[-25%] gap-4 mb-5">
              <button ref={mobilePrev} className="w-10 h-10">
                <img src="/landingr.svg" className="w-full h-full" alt="Prev" />
              </button>
              <button ref={mobileNext} className="w-10 h-10">
                <img src="/landingl.svg" className="w-full h-full" alt="Next" />
              </button>
            </div>

            {/* Mobile swiper */}
            <Swiper
              modules={[Navigation, FreeMode]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = mobilePrev.current;
                swiper.params.navigation.nextEl = mobileNext.current;
              }}
              spaceBetween={20}
              speed={300}
              freeMode
              preventInteractionOnTransition
              touchMoveStopPropagation
              onSlideChangeTransitionStart={() => setSliding(true)}
              onSlideChangeTransitionEnd={() => setSliding(false)}
              slidesPerView={1}
              className="max-w-full"
            >
              {blogs.map((blog, i) => (
                <SwiperSlide key={blog.id}>
                  <BlogCard
                    href={blog.link.replace("https://www.kshinfra.com", "")}
                    bg={
                      blog.yoast_head_json?.schema?.["@graph"]?.[0]
                        ?.thumbnailUrl
                    }
                    title={blog.title.rendered}
                    subtitle={`${new Date(blog.date).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      }
                    )}`}
                    height={"h-[585px]"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoSlider;
