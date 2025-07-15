import Parent from "./Parent";
export default function PFetch() {
  const staticData = {
    "Case Studies": [
      {
        id: 1,
        title: "Creating opportunities for Kawasaki",
        content:
          "How we built Kawasaki's first integrated manufacturing and R&D facility in India?",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/kawasaki",
      },
      {
        id: 2,
        title: "Jabil + KSH INFRA",
        content: "Jabil + KSH INFRA.",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
    ],
    News: [
      {
        id: 5,
        title: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
        content: "Mapletree Investments Acquires KSH INFRA’s logistics asset",
        image:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 6,
        title: "Post covid-19 opportunities in India",
        content: "Post covid-19 opportunities in India",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 7,
        title: "Benefits of moving into a sustainable Industrial Park",
        content: "Benefits of moving into a sustainable Industrial Park",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 8,
        title:
          "IndoSpace inks Rs 1,000 Cr. JV with KSH INFRA to develop Logistics Parks across India",
        content:
          "IndoSpace inks Rs 1,000 Cr. JV with KSH INFRA to develop Logistics Parks across India",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
    ],
    "Press Release": [
      {
        id: 10,
        title: "New Product Launch",
        content: "Press Release 1",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 11,
        title: "Merger Announcement",
        content: "Press Release 3",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 12,
        title: "Quarterly Financial Update",
        content: "Press Release 2",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 13,
        title: "Strategic Partnership Formed",
        content: "Press Release 4",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
    ],
    Others: [
      {
        id: 14,
        title: "Community Initiative Kickoff",
        content: "CEO Interview Insights 2",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 15,
        title: "Industry Analysis Report",
        content: "CEO Interview Insights 3",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
      {
        id: 16,
        title: "Upcoming Event Highlights",
        content: "CEO Interview Insights 4",
        image: "/caseInside/jabilspot.png",
        href: "http://localhost:3000/case-studies/jabil",
      },
    ],
  };
  return <Parent staticData={staticData} />;
}
