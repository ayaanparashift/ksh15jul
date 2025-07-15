// import React from "react";

// const ParkInfra = () => {
//   return (
//     <div className="min-h-[100vh] w-full">
//       <div className="flex w-full">
//         <img
//           className="w=full h-full object-cover"
//           src="\ParkPage\parkinfra\parkinfrabg.png"
//           alt="Park Infra Image"
//         />
//       </div>
//     </div>
//   );
// };

// export default ParkInfra;
// "use client";
// import React, { useState } from "react";
// import TabLineHead from "../Components/Heading/TabLineHead";
// import ParkContent from "./ParkContent";

// const ParkInfra = () => {
//   const [acbtn, setAcBtn] = useState("Case Studies");

//   return (
//     <div
//       className="min-h-[100vh] w-full bg-[url('/ParkPage/parkinfra/parkinfrabg.png')] bg-cover bg-no-repeat bg-center"
//       // Optional: consider adding overflow-hidden if needed to constrain content
//     >
//       <div className="flex items-center justify-center fix12 h-fit">
//         <div className="flex flex-col justify-start w-full py-[75px] h-full">
//           <TabLineHead
//             acbtn={acbtn}
//             setAcBtn={setAcBtn}
//             heading={"Park Infrastructure"}
//           />
//           <div>
//             <ParkContent />
//             {/*
//               Additional content (such as the 'Main' component) can be added here.
//               Ensure that no recursive rendering happens.
//             */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParkInfra;

//***********Final ****************************** */

// "use client";
// import React, { useState } from "react";
// import ParkContent from "./ParkContent";
// import ParkInfraTab from "./ParkInfraTab";
// import ParkSlider from "./ParkSlider";

// // Arrays for each category
// const exteriorVideos = [
//   {
//     id: 1,
//     title: "Building Area",
//     video: "/ParkPage/parkinfra/parkexterior/Building Area.mp4",
//   },
//   {
//     id: 2,
//     title: "Statistics",
//     video: "/ParkPage/parkinfra/parkexterior/Statistics.mp4",
//   },
//   {
//     id: 3,
//     title: "Roads",
//     video: "/ParkPage/parkinfra/parkexterior/Roadways.mp4",
//   },
//   {
//     id: 4,
//     title: "Building Structure",
//     video: "/ParkPage/parkinfra/parkexterior/Structure.mp4",
//   },
//   {
//     id: 5,
//     title: "Solar Roof",
//     video: "/ParkPage/parkinfra/parkexterior/Building Roof.mp4",
//   },
//   {
//     id: 6,
//     title: "Truck Apron",
//     video: "/ParkPage/parkinfra/parkexterior/Docking Apron.mp4",
//   },
//   {
//     id: 7,
//     title: "Parking",
//     video: "/ParkPage/parkinfra/parkexterior/Parking.mp4",
//   },
// ];

// const interiorVideos = [
//   {
//     id: 1,
//     title: "Flooring",
//     video: "/ParkPage/parkinfra/parkinterior/Flooring.mp4",
//   },
//   {
//     id: 2,
//     title: "Column To Column",
//     video: "/ParkPage/parkinfra/parkinterior/Column.mp4",
//   },
//   {
//     id: 3,
//     title: "Internal Facilities",
//     video: "/ParkPage/parkinfra/parkinterior/Interior Height.mp4",
//   },
//   {
//     id: 5,
//     title: "Internal Height",
//     video: "/ParkPage/parkinfra/parkinterior/Interior Facilities.mp4",
//   },
//   // Add additional interior video objects here…
// ];

// // const ParkInfra = () => {
// //   // Set initial tab as "Park Exterior"
// //   const [activeTab, setActiveTab] = useState("Park Exterior");
// //   const videos =
// //     activeTab === "Park Exterior" ? exteriorVideos : interiorVideos;
// //   // Initialize selectedVideo from the first video of the current category
// //   const [selectedVideo, setSelectedVideo] = useState(videos[0].video);

// //   // When switching tabs, update the active tab and reset the selected video.
// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //     const newVideos = tab === "Park Exterior" ? exteriorVideos : interiorVideos;
// //     setSelectedVideo(newVideos[0].video);
// //   };

// //   return (
// //     <div className="min-h-[100vh] w-full bg-[url('/ParkPage/parkinfra/parkinfrabg.png')] bg-cover bg-no-repeat bg-center">
// //       <div className="flex items-center justify-center fix12 h-fit">
// //         <div className="flex flex-col justify-start w-full py-[75px] h-full">
// //           <ParkInfraTab
// //             activeTab={activeTab}
// //             setActiveTab={handleTabChange}
// //             heading={"Park Infrastructure"}
// //           />
// //           <div>
// //             <ParkContent
// //               activeTab={activeTab}
// //               selectedVideo={selectedVideo}
// //               setSelectedVideo={setSelectedVideo}
// //               videos={videos}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ParkInfra;

