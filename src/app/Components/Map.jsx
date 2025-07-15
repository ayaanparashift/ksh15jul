"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Map = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [scalePosition, setScalePosition] = useState({ x: "50%", y: "50%" });
  const [scaled, setScaled] = useState(false);
  const [hotspotPosition, setHotspotPosition] = useState({ x: 0, y: 0 });
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);
  const swiperRef = useRef(null);

  // Hotspot data
  const hotspots = [
    {
      id: 1,
      x: "30%",
      y: "40%",
      images: ["/firstinfra.jpg"],
    },
    {
      id: 2,
      x: "50%",
      y: "50%",
      images: ["/secondinfra.jpg"],
    },
  ];

  useEffect(() => {
    if (scaled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [scaled]);

  const handleHotspotClick = (id, x, y) => {
    setActiveHotspot(id);
    setScaled(true); // Trigger zoom-in immediately

    // Calculate hotspot position based on container size
    const imageContainer = mapRef.current.getBoundingClientRect();
    const hotspotX = (parseFloat(x) / 100) * imageContainer.width;
    const hotspotY = (parseFloat(y) / 100) * imageContainer.height;
    setHotspotPosition({ x: hotspotX, y: hotspotY });

    // Set scale position directly to the hotspot location
    setScalePosition({ x, y });

    // Calculate the offset to center the clicked hotspot only on the Y-axis
    const centerY = imageContainer.height / 2;
    const offsetY = centerY - hotspotY;

    // Set X offset to keep the hotspot 20% from the left
    const offsetX = imageContainer.width * 0.2 - hotspotX;

    setMapOffset({ x: offsetX, y: offsetY });
  };

  const handleZoomOut = () => {
    setScaled(false); // Reset scaling
    setMapOffset({ x: 0, y: 0 }); // Reset map position
    setScalePosition({ x: "50%", y: "50%" }); // Reset scale position to center
  };

  return (
    <div ref={mapRef} className="relative w-full h-fit overflow-visible">
      {/* Map Image with Zoom */}
      <motion.div
        className="relative w-full h-fit overflow-visible"
        initial={{
          scale: 1,
        }}
        animate={{
          scale: scaled ? 3.5 : 1,
          transformOrigin: `${scalePosition.x} ${scalePosition.y}`, // Zooms directly into the hotspot location
          x: mapOffset.x, // Offset map position to center the hotspot on Y-axis and 20% from the left on X-axis
          y: mapOffset.y, // Offset map position to center the hotspot on Y-axis
        }}
        exit={{
          scale: 1, // Zoom out to original scale
          x: 0, // Reset position
          y: 0, // Reset position
        }}
        transition={{
          duration: 1.4,
          ease: [0.7, 0, 0.4, 1],
        }}
      >
        <img
          src="/map.webp"
          alt="Map Background"
          className="w-full h-fit object-cover"
        />

        {/* Render Hotspots */}
        {hotspots.map((hotspot) => (
          <motion.button
            key={hotspot.id}
            className="absolute w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg hover:bg-blue-700"
            style={{ top: hotspot.y, left: hotspot.x }}
            onClick={() => handleHotspotClick(hotspot.id, hotspot.x, hotspot.y)}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={hotspot.id === 1 ? "/firstman.png" : "/secondman.png"} // Different icons for each hotspot
              alt={`Hotspot ${hotspot.id}`}
              className="w-full h-full object-cover rounded-full"
            />
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {scaled && activeHotspot && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen"
            style={{ zIndex: 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleZoomOut} // Click outside to zoom out
          >
            {/* Swiper container */}
            <motion.div
              ref={swiperRef}
              className="relative bg-white p-4 shadow-xl rounded-lg overflow-hidden"
              style={{
                position: "absolute",
                left: `${
                  hotspotPosition.x // (hotspotPosition.x < window.innerWidth / 2 ? 330 : -710) +
                  // 50
                }px`, // Adjust for right spacing
                top: `${hotspotPosition.y - (scaled ? 250 : 0)}px`, // Adjust for zoom effect
              }}
              initial={{
                opacity: 0,
                width: 0,
                height: "200px",
              }}
              animate={{
                opacity: 1,
                width: "710px",
                height: "272px",
              }}
              exit={{
                width: 0,
                height: 0,
                scale: 0,
              }}
              transition={{
                duration: 1.3,
                ease: [0.7, 0, 0.4, 1],
                delay: 0.4, // Add a delay to the slider growth animation
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <button
                  className="absolute top-4 right-4 z-[101] text-lg font-bold bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700"
                  onClick={handleZoomOut} // Zoom out button
                >
                  ✖
                </button>

                {/* Swiper component */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="max-w-[710px] max-h-[272px] overflow-hidden"
                >
                  {hotspots
                    .find((hs) => hs.id === activeHotspot)
                    ?.images.map((img, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center items-center overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: 20 }}
                          whileInView={{ y: 0 }}
                          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
                        >
                          <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-[700px] min-w-[700px] h-[250px]"
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </motion.div>

            {/* Line as ::before pseudo-element outside the swiper container */}
            <motion.div
              className="absolute bg-black"
              style={{
                left: `${hotspotPosition.x + 330}px`, // Position it outside the left of the swiper container
                top: `${hotspotPosition.y + 16}px`, // Adjust the line's vertical position
                height: "2px", // Line height
              }}
              initial={{ width: 0 }} // Line width starts at 0
              animate={{ width: "710px" }} // Animate the width of the line
              exit={{ width: 0 }} // Shrink the line when exiting
              transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Map;
