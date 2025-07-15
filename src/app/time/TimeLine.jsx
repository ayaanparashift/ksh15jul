"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TimeCard from "./TimeCard";
import Particlecom from "./Particlecom";

const timelineData = [
  {
    id: 1,
    year: 1969,
    content:
      "Mr. Kushal Subbaya Hegde established his first business Kamal Motors’, an exclusive Bosch products’ distribution business in Ahmednagar District, Maharashtra",
    image: "/time/t2.jpg",
  },

  {
    id: 3,
    year: 1981,
    content:
      "Founded 'KSH International’ - Mumbai plant, with 360 MT annual commercial production of Paper Insulated Copper Conductors (PICC)and forayed into manufacturing",
    image: "/time/t4.jpg",
  },

  {
    id: 5,
    year: 1991,
    content:
      "Established Kushal Electricals to distribute and service the Electrical Power Tools product line of Bosch.",
    image: "/time/t5.jpg",
  },
  {
    id: 6,
    year: 1999,
    content:
      "Established 'KSH Logistics asa Third-party Logistics (3PL) company to service the captive requirements of Bosch in the Western Region of India and forayed into Logistics.",
    image: "/time/t6.jpg",
  },
  {
    id: 7,
    year: 2002,
    content:
      "Established 'KSH International’ - Pune plant with additional annual capacity of 2400 MT and launched a new product line —- Enameled Copper Conductors.",
    image: "/time/t7.jpg",
  },

  {
    id: 8,
    year: 2008,
    content:
      "Established *KSH Distriparks' with the setting up of an Inland container Depot in Talegaon, Pune. The Dry Port facility was set up with a capacity of 120,000 TEUs per annum.",
    image: "/time/t8.jpg",
  },
  {
    id: 9,
    year: 2012,
    content:
      "Investment received from Pacific Century Group of HK/Singapore to expand KSH Logistics, KSH Distriparks and set up ‘KSH INFRA’ to expand into the INFRA space",
    image: "/time/t9.jpg",
  },
  {
    id: 10,
    year: 2016,
    content:
      "KSH International became the market leader with annual manufacturing ‘capacity of 20,000 MT of ‘which 12,000 MT comprises of Continuously Transposed Conductors (CTC)",
    image: "/time/t10.jpg",
  },
  {
    id: 11,
    year: 2018,
    content:
      "Established two projects under 'KSH INFRA admeasuring 1 Million sqft, and successfully exited the projects to Morgan Stanley Investment Fund, USA",
    image: "/time/t11.jpg",
  },
  {
    id: 12,
    year: 2018,
    content:
      "KSH Group celebrated its Golden Jubilee year and expressed their gratitude to Bosch for having played a leading role in its growth story.",
    image: "/time/t12.jpg",
  },
  {
    id: 13,
    year: 2019,
    content:
      "KSH INFRA successfully built, leased and exited its project admeasuring 1.2 Million sqft to Mapletree Investments, Singapore.",
    image: "/time/t13.jpg",
  },
  {
    id: 14,
    year: 2021,
    content:
      "KSH INFRA partnered with Indospace Capital to invest INR 1000 crores in a joint venture (JV) and commenced construction on its first project under the JV of 1.6 Million sqft with an aim to develop 10 Million sqft across key markets in India.",
    image: "/time/t14.jpg",
  },
  {
    id: 15,
    year: 2023,
    content:
      "KSH International surpasses a turnover of 1000 CR taking the KSH Group turnover well above 1500 CR.",
    image: "/time/t15.jpg",
  },
  {
    id: 16,
    year: 2024,
    content:
      "KSH INFRA progresses in South India with land acquisition and planning for Hosur Park I.",
    image: "/time/t18.jpg",
  },
  {
    id: 17,
    year: 2025,
    content:
      "Significant expansion planned in Southern India, an initiative that underscores KSH INFRA commitment to broadening our footprint n strategically important regions.",
    image: "/time/t24.jpg",
  },
];
const Timeline = () => {
  const [isSliding, setIsSliding] = React.useState(false);

  React.useEffect(() => {
    const disableClick = (e) => {
      if (isSliding) e.preventDefault();
    };

    const leftBtn = document.querySelector(".arrowleft");
    const rightBtn = document.querySelector(".arrowright");

    leftBtn?.addEventListener("click", disableClick);
    rightBtn?.addEventListener("click", disableClick);

    return () => {
      leftBtn?.removeEventListener("click", disableClick);
      rightBtn?.removeEventListener("click", disableClick);
    };
  }, [isSliding]);

  return (
    <div className="h-fit relative">
      <Particlecom />
      <div className="relative py-28 overflow-hidden">
        {/* Heading */}
        <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] relative z-10 text-white border-b-[6px] border-b-[#F7E327]">
          The KSH Legacy
        </h2>

        {/* Timeline Swiper */}
        <div className="relative max-[1536px]:h-[100vh] flex items-center z-10 pt-20 fix12">
          {/* Center horizontal line */}
          <div className="absolute w-[200vw] -left-[100%] right-0 top-[80%] sm:top-[46.8%] -translate-y-1/2 h-[1px] bg-white z-0" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={1000}
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={4}
            draggable={false}
            simulateTouch={false}
            allowTouchMove={false}
            navigation={{
              nextEl: ".arrowright",
              prevEl: ".arrowleft",
            }}
            onSlideChangeTransitionStart={() => setIsSliding(true)}
            onSlideChangeTransitionEnd={() => setIsSliding(false)}
            className="relative"
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
              1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: -100 },
              // 1366: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 0 },
              1366: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: -100 },
              1440: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: -100 },
            }}
            // breakpoints={{
            //   0: { slidesPerView: 1, slidesPerGroup: 1 },
            //   768: { slidesPerView: 2, slidesPerGroup: 2 },
            //   1024: { slidesPerView: 3, slidesPerGroup: 3 },
            //   1280: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: -40 },
            //   1366: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 0 },
            //   1440: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 4 },
            // }}
          >
            {timelineData.map(({ id, year, content, image }, index) => {
              const isAbove = index % 2 === 0;

              return (
                <SwiperSlide key={id}>
                  <div className="flex flex-col items-center relative sm:w-auto w-full h-[650px]">
                    {isAbove ? (
                      <div className="z-10 mt-0 topcard">
                        <TimeCard
                          content={content}
                          isAbove={isAbove}
                          image={image}
                        />
                      </div>
                    ) : (
                      // <div className="mt-0 sm:mt-[calc(50%+185px)] w-full sm:w-auto z-10 bcard">
                      //   <TimeCard
                      //     content={content}
                      //     isAbove={isAbove}
                      //     image={image}
                      //   />
                      // </div>
                      <div className="mt-0 sm:mt-[calc(50%+185px)] min-1366:mt-[calc(50%+175px)] w-full sm:w-auto z-10 bcard">
                        <TimeCard
                          content={content}
                          isAbove={isAbove}
                          image={image}
                        />
                      </div>
                    )}

                    <div className="absolute top-[calc(80%-20px)] sm:top-[calc(42%-12px)] -translate-y-1/2 z-20">
                      <div className="w-[70px] h-[28px] bg-[#46586F] border-2 border-[#fff] flex items-center justify-center">
                        <h2 className="text-[18px] fpt-600 text-[#F7E327]">
                          {year}
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Navigation Arrows */}
        <div className="relative z-10 flex items-center justify-center gap-4 -mt-[100px]">
          <button className="arrowleft cursor-pointer" disabled={isSliding}>
            <img
              src="/AboutPage/timeline/whitearrowleft.svg"
              alt="Arrow Left"
              className="w-10 h-10"
            />
          </button>
          <button className="arrowright cursor-pointer" disabled={isSliding}>
            <img
              src="/AboutPage/timeline/whitearrowright.svg"
              alt="Arrow Right"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
