"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import LastCard from "./LastCard";

const LastSw = ({ cardData }) => {
  const [offsetAfter, setOffsetAfter] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const fivePercent = vw * 0.05;
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
          slidesOffsetAfter={offsetAfter}
          allowTouchMove={false}
          touchMoveStopPropagation={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            400: { slidesPerView: 1.08, spaceBetween: 15 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 3.2, spaceBetween: 30 },
            1440: { slidesPerView: 3.8, spaceBetween: 43 },
          }}
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.buildings + item.parkTitle}>
              <Link href={item.pLink} className="w-[347px] max-w-full">
                <LastCard
                  pArea={item.totalLand}
                  pBuildings={item.buildings}
                  pLocal={item.pLocal}
                  pTitle={item.parkTitle}
                  pImg={item.pImg}
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
