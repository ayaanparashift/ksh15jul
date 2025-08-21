// "use client"; // Add this at the top if using Next.js App Router

// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";
// import LastCard from "../../ksh-chakan-i/componentsf/LastCard";
// import { motion } from "framer-motion";
// import Link from "next/link";
// const LastSw = () => {
//   const CardData = [
//     {
//       parkTitle: "KSH Chakan IV",
//       pLocal: "Chakan | Pune",
//       totalLand: "0.36 MN SQ.FT.",
//       buildings: "02 Buildings",
//       pLink: "/ksh-chakan-iv",
//       pImg: "/ParkPage/chakan-4/ch4lw.png",
//     },
//     {
//       parkTitle: "KSH Chakan III",
//       pLocal: "Chakan | Pune",
//       totalLand: "1.50 MN SQ.FT.",
//       buildings: "08 Buildings",
//       pLink: "/ksh-chakan-iii",
//       pImg: "/ParkPage/chakan-3/ch3lw.png",
//     },
//     {
//       parkTitle: "KSH Chakan I",
//       pLocal: "Chakan | Pune",
//       totalLand: "0.85 MN SQ.FT.",
//       buildings: "04 Buildings",
//       pLink: "/ksh-chakan-i",
//       pImg: "/ParkPage/chakan-1/ch1lw.png",
//     },
//     {
//       parkTitle: "KSH Talegaon I",
//       pLocal: "Chakan | Pune",
//       totalLand: "0.14 MN SQ.FT.",
//       buildings: "02 Buildings",
//       pLink: "/ksh-talegaon-i",
//       pImg: "/ParkPage/talegaon-i/tal1lw.png",
//     },
//     {
//       parkTitle: "KSH Hosur I",
//       pLocal: "Hosur | Bengaluru",
//       totalLand: "1.20 MN SQ.FT.",
//       buildings: "04 Buildings",
//       pImg: "/ParkPage/hosur-1/hosurlw.png",
//       pLink: "/ksh-hosur-i",
//     },
//   ];
//   return (
//     <div className="bg-white lg:pt-[72px] lg:pb-[95px] py-10 flex lg:gap-[49px] gap-5 flex-col w-full overflow-hidden">
//       <div className="flex md:flex-row flex-col items-start md:gap-0 gap-[20px] fix12 justify-between">
//         <div>
//           <h3 className="fsans-600 leading-[111%] max-w-fit lwlightheaddd text-[24px] md:text-[44px] text-[#092241]">
//             Other Parks
//           </h3>
//           <div className="bg-[#F7E327] h-[8px]  w-full " />
//         </div>
//         <div className="flex gap-[14px] items-center justify-center">
//           <button className="swiper-button-prev-landing h-[41px] w-[41px]">
//             <img
//               className="h-[41px] w-[41px]"
//               src="/buttonarrows/arrowleft.svg"
//               alt="ArrowLeft"
//             />
//           </button>
//           <button className="swiper-button-next-landing h-[41px] w-[41px]">
//             <img
//               className="h-[41px] w-[41px]"
//               src="/buttonarrows/arrowright.svg"
//               alt="ArrowRight"
//             />
//           </button>
//         </div>
//       </div>
//       <motion.div
//         className="ml-[max(5%,calc((100vw-1250px)/2))]"
//         id="slidercontpp2"
//       >
//         <Swiper
//           modules={[Navigation, FreeMode]}
//           navigation={{
//             prevEl: ".swiper-button-prev-landing",
//             nextEl: ".swiper-button-next-landing",
//           }}
//           spaceBetween={43}
//           slidesPerView={3.5} // Show 3 slides at a time
//           speed={300}
//           freeMode={true}
//           preventInteractionOnTransition={true}
//           allowTouchMove={false}
//           touchMoveStopPropagation={true}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             400: {
//               slidesPerView: 1.08,
//               spaceBetween: 15,
//             },
//             480: {
//               slidesPerView: 1.5,
//               spaceBetween: 15,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             1280: {
//               slidesPerView: 3.8,
//               spaceBetween: 43,
//             },
//           }}
//         >
//           {CardData.map((index) => (
//             <SwiperSlide key={index.buildings + index.parkTitle}>
//               <Link href={index.pLink} className="w-[347px] max-w-full">
//                 <LastCard
//                   pArea={index.totalLand}
//                   pBuildings={index.buildings}
//                   pLocal={index.pLocal}
//                   pTitle={index.parkTitle}
//                   pImg={index.pImg}
//                 />
//               </Link>
//             </SwiperSlide>
//           ))}
//           {/* <SwiperSlide styles={{ background: "red", maxWidth: "fit-content" }}>
//             <div className="bg-red w-[max(5%,calc((100vw-1250px)/2))] h-full"></div>
//           </SwiperSlide> */}
//         </Swiper>
//       </motion.div>
//     </div>
//   );
// };

