// "use client";
import React from "react";
// import { motion } from "framer-motion";
import SlideCard from "./SlideCard";

const CaseStudy = () => {
  const CaseStudyContent = [
    {
      Title: (
        <>
          Done and Delivered. On Time
          <br />— Jabil KSH INFRA
        </>
      ),
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "/case-studies/jabil",
      Image: "/caseInside/jabilspot.png",
    },
    {
      Title:
        "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first integrated unit.",
      Description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "/case-studies/kawasaki",
      Image: "/caseInside/caseInsideSpot.png",
    },
    // Add more items if needed...
  ];

  return (
    <div className="z-10 relative py-[60px] w-full">
      <div className="fix12 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {CaseStudyContent.map((content, index) => (
          <SlideCard
            key={index}
            title={content.Title}
            description={content.Description}
            image={content.Image}
            url={content.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
