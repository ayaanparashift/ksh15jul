import ContentCard from "../../../blogs/Components/ContentCard";

const newsItems = [
  {
    id: 1,
    title: "KSH Infra to Develop Second Industrial Park in Tamil Nadu",
    image: "/south/chpin.webp",
    href: "https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/ksh-infra-to-develop-second-industrial-park-in-tamil-nadu-/76234",
    category: "News",
  },
  {
    id: 2,
    title:
      "KSH Infra to invest over Rs 550 crore in 60-acre logistics park in Tamil Nadu",
    image: "/south/news2.webp",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-to-invest-over-rs-550-crore-in-60-acre-logistics-park-in-tamil-nadu/articleshow/122392746.cms?from=mdr",
    category: "News",
  },
];

const NewsCards = () => {
  return (
    <section className="bg-[#EEF0F3] flex flex-col gap-10 py-[35px] lg:py-[70px]">
      {/* // <section className="bg-[#141D28] flex flex-col gap-10 py-[35px] lg:py-[70px]"> */}
      <div className="fix12">
        <div className="max-w-fit flex flex-col gap-1">
          <h2 className="text-[#000000] text-[24px] sm:text-[44px] fpt-600 md:leading-[48.84px] leading-[110%] whitespace-nowrap ">
            News & Updates
          </h2>
          <div className="bg-[#F7E327] h-[8px] w-full"></div>
        </div>
      </div>
      <div className="fix12 flex flex-col newscards lg:flex-row flex-wrap 2xl:gap-[45px] gap-5">
        {newsItems.map((item) => (
          <ContentCard key={item.id} item={item} type="press" />
        ))}
      </div>
    </section>
  );
};

export default NewsCards;
