"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

const TabTeam = () => {
  const tabs = [
    { title: "All", category: null },
    { title: "Operations Team", category: "Operations Team" },
    {
      title: "Partners | Advisors | EIRs",
      category: "Partners | Advisors | EIRs",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null); // Track selected team member

  const allTeamMembers = [
    {
      id: 1,
      name: "Kushal Hegde",
      title: "Chairman & Founder",
      description: `Kushal Subbayya Hegde, Chairman of KSH INFRA, is a pioneering entrepreneur whose vision laid the foundation for the KSH Group over five decades ago. Beginning with Kamal Motors in 1969, he expanded into diverse sectors including automotive distribution, manufacturing, and logistics. Under his leadership, the group evolved into a multifaceted enterprise, establishing ventures like KSH Logistics and KSH INFRA. His strategic foresight and commitment to excellence have been instrumental in the group's sustained growth and reputation for quality and innovation. Mr. Hegde's enduring legacy continues to inspire the organization's pursuit of excellence in Industrial & Logistics infrastructure development.`,
      category: "Operations Team",
      image: "/team/mem/kushal.webp",
      // linkedin: "",
      aboutmem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
    },
    {
      id: 2,
      name: "Rohit Hegde",
      title: "Managing Director",
      description: `Rohit Hegde, Managing Director of KSH INFRA, is a visionary leader with deep expertise in real estate, infrastructure, and sustainable development. With a strong foundation in research, consulting, and strategic investment, he brings a sharp analytical mindset and a hands-on leadership style to the company. Known for his integrity, foresight, and commitment to excellence, Rohit has been instrumental in driving KSH INFRA’s growth across India. His passion for building future-ready, green infrastructure has positioned the brand as a trusted industry leader. Rohit’s people-first approach, combined with his strategic acumen, continues to inspire innovation and long-term value creation at KSH INFRA.`,
      category: "Operations Team",
      image: "/team/mem/rohit.webp",
      linkedin:
        "https://www.linkedin.com/in/rohit-hegde-79bab25?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAENVOcBEXKuJalMacOYRYklNSZ4cE9-iGY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BKYuyOIGKRJ6N4e%2BltiGjiw%3D%3D",
      aboutmem:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Rajesh Hegde",
      title: "Director",
      description: `Rajesh Hegde serves as the Managing Director of KSH International, a key entity within the KSH Group. With over 18 years of leadership experience, he has been instrumental in steering the group's diversified ventures, encompassing industrial infrastructure, logistics, and manufacturing. Rajesh's strategic vision and commitment to excellence have significantly contributed to the group's sustained growth and reputation for quality and innovation. His leadership continues to drive the organization's pursuit of excellence in Industrial & Logistics infrastructure development.`,
      category: "News",
      image: "/team/mem/rajesh.webp",
      linkedin:
        "https://www.linkedin.com/in/rajesh-hegde-a067494a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAApuumYBGJQjl9SqpJN3OUwpSyB5MChkITU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8AF8aD4TSaaYeRCDLrxvXg%3D%3D",
      aboutmem:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 4,
      name: "Sundaresan Vaidyanathan",
      title: "Chief Executive Officer",
      description: `Sundaresan Vaidyanathan serves as the Chief Executive Officer of KSH INFRA, where he leads the company's strategic expansion into India's Industrial & Logistics real estate sector. Under his guidance, KSH INFRA has embarked on significant projects, including a ₹450 crore investment in a 50-acre Industrial & Logistics park in Hosur, Tamil Nadu, marking the company's foray into South India. Vaidyanathan emphasizes a growth strategy focused on markets with substantial industrial demand, particularly in southern cities and Maharashtra. His leadership reflects a commitment to delivering top-tier industrial infrastructure that aligns with the evolving needs of clients. Additionally, he upholds KSH INFRA's core philosophy of 'Inspiring Green Development,' ensuring that sustainability remains central to the company's mission.`,
      category: "Partners | Advisors | EIRs",
      image: "/team/mem/sund.webp",
      linkedin: "https://www.linkedin.com/in/sundaresan-vaidyanathan-12b7912/",
      aboutmem:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      name: "Abhijit Pawar",
      title: "Chief Financial Officer",
      description: `Abhijit Pawar serves as the Chief Financial Officer (CFO) of KSH INFRA, where he plays a pivotal role in steering the company's financial strategy and ensuring robust fiscal health. With a focus on sustainable growth, he oversees financial planning, risk management, and capital allocation, aligning them with KSH INFRA's expansion goals. His leadership is instrumental in managing large-scale investments, such as the ₹450 crore development of a 50-acre Industrial & Logistics park in Hosur, Tamil Nadu, marking the company's strategic entry into southern India. Abhijit's financial acumen supports KSH INFRA's commitment to delivering world-class, sustainable industrial infrastructure across key Indian markets.`,
      category: "Partners | Advisors | EIRs",
      image: "/team/mem/abhip.webp",
      linkedin:
        "https://www.linkedin.com/in/abhijitpawar1977?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAGAuocBdNBcK398M4XPHdT7-MwI495Xrks&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BlYU9RloQSyym5rO9W6RmMA%3D%3D",
      aboutmem:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 6,
      name: "Rushid Domadia",
      title: "Chief Operating Officer",
      description: `As Chief Operating Officer (COO) of KSH INFRA, Rushid Domadia plays a pivotal role in driving operational excellence across the company’s Industrial & Logistics infrastructure portfolio. He leads cross-functional teams to ensure seamless execution of projects, from planning and design to delivery and asset management. With a focus on efficiency, quality, and sustainability, Rushid oversees day-to-day operations, ensuring that each development aligns with KSH INFRA’s commitment to building world-class, future-ready infrastructure. His hands-on leadership and strategic oversight are central to the company’s ability to scale efficiently across key markets in India.`,
      category: "Operations Team",
      image: "/team/mem/rushid.webp",
      linkedin:
        "https://www.linkedin.com/in/rushid-domadia-05808b215?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADZLYoQBZKPcUjunEJSZxGtp6FXQ51n0Fh8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BAy3ENHBvTiu9rY13JZiZMQ%3D%3D",
      aboutmem:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      id: 7,
      name: "Karan Domadia",
      title: "Chief Customer Officer",
      description: `Karan Domadia serves as the Chief Customer Officer (CCO) at KSH INFRA, where he plays a pivotal role in shaping the company's customer engagement and market expansion strategies. With a focus on building strong client relationships, Karan leads initiatives to enhance customer satisfaction and drive business growth. His leadership ensures that KSH INFRA's offerings align with market demands and client expectations, reinforcing the company's commitment to delivering top-tier Industrial & Logistics infrastructure solutions.`,
      category: "Partners | Advisors | EIRs",
      image: "/team/mem/karan.webp",
      linkedin:
        "https://www.linkedin.com/in/karan-domadia-7237242a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bt%2B3r1dmjTziW%2FlSLw7f37w%3D%3D",
      aboutmem:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      id: 8,
      name: "Akhilesh Ayyappan",
      title: "Principal Investments (South)",
      description: `Akhilesh Ayyappan serves as Principal – Investments (South) at KSH INFRA, where he leads the company’s investment and expansion strategy across southern India. With many years of experience in real estate acquisitions, private equity partnerships, and business development, Akhilesh has held key roles at Mahindra Lifespaces and IndoSpace, contributing to his deep understanding of diverse asset classes in Tier I and II markets. At KSH INFRA, he is instrumental in sourcing strategic land opportunities, structuring investment deals, and forging partnerships that align with the company’s growth objectives in the Industrial & Logistics infrastructure sector.`,
      category: "Partners | Advisors | EIRs",
      image: "/team/mem/akhil.webp",
      linkedin: "https://www.linkedin.com/in/akhilesh-ayyappan-28309b8/",
      aboutmem:
        "Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      id: 9,
      name: "Kartik Shah",
      title: "Principal Investments (West)",
      description: `Kartik Shah serves as Principal – Investments (West) at KSH INFRA, leading the company's investment strategy across western India. With considerable years of experience in real estate investment management, particularly in warehousing and residential sectors, he brings a wealth of expertise to his role. Kartik's responsibilities include identifying strategic land acquisitions, structuring investment deals, and fostering partnerships that align with KSH INFRA's growth objectives. His leadership is instrumental in expanding the company's footprint in key markets, ensuring the delivery of high-quality Industrial & Logistics infrastructure solutions.`,
      linkedin: "https://www.linkedin.com/in/kartik-shah-4b7b5b37/",
      category: "Partners | Advisors | EIRs",
      image: "/team/mem/kshah.webp",
      aboutmem:
        "Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.",
    },
  ];

  const teamToDisplay =
    activeIndex === 0
      ? allTeamMembers
      : allTeamMembers.filter(
          (member) => member.category === tabs[activeIndex].category
        );

  return (
    <>
      <div className="w-full bg-[#092241]">
        <div className="fix12 pt-[20px] pb-[20px] sm:pt-[50px] flex flex-col gap-[40px] sm:pb-[50px]">
          <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
            Meet Our Team
          </h2>
        </div>
      </div>

      {/* Team Cards with Clickable Modal */}
      <div className="fix12 py-[70px] flex flex-wrap gap-5 min-1366:gap-20 justify-center">
        <AnimatePresence mode="wait">
          {teamToDisplay.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
              className="w-fit"
            >
              <TeamCard
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
          >
            <TeamModal
              key={selectedMember}
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TabTeam;
