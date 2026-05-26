"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MapTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // For now same iframe for Pune and Mumbai
  const tabsData = [
    {
      title: "Pune",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.205631003117!2d73.8374441!3d18.5196075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe0b6d31993%3A0x879bf458e5fbe5b0!2sKSH%20INFRA!5e0!3m2!1sen!2sin!4v1744784616609!5m2!1sen!2sin",
      href: "https://www.google.com/maps?ll=18.519608,73.837444&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9771672479163213232",
    },
    {
      title: "Mumbai",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.78001501200774!2d72.82919499755535!3d18.99854853686497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cff65c5fe3c1%3A0xcdd767d6a75b6e8!2sInnov8%20Peninsula%20Business%20Park!5e0!3m2!1sen!2sin!4v1779788059285!5m2!1sen!2sin",
      href: "https://www.google.com/maps/place/Innov8+Peninsula+Business+Park/@18.9985485,72.829195,21z/data=!4m6!3m5!1s0x3be7cff65c5fe3c1:0xcdd767d6a75b6e8!8m2!3d18.9985628!4d72.829177!16s%2Fg%2F11y_szrsr0?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#092241] py-[50px] md:py-[100px]">
      <div className="fix12">
        {/* Tabs */}
        {/* <div className="tabs md:justify-center justify-between flex gap-4 mb-6">
          {tabsData.map((tab, index) => (
            <button
              key={tab.title}
              className={`px-3 rounded-xl w-[200px] h-[46px] md:font-normal font-bold transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-0 md:border-[2px]
                ${
                  activeIndex === index
                    ? "md:bg-red-700 md:text-white text-[#fff] border-red-700"
                    : "bg-transparent md:text-white text-gray-500"
                }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div> */}
        <div className="md:flex items-center justify-between pt-0 md:pt-[70px] border-b-[1px] md:pb-3 border-[#D7D7D7] border-opacity-50 mb-8">
          <p className="text-xl pb-4 md:pb-0 text-white font-semibold">
            Reach Us
          </p>

          <div className="tabs md:justify-center justify-between flex gap-2">
            {tabsData.map((tab, index) => (
              <button
                key={tab.title}
                className={`px-3 h-[46px] w-[200px] md:font-normal font-bold transition-colors duration-500 border-[#D7D7D7] border-opacity-50 border-0 md:border-[2px] rounded-[10px]
        ${
          activeIndex === index
            ? "md:bg-red-700 md:text-white  text-[#fff] border-red-700"
            : "bg-transparent md:text-white text-gray-500"
        }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* AnimatePresence for Map + Button */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tabsData[activeIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
          >
            <iframe
              src={tabsData[activeIndex].iframe}
              height="450"
              width="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div>
              <a
                href={tabsData[activeIndex].href}
                target="_blank"
                className="border-[#D7D7D7] cursor-pointer w-fit border text-sm md:text-base fsans-600 text-white flex items-center px-[30px] py-[10px] gap-3 mt-5 group hover:bg-white hover:text-black transition-colors duration-[500ms]"
              >
                View on Map
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-black transition-colors duration-[500ms]"
                    d="M12.3251 8.24676L12.3093 3.18522C12.3059 2.08552 11.4152 1.19488 10.3155 1.19145L5.25399 1.1757M1.69651 11.8042L8.44599 5.05477"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MapTab;