// const ParkInfra = () => {
//   const [activeTab, setActiveTab] = useState("Park Exterior");
//   const videos =
//     activeTab === "Park Exterior" ? exteriorVideos : interiorVideos;
//   const [selectedVideo, setSelectedVideo] = useState(videos[0].video);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     const newVideos = tab === "Park Exterior" ? exteriorVideos : interiorVideos;
//     setSelectedVideo(newVideos[0].video);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[url('/ParkPage/parkinfra/parkinfrabg.png')] bg-cover bg-no-repeat bg-center">
//       <div className="flex items-center justify-center fix12 h-full py-8">
//         <div className="flex flex-col justify-start w-full py-[75px]">
//           <ParkInfraTab
//             activeTab={activeTab}
//             setActiveTab={handleTabChange}
//             heading={"Park Infrastructure"}
//           />
//           <div className="hidden sm:block">
//             <ParkContent
//               activeTab={activeTab}
//               selectedVideo={selectedVideo}
//               setSelectedVideo={setSelectedVideo}
//               videos={videos}
//             />
//           </div>
//           <div className="sm:hidden flex">
//             <ParkSlider />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParkInfra;

//********************* */
"use client";
import React, { useState } from "react";
import ParkContent from "./ParkContent";
import ParkInfraTab from "./ParkInfraTab";
import ParkSlider from "./ParkSlider";

// Arrays for each category
const exteriorVideos = [
  {
    id: 1,
    title: "Building Area",
    video: "/ParkPage/parkinfra/parkexterior/Building Area.mp4",
  },
  {
    id: 2,
    title: "Statistics",
    video: "/ParkPage/parkinfra/parkexterior/Statistics.mp4",
  },
  {
    id: 3,
    title: "Roads",
    video: "/ParkPage/parkinfra/parkexterior/Roadways.mp4",
  },
  {
    id: 4,
    title: "Building Structure",
    video: "/ParkPage/parkinfra/parkexterior/Structure.mp4",
  },
  {
    id: 5,
    title: "Solar Roof",
    video: "/ParkPage/parkinfra/parkexterior/Building Roof.mp4",
  },
  {
    id: 6,
    title: "Truck Apron",
    video: "/ParkPage/parkinfra/parkexterior/Docking Apron.mp4",
  },
  {
    id: 7,
    title: "Parking",
    video: "/ParkPage/parkinfra/parkexterior/Parking.mp4",
  },
];
const interiorVideos = [
  {
    id: 1,
    title: "Flooring",
    video: "/ParkPage/parkinfra/parkinterior/Flooring.mp4",
  },
  {
    id: 2,
    title: "Column To Column",
    video: "/ParkPage/parkinfra/parkinterior/Column.mp4",
  },
  {
    id: 3,
    title: "Internal Facilities",
    video: "/ParkPage/parkinfra/parkinterior/Internal Facilities.mp4",
  },
  {
    id: 4,
    title: "Internal Height",
    video: "/ParkPage/parkinfra/parkinterior/Height.mp4",
  },
  // Additional interior video objects can be added here...
];
const ParkInfra = () => {
  // Set initial tab as "Park Exterior"
  const [activeTab, setActiveTab] = useState(1);
  const videos = activeTab === 1 ? exteriorVideos : interiorVideos;
  // Initialize selectedVideo from the first video of the current category
  const [selectedVideo, setSelectedVideo] = useState(videos[0].video);

  // When switching tabs, update the active tab and reset the selected video.
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const newVideos = tab === 1 ? exteriorVideos : interiorVideos;
    setSelectedVideo(newVideos[0].video);
  };

  return (
    <div
      className=" sm:min-h-screen lg:min-h-[825px] min-1366:h-[875px] min-h-[550px] w-full bg-[url('/ParkPage/parkinfra/parkinfrabg.png')] bg-cover bg-no-repeat bg-center"
      id="park-infrastructure"
    >
      <div className="flex items-center justify-center fix12 min-h-[550px] sm:max-h-fit sm:h-full h-[550px] py-8">
        <div className="flex flex-col justify-start w-full sm:py-[75px]">
          <ParkInfraTab
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            heading={"Park Infrastructure"}
          />
          {/* Desktop - Show detailed video content */}
          <div className="hidden sm:block">
            <ParkContent
              activeTab={activeTab}
              selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo}
              videos={videos}
            />
          </div>
          {/* Mobile - Use the video slider */}
          <div className="sm:hidden flex">
            <ParkSlider
              videos={videos}
              selectedVideo={selectedVideo}
              onSelectVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkInfra;
