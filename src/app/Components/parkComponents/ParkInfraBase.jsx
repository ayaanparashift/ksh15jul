"use client";

import React, { useState } from "react";
import ParkContent from "../../ksh-chakan-i/componentsf/ParkContent";
import ParkInfraTab from "../../ksh-chakan-i/componentsf/ParkInfraTab";
import ParkSlider from "../../ksh-chakan-i/componentsf/ParkSlider";

const ParkInfraBase = ({ exteriorVideos, interiorVideos }) => {
  const [activeTab, setActiveTab] = useState(1);
  const videos = activeTab === 1 ? exteriorVideos : interiorVideos;
  const [selectedVideo, setSelectedVideo] = useState(videos[0].video);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const newVideos = tab === 1 ? exteriorVideos : interiorVideos;
    setSelectedVideo(newVideos[0].video);
  };

  return (
    <div
      className="sm:min-h-screen lg:min-h-[825px] min-1366:h-[875px] min-h-[550px] w-full bg-[url('/ParkPage/parkinfra/parkinfrabg.png')] bg-cover bg-no-repeat bg-center"
      id="park-infrastructure"
    >
      <div className="flex items-center justify-center fix12 min-h-[550px] sm:max-h-fit sm:h-full h-[550px] py-8">
        <div className="flex flex-col justify-start w-full sm:py-[75px]">
          <ParkInfraTab
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            heading={"Park Infrastructure"}
          />
          <div className="hidden sm:block">
            <ParkContent
              activeTab={activeTab}
              selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo}
              videos={videos}
            />
          </div>
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

export default ParkInfraBase;
