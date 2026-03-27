"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ParkTabsMenu = ({ tabs }) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0); // fallback to 0 instead of false

  useEffect(() => {
    const savedIndex = sessionStorage.getItem(`activeTab-${pathname}`);
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10));
    }
  }, [pathname]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    sessionStorage.setItem(`activeTab-${pathname}`, index);
  };

  return (
    <div className="w-full bg-[#092241] pt-[80px] pb-[48px]">
      <div className="fix12 flex overflow-x-auto scrollbar-hide items-center">
        {tabs.map((tab, index) => {
          const isDownload = tab.title === "Download Brochure";
          const commonClasses = `
            flex-1 lg:min-w-0 min-w-[200px] text-center hover:text-[#F7E327] linkaf text-sm font-medium transition-colors pb-[15px]
            ${activeIndex === index ? "text-[#F7E327] active" : "text-white"}
            whitespace-nowrap
          `;

          if (isDownload) {
            if (tab.onClick) {
              return (
                <button
                  key={index}
                  type="button"
                  className={`${commonClasses} bg-transparent border-0`}
                  onClick={() => {
                    handleTabClick(index);
                    tab.onClick();
                  }}
                >
                  {tab.title}
                </button>
              );
            }

            return (
              <a
                key={index}
                href={tab.link}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={tab.link}
              className={commonClasses}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ParkTabsMenu;
