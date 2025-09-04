// import ParkOverviewContent from "./ParkOverviewContent";
// import TrustedPartners from "../Components/TrustedPartners";
// import WhyKsh from "./WhyKsh";
// import Usp from "../Components/USPF/NewUSP";
// import ParkOverviewSpot from "./ParkOverviewSpot";
// import ParkThreed from "./ParkThreed";
// import MapNew from "../Components/MapComponents/MapNew";

// export const metadata = {
//   title:
//     "KSH INFRA | Premium Industrial and Logistics Parks & Modern Infrastructure",
//   description:
//     "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
// };
// const page = () => {
//   return (
//     <>
//       <div>
//         <ParkOverviewSpot />
//         <ParkOverviewContent />
//         <MapNew />
//         <Usp />
//         <WhyKsh />
//         <TrustedPartners paddingB={70} />
//         {/* <ParkThreed />  */}
//       </div>
//     </>
//   );
// };

// export default page;
// app/parks/page.jsx

import ParkOverviewContent from "./ParkOverviewContent";
import TrustedPartners from "../Components/TrustedPartners";
import WhyKsh from "./WhyKsh";
import Usp from "../Components/USPF/NewUSP";
import ParkOverviewSpot from "./ParkOverviewSpot";
import MapNew from "../Components/MapComponents/MapNew";

export const metadata = {
  title:
    "KSH INFRA | Premium Industrial and Logistics Parks & Modern Infrastructure",
  description:
    "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
};

const page = () => {
  // JSON-LD Schema for /parks page
  const parksSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.kshinfra.com/parks#webpage",
    name: "KSH Infra – Our Parks",
    url: "https://www.kshinfra.com/parks",
    description:
      "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kshinfra.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Parks",
          item: "https://www.kshinfra.com/parks",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#chakan-i",
            name: "Chakan I Industrial Park – Pune",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chakan",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#chakan-ii",
            name: "Chakan II Industrial Park – Pune",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chakan",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#chakan-iii",
            name: "Chakan III Industrial Park – Pune",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chakan",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#chakan-iv",
            name: "Chakan IV Industrial Park – Pune",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chakan",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#talegaon-i",
            name: "Talegaon I Industrial Park – Pune",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Talegaon",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Place",
            "@id": "https://www.kshinfra.com/parks#hosur-i",
            name: "Hosur I Industrial Park – Bengaluru",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hosur",
              addressRegion: "Karnataka",
              addressCountry: "India",
            },
          },
        },
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.kshinfra.com/#organization",
      name: "KSH Infra",
      url: "https://www.kshinfra.com/",
    },
  };

  return (
    <>
      {/* Server-rendered JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parksSchema) }}
      />

      <div>
        <ParkOverviewSpot />
        <ParkOverviewContent />
        <MapNew />
        <Usp />
        <WhyKsh />
        <TrustedPartners paddingB={70} />
        {/* <ParkThreed /> */}
      </div>
    </>
  );
};

export default page;
