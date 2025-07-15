"use client";
import React, { useState } from "react";
import MapCard from "./MapCard";
import LineHead from "../../Components/Heading/LineHead";
import MapSlider from "./MapSlider";

const MapSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const iframeUrls = [
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d241951.32895502!2d73.70385896191407!3d18.64201697837987!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3bc2c134e6c4ff8f%3A0xa810745cf9310798!2sPune%20International%20Airport%2C%20New%20Airport%20Rd%2C%20Pune%20International%20Airport%20Area%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411032!3m2!1d18.579342999999998!2d73.9089168!5e0!3m2!1sen!2sin!4v1744064883358!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d966322.9434910386!2d73.316076!3d18.90043!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai%2C%20Mumbai%2C%20Maharashtra%20400099!3m2!1d19.0902177!2d72.86281199999999!5e0!3m2!1sen!2sin!4v1744066719634!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d966398.5930168404!2d73.314673!3d18.887325!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3be7ce299e2b5e8b%3A0x5655b08ab6f01561!2sMumbai%20Port%20Trust%2C%20Mazgaon%2C%20Mumbai%2C%20Maharashtra!3m2!1d18.9482881!2d72.8441629!5e0!3m2!1sen!2sin!4v1744066778535!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d483665.67157680466!2d73.3735603222656!3d18.725015637000997!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3be7c2a7865b0105%3A0xff03de4c645d7a0c!2sNational%20Highways%20Authority%20of%20India%20PIU-Panvel%2C%20Survey%20No-63%2C%20Chinchpada-Kalamboli%20Bypass%20Road%2C%20Panvel%2C%20Maharashtra%20410206!3m2!1d18.9806882!2d73.08750599999999!5e0!3m2!1sen!2sin!4v1744867169985!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d241910.69237252203!2d73.765441!3d18.670521!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b427f3ca505d%3A0xd175ea8fa8d8f15f!2sKSH%20Infra%2C%20QQ3J%2BPQ5%2C%20Sawardari%2C%20Maharashtra%20410507!3m2!1d18.7540191!2d73.7822305!4m5!1s0x3bc2bbe7af9b56b1%3A0x7c1c86b796e12483!2sCity%20Centre%20-%20Kolte%20Patil%2C%20Hinjewadi%20Phase%201%20Rd%2C%20Phase%201%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!3m2!1d18.5866126!2d73.7384206!5e0!3m2!1sen!2sin!4v1744066944513!5m2!1sen!2sin",
  ];

  return (
    <div
      className="relative w-full h-fit sm:h-full overflow-hidden"
      id="location-connectivity"
    >
      {/* <div
        className="absolute top-[-50px] left-[-100px] h-[253px] w-[150%] blur-[17px] z-[10]"
        style={{
          background:
            "linear-gradient(180deg, #072040 0%, rgba(115, 115, 115, 0.00) 158.53%)",
        }}
      /> */}
      {/* Render iframe if a location is selected */}
      {/* <div className="hidden sm:flex w-full h-full">
        {selectedIndex !== null && (
          <iframe
            src={iframeUrls[selectedIndex]}
            className="w-full h-full"
            style={{
              border: 0,
              transform: "translateX(-100px)",
              scale: "120%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div> */}

      {/* Overlay MapCard on top-right */}
      {/* <div className="hidden sm:flex">
        <div className="absolute top-[10%] max-w-full overflow-hidden fix12 left-[max(5%,calc((100vw-1250px)/2))] h-[200px] flex items-center mapseclinehead">
          <LineHead heading="Location & Connectivity Advantage" />
        </div>
        <div className="absolute top-[50%] -translate-y-1/2 xl-1600:top-[45%] xl-1920:top-[38%] xl-1280:right-0 -right-10 z-10">
          <MapCard
            activeIndex={selectedIndex}
            onSelectAirport={(index) => setSelectedIndex(index)}
          />
        </div>
      </div> */}

      <div className=" hidden sm:flex z-30 pb-10 fix12">
        <h1 className="leading-[26px] fsans-600 w-full spotlightheaddd text-[30px] pb-[20px] border-b  border-b-[#092241]  fsans-600 text-[#092241] linehead-text">
          Location & Connectivity
        </h1>
      </div>
      <div className="hidden xyzsfd relative sm:flex min-h-full w-full">
        {/* Render iframe if a location is selected */}
        <div className="w-[70%] hidden relative sm:flex">
          {selectedIndex !== null && (
            <iframe
              src={iframeUrls[selectedIndex]}
              className="w-full h-full relative"
              // style={{
              //   border: 0,
              //   transform: "translateX(-100px)",
              //   scale: "120%",
              // }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
        <div className="w-[30%] z-50">
          <MapCard
            activeIndex={selectedIndex}
            onSelectAirport={(index) => setSelectedIndex(index)}
          />
        </div>
      </div>

      {/* Mobile view with slider */}
      <div className="sm:hidden h-fit relative mx-[5%]">
        <LineHead heading="Location & Connectivity Advantage" />
        <MapSlider
          iframeUrls={iframeUrls}
          onSelect={(index) => setSelectedIndex(index)}
        />
      </div>
    </div>
  );
};

export default MapSection;
