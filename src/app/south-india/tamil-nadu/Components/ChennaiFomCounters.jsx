const ChennaiFomCounters = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 relative z-0 pb-0">
      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
            07
          </span>{" "}
          Parks
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Total
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 min-1366:text-[40px] lg:text-[28px] text-[20px] leading-[111%]">
            10 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          of Planned Development
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            04 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Developed (in Pune)
        </p>
      </div>

      <div className="flex countersec flex-col items-left text-left px-[20px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[20px] border-t border-r border-gray-300">
        <p className="xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            03 MN
          </span>{" "}
          SQ.FT.
        </p>
        <p className="group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Under Development
        </p>
      </div>
    </div>
  );
};

export default ChennaiFomCounters;
