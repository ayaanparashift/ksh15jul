import React from "react";

const CareerSlideCard = ({ image, title, des }) => {
  return (
    <div className="flex flex-col w-[320px] h-fit lg:h-[295px] p-0 md:p-4 gap-0 md:gap-[10px] max-w-full">
      <div className="w-full h-fit">
        <img
          className="object-cover w-full min-h-[120px] lg:min-h-[200px]"
          src={image || "/Career/SlideImgs/cars1.png"}
          alt={title || "Career Slide"}
        />
      </div>
      <div className="md:p-0 p-4">
        <div className="flex flex-col gap-[10px]">
          <h3 className="fsans-600 text-[14px] md:text-[16px] leading-[130%] text-white spotlightheaddd">
            {title || "A culture that builds your Future"}
          </h3>
        </div>
        <div>
          <p className="fsans-400 text-[14px] text-[#a7a7a7]">
            {des || "SUSAINA MICHELLE | SALES EXECUTIVE"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerSlideCard;
