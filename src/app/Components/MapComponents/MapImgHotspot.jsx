// import React from "react";

// const MapImgHotspot = ({
//   active,
//   activeHotspot,
//   hotspots,
//   handleHotspotClick,
// }) => {
//   return (
//     <div
//       className="hotspot-map w-full flex justify-center"
//       style={{
//         transform: active
//           ? `scale(${active.scale}) translate(${active.translateX}%, ${active.translateY}%)`
//           : "scale(1) translate(0, 0)",
//         transformOrigin: active ? `${active.x} ${active.y}` : "center",
//         transition: "all 1.5s",
//         transitionTimingFunction: "cubic-bezier(0.7, 0, 0.4, 1)",
//       }}
//     >
//       <img
//         src="/mapfinal.webp"
//         alt="Map"
//         className="map-image lg:flex hidden w-full h-auto object-contain"
//       />
//       <img
//         src="/homepage/mapmob.png"
//         alt="Map"
//         className="map-image lg:hidden flex w-full h-auto object-contain"
//       />

//       <div className="hotspot_col_one">
//         {hotspots.map((hotspot) =>
//           activeHotspot === null || activeHotspot === hotspot.id ? (
//             <div
//               key={hotspot.id}
//               className={`hotspot ${
//                 activeHotspot === hotspot.id ? "active" : ""
//               } ${hotspot.upComing && "hotspot2"}`}
//               style={{
//                 left: hotspot.x,
//                 top: hotspot.y,
//               }}
//               onClick={
//                 hotspot.clickEvents
//                   ? () => handleHotspotClick(hotspot.id)
//                   : undefined
//               }
//             >
//               <div className="hotspot_inn">
//                 {activeHotspot === hotspot.id && hotspot.dots ? (
//                   <div className="hotspot-active h-full w-full">
//                     <img
//                       src={`/homepage/dots/dots${hotspot.dots}.png`}
//                       alt="Hotspot Icon"
//                       className="hotspot-active-image object-contain h-20 w-6"
//                     />
//                   </div>
//                 ) : (
//                   <>
//                     <span className="park_no">{hotspot.park_no}</span>
//                     <span
//                       className="park_name"
//                       dangerouslySetInnerHTML={{
//                         __html: hotspot.park_name,
//                       }}
//                     />
//                   </>
//                 )}
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>
//     </div>
//   );
// };

// export default MapImgHotspot;

//
//
//
import React from "react";

const MapImgHotspot = ({
  active,
  activeHotspot,
  hotspots,
  handleHotspotClick,
}) => {
  return (
    <div
      className="hotspot-map w-full flex justify-center"
      style={{
        transform: active
          ? `scale(${active.scale}) translate(${active.translateX}%, ${active.translateY}%)`
          : "scale(1) translate(0, 0)",
        transformOrigin: active ? `${active.x} ${active.y}` : "center",
        transition: "all 1.5s",
        transitionTimingFunction: "cubic-bezier(0.7, 0, 0.4, 1)",
      }}
    >
      <img
        src="/mapfinal.webp"
        alt="Map"
        className="map-image lg:flex hidden w-full h-auto object-contain"
      />
      <img
        src="/homepage/mapmob.png"
        alt="Map"
        className="map-image lg:hidden flex w-full h-auto object-contain"
      />

      <div className="hotspot_col_one">
        {hotspots.map((hotspot) =>
          activeHotspot === null || activeHotspot === hotspot.id ? (
            <div
              key={hotspot.id}
              className={`hotspot ${
                activeHotspot === hotspot.id ? "active" : ""
              } ${hotspot.upComing && "hotspot2"}`}
              style={{
                left: hotspot.x,
                top: hotspot.y,
              }}
              onClick={
                hotspot.clickEvents
                  ? () => handleHotspotClick(hotspot.id)
                  : undefined
              }
            >
              <div className="hotspot_inn">
                {activeHotspot === hotspot.id && hotspot.dots ? (
                  <div className="hotspot-active h-full w-full">
                    <img
                      src={`/homepage/dots/dots${hotspot.dots}.svg`}
                      alt="Hotspot Icon"
                      className="hotspot-active-image object-contain h-20 w-20"
                    />
                  </div>
                ) : (
                  <>
                    <span className="park_no">{hotspot.park_no}</span>
                    <span
                      className="park_name"
                      dangerouslySetInnerHTML={{
                        __html: hotspot.park_name,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MapImgHotspot;
