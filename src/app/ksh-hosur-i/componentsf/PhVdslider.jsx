"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenLineHead from "../../Components/Heading/GenLineHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const PhVdslider = () => {
  // Determine the first available tab based on visibility props

  // Visibility props for tabs
  const showRenders = true;
  const showPhotos = false; // Example: Photos tab is hidden
  const showVids = true;
  const getInitialTab = () => {
    if (showRenders) return "Renders";
    if (showPhotos) return "Photos";
    if (showVids) return "Videos";
    return "Photos"; // Fallback, though at least one should be true
  };
  const [acbtn, setAcBtn] = useState(getInitialTab);
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  // Arrays for each tab
  const renderImages = [
    "hosur-1/hs5.jpg",
    "hosur-1/hs6.jpg",
    "hosur-1/hs7.jpg",
    "hosur-1/hs8.jpg",
    "hosur-1/hs9.jpg",
    "hosur-1/hs10.jpg",
    "hosur-1/hs1.jpg",
    "hosur-1/hs2.jpg",
    "hosur-1/hs3.jpg",
    "hosur-1/hs4.jpg",
  ];
  // const photoImages = [
  //   "hosur-1/hs1.jpg",
  //   "hosur-1/hs2.jpg",
  //   "hosur-1/hs3.jpg",
  //   "hosur-1/hs4.jpg",
  // ];
  const videoUrls = [
    {
      labl: "Route Video- Silk Board to KSH Hosur Park I",
      vid: "https://player.vimeo.com/video/1089053663",
    },

    {
      labl: "Route Video- Bangalore International Airport to KSH Hosur Park I",
      vid: "https://player.vimeo.com/video/1081769476",
    },
  ];

  // Flags to show/hide nav buttons
  const hasMultipleRenders = renderImages.length > 1;
  // const hasMultiplePhotos = photoImages.length > 1;
  const hasMultipleVideos = videoUrls.length > 1;

  // Update Swiper when active tab changes
  useEffect(() => {
    setTimeout(() => {
      if (acbtn === "Photos" && swiperRef1.current) {
        swiperRef1.current.update();
      } else if (acbtn === "Videos" && swiperRef2.current) {
        swiperRef2.current.update();
      } else if (acbtn === "Renders" && swiperRef3.current) {
        swiperRef3.current.update();
      }
    }, 200);
  }, [acbtn]);

  // Ensure acbtn is valid when props change
  useEffect(() => {
    const availableTabs = [
      showPhotos && "Photos",
      showRenders && "Renders",
      showVids && "Videos",
    ].filter(Boolean);
    if (!availableTabs.includes(acbtn)) {
      setAcBtn(availableTabs[0] || "Photos"); // Set to first available tab or fallback
    }
  }, [showRenders, showPhotos, showVids, acbtn]);

  return (
    <div className="py-[65px] overflow-hidden w-full">
      <div className="fix12">
        <GenLineHead
          heading="Park Gallery"
          showRenders={showRenders}
          showPhotos={showPhotos}
          showVids={showVids}
          acbtn={acbtn}
          setAcBtn={setAcBtn}
        />
      </div>

      {/* Sliders Wrapper */}
      <div className="ml-[max(5%,calc((100vw-1250px)/2))] sm:mr-0 mr-[5%] min-h-fit h-fit sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* {acbtn === "Photos" && (
            <motion.div
              key="photos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef1.current = swiper)}
                modules={[Navigation, FreeMode]}
                spaceBetween={20}
                speed={300}
                freeMode={true}
                preventInteractionOnTransition={true}
                navigation={{
                  prevEl: ".swiper-button-prev-slider1",
                  nextEl: ".swiper-button-next-slider1",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 1.3 },
                  1280: { slidesPerView: 1.6 },
                  1440: { slidesPerView: 2.1 },
                }}
              >
                {photoImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-[690px] select-none h-[200px] sm:h-[380px] max-w-[100%]"
                      src={`/ParkPage/${img}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {hasMultiplePhotos && (
                <div className="flex items-start pt-[20px] w-full">
                  <div className="flex gap-[12px] md:gap-[14px] items-center w-full justify-start">
                    <button className="swiper-button-prev-slider1 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrowp.svg"
                        alt="ArrowLeft"
                      />
                    </button>
                    <button className="swiper-button-next-slider1 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrown.svg"
                        alt="ArrowRight"
                      />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )} */}

          {acbtn === "Renders" && (
            <motion.div
              key="renders-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef3.current = swiper)}
                modules={[Navigation, FreeMode]}
                spaceBetween={20}
                speed={300}
                freeMode={true}
                preventInteractionOnTransition={true}
                navigation={{
                  prevEl: ".swiper-button-prev-slider1",
                  nextEl: ".swiper-button-next-slider1",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 1.3 },
                  1280: { slidesPerView: 1.6 },
                  1440: { slidesPerView: 2.1 },
                }}
              >
                {renderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="w-[690px] select-none h-[200px] sm:h-[380px] max-w-[100%]"
                      src={`/ParkPage/${img}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {hasMultipleRenders && (
                <div className="flex items-start pt-[20px] w-full">
                  <div className="flex gap-[12px] md:gap-[14px] items-center w-full justify-start">
                    <button className="swiper-button-prev-slider1 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrowp.svg"
                        alt="ArrowLeft"
                      />
                    </button>
                    <button className="swiper-button-next-slider1 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrown.svg"
                        alt="ArrowRight"
                      />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {acbtn === "Videos" && (
            <motion.div
              key="videos-slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Swiper
                onSwiper={(swiper) => (swiperRef2.current = swiper)}
                modules={[Navigation, FreeMode]}
                spaceBetween={20}
                speed={300}
                freeMode={true}
                preventInteractionOnTransition={true}
                navigation={{
                  prevEl: ".swiper-button-prev-slider2",
                  nextEl: ".swiper-button-next-slider2",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1024: { slidesPerView: 1.3 },
                  1280: { slidesPerView: 1.6 },
                  1440: { slidesPerView: 2.1 },
                }}
              >
                {videoUrls.map((videl, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-[690px] select-none h-[200px] sm:h-[380px] max-w-[100%]">
                      <iframe
                        loading="lazy"
                        src={videl.vid}
                        width="1192"
                        height="400"
                        frameBorder="0"
                        allow="autoplay"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="">
                      <p className="gradinetText2 fsans-600 md:pt-3 pt-2 text-[16px]">
                        {videl.labl}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {hasMultipleVideos && (
                <div className="flex items-start pt-[20px] w-full">
                  <div className="flex gap-[12px] md:gap-[14px] items-center w-full justify-start">
                    <button className="swiper-button-prev-slider2 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrowp.svg"
                        alt="ArrowLeft"
                      />
                    </button>
                    <button className="swiper-button-next-slider2 h-[41px] w-[41px]">
                      <img
                        className="h-[41px] w-[41px]"
                        src="/ParkPage/parrown.svg"
                        alt="ArrowRight"
                      />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhVdslider;
