const Res = ({ respara }) => {
  return (
    <div className="w-full">
      <div className="bg-[url(/caseInside/resbg.jpg)] px-[20px] md:px[0px] bg-cover bg-no-repeat bg-center w-full min-h-[450px] py-[100px]">
        <div className="flex flex-col items-center gap-[30px] bg-[#EEF0F3] py-[60px] px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
          <h2 className="text-[#040404] text-[28px] md:text-[44px] text-center">
            The Result
          </h2>
          <p className="text-[18px] leading-[26px] fsans-600 text-[#101021] text-center max-w-[786px]">
            {respara}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Res;
