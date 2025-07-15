import Parent from "./Parent";
export default function PFetch() {
  const staticData = {
    "Case Studies": [
      {
        id: 1,
        title: "Creating opportunities for Kawasaki",
        content:
          "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first Indian integrated Unit.",
        image: "/caseInside/caseInsideSpot.png",
        href: "/case-studies/kawasaki",
        newTab: false,
      },
      {
        id: 2,
        title: "Jabil + KSH INFRA",
        content: "Done and Delivered. On Time",
        image: "/caseInside/jabilspot.png",
        href: "/case-studies/jabil",
        newTab: false,
      },
    ],
    News: [
      {
        id: 3,
        title: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
        content: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
        image: "/blog/news/news1.jpg",
        href: "/blogs/mapletree-investments-acquires-ksh-infras-logistics-asset",
        newTab: false,
      },
      {
        id: 4,
        title: "Post covid-19 opportunities in India",
        content:
          "The COVID-19 pandemic has disrupted every single industry over the course of just a few months.",
        image: "/blog/news/news2.jpg",
        href: "/blogs/post-covid-19-opportunities-in-india",
        newTab: false,
      },
      {
        id: 5,
        title: "Benefits of moving into a sustainable Industrial Park",
        content:
          "Prioritising Ergonomics in Industrial and Warehouse Operations",
        image: "/blog/news/news3.jpg",
        href: "/blogs/benefits-of-moving-into-a-sustainable-industrial-park",
        newTab: false,
      },
    ],
    "Press Release": [
      {
        id: 6,
        title: "KSH INFRA forays into South India",
        content:
          "KSH INFRA forays into South India, plans to invest Rs 450 Cr. on Hosur logistics park",
        image: "/press/press1.png",
        href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
        newTab: true,
      },

      {
        id: 7,
        title: "KSH INFRA to invest Rs 450 crore",
        content:
          "KSH INFRA to invest Rs 450 crore to develop industrial & logistics park in Hosur",
        image: "/press/press3.png",
        href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
        newTab: true,
      },
      {
        id: 8,
        title: "KSH INFRA To Invest Nearly $54 Mn",
        content:
          "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
        image: "/press/press2.png",
        href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
        newTab: true,
      },
    ],
  };

  return <Parent staticData={staticData} />;
}
