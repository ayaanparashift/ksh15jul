"use client";
import React from "react";
import Link from "next/link";

const pressReleases = [
  {
    id: 6,
    title:
      "KSH INFRA forays into South India plans to invest Rs 450 Cr. on Hosur logistics park",
    content:
      "KSH INFRA forays into South India, plans to invest Rs 450 Cr. on Hosur logistics park",
    image: "/press/press1.png",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
    newTab: true,
    date: "13 Aug 2024",
  },
  {
    id: 7,
    title:
      "KSH INFRA to invest Rs 450 crore to develop logistics park in Hosur",
    content:
      "KSH INFRA to invest Rs 450 crore to develop industrial & logistics park in Hosur",
    image: "/press/press3.png",
    href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
    newTab: true,
    date: "14 Aug 2024",
  },
  {
    id: 8,
    title: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
    content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
    image: "/press/press2.png",
    href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
    newTab: true,
    date: "14 Aug 2024",
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
