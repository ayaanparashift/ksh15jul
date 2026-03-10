"use client";

import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BCard from "../../../blogs/[slug]/Components/BCard";

function getSlidesPerView(width) {
  if (width >= 1280) return 2;
  if (width >= 768) return 1.5;
  return 1;
}

export default function NewsSlider({ relatedNews }) {
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === "undefined" ? 2 : getSlidesPerView(window.innerWidth),
  );
  const showNav = useMemo(
    () => relatedNews.length > slidesPerView,
    [relatedNews.length, slidesPerView],
  );

  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!showNav) return;
    const swiperInstance = document.querySelector(".swiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.nextEl = "#arrowright";
      swiperInstance.params.navigation.prevEl = "#arrowleft";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [showNav]);

  return (
    <div className="fix12 py-[70px]">
      <div className="flex items-center justify-between gap-3">
        <h2
          className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-[#092241] mb-0 w-fit"
          dangerouslySetInnerHTML={{ __html: "Other News" }}
        />

        {showNav && (
          <span className="flex item-center gap-2">
            <img
              id="arrowleft"
              className="cursor-pointer"
              src="/buttonarrows/arrowleft.svg"
              alt="Previous"
            />
            <img
              id="arrowright"
              className="cursor-pointer"
              src="/buttonarrows/arrowright.svg"
              alt="Next"
            />
          </span>
        )}
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={
          showNav ? { nextEl: "#arrowright", prevEl: "#arrowleft" } : false
        }
        breakpoints={{
          1280: { slidesPerView: 2 },
          768: { slidesPerView: 1.5 },
          320: { slidesPerView: 1 },
        }}
        className="pb-10"
      >
        {relatedNews.map((news) => (
          <SwiperSlide key={news.id}>
            <BCard
              blog={news}
              image={news.featuredImage}
              categoryPath="news"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
