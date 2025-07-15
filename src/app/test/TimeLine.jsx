"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LineHead from "../Components/Heading/LineHead";

const timelineData = [
  {
    year: 1969,
    content:
      "Mr. Kushal Subbaya Hegde established his first business ‘Kamal Motors’, an exclusive Bosch products’ distribution business in Ahmednagar District, Maharashtra.",
    image: "https://source.unsplash.com/200x200/?building ",
    marginTop: "190px",
  },
  {
    year: 1979,
    content:
      "Expanded the Bosch products’ distribution business into Pune city, Maharashtra by taking over the operation of ‘Waterloo Motors’",
    image: "https://source.unsplash.com/200x200/?architecture",
    marginTop: "50px",
  },
  {
    year: 1981,
    content:
      "Founded ‘KSH International’ – Mumbai plant, with 360 MT annual commercial production of Paper Insulated Copper Conductors (PICC) and forayed into manufacturing.",
    image: "https://source.unsplash.com/200x200/?city",
    marginTop: "0px",
  },
  {
    year: 1989,
    content:
      "Established ‘Kushal Motors’ in Pune city, Maharashtra to cater the original equipment customers of Bosch",
    image: "https://source.unsplash.com/200x200/?tower",
    marginTop: "150px",
  },
  {
    year: 1991,
    content:
      "Established ‘Kushal Electricals’ to distribute and service the Electrical Power Tools Product line of Bosch",
    image: "https://source.unsplash.com/200x200/?skyscraper",
    marginTop: "30px",
  },
  {
    year: 1999,
    content:
      "Established 'KSH Logistics' as a Third-party Logistics (3PL) company requirements of Bosch in Western Region of India and forayed into Logistics",
    image: "https://source.unsplash.com/200x200/?urban",
    marginTop: "50px",
  },
  {
    year: 2002,
    content:
      "Established 'KSH International'-Pune plant with additional annual capacity of 2400 MT and launched a new Product line-Enameled Copper Conductors",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2008,
    content:
      "Established 'KSH Distriparks' with the setting up of an Inland container Depot in Talegaon,Pune.The Dry Port facility was set up with a capacity of 120,000 TEUs per annum",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2012,
    content:
      "Investment received from Pacific Century Group of HK/Singaport to expand KSH Logistics,'KSH INFRA' to expand into the INFRA space",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2016,
    content:
      "KSH International became the market leader became the market leader with annual manufacturing capacity of 20,000 MT of which 12,000 MT comprises of Continuosly Transposed Conductors (CTC)",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2018,
    content:
      "Established two projects under 'KSH INFRA' admeasuring 1 Million sqft,and successfully exited the projects to Morgan Stanley Investment Fund,USA",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2018,
    content:
      "KSH Group celebrated its Golden Jubilee year and expressed their gratitude to Bosch for having played a leading role in its growth story",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2019,
    content:
      "KSH INFRA successfully built,leased and exited its project admeasuring 1.2 Million sqft to Mapletree Investments,Singapore",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2021,
    content:
      "KSH INFRA partnered with IndoSpace Capital to invest 1000 crores in a joint venture (JV) and commenced construction on its first project under the JV of 1.6 Million sqft with an aim to develop 10 Million sqft across key markets in India",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
  {
    year: 2023,
    content:
      "KSH International surpasses a turnover of 1000 CR taking the KSH Group turnover well above 1500 CR",
    image: "https://source.unsplash.com/200x200/?building ,night",
    marginTop: "90px",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dotsRef = useRef({});

  const handleMouseEnter = (year) => {
    setSelectedYear(year);
    if (dotsRef.current[year]) {
      const rect = dotsRef.current[year].getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + 70,
        left: rect.left + rect.width / 2,
      });
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center px-10 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">The KSH Legacy</h2>
        <p className="text-center text-gray-600 max-w-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          className="fix12"
        >
          {/* Split timelineData into 3 slides */}
          {[0, 1, 2].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="relative w-fit flex items-center gap-[120px] xl-1366:gap-24 xl-1280:gap-[80px] xl-1024:gap-[60px] justify-center  bg-red-500 mb-8">
                {timelineData
                  .slice(slideIndex * 7, slideIndex * 7 + 7) // 3 items per slide
                  .map(({ year, marginTop }) => (
                    <div
                      key={year}
                      ref={(el) => (dotsRef.current[year] = el)}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => handleMouseEnter(year)}
                      style={{ marginTop }}
                    >
                      {/* Dot */}
                      <div className="relative bg-white w-12 h-12 flex items-center justify-center border-2 border-gray-500 z-50 rounded-full transition-transform duration-300 group-hover:scale-125">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <p className="mt-2 text-gray-700">{year}</p>
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
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[2px] bg-red-500 h-[100px]"
            ></div>

            <div className="bg-red-500 xl-1024:w-[330px] w-[400px]">
              <img
                src={
                  timelineData.find((item) => item.year === selectedYear)?.image
                }
                alt="event"
                className="w-32 h-32 rounded-md object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-800">
                  {selectedYear}
                </h3>
                <p className="text-gray-600">
                  {
                    timelineData.find((item) => item.year === selectedYear)
                      ?.content
                  }
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-[14px] items-center justify-center">
        <button className="arrowleft h-[41px] w-[41px]">
          <img
            className="h-[41px] w-[41px]"
            src="/buttonarrows/arrowleft.svg"
            alt="ArrowLeft"
          />
        </button>
        <button className="arrowright h-[41px] w-[41px]">
          <img
            className="h-[41px] w-[41px]"
            src="/buttonarrows/arrowright.svg"
            alt="ArrowRight"
          />
        </button>
      </div>
    </>
  );
};

export default Timeline;
