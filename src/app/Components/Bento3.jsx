"use client";

import Link from "next/link";

const pressReleases = [
  {
    id: 1,
    title: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park.",
    content: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park.",
    image: "/press/press6.webp",
    href: "https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/ksh-infra-to-invest-rs-5.5-billion-in-tamil-nadu-park/76359",
    newTab: true,
    date: "17 Jul 2025",
  },
  {
    id: 2,
    title:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu.",
    content:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu.",
    image: "/press/press4.png",
    href: "https://manufacturing.economictimes.indiatimes.com/news/industry/ksh-infra-to-invest-550-crore-in-second-industrial-park-in-tamil-nadu/122437140",
    newTab: true,
    date: "14 Jul 2025",
  },
  {
    id: 3,
    title:
      "KSH INFRA to invest ₹550 cr in second industrial & logistics park in Sriperumbudur.",
    content:
      "KSH INFRA to invest ₹550 cr in second industrial & logistics park in Sriperumbudur.",
    image: "/press/press5.webp",
    href: "https://www.thehindubusinessline.com/companies/ksh-infra-to-invest-550-cr-in-second-industrial-logistics-park-in-sriperumbudur/article69807276.ece",
    newTab: true,
    date: "13 Jul 2025",
  },
];

const Bento3 = () => {
  return (
    <div className="flex pt-0 md:pt-[20px] sm:flex-row flex-col gap-[20px] items-center justify-between h-fit">
      {/* Card 1 */}
      <Link
        href={pressReleases[0].href}
        target={pressReleases[0].newTab ? "_blank" : "_self"}
        className="relative h-[585px] md:hover:translate-y-[-10px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[385px] flex flex-col justify-end px-4 xl:px-[25px] pb-[20px] gap-[10px]"
        style={{
          background: `url(${pressReleases[0].image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent z-40" />
        <p
          dangerouslySetInnerHTML={{ __html: pressReleases[0].title }}
          className="fsans-400 text-[22px] leading-[130%] text-white relative z-50 line-clamp-3"
        />
        <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50 relative z-50">
          {pressReleases[0].date}
        </p>
        <button className="relative z-50">
          <img
            className="h-10 w-10"
            src="/buttonarrows/bentor1.svg"
            alt="arrow"
          />
        </button>
      </Link>

      {/* Card 2 */}
      <Link
        href={pressReleases[1].href}
        target={pressReleases[1].newTab ? "_blank" : "_self"}
        className="relative h-[585px] md:hover:translate-y-[-10px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] cursor-pointer xl:w-[315px] flex flex-col justify-end px-4 xl:px-[31px] pb-[20px] sm:pt-[50px] gap-[10px]"
        style={{
          background: `url(${pressReleases[1].image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent z-40" />
        <p
          dangerouslySetInnerHTML={{ __html: pressReleases[1].title }}
          className="fsans-400 text-[22px] leading-[130%] text-white relative z-50 line-clamp-3"
        />
        <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50 relative z-50">
          {pressReleases[1].date}
        </p>
        <button className="relative z-50">
          <img
            className="h-10 w-10"
            src="/buttonarrows/bentor1.svg"
            alt="arrow"
          />
        </button>
      </Link>

      {/* Card 3 */}
      <div className="relative h-[578px] transition-[transform] duration-300 w-full sm:w-[33%] xl:w-[515px] flex justify-end flex-col-reverse sm:flex-col gap-[30px]">
        <Link
          href={pressReleases[2].href}
          target={pressReleases[2].newTab ? "_blank" : "_self"}
          className="relative md:hover:translate-y-[-10px] transition-[transform] duration-300 ease-in-out h-[479px] flex flex-col items-start justify-end px-4 xl:px-[50px] pb-[20px] gap-[10px] cursor-pointer"
          style={{
            background: `url(${pressReleases[2].image})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent z-40" />
          <p
            dangerouslySetInnerHTML={{ __html: pressReleases[2].title }}
            className="fsans-400 text-[22px] leading-[130%] text-white relative z-50 line-clamp-3"
          />
          <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50 relative z-50">
            {pressReleases[2].date}
          </p>
          <button className="relative z-50">
            <img
              className="h-10 w-10"
              src="/buttonarrows/bentor1.svg"
              alt="arrow"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bento3;
