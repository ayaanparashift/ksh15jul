"use client";

const ParkMapCard = ({ items, activeIndex, onSelectAirport }) => {
  return (
    <div className="w-full flex flex-col h-full">
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={item.id}
            onClick={() => onSelectAirport(idx)}
            className="cursor-pointer"
          >
            <div
              className={`
                flex justify-between items-center gap-[30px]
                py-[20px] pr-[20px] pl-[20px]
                transition-colors duration-200
                ${!isActive ? "hover:bg-[#f5f5f5]" : ""}
                ${isActive ? "bg-[#092241] text-white" : "bg-white text-[#092241]"}
                ${!isActive && idx < items.length - 1 ? "border-b-[1px] border-b-[#C6C6C6]" : ""}
              `}
            >
              <div className="h-[48px] w-[48px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className={isActive ? "filter brightness-0 invert" : ""}
                />
              </div>

              <div className="flex flex-col w-full gap-[4px] items-start">
                <h2
                  className={`fsans-600 text-[18px] ${isActive ? "text-white" : "text-[#092241]"}`}
                >
                  {item.title}
                </h2>
                <span className="fsans-600 text-[24px] text-[#E4222E]">{item.km}KM</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParkMapCard;
