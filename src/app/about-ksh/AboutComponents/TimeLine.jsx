// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const timelineData = [
//   {
//     id: 1,
//     year: 1969,
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 2,
//     year: 1979,
//     content: "Consectetur adipiscing elit.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 4,
//     year: 1981,
//     content: "Sed do eiusmod tempor incididunt.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
//   {
//     id: 5,
//     year: 1989,
//     content: "Ut labore et dolore magna aliqua.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 6,
//     year: 1991,
//     content: "Enim ad minim veniam.",
//     image: "/time/timespot.png",
//     marginTop: "30px",
//   },
//   {
//     id: 7,
//     year: 1998,
//     content: "Quis nostrud exercitation ullamco.",
//     image: "/time/timespot.png",
//     marginTop: "50px",
//   },
//   {
//     id: 8,
//     year: 1999,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 9,
//     year: 2002,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "150px",
//   },
//   {
//     id: 10,
//     year: 2003,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-20px",
//   },
//   {
//     id: 11,
//     year: 2006,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 12,
//     year: 2008,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "160px",
//   },
//   {
//     id: 13,
//     year: 2011,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 14,
//     year: 2012,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-40px",
//   },
//   {
//     id: 15,
//     year: 2013,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 16,
//     year: 2015,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "190px",
//   },
//   {
//     id: 17,
//     year: 2016,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "70px",
//   },
//   {
//     id: 18,
//     year: 2017,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "-30px",
//   },
//   {
//     id: 19,
//     year: 2018,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 20,
//     year: 2019,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 21,
//     year: 2021,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "90px",
//   },
//   {
//     id: 22,
//     year: 2022,
//     content: "Duis aute irure dolor in reprehenderit.",
//     image: "/time/timespot.png",
//     marginTop: "0px",
//   },
// ];

// const Timeline = () => {
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const dotsRef = useRef({});
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Set initial selection to the first item
//     const firstItem = timelineData[0];
//     if (firstItem) {
//       setSelectedYear(firstItem.id);
//       setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
//     }
//   }, []);

//   const handleMouseEnter = (id) => {
//     setSelectedYear(id);
//     if (dotsRef.current[id]) {
//       const dot = dotsRef.current[id];
//       const parent = dot.offsetParent; // Get the closest positioned ancestor

//       // Get the dot's position relative to the viewport
//       const rect = dot.getBoundingClientRect();

//       // Calculate the position relative to the parent container
//       const parentRect = parent.getBoundingClientRect();
//       const relativeTop = rect.top - parentRect.top;

//       // Set the position of the content box near the corresponding dot
//       setPosition({
//         top: relativeTop - 60, // Adjust for any required offsets, like padding
//         left: rect.left + rect.width / 2, // Center the content box horizontally
//       });
//     }
//   };

//   const handleSlideChange = () => {
//     // Reset the selected year when the slide changes
//     setSelectedYear(null);
//   };

//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center py-10"
//       style={{ backgroundImage: "url('/AboutPage/timeline/timeLineBG.png')" }}
//     >
//       <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
//         The KSH Legacy
//       </h2>
//       <div className="px-10 pb-12 relative flex flex-col items-center">
//         {/* Swiper Slider */}
//         <Swiper
//           className="w-full h-[500px]"
//           modules={[Navigation, Pagination, Autoplay]}
//           slidesPerView={1}
//           navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
//           onSlideChange={handleSlideChange}
//           ref={swiperRef}
//         >
//           {/* Split timelineData into slides */}
//           {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
//             <SwiperSlide key={slideIndex}>
//               <div className="relative flex items-center justify-evenly">
//                 {timelineData
//                   .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
//                   .map(({ id, year, marginTop }) => (
//                     <div
//                       key={id}
//                       ref={(el) => (dotsRef.current[id] = el)}
//                       className="flex flex-col items-center cursor-pointer group"
//                       onMouseEnter={() => handleMouseEnter(id)}
//                       style={{ marginTop }}
//                     >
//                       {/* Dot */}
//                       <p className="mb-2 text-white fsans-500 text-base">
//                         {year}
//                       </p>
//                       <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
//                         <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Content Box Positioned near Corresponding Dot */}
//         {selectedYear && (
//           <motion.div
//             key={selectedYear}
//             initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
//             animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
//             transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
//             className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
//             style={{
//               position: "absolute",
//               top: `${position.top}px`,
//               left: `${position.left}px`,
//               transform: "translateX(-50%)",
//             }}
//           >
//             <div
//               className="border-solid border-transparent border-[1px] h-[100px] mt-2"
//               style={{
//                 borderImage:
//                   "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
//               }}
//             ></div>
//             <div className="flex xl-1024:w-[330px] w-[480px]">
//               <img
//                 src={
//                   timelineData.find((item) => item.id === selectedYear)?.image
//                 }
//                 alt="event"
//                 className="w-[165px] h-[138px] object-cover"
//               />
//               <div className="bg-white w-full pt-3 p-2 space-y-2">
//                 <h3 className="fpt-500 text-4xl text-[#092241] leading-9 font-bold">
//                   {timelineData.find((item) => item.id === selectedYear)?.year}
//                 </h3>
//                 <p className="pt-2 fsans-400 text-sm text-[#474747]">
//                   {
//                     timelineData.find((item) => item.id === selectedYear)
//                       ?.content
//                   }
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       <div className="flex gap-[14px] items-center justify-center">
//         <button className="arrowleft border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="leftWhite.svg" alt="ArrowLeft" />
//         </button>
//         <button className="arrowright border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
//           <img className="" src="/rigthWhite.svg" alt="ArrowRight" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timeline;

