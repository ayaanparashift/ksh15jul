"use client";
import React, { useState } from "react";
import MapCard from "./MapCard";
import MapSlider from "./MapSlider";
import LineHead from "../../Components/Heading/LineHead";

const MapSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const iframeUrls = [
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d241908.8701447798!2d73.66354330837771!3d18.671798195730528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2c134e6c4ff8f%3A0xa810745cf9310798!2sPune%20International%20Airport%2C%20New%20Airport%20Rd%2C%20Pune%20International%20Airport%20Area%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411032!3m2!1d18.579342999999998!2d73.9089168!4m5!1s0x3bc2b5003d5f6463%3A0xc09f39fd586cb233!2sQPFX%2B4V6%20Ksh%20infra%20park%206%20%2Cshinde%2Cchakan%2C%20Shinde%2C%20Maharashtra%20410507!3m2!1d18.7727985!2d73.7496338!5e0!3m2!1sen!2sin!4v1751187789710!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d483009.7332566503!2d72.96960920339188!3d18.95291448764427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai%2C%20Mumbai%2C%20Maharashtra%20400099!3m2!1d19.0902177!2d72.86281199999999!4m5!1s0x3bc2b5003d5f6463%3A0xc09f39fd586cb233!2sQPFX%2B4V6%20Ksh%20infra%20park%206%20%2Cshinde%2Cchakan%2C%20Shinde%2C%20Maharashtra%20410507!3m2!1d18.7727985!2d73.7496338!5e0!3m2!1sen!2sin!4v1751187909094!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d451568.23604386573!2d72.89308969770397!3d18.923053152102387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b5003d5f6463%3A0xc09f39fd586cb233!2sKsh%20infra%20park%206%20%2Cshinde%2Cchakan%2C%20QPFX%2B4V6%2C%20Shinde%2C%20Maharashtra%20410507!3m2!1d18.7727985!2d73.7496338!4m5!1s0x3be7ce2a7be46f77%3A0x9cb4ef85dc485d31!2sNew%20Dock%20Rd!3m2!1d18.945432699999998!2d72.8489853!5e0!3m2!1sen!2sin!4v1751188053480!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d483325.0592241386!2d73.09154080484615!3d18.843689340419406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2b5003d5f6463%3A0xc09f39fd586cb233!2sKsh%20infra%20park%206%20%2Cshinde%2Cchakan%2C%20QPFX%2B4V6%2C%20Shinde%2C%20Maharashtra%20410507!3m2!1d18.7727985!2d73.7496338!4m5!1s0x3be7c2a7865b0105%3A0xff03de4c645d7a0c!2sNational%20Highways%20Authority%20of%20India%20PIU-Panvel%2C%20Survey%20No-63%2C%20Chinchpada-Kalamboli%20Bypass%20Road%2C%20Panvel%2C%20Maharashtra%20410206!3m2!1d18.9806882!2d73.08750599999999!5e0!3m2!1sen!2sin!4v1751188232419!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d144811.70609674157!2d73.6671173751777!3d18.68380896077659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc2bb496bf06797%3A0x52a541e25e980cf0!2sAbsolute%20Global%20Outsourcing%20Private%20Limited%20%7C%20Best%20B2B%20Lead%20Generation%20Company%2C%20no.%20306%2C307%2C%20City%20Centre%20-%20Kolte%20Patil%20Office%2C%20Tal%20Mulshi%2C%20308%2C%20Hinjawadi%20Phase%201%20Rd%2C%20behind%20Persistant%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!3m2!1d18.5882594!2d73.7372457!4m5!1s0x3bc2b5003d5f6463%3A0xc09f39fd586cb233!2sQPFX%2B4V6%20Ksh%20infra%20park%206%20%2Cshinde%2Cchakan%2C%20Shinde%2C%20Maharashtra%20410507!3m2!1d18.7727985!2d73.7496338!5e0!3m2!1sen!2sin!4v1751188417918!5m2!1sen!2sin",
  ];

  return (
    <div
      className="relative w-full h-fit sm:h-full overflow-hidden"
      id="location-connectivity"
    >
      {/* <div
        className="absolute top-[-50px] left-[-100px] h-[253px] w-[150%] blur-[17px] z-[10]"
        className="absolute top-[-50px] left-[-100px] h-[253px] w-[150%] blur-[17px] z-[10]"
        style={{
          background:
            "linear-gradient(180deg, #072040 0%, rgba(115, 115, 115, 0.00) 158.53%)",
        }}
      /> */}

      {/* <div className="bg-red-400 xyzsfd"> */}
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
      {/* <div className="hidden w-full  sm:flex">
          // <div className=" max-w-full overflow-hidden fix12 left-[max(5%,calc((100vw-1250px)/2))] h-[200px] flex items-center mapseclinehead">
          //   <LineHead heading="Location & Connectivity Advantage" />
          // </div> */}
      {/* <div className="absolute top-[50%] -translate-y-1/2 xl-1600:top-[45%] xl-1920:top-[38%] xl-1280:right-0 -right-10 z-10"> */}
      {/* <div className="top-[50%] -translate-y-1/2 xl-1600:top-[45%] xl-1920:top-[38%] xl-1280:right-0 -right-10 z-10"> */}
      {/* <div className="flex flex-col min-h-full w-full  z-10"> */}
      {/* <MapCard
              activeIndex={selectedIndex}
              onSelectAirport={(index) => setSelectedIndex(index)}
            /> */}
      {/* </div> */}
      {/* </div>
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
