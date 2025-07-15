"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MapSC from "./MapSC";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdClose } from "react-icons/io";
import { hotspotData, mapslided, mapslided2, mapslided3 } from "./MapData";
import MapLineHead from "../Heading/MapLineHead";
import MapSCMob from "./MapSCMob";
import MapImgHotspot from "./MapImgHotspot";
import MapSlideDesk from "./MapSlideDesk";
import MapSlideMob from "./MapSlideMob";

const MapNew = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [hotspots, setHotspots] = useState([]);

  const updateHotspots = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setHotspots(hotspotData.mobile);
    } else if (width < 1024) {
      setHotspots(hotspotData.tablet);
    } else {
      setHotspots(hotspotData.desktop);
    }
  };

  const handleHotspotClick = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  // New handler to activate hotspot based on the tab click
  const handleTabClick = (title) => {
    // Find the hotspot whose park_name matches the title (case-insensitive)
    const hotspot = hotspots.find(
      (h) => h.park_name.toLowerCase() === title.toLowerCase()
    );
    if (hotspot) {
      setActiveHotspot(hotspot.id);
    } else {
      setActiveHotspot(null);
    }
  };

  useEffect(() => {
    updateHotspots();
    window.addEventListener("resize", updateHotspots);
    return () => window.removeEventListener("resize", updateHotspots);
  }, []);

  useEffect(() => {
    const parkSection = document.getElementById("park_sec");
    if (parkSection) {
      if (activeHotspot !== null) {
        parkSection.classList.add("active");
      } else {
        parkSection.classList.remove("active");
      }
    }
  }, [activeHotspot]);

  const active = hotspots.find((h) => h.id === activeHotspot);
  async function hideopen(hid) {
    await setActiveHotspot(hid);
  }

  // Determine the appropriate maps array based on activeHotspot
  const selectedMaps =
    activeHotspot === 1
      ? mapslided
      : activeHotspot === 2
      ? mapslided2
      : activeHotspot === 3
      ? mapslided3
      : [];

  // Determine if navigation should be shown (more than one slide)
  const showNavigation = selectedMaps.length > 1;
  return (
    <div className="relative">
      <div
        className="hotspot-container relative mt-[0px] max-h-fit"
        id="park_sec"
      >
        {/* Pass the onTabClick callback as a prop to MapLineHead */}
        <MapLineHead
          hideopen={hideopen}
          heading={"Explore Our Parks"}
          onTabClick={handleTabClick}
          ach={activeHotspot ? activeHotspot : null}
        />

        {/* Map Image And Hotspot */}
        <MapImgHotspot
          active={active}
          activeHotspot={activeHotspot}
          hotspots={hotspots}
          handleHotspotClick={handleHotspotClick}
        />
        {/* desktop */}

        <MapSlideDesk
          activeHotspot={activeHotspot}
          setActiveHotspot={setActiveHotspot}
          showNavigation={showNavigation}
          hotspots={hotspots}
          selectedMaps={selectedMaps}
        />
        {/* mobile */}
        <MapSlideMob
          activeHotspot={activeHotspot}
          setActiveHotspot={setActiveHotspot}
          showNavigation={showNavigation}
          hotspots={hotspots}
          selectedMaps={selectedMaps}
        />
      </div>
    </div>
  );
};

export default MapNew;

/////
/////
/////
/////
/////
/////
/////
/////
