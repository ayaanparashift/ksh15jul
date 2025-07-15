// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import MapSC from "./MapSC";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoMdClose } from "react-icons/io";
// import MapSCMob from "./MapSCMob";
// import { hotspotData, mapslided, mapslided2, mapslided3 } from "./MapData";

// const MapSlideMob = ({
//   activeHotspot,
//   setActiveHotspot,
//   showNavigation,
//   selectedMaps,
// }) => {
//   return (
//     <motion.div
//       // layout
//       initial={{ left: "100%" }}
//       animate={{
//         left: activeHotspot ? "0" : "100%",
//       }}
//       exit={{
//         left: activeHotspot ? "0" : "100%",
//         transition: { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 },
//       }}
//       transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//       className="hotspot_col_twomob w-full absolute xl:hidden flex z-[1001] min-h-full"
//     >
//       <motion.div
//         // layout
//         initial={{ left: "100%" }}
//         animate={{
//           left: activeHotspot ? "0" : "100%",
//         }}
//         transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//         className="overflow-hidden flex flex-col items-center relative w-full h-full"
//       >
//         {/* Close button */}
//         <div className="w-full flex justify-end px-4">
//           <button
//             onClick={() => setActiveHotspot(null)}
//             className="w-8 h-8 bg-white flex items-center justify-center rounded-full text-lg font-bold mt-4 relative z-[100]"
//           >
//             <IoMdClose className="text-black text-2xl" />
//           </button>
//         </div>

//         {/* Swiper container */}
//         <div className="w-full mt-[-50px]">
//           <Swiper
//             modules={[Navigation]}
//             navigation={
//               showNavigation ? { prevEl: "#pbtn1", nextEl: "#nbtn1" } : {}
//             }
//             slidesPerView={1}
//             spaceBetween={20}
//             breakpoints={{
//               1024: {
//                 slidesPerView: 1,
//               },
//             }}
//             className="w-full h-full"
//           >
//             {selectedMaps.map((mapd) => (
//               <SwiperSlide key={mapd.title + mapd.city}>
//                 <MapSCMob
//                   parkimg={mapd.parkimg}
//                   title={mapd.title}
//                   tarea={mapd.tarea}
//                   tbuild={mapd.tbuild}
//                   city={mapd.city}
//                   parkLink={mapd.parkLink}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         {showNavigation && (
//           <div className="flex justify-end gap-2 mt-2 absolute bottom-4 right-4 z-10">
//             <button id="pbtn1" className="pbtn1 h-[36px] w-[36px] z-10">
//               <img
//                 className="h-[36px] w-[36px] bg-white rounded-full"
//                 src="/buttonarrows/arrowleft.svg"
//                 alt="ArrowLeft"
//               />
//             </button>
//             <button id="nbtn1" className="nbtn1 h-[36px] w-[36px]">
//               <img
//                 className="h-[36px] w-[36px] bg-white rounded-full"
//                 src="/buttonarrows/arrowright.svg"
//                 alt="ArrowRight"
//               />
//             </button>
//           </div>
//         )}
//         {/* Navigation Arrows */}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MapSlideMob;

"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MapSCMob from "./MapSCMob";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdClose } from "react-icons/io";

const MapSlideMob = ({
  activeHotspot,
  setActiveHotspot,
  showNavigation,
  selectedMaps,
  hotspots,
}) => {
  const swiperRef = useRef(null);
  // Find the active hotspot data
  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot);

  // Update Swiper navigation after animations
  useEffect(() => {
    if (swiperRef.current && showNavigation) {
      swiperRef.current.navigation.update();
    }
  }, [showNavigation, activeHotspot]);

  return (
    <AnimatePresence>
      {activeHotspot && activeHotspotData && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 },
          }}
          transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
          className="hotspot_col_twomob w-full absolute xl:hidden flex z-[1001] min-h-full justify-center items-center"
          key={activeHotspotData.id}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 },
            }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
            className=" flex flex-col items-center relative sm:w-[80%] w-full min-h-full sm:h-full"
          >
            {/* Close button */}
            <div className="w-full flex justify-end h-fit pr-[2%]">
              <button
                onClick={() => setActiveHotspot(null)}
                className="w-8 h-8 bg-white flex items-center justify-center mb-[-20px] rounded-full text-lg font-bold relative z-[100]"
              >
                <IoMdClose className="text-black text-2xl" />
              </button>
            </div>

            {/* Swiper container */}
            <div className="sm:w-[770px] w-screen overflow-hidden max-w-screen mt-0 sm:mt-[100px] ">
              <Swiper
                modules={[Navigation]}
                navigation={
                  showNavigation
                    ? { prevEl: ".prev-btn-mob", nextEl: ".next-btn-mob" }
                    : {}
                }
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  600: {
                    slidesPerView: 1,
                  },
                }}
                className="w-full h-full"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onInit={(swiper) => {
                  console.log("Swiper initialized", swiper.navigation);
                  console.log(
                    "Prev button:",
                    document.querySelector(".prev-btn-mob")
                  );
                  console.log(
                    "Next button:",
                    document.querySelector(".next-btn-mob")
                  );
                }}
              >
                {selectedMaps.map((mapd) => (
                  <SwiperSlide key={mapd.title + mapd.city}>
                    <MapSCMob
                      parkimg={mapd.parkimg}
                      title={mapd.title}
                      tarea={mapd.tarea}
                      tbuild={mapd.tbuild}
                      city={mapd.city}
                      parkLink={mapd.parkLink}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {showNavigation && (
              <div className="flex justify-end gap-2 mt-2 absolute lg:bottom-9 md:bottom-7 bottom-4 right-10 z-10">
                <button className="prev-btn-mob h-[36px] w-[36px] z-10 pointer-events-auto">
                  <img
                    className="h-[36px] w-[36px] bg-white rounded-full"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button className="next-btn-mob h-[36px] w-[36px] z-10 pointer-events-auto">
                  <img
                    className="h-[36px] w-[36px] bg-white rounded-full"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapSlideMob;
