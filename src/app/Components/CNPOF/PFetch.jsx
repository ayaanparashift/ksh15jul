// import Parent from "./Parent";
// export default function PFetch() {
//   const staticData = {
//     "Case Studies": [
//       {
//         id: 1,
//         title: "Creating opportunities for Kawasaki",
//         content:
//           "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first Indian integrated Unit.",
//         image: "/caseInside/caseInsideSpot.png",
//         href: "/case-studies/kawasaki",
//         newTab: false,
//       },
//       {
//         id: 2,
//         title: "Jabil + KSH INFRA",
//         content: "Done and Delivered. On Time",
//         image: "/caseInside/jabilspot.png",
//         href: "/case-studies/jabil",
//         newTab: false,
//       },
//     ],
//     News: [
//       {
//         id: 3,
//         title: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
//         content:
//           "Mapletree Investments Acquires KSH INFRA’s logistics asset. (Dec 23, 2022)",
//         image: "/blog/news/news1.jpg",
//         href: "/blogs/mapletree-investments-acquires-ksh-infras-logistics-asset",
//         newTab: false,
//       },
//       {
//         id: 4,
//         title: "Post covid-19 opportunities in India",
//         content:
//           "The COVID-19 pandemic has disrupted every single industry over the course of just a few months. (Sept 28, 2022)",
//         image: "/blog/news/news2.jpg",
//         href: "/blogs/post-covid-19-opportunities-in-india",
//         newTab: false,
//       },
//       {
//         id: 5,
//         title: "Benefits of moving into a sustainable Industrial Park",
//         content:
//           "Prioritising Ergonomics in Industrial and Warehouse Operations. (Sept 28, 2022)",
//         image: "/blog/news/news3.jpg",
//         href: "/blogs/benefits-of-moving-into-a-sustainable-industrial-park",
//         newTab: false,
//       },
//     ],
//     "Press Release": [
//       {
//         id: 6,
//         title: "KSH INFRA forays into South India",
//         content:
//           "KSH INFRA forays into South India, plans to invest Rs 450 Cr. on Hosur logistics park (13 Aug 2024)",
//         image: "/press/press1.png",
//         href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//         newTab: true,
//       },

//       {
//         id: 7,
//         title: "KSH INFRA to invest Rs 450 crore",
//         content:
//           "KSH INFRA to invest Rs 450 crore to develop industrial & logistics park in Hosur (14 Aug 2024)",
//         image: "/press/press3.png",
//         href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//         newTab: true,
//       },
//       {
//         id: 8,
//         title: "KSH INFRA To Invest Nearly $54 Mn",
//         content:
//           "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park (14 Aug 2024)",
//         image: "/press/press2.png",
//         href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//         newTab: true,
//       },
//     ],
//   };

//   return <Parent staticData={staticData} />;
// }

import Parent from "./Parent";

export default function PFetch() {
  const staticData = {
    "Case Studies": [
      {
        id: 1,
        title:
          "Large-Scale, Built-to-Spec Facility — Delivered to Hindalco in Eight Months",
        content:
          "Large-Scale, Built-to-Spec Facility — Delivered to Hindalco in Eight Months",
        image: "/caseInside/hindspot.png",
        href: "/case-studies/hindalco",
        newTab: false,
        date: "Hindalco",
      },
      {
        id: 2,
        title:
          "Crane-Ready, High-Capacity Manufacturing Facility — Delivered to Barnes",
        content:
          "Crane-Ready, High-Capacity Manufacturing Facility — Delivered to Barnes",
        image: "/caseInside/barnes.png",
        href: "/case-studies/barnes",
        newTab: false,
        date: "Barnes",
      },
      {
        id: 3,
        title:
          "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first Indian integrated Unit.",
        content:
          "Manufacturing, Assembly, and R&D — Delivered Kawasaki's first Indian integrated Unit.",
        image: "/caseInside/kwspot.jpg",
        href: "/case-studies/kawasaki",
        newTab: false,
        date: "Kawasaki",
      },
      // {
      //   id: 4,
      //   title: "Done and Delivered. On Time — Jabil",
      //   content: "Done and Delivered. On Time — Jabil",
      //   image: "/caseInside/jabspot.jpg",
      //   href: "/case-studies/jabil",
      //   newTab: false,
      //   date: "Jabil",
      // },
    ],
    News: [
      {
        id: 3,
        title: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
        content: "Mapletree Investments Acquires KSH INFRA’s logistics asset.",
        image: "/blog/news/news1.jpg",
        href: "/blogs/mapletree-investments-acquires-ksh-infras-logistics-asset",
        newTab: false,
        date: "Dec 23, 2022",
      },
      {
        id: 4,
        title:
          "The COVID-19 pandemic has disrupted every single industry over the course of just a few months.",
        content:
          "The COVID-19 pandemic has disrupted every single industry over the course of just a few months.",
        image: "/blog/news/news2.jpg",
        href: "/blogs/post-covid-19-opportunities-in-india",
        newTab: false,
        date: "Sept 28, 2022",
      },
      {
        id: 5,
        title:
          "Prioritising Ergonomics in Industrial and Warehouse Operations.",
        content:
          "Prioritising Ergonomics in Industrial and Warehouse Operations.",
        image: "/blog/news/news3.jpg",
        href: "/blogs/benefits-of-moving-into-a-sustainable-industrial-park",
        newTab: false,
        date: "Sept 28, 2022",
      },
    ],
    "Press Release": [
      {
        id: 6,
        title: "KSH INFRA to invest Rs 450 crore",
        content:
          "KSH INFRA to invest Rs 450 crore to develop industrial & logistics park in Hosur",
        image: "/press/press3.png",
        href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
        newTab: true,
        date: "14 Aug 2024",
      },
      {
        id: 7,
        title: "KSH INFRA To Invest Nearly $54 Mn",
        content:
          "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
        image: "/press/press2.png",
        href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
        newTab: true,
        date: "14 Aug 2024",
      },
      {
        id: 8,
        title: "KSH INFRA forays into South India",
        content:
          "KSH INFRA forays into South India, plans to invest Rs 450 Cr. on Hosur logistics park",
        image: "/press/press1.png",
        href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
        newTab: true,
        date: "13 Aug 2024",
      },
    ],
  };

  return <Parent staticData={staticData} />;
}
