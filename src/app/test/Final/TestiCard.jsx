const TestiCard = ({ item }) => {
  return (
    <div className="w-full h-[75vh] pb-5 bg-white text-black overflow-hidden flex flex-col">
      <div className="h-[30%] w-full">
        <img
          src={item.image}
          alt={item.company}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-[70%] styled-scroll p-5 flex flex-col justify-between gap-4 overflow-y-auto">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          className="max-w-[180px] h-auto"
        />
        <p className="fsans-400 text-sm leading-[20px] text-[#6C8DAB]">
          {item.content}
        </p>
        <div className="flex flex-col gap-1">
          <div className="fsans-700 text-[18px] text-black">{item.name}</div>
          <div className="text-sm text-[#E30613]">{item.designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
