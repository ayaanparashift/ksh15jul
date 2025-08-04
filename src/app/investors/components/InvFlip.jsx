"use client";

import { motion } from "framer-motion";
import LineHead from "../../Components/Heading/LineHead";

// All 4 investor data from the blue sections
const investors = [
  {
    image: "/investorRel/inin.png",
    title: "IndoSpace",
    content:
      "IndoSpace, a leading investor, developer, and manager of Industrial & Logistics real estate in India, was founded in 2007. The company has a strong team of industry experts with vast experience in the industrial real estate market.",
  },
  {
    image: "/investorRel/inms.png",
    title: "Morgan Stanley Real Estate Investing (MSREI)",
    content:
      "MSREI is the global real estate investment arm of Morgan Stanley. With 30+ years of experience and presence in 12 countries, it combines local knowledge and global legacy to manage investments effectively.",
  },
  {
    image: "/investorRel/maplef.png",
    title: "Mapletree Investments",
    content:
      "Mapletree is a global real estate company focused on sustainable investment and development. Its diversified portfolio spans Asia Pacific, Europe, UK, and the US.",
  },
  {
    image: "/investorRel/inpc.png",
    title: "Pacific Century Group",
    content:
      "Pacific Century Group (PCG), founded in 1993, is an Asia-based investment group focusing on TMT, financial services, and property. It has a strong network and investment track record across the region.",
  },
];

const InvFlip = () => {
  return (
    <div className="bg-[#092241] py-16">
      <div className="fix12">
        <LineHead clr="text-[#fff]" heading="Our Investors" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {investors.map((item, idx) => (
            <InvFlipCard
              key={idx}
              image={item.image}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const InvFlipCard = ({ image, content, title }) => {
  return (
    <div>
      {/* Desktop Hover Card */}
      <motion.div
        className="relative w-[280px] h-[182px] overflow-hidden cursor-pointer hidden sm:block"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-white flex items-center"
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
        >
          <div className="p-4 text-[#474747] text-[14px] fsans-400">
            {content}
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Static Card */}
      <div className="sm:hidden w-full max-w-[90vw] h-[400px] overflow-hidden flex flex-col cursor-pointer border-[2px] border-white">
        <div className="w-full h-[200px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full flex items-center p-4 text-[#474747] text-[14px] fsans-400 bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InvFlip;
