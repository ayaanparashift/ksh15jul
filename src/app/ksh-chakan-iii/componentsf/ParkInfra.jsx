"use client";
import React, { useState } from "react";
import ParkContent from "../../ksh-chakan-i/componentsf/ParkContent";
import ParkInfraTab from "../../ksh-chakan-i/componentsf/ParkInfraTab";
import ParkSlider from "../../ksh-chakan-i/componentsf/ParkSlider";
// Arrays for each category
const exteriorVideos = [
  {
    id: 1,
    title: "Building Area",
    video: "/ParkPage/chakan-3/videos/exterior/totalarea.mp4",
  },
  {
    id: 2,
    title: "Building Names",
    video: "/ParkPage/chakan-3/videos/exterior/buildingnames.mp4",
  },
  {
    id: 3,
    title: "Roads",
    video: "/ParkPage/chakan-3/videos/exterior/roads.mp4",
  },
  {
    id: 4,
    title: "Solar Roof",
    video: "/ParkPage/chakan-3/videos/exterior/sroof.mp4",
  },
  {
    id: 5,
    title: "Truck Parking & Apron",
    video: "/ParkPage/chakan-3/videos/exterior/tparkingapron.mp4",
  },
];
const interiorVideos = [
  {
    id: 1,
    title: "Flooring",
    video: "/ParkPage/chakan-3/videos/interior/flooring.mp4",
  },
  {
    id: 2,
    title: "Column To Column",
    video: "/ParkPage/chakan-3/videos/interior/ctc.mp4",
  },
  {
    id: 3,
    title: "Internal Facilities",
    video: "/ParkPage/chakan-3/videos/interior/intf.mp4",
  },
  {
    id: 4,
    title: "Internal Height",
    video: "/ParkPage/chakan-3/videos/interior/inth.mp4",
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
