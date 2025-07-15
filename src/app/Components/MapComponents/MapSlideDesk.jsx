// "use client";
// import { useState, useEffect } from "react";
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
// const MapSlideDesk = ({
//   activeHotspot,
//   setActiveHotspot,
//   showNavigation,
//   selectedMaps,
// }) => {
//   return (
//     <div className="hotspot_col_two lg:flex hidden">
//       {hotspotData.desktop.map((data) => {
//         // Dynamically select the appropriate mapslided array based on the id

//         return (
//           <motion.div
//             layout
//             initial={{ width: "0px", height: "180px" }}
//             animate={{
//               width: activeHotspot === data.id ? "710px" : "0px",
//               height: activeHotspot === data.id ? "385px" : "180px",
//               transformOrigin: "0% 50%",
//             }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//             className="overflow-hidden flex flex-col items-center relative"
//             key={data.id}
//           >
//             <div className="w-full flex justify-end p-3">
//               <button
//                 onClick={() => setActiveHotspot(null)}
//                 className="w-8 h-8 bg-white text-white flex items-center justify-center rounded-full text-lg font-bold absolute top-[32px] z-10 right-[9px]"
//               >
//                 <IoMdClose className="text-black text-2xl" />
//               </button>
//             </div>

//             <div className="w-[710px] flex flex-col">
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={
//                   showNavigation
//                     ? { prevEl: ".prev-btn", nextEl: ".next-btn" }
//                     : {}
//                 }
//                 slidesPerView={1.06}
//                 spaceBetween={20}
//                 breakpoints={{
//                   1024: {
//                     slidesPerView: 1,
//                   },
//                 }}
//                 className="w-full h-full"
//               >
//                 {selectedMaps.map((mapd) => (
//                   <SwiperSlide key={mapd.title + mapd.city}>
//                     <MapSC
//                       parkimg={mapd.parkimg}
//                       title={mapd.title}
//                       tarea={mapd.tarea}
//                       tbuild={mapd.tbuild}
//                       city={mapd.city}
//                       parkLink={mapd.parkLink}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {/* Show navigation only if there are more than 1 slide */}
//             {showNavigation && (
//               <div className="flex flex-row justify-end gap-[10px] mt-[0px] absolute bottom-[25px] z-10 w-fit right-0">
//                 <button className="prev-btn arrowleft h-[41px] w-[41px] z-10">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button className="next-btn arrowright h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default MapSlideDesk;

//
//
//
//
// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import MapSC from "./MapSC";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoMdClose } from "react-icons/io";
// import MapSCMob from "./MapSCMob";
// const MapSlideDesk = ({
//   activeHotspot,
//   setActiveHotspot,
//   showNavigation,
//   selectedMaps,
//   hotspots,
// }) => {
//   return (
//     <div className="hotspot_col_two lg:flex hidden">
//       {hotspots.map((data) => {
//         // Dynamically select the appropriate mapslided array based on the id
//         let selectedMaps = [];
//         if (data.id === 1) {
//           selectedMaps = mapslided; // For id 1, use mapslided
//         } else if (data.id === 2) {
//           selectedMaps = mapslided2; // For id 2, use mapslided2
//         } else if (data.id === 3) {
//           selectedMaps = mapslided3; // For id 3, use mapslided3
//         }

//         const showNavigation = selectedMaps.length > 1; // Hide navigation if there's only one slide

//         return (
//           <motion.div
//             layout
//             initial={{ width: "0px", height: "180px" }}
//             animate={{
//               width: activeHotspot === data.id ? "710px" : "0px",
//               height: activeHotspot === data.id ? "385px" : "180px",
//               transformOrigin: "0% 50%",
//             }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//             className="overflow-hidden flex flex-col items-center relative"
//             key={data.id}
//           >
//             <div className="w-full flex justify-end p-3">
//               <button
//                 onClick={() => setActiveHotspot(null)}
//                 className="w-8 h-8 bg-white text-white flex items-center justify-center rounded-full text-lg font-bold absolute top-[32px] z-10 right-[9px]"
//               >
//                 <IoMdClose className="text-black text-2xl" />
//               </button>
//             </div>

//             <div className="w-[710px] flex flex-col">
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={
//                   showNavigation
//                     ? { prevEl: ".prev-btn", nextEl: ".next-btn" }
//                     : {}
//                 }
//                 slidesPerView={1.06}
//                 spaceBetween={20}
//                 breakpoints={{
//                   1024: {
//                     slidesPerView: 1,
//                   },
//                 }}
//                 className="w-full h-full"
//               >
//                 {selectedMaps.map((mapd) => (
//                   <SwiperSlide key={mapd.title + mapd.city}>
//                     <MapSC
//                       parkimg={mapd.parkimg}
//                       title={mapd.title}
//                       tarea={mapd.tarea}
//                       tbuild={mapd.tbuild}
//                       city={mapd.city}
//                       parkLink={mapd.parkLink}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {/* Show navigation only if there are more than 1 slide */}
//             {showNavigation && (
//               <div className="flex flex-row justify-end gap-[10px] mt-[0px] absolute bottom-[25px] z-10 w-fit right-0">
//                 <button className="prev-btn arrowleft h-[41px] w-[41px] z-10">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button className="next-btn arrowright h-[41px] w-[41px]">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default MapSlideDesk;

//
//
//
//
//
// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import MapSC from "./MapSC";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { IoMdClose } from "react-icons/io";

// const MapSlideDesk = ({
//   activeHotspot,
//   setActiveHotspot,
//   showNavigation,
//   selectedMaps,
//   hotspots,
// }) => {
//   // Find the active hotspot data
//   const activeHotspotData = hotspots.find((h) => h.id === activeHotspot);
//   console.log(activeHotspotData);
//   return (
//     <div className="hotspot_col_two xl:flex hidden">
//       <AnimatePresence>
//         {activeHotspot && activeHotspotData && (
//           <motion.div
//             layout
//             initial={{ width: "0px", height: "180px" }}
//             animate={{
//               width: "710px",
//               height: "385px",
//               transformOrigin: "0% 50%",
//             }}
//             exit={{
//               width: "0px",
//               height: "180px",
//               transition: { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 },
//             }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//             className="overflow-hidden origin-top flex !self-start flex-col items-center relative"
//             key={activeHotspotData.id}
//           >
//             <div className="w-full flex justify-end p-3">
//               <button
//                 onClick={() => setActiveHotspot(null)}
//                 className="w-8 h-8 bg-white text-white flex items-center justify-center rounded-full text-lg font-bold absolute top-[32px] z-10 right-[9px]"
//               >
//                 <IoMdClose className="text-black text-2xl" />
//               </button>
//             </div>

//             <div className="w-[710px] flex flex-col">
//               <Swiper
//                 modules={[Navigation]}
//                 navigation={
//                   showNavigation
//                     ? { prevEl: ".prev-btn", nextEl: ".next-btn" }
//                     : {}
//                 }
//                 slidesPerView={1.06}
//                 spaceBetween={20}
//                 breakpoints={{
//                   1024: {
//                     slidesPerView: 1,
//                   },
//                 }}
//                 className="w-full h-full"
//                 onInit={(swiper) => {
//                   console.log("Swiper initialized", swiper.navigation);
//                   console.log(
//                     "Prev button:",
//                     document.querySelector(".prev-btn")
//                   );
//                   console.log(
//                     "Next button:",
//                     document.querySelector(".next-btn")
//                   );
//                 }}
//               >
//                 {selectedMaps.map((mapd) => (
//                   <SwiperSlide key={mapd.title + mapd.city}>
//                     <MapSC
//                       parkimg={mapd.parkimg}
//                       title={mapd.title}
//                       tarea={mapd.tarea}
//                       tbuild={mapd.tbuild}
//                       city={mapd.city}
//                       parkLink={mapd.parkLink}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {showNavigation && (
//               <div className="flex flex-row justify-end gap-[10px] mt-[0px] absolute bottom-[25px] z-10 w-fit right-0">
//                 <button className="prev-btn arrowleft h-[41px] w-[41px] z-10 pointer-events-auto">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowleft.svg"
//                     alt="ArrowLeft"
//                   />
//                 </button>
//                 <button className="next-btn arrowright h-[41px] w-[41px] pointer-events-auto">
//                   <img
//                     className="h-[41px] w-[41px] bg-white rounded-full"
//                     src="/buttonarrows/arrowright.svg"
//                     alt="ArrowRight"
//                   />
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MapSlideDesk;

//
//
//
//
//
//
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MapSC from "./MapSC";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdClose } from "react-icons/io";

const MapSlideDesk = ({
  activeHotspot,
  setActiveHotspot,
  showNavigation,
  selectedMaps,
  hotspots,
}) => {
  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot);

  // local trigger for isVisible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeHotspot) {
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [activeHotspot]);

  return (
    <div className="hotspot_col_two xl:flex hidden">
      <AnimatePresence>
        {activeHotspot && activeHotspotData && (
          <motion.div
            layout
            initial={{ width: "0px", height: "180px" }}
            animate={{
              width: "710px",
              height: "385px",
              transformOrigin: "0% 50%",
            }}
            exit={{
              width: "0px",
              height: "180px",
              transition: { duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 },
            }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
            className="overflow-hidden origin-top flex !self-start flex-col items-center relative"
            key={activeHotspotData.id}
          >
            {/* CLOSE BUTTON */}
            <div className="w-full flex justify-end p-3">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.7, 0, 0.4, 1],
                  delay: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
                }}
                onClick={() => setActiveHotspot(null)}
                className="w-8 h-8 bg-white text-white flex items-center justify-center rounded-full text-lg font-bold absolute top-[32px] z-10 right-[9px]"
              >
                <IoMdClose className="text-black text-2xl" />
              </motion.button>
            </div>

            {/* SWIPER */}
            <div className="w-[710px] flex flex-col">
              <Swiper
                modules={[Navigation]}
                navigation={
                  showNavigation
                    ? { prevEl: ".prev-btn", nextEl: ".next-btn" }
                    : {}
                }
                slidesPerView={1.06}
                spaceBetween={20}
                breakpoints={{
                  1024: {
                    slidesPerView: 1,
                  },
                }}
                className="w-full h-full"
              >
                {selectedMaps.map((mapd) => (
                  <SwiperSlide key={mapd.title + mapd.city}>
                    <MapSC
                      parkimg={mapd.parkimg}
                      title={mapd.title}
                      tarea={mapd.tarea}
                      tbuild={mapd.tbuild}
                      city={mapd.city}
                      parkLink={mapd.parkLink}
                      isVisible={isVisible}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* SWIPER NAV BUTTONS */}
            {showNavigation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.7, 0, 0.4, 1],
                  delay: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, ease: [0.7, 0, 0.4, 1] },
                }}
                className="flex flex-row justify-end gap-[10px] mt-[0px] absolute bottom-[25px] z-10 w-fit right-0"
              >
                <button className="prev-btn arrowleft h-[41px] w-[41px] z-10 pointer-events-auto">
                  <img
                    className="h-[41px] w-[41px] bg-white rounded-full"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button className="next-btn arrowright h-[41px] w-[41px] pointer-events-auto">
                  <img
                    className="h-[41px] w-[41px] bg-white rounded-full"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapSlideDesk;
