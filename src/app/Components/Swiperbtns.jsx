import React from "react";

const Swiperbtns = () => {
  return (
    <div className="flex gap-10 items-center lg:justify-start justify-between">
      <p className="text-white opacity-60 fsans-400 text-[16px]">
        Explore the Advantage <br />
        with KSH INFRA
      </p>
      <div>
        <button className="landingl w-fit">
          <img className="w-10 h-10" src="/landingr.svg" alt="" />
        </button>
        <button className="landingl w-10 h-10">
          <img className="w-10 h-10" src="/landingl.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Swiperbtns;