"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timelineData = [
  {
    id: 1,
    year: 1969,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/time/timespot.png",
    marginTop: "190px",
  },
  {
    id: 2,
    year: 1979,
    content: "Consectetur adipiscing elit.",
    image: "/time/timespot.png",
    marginTop: "50px",
  },
  {
    id: 4,
    year: 1981,
    content: "Sed do eiusmod tempor incididunt.",
    image: "/time/timespot.png",
    marginTop: "0px",
  },
  {
    id: 5,
    year: 1989,
    content: "Ut labore et dolore magna aliqua.",
    image: "/time/timespot.png",
    marginTop: "150px",
  },
  {
    id: 6,
    year: 1991,
    content: "Enim ad minim veniam.",
    image: "/time/timespot.png",
    marginTop: "30px",
  },
  {
    id: 7,
    year: 1998,
    content: "Quis nostrud exercitation ullamco.",
    image: "/time/timespot.png",
    marginTop: "50px",
  },
  {
    id: 8,
    year: 1999,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 9,
    year: 2002,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "150px",
  },
  {
    id: 10,
    year: 2003,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "-20px",
  },
  {
    id: 11,
    year: 2006,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 12,
    year: 2008,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "160px",
  },
  {
    id: 13,
    year: 2011,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 14,
    year: 2012,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "-40px",
  },
  {
    id: 15,
    year: 2013,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 16,
    year: 2015,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "190px",
  },
  {
    id: 17,
    year: 2016,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "70px",
  },
  {
    id: 18,
    year: 2017,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "-30px",
  },
  {
    id: 19,
    year: 2018,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 20,
    year: 2019,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 21,
    year: 2021,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "90px",
  },
  {
    id: 22,
    year: 2022,
    content: "Duis aute irure dolor in reprehenderit.",
    image: "/time/timespot.png",
    marginTop: "0px",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dotsRef = useRef({});
  const swiperRef = useRef(null);

  useEffect(() => {
    // Set initial selection to the first item
    const firstItem = timelineData[0];
    if (firstItem) {
      setSelectedYear(firstItem.id);
      setTimeout(() => handleMouseEnter(firstItem.id), 100); // Delay to ensure DOM is ready
    }
  }, []);

  const handleMouseEnter = (id) => {
    setSelectedYear(id);
    if (dotsRef.current[id]) {
      const dot = dotsRef.current[id];
      const parent = dot.offsetParent; // Get the closest positioned ancestor

      // Get the dot's position relative to the viewport
      const rect = dot.getBoundingClientRect();

      // Calculate the position relative to the parent container
      const parentRect = parent.getBoundingClientRect();
      const relativeTop = rect.top - parentRect.top;

      // Log the Y position of the dot relative to its parent
      console.log(
        `Dot Y position relative to its parent for ID ${id}:`,
        relativeTop
      );

      // Optionally set the position of the content box near the corresponding dot
      setPosition({
        top: relativeTop - 60, // Adjust for any required offsets, like padding
        left: rect.left + rect.width / 2, // Center the content box horizontally
      });
    }
  };

  const handleSlideChange = () => {
    // Reset the selected year when the slide changes
    setSelectedYear(null);
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-10"
      style={{ backgroundImage: "url('/AboutPage/timeline/timeLineBG.png')" }}
    >
      <h2 className="w-fit text-4xl font-bold ml-[max(5%,calc((100vw-1250px)/2))] text-white border-b-[6px] border-b-[#F7E327]">
        The KSH Legacy
      </h2>
      <div className="px-10 pb-12 relative flex flex-col items-center">
        {/* Swiper Slider */}
        <Swiper
          className="w-full h-[500px]"
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {/* Split timelineData into slides */}
          {[0, 1, 2, 3, 4, 5].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="relative flex items-center justify-evenly">
                {timelineData
                  .slice(slideIndex * 4, slideIndex * 4 + 4) // 4 items per slide
                  .map(({ id, year, marginTop }) => (
                    <div
                      key={id}
                      ref={(el) => (dotsRef.current[id] = el)}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(id)}
                      style={{ marginTop }}
                    >
                      {/* Dot */}
                      <p className="mb-2 text-white fsans-500 text-base">
                        {year}
                      </p>
                      <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content Box Positioned near Corresponding Dot */}
        {selectedYear && (
          <motion.div
            key={selectedYear}
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.4, 1] }}
            className="absolute flex-col flex items-center space-x-6 transition-opacity duration-300"
            style={{
              position: "absolute",
              top: `100%`,
              left: `${position.left}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className="border-solid border-transparent border-[1px] h-[100px] mt-2"
              style={{
                borderImage:
                  "linear-gradient(to top right, rgba(221, 221, 221, 0.89), rgba(221, 221, 221, 0)) 10",
              }}
            ></div>
            <div className="flex xl-1024:w-[330px] w-[480px]">
              <img
                src={
                  timelineData.find((item) => item.id === selectedYear)?.image
                }
                alt="event"
                className="w-[165px] h-[138px] object-cover"
              />
              <div className="bg-white w-full pt-3 p-2 space-y-2">
                <h3 className="fpt-500 text-4xl text-[#092241] leading-9 font-bold">
                  {timelineData.find((item) => item.id === selectedYear)?.year}
                </h3>
                <p className="pt-2 fsans-400 text-sm text-[#474747]">
                  {
                    timelineData.find((item) => item.id === selectedYear)
                      ?.content
                  }
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-[14px] items-center justify-center">
        <button className="arrowleft border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
          <img className="" src="/leftWhite.svg" alt="ArrowLeft" />
        </button>
        <button className="arrowright border-[2px] border-gray-400 rounded-full h-[41px] w-[41px] flex items-center justify-center">
          <img className="" src="/rigthWhite.svg" alt="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