// export default LastSw;
"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import LastCard from "../../ksh-talegaon-i/componentsf/LastCard";
import Link from "next/link";

const LastSw = () => {
  const [offsetAfter, setOffsetAfter] = useState(0);
  const CardData = [
    {
      parkTitle: "KSH Chakan IV",
      pLocal: "Chakan | Pune",
      totalLand: "0.36 MN SQ.FT.",
      buildings: "02 Buildings",
      pLink: "/ksh-chakan-iv",
      pImg: "/ParkPage/chakan-4/ch4lw.png",
    },
    {
      parkTitle: "KSH Chakan III",
      pLocal: "Chakan | Pune",
      totalLand: "1.50 MN SQ.FT.",
      buildings: "08 Buildings",
      pLink: "/ksh-chakan-iii",
      pImg: "/ParkPage/chakan-3/ch3lw.png",
    },
    {
      parkTitle: "KSH Chakan I",
      pLocal: "Chakan | Pune",
      totalLand: "0.85 MN SQ.FT.",
      buildings: "04 Buildings",
      pLink: "/ksh-chakan-i",
      pImg: "/ParkPage/chakan-1/ch1lw.png",
    },
    {
      parkTitle: "KSH Talegaon I",
      pLocal: "Chakan | Pune",
      totalLand: "0.14 MN SQ.FT.",
      buildings: "02 Buildings",
      pLink: "/ksh-talegaon-i",
      pImg: "/ParkPage/talegaon-i/tal1lw.png",
    },
    {
      parkTitle: "KSH Hosur I",
      pLocal: "Hosur | Bengaluru",
      totalLand: "1.20 MN SQ.FT.",
      buildings: "04 Buildings",
      pImg: "/ParkPage/hosur-1/hosurlw.png",
      pLink: "/ksh-hosur-i",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      // replicate max(5%, calc((100vw - 1250px)/2))
      const fivePercent = vw * 0;
      const halfExtra = (vw - 1250) / 2;
      const calcVal = Math.max(fivePercent, halfExtra);
      setOffsetAfter(calcVal > 0 ? calcVal : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white lg:pt-[72px] lg:pb-[95px] py-10 flex lg:gap-[49px] gap-5 flex-col w-full overflow-hidden">
      <div className="flex md:flex-row flex-col items-start md:gap-0 gap-[20px] fix12 justify-between">
        <div>
          <h3 className="fsans-600 leading-[111%] max-w-fit lwlightheaddd text-[24px] md:text-[44px] text-[#092241]">
            Other Parks
          </h3>
          <div className="bg-[#F7E327] h-[8px] w-full " />
        </div>
        <div className="flex gap-[14px] items-center justify-center">
          <button className="swiper-button-prev-landing h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/buttonarrows/arrowleft.svg"
              alt="ArrowLeft"
            />
          </button>
          <button className="swiper-button-next-landing h-[41px] w-[41px]">
            <img
              className="h-[41px] w-[41px]"
              src="/buttonarrows/arrowright.svg"
              alt="ArrowRight"
            />
          </button>
        </div>
      </div>
      <div className="ml-[max(5%,calc((100vw-1250px)/2))]" id="slidercontpp2">
        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: ".swiper-button-prev-landing",
            nextEl: ".swiper-button-next-landing",
          }}
          spaceBetween={43}
          slidesPerView={3.5}
          speed={300}
          freeMode={true}
          preventInteractionOnTransition={true}
          slidesOffsetAfter={offsetAfter} // dynamic now
          allowTouchMove={false}
          touchMoveStopPropagation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.08,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3.8,
              spaceBetween: 43,
            },
          }}
        >
          {CardData.map((index) => (
            <SwiperSlide key={index.buildings + index.parkTitle}>
              <Link href={index.pLink} className="w-[347px] max-w-full">
                <LastCard
                  pArea={index.totalLand}
                  pBuildings={index.buildings}
                  pLocal={index.pLocal}
                  pTitle={index.parkTitle}
                  pImg={index.pImg}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LastSw;
