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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import ParkOverviewContent from "./ParkOverviewContent";
// import TrustedPartners from "../Components/TrustedPartners";
// import WhyKsh from "./WhyKsh";
// import Usp from "../Components/USPF/NewUSP";
// import ParkOverviewSpot from "./ParkOverviewSpot";
// import MapNew from "../Components/MapComponents/MapNew";

// export const metadata = {
//   title:
//     "KSH INFRA | Premium Industrial and Logistics Parks & Modern Infrastructure",
//   description:
//     "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
// };

// const page = () => {
//   // JSON-LD Schema for /parks page
//   const parksSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": "https://www.kshinfra.com/parks#webpage",
//     name: "KSH Infra – Our Parks",
//     url: "https://www.kshinfra.com/parks",
//     description:
//       "KSH INFRA builds Grade A industrial and logistics parks with plug-and-play facilities, strategic connectivity, and scalable infrastructure.",
//     breadcrumb: {
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://www.kshinfra.com/",
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "Our Parks",
//           item: "https://www.kshinfra.com/parks",
//         },
//       ],
//     },
//     mainEntity: {
//       "@type": "ItemList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#chakan-i",
//             name: "Chakan I Industrial Park – Pune",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Chakan",
//               addressRegion: "Maharashtra",
//               addressCountry: "India",
//             },
//           },
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#chakan-ii",
//             name: "Chakan II Industrial Park – Pune",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Chakan",
//               addressRegion: "Maharashtra",
//               addressCountry: "India",
//             },
//           },
//         },
//         {
//           "@type": "ListItem",
//           position: 3,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#chakan-iii",
//             name: "Chakan III Industrial Park – Pune",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Chakan",
//               addressRegion: "Maharashtra",
//               addressCountry: "India",
//             },
//           },
//         },
//         {
//           "@type": "ListItem",
//           position: 4,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#chakan-iv",
//             name: "Chakan IV Industrial Park – Pune",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Chakan",
//               addressRegion: "Maharashtra",
//               addressCountry: "India",
//             },
//           },
//         },
//         {
//           "@type": "ListItem",
//           position: 5,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#talegaon-i",
//             name: "Talegaon I Industrial Park – Pune",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Talegaon",
//               addressRegion: "Maharashtra",
//               addressCountry: "India",
//             },
//           },
//         },
//         {
//           "@type": "ListItem",
//           position: 6,
//           item: {
//             "@type": "Place",
//             "@id": "https://www.kshinfra.com/parks#hosur-i",
//             name: "Hosur I Industrial Park – Bengaluru",
//             address: {
//               "@type": "PostalAddress",
//               addressLocality: "Hosur",
//               addressRegion: "Karnataka",
//               addressCountry: "India",
//             },
//           },
//         },
//       ],
//     },
//     publisher: {
//       "@type": "Organization",
//       "@id": "https://www.kshinfra.com/#organization",
//       name: "KSH Infra",
//       url: "https://www.kshinfra.com/",
//     },
//   };

//   return (
//     <>
//       {/* Server-rendered JSON-LD for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(parksSchema) }}
//       />

//       <div>
//         <ParkOverviewSpot />
//         <ParkOverviewContent />
//         <MapNew />
//         <Usp />
//         <WhyKsh />
//         <TrustedPartners paddingB={70} />
//         {/* <ParkThreed /> */}
//       </div>
//     </>
//   );
// };

// export default page;
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
  // JSON-LD Schema for /parks page using detailed Place schemas
  const parksSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/parks/#itemlist",
      name: "KSH INFRA Parks",
      url: "https://www.kshinfra.com/parks",
      containedInPlace: [
        { "@id": "https://www.kshinfra.com/ksh-chakan-i" },
        { "@id": "https://www.kshinfra.com/ksh-chakan-ii" },
        { "@id": "https://www.kshinfra.com/ksh-chakan-iii" },
        { "@id": "https://www.kshinfra.com/ksh-chakan-iv" },
        { "@id": "https://www.kshinfra.com/ksh-talegaon-i" },
        { "@id": "https://www.kshinfra.com/ksh-hosur-i" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-chakan-i",
      name: "KSH Chakan Park I",
      url: "https://www.kshinfra.com/ksh-chakan-i",
      description:
        "KSH Infra’s first large-scale green industrial park with 0.85 million sq.ft of industrial and logistics space across 4 buildings, located in Chakan, Pune.",
      address:
        "Gate no. 11/5, 11/4, 11/3 Chakan - Ambethan Road, Chakan, Biradvadi, Maharashtra 410501",
      latitude: "18.7602664",
      longitude: "73.8630346",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "02135256410",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-chakan-ii",
      name: "KSH Chakan Park II",
      url: "https://www.kshinfra.com/ksh-chakan-ii",
      description:
        "Discover Chakan Park II, a future-ready and sustainable industrial park in Pune, Maharashtra. With EDGE certification, it offers ergonomic design, cost savings, and easy access to key transportation hubs.",
      address:
        "Plot No. P-5 Phase II Chakan MIDC Post Khalumbre, Khed taluka, Maharashtra",
      latitude: "18.736086",
      longitude: "73.837652",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "02066083500",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-chakan-iii",
      name: "KSH Chakan Park III",
      url: "https://www.kshinfra.com/ksh-chakan-iii",
      description:
        "KSH Chakan III provides industrial park and warehouse in Pune with custom solutions, modern infrastructure, and strategic connectivity to industrial area in Chakan.",
      address: "Village- Varale, Tal- Khed, Pune, Maharashtra 410501",
      latitude: "18.736086",
      longitude: "73.837652",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "18002122030",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-chakan-iv",
      name: "KSH Chakan Park IV",
      url: "https://www.kshinfra.com/ksh-chakan-iv",
      description:
        "KSH Chakan IV offers Grade A industrial parks in Chakan with modern infrastructure, built-to-suit warehouses, and strategic connectivity near Pune.",
      address: "Shinde Rd, Industrial Area, Chakan, Pune, Maharashtra 410501",
      latitude: "18.736086",
      longitude: "73.837652",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "1800-212-2030",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-talegaon-i",
      name: "KSH Talegaon Park I",
      url: "https://www.kshinfra.com/ksh-talegaon-i",
      description:
        "KSH Talegaon is a premium industrial and logistics park in Pune, Maharashtra, offering scalable infrastructure, advanced connectivity, and customized Warehouse solutions",
      address:
        "A-18, Talegaon Floriculture & Industrial Park, MIDC, TalegaonDabhade, NavlakhUmbre PO, Pune, Maharashtra 410507",
      latitude: "18.732103",
      longitude: "73.676376",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "1800-212-2030",
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": "https://www.kshinfra.com/ksh-hosur-i",
      name: "KSH Hosur Park I",
      url: "https://www.kshinfra.com/ksh-hosur-i",
      description:
        "Discover KSH Hosur Warehouse Park, the first of KSH INFRA's industrial parks attracting global investors. Setting the benchmark for green industrial infrastructure.",
      address: "JX22+HGG, Shoolagiri, Tamil Nadu 635119",
      latitude: "12.740900",
      longitude: "77.825300",
      image: "https://www.kshinfra.com/path-to-your-park-image.jpg",
      telephone: "1800-212-2030",
    },
  ];

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
      </div>
    </>
  );
};

export default page;
