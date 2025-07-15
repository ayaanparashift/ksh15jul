import { motion } from "framer-motion";

// const designationContent = {
//   Chairman: {
//     role: "Provides strategic direction and governance to the organization, ensuring long-term vision and ethical leadership.",
//     expertise:
//       "Extensive experience in steering corporate growth, fostering stakeholder relationships, and ensuring robust governance practices.",
//     commitment:
//       "Dedicated to upholding the company’s legacy and driving impactful, sustainable development across business verticals.",
//   },
//   "MD - KSH International": {
//     role: "Leads the international arm of KSH, managing cross-border operations, partnerships, and market expansion.",
//     expertise:
//       "Strong background in global business development, operational management, and cultural integration strategies.",
//     commitment:
//       "Focused on expanding KSH’s global footprint while maintaining operational excellence and international synergy.",
//   },
//   "Managing Director": {
//     role: "Oversees company-wide operations and leads strategic initiatives for overall organizational success.",
//     expertise:
//       "Proven track record in leadership, business transformation, and execution of high-impact strategies.",
//     commitment:
//       "Committed to steering KSH toward growth, sustainability, and innovation in all its endeavors.",
//   },
//   "Chief Executive Director": {
//     role: "Responsible for strategic leadership and execution of corporate vision and high-level business initiatives.",
//     expertise:
//       "Deep knowledge in corporate leadership, stakeholder alignment, and long-term growth planning.",
//     commitment:
//       "Dedicated to cultivating a culture of excellence and driving the company toward continued success.",
//   },
//   "Chief Financial Officer": {
//     role: "Oversees financial planning, risk management, and budgeting to ensure financial stability and growth.",
//     expertise:
//       "Strong experience in financial strategy, investment management, and fiscal governance.",
//     commitment:
//       "Focused on building financial resilience and optimizing capital structures to support business expansion.",
//   },
//   "Chief Operating Officer": {
//     role: "Leads the operational strategy and ensures efficient execution across all departments to achieve business objectives.",
//     expertise:
//       "Strong command over operational processes, team leadership, and cross-functional coordination to drive results.",
//     commitment:
//       "Dedicated to enhancing organizational efficiency, streamlining operations, and fostering a performance-driven culture.",
//   },
//   "Chief Customer Officer": {
//     role: "Leads the customer strategy and experience design across all customer touchpoints.",
//     expertise:
//       "Expert in customer engagement, loyalty programs, and omni-channel experience strategies.",
//     commitment:
//       "Committed to creating unparalleled customer value and fostering lasting relationships.",
//   },
//   "Principal Investments": {
//     role: "Manages strategic investment initiatives and evaluates opportunities aligned with the company’s growth goals.",
//     expertise:
//       "Proficient in financial modeling, market analysis, and portfolio diversification.",
//     commitment:
//       "Dedicated to identifying high-impact investments that contribute to long-term value creation.",
//   },
// };
const teamMembers = [
  {
    name: "Kushal Hegde",
    title: "Founder & Chairman, KSH GROUP",
    description: `Kushal Subbayya Hegde, Chairman of KSH INFRA, is a pioneering entrepreneur whose vision laid the foundation for the KSH Group over five decades ago. Beginning with Kamal Motors in 1969, he expanded into diverse sectors including automotive distribution, manufacturing, and logistics. Under his leadership, the group evolved into a multifaceted enterprise, establishing ventures like KSH Logistics and KSH INFRA. His strategic foresight and commitment to excellence have been instrumental in the group's sustained growth and reputation for quality and innovation. Mr. Hegde's enduring legacy continues to inspire the organization's pursuit of excellence in Industrial & Logistics infrastructure development.`,
    linkedin: "https://linkedin.com/in/kushal-hegde",
  },
  {
    name: "Rajesh Hegde",
    title: "Managing Director, KSH International",
    description: `Rajesh Hegde serves as the Managing Director of KSH International, a key entity within the KSH Group. With over 18 years of leadership experience, he has been instrumental in steering the group's diversified ventures, encompassing industrial infrastructure, logistics, and manufacturing. Rajesh's strategic vision and commitment to excellence have significantly contributed to the group's sustained growth and reputation for quality and innovation. His leadership continues to drive the organization's pursuit of excellence in Industrial & Logistics infrastructure development.`,
    linkedin: "", // add if available
  },
  {
    name: "Rohit Hegde",
    title: "Managing Director, KSH INFRA",
    description: `Rohit Hegde, Managing Director of KSH INFRA, is a visionary leader with deep expertise in real estate, infrastructure, and sustainable development. With a strong foundation in research, consulting, and strategic investment, he brings a sharp analytical mindset and a hands-on leadership style to the company. Known for his integrity, foresight, and commitment to excellence, Rohit has been instrumental in driving KSH INFRA’s growth across India. His passion for building future-ready, green infrastructure has positioned the brand as a trusted industry leader. Rohit’s people-first approach, combined with his strategic acumen, continues to inspire innovation and long-term value creation at KSH INFRA.`,
    linkedin: "",
  },
  {
    name: "Sundaresan Vaidyanathan",
    title: "Chief Executive Officer, KSH INFRA",
    description: `Sundaresan Vaidyanathan serves as the Chief Executive Officer of KSH INFRA, where he leads the company's strategic expansion into India's Industrial & Logistics real estate sector. Under his guidance, KSH INFRA has embarked on significant projects, including a ₹450 crore investment in a 50-acre Industrial & Logistics park in Hosur, Tamil Nadu, marking the company's foray into South India. Vaidyanathan emphasizes a growth strategy focused on markets with substantial industrial demand, particularly in southern cities and Maharashtra. His leadership reflects a commitment to delivering top-tier industrial infrastructure that aligns with the evolving needs of clients. Additionally, he upholds KSH INFRA's core philosophy of 'Inspiring Green Development,' ensuring that sustainability remains central to the company's mission.`,
    linkedin: "",
  },
  {
    name: "Abhijit Pawar",
    title: "Chief Financial Officer, KSH INFRA",
    description: `Abhijit Pawar serves as the Chief Financial Officer (CFO) of KSH INFRA, where he plays a pivotal role in steering the company's financial strategy and ensuring robust fiscal health. With a focus on sustainable growth, he oversees financial planning, risk management, and capital allocation, aligning them with KSH INFRA's expansion goals. His leadership is instrumental in managing large-scale investments, such as the ₹450 crore development of a 50-acre Industrial & Logistics park in Hosur, Tamil Nadu, marking the company's strategic entry into southern India. Abhijit's financial acumen supports KSH INFRA's commitment to delivering world-class, sustainable industrial infrastructure across key Indian markets.`,
    linkedin: "",
  },
  {
    name: "Rushid Domadia",
    title: "Chief Operating Officer, KSH INFRA",
    description: `As Chief Operating Officer (COO) of KSH INFRA, Rushid Domadia plays a pivotal role in driving operational excellence across the company’s Industrial & Logistics infrastructure portfolio. He leads cross-functional teams to ensure seamless execution of projects, from planning and design to delivery and asset management. With a focus on efficiency, quality, and sustainability, Rushid oversees day-to-day operations, ensuring that each development aligns with KSH INFRA’s commitment to building world-class, future-ready infrastructure. His hands-on leadership and strategic oversight are central to the company’s ability to scale efficiently across key markets in India.`,
    linkedin: "",
  },
  {
    name: "Karan Domadia",
    title: "Chief Customer Officer, KSH INFRA",
    description: `Karan Domadia serves as the Chief Customer Officer (CTO) at KSH INFRA, where he plays a pivotal role in shaping the company's customer engagement and market expansion strategies. With a focus on building strong client relationships, Karan leads initiatives to enhance customer satisfaction and drive business growth. His leadership ensures that KSH INFRA's offerings align with market demands and client expectations, reinforcing the company's commitment to delivering top-tier Industrial & Logistics infrastructure solutions.`,
    linkedin: "",
  },
  {
    name: "Akhilesh Ayyappan",
    title: "Principal Investments (South), KSH INFRA",
    description: `Akhilesh Ayyappan serves as Principal – Investments (South) at KSH INFRA, where he leads the company’s investment and expansion strategy across southern India. With many years of experience in real estate acquisitions, private equity partnerships, and business development, Akhilesh has held key roles at Mahindra Lifespaces and IndoSpace, contributing to his deep understanding of diverse asset classes in Tier I and II markets. At KSH INFRA, he is instrumental in sourcing strategic land opportunities, structuring investment deals, and forging partnerships that align with the company’s growth objectives in the Industrial & Logistics infrastructure sector.`,
    linkedin: "",
  },
  {
    name: "Kartik Shah",
    title: "Principal Investments (West), KSH INFRA",
    description: `Kartik Shah serves as Principal – Investments (West) at KSH INFRA, leading the company's investment strategy across western India. With considerable years of experience in real estate investment management, particularly in warehousing and residential sectors, he brings a wealth of expertise to his role. Kartik's responsibilities include identifying strategic land acquisitions, structuring investment deals, and fostering partnerships that align with KSH INFRA's growth objectives. His leadership is instrumental in expanding the company's footprint in key markets, ensuring the delivery of high-quality Industrial & Logistics infrastructure solutions.`,
    linkedin: "",
  },
];

const TeamModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white xl:w-[1000px] px-[30px] py-[40px] max-w-[1000px] flex flex-col gap-[50px]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[24px]">
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-[10px]">
              <h2 className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[111%]">
                {member.name}
              </h2>
              <h3 className="spotlightheaddd fsans-400 text-[16px] md:text-[24px] text-[#E30613] leading-[111%]">
                {member.title /* e.g. "Founder & Chairman, KSH GROUP" */}
              </h3>
            </div>
            <button onClick={onClose} aria-label="Close">
              <img
                src="/team/icons/close.svg"
                className="w-[60px] h-[60px] cursor-pointer"
                onClick={onClose}
                alt="Close"
              />
            </button>
          </div>

          <p className="text-[#434343] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] fsans-400">
            {member.description}
          </p>
        </div>

        {/* LinkedIn */}
        {member.linkedin && (
          <a
            href={member.linkedin || "https://linkedin.com"}
            target="_blank"
            className="group flex gap-[10px] items-center"
          >
            <img
              className="w-[41px] h-[41px]"
              src="/team/icons/linkedin.svg"
              alt="LinkedIn"
            />
            <a
              className="text-[#092241] text-[20px] fsans-600 group-hover:translate-x-2 transition-transform duration-300"
              href={member.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default TeamModal;
