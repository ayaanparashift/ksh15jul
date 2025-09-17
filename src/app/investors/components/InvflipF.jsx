// "use client";

// import { motion } from "framer-motion";
// import LineHead from "../../Components/Heading/LineHead";

// // All 4 investor data from the blue sections
// const investors = [
//   {
//     image: "/investorRel/inin.png",
//     title: "IndoSpace",
//     content:
//       "IndoSpace, a leading investor, developer, and manager of Industrial & Logistics real estate in India, was founded in 2007. The company has a strong team of industry experts with vast experience in the industrial real estate market.",
//     flip: false,
//     type: "existing",
//   },
//   {
//     image: "/investorRel/inms.png",
//     title: "Morgan Stanley Real Estate Investing (MSREI)",
//     content:
//       "MSREI is the global real estate investment arm of Morgan Stanley. With 30+ years of experience and presence in 12 countries, it combines local knowledge and global legacy to manage investments effectively.",
//     flip: false,
//     type: "past",
//   },
//   {
//     image: "/investorRel/maplef.png",
//     title: "Mapletree Investments",
//     content:
//       "Mapletree acquired both KSH Chakan Park I (2021) and KSH Chakan Park II (2022) from KSH INFRA in successful exit transactions.",
//     flip: true, // only this one flips
//     type: "past",
//   },
//   {
//     image: "/investorRel/pcgflip.png",
//     title: "Pacific Century Group",
//     content:
//       "Pacific Century Group (PCG), founded in 1993, is an Asia-based investment group focusing on TMT, financial services, and property. It has a strong network and investment track record across the region.",
//     flip: false,
//     type: "past",
//   },
// ];

// const InvflipF = () => {
//   const pastInvestors = investors.filter((inv) => inv.type === "past");
//   const existingInvestors = investors.filter((inv) => inv.type === "existing");

//   return (
//     <div className="bg-[#092241] py-16">
//       <div className="fix12 space-y-16">
//         {/* Existing Investors Section */}
//         <div>
//           <LineHead clr="text-[#fff]" heading="Existing Investors" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//             {existingInvestors.map((item, idx) => (
//               <InvFlipCard
//                 key={idx}
//                 image={item.image}
//                 content={item.content}
//                 title={item.title}
//                 flip={item.flip}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Past Investors Section */}
//         <div>
//           <LineHead clr="text-[#fff]" heading="Past Investors" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//             {pastInvestors.map((item, idx) => (
//               <InvFlipCard
//                 key={idx}
//                 image={item.image}
//                 content={item.content}
//                 title={item.title}
//                 flip={item.flip}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InvFlipCard = ({ image, content, title, flip }) => {
//   return (
//     <div>
//       {/* Desktop Hover Card */}
//       {flip ? (
//         <motion.div
//           className="relative w-[280px] h-[182px] overflow-hidden cursor-pointer hidden sm:block"
//           initial="rest"
//           whileHover="hover"
//           animate="rest"
//         >
//           <img
//             src={image}
//             alt={title}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <motion.div
//             className="absolute inset-0 bg-white flex items-center"
//             variants={{
//               rest: { y: "100%" },
//               hover: { y: "0%" },
//             }}
//             transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//           >
//             <div className="p-4 text-[#474747] text-[14px] fsans-400">
//               {content}
//             </div>
//           </motion.div>
//         </motion.div>
//       ) : (
//         <div className="relative w-[280px] h-[182px] hidden sm:block">
//           <img
//             src={image}
//             alt={title}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>
//       )}

//       {/* Mobile Static Card */}
//       <div className="sm:hidden w-full max-w-[90vw] h-[400px] overflow-hidden flex flex-col cursor-pointer border-[2px] border-white">
//         <div className="w-full h-[200px]">
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         </div>
//         <div className="h-full w-full flex items-center p-4 text-[#474747] text-[14px] fsans-400 bg-white">
//           {content}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvflipF;
"use client";

import { motion } from "framer-motion";
import LineHead from "../../Components/Heading/LineHead";

// All 4 investor data from the blue sections
const investors = [
  {
    image: "/investorRel/wsb.jpg",
    title: "WSB",
    content: "", // removed
    flip: false,
    type: "existing",
  },
  {
    image: "/investorRel/inin.png",
    title: "IndoSpace",
    content: "", // removed
    flip: false,
    type: "existing",
  },

  {
    image: "/investorRel/maplef.png",
    title: "Mapletree Investments",
    // content:
    //   "Mapletree acquired both KSH Chakan Park I (2021) and KSH Chakan Park II (2022) from KSH INFRA in successful exit transactions.",
    content: "",
    flip: false, // only this one flips
    type: "past",
  },
  {
    image: "/investorRel/inms.png",
    title: "Morgan Stanley Real Estate Investing (MSREI)",
    content: "", // removed
    flip: false,
    type: "past",
  },
  {
    image: "/investorRel/pcgflip.png",
    title: "Pacific Century Group",
    content: "", // removed
    flip: false,
    type: "past",
  },
];

const InvflipF = () => {
  const pastInvestors = investors.filter((inv) => inv.type === "past");
  const existingInvestors = investors.filter((inv) => inv.type === "existing");

  // return (
  //   <div className="bg-[#092241] py-16">
  //     <div className="fix12 space-y-16">
  //       {/* Existing Investors Section */}
  //       <div>
  //         <LineHead clr="text-[#fff]" heading="Existing Investors" />
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
  //           {existingInvestors.map((item, idx) => (
  //             <InvFlipCard
  //               key={idx}
  //               image={item.image}
  //               content={item.content}
  //               title={item.title}
  //               flip={item.flip}
  //             />
  //           ))}
  //         </div>
  //       </div>

  //       {/* Past Investors Section */}
  //       <div>
  //         <LineHead clr="text-[#fff]" heading="Past Investors" />
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
  //           {pastInvestors.map((item, idx) => (
  //             <InvFlipCard
  //               key={idx}
  //               image={item.image}
  //               content={item.content}
  //               title={item.title}
  //               flip={item.flip}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-[#092241] py-16">
      <div className="fix12 space-y-16">
        {/* Existing Investors Section */}
        <div>
          <LineHead clr="text-[#fff]" heading="Existing Investors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:justify-items-center">
            {existingInvestors.map((item, idx) => (
              <InvFlipCard
                key={idx}
                image={item.image}
                content={item.content}
                title={item.title}
                flip={item.flip}
              />
            ))}
          </div>
        </div>

        {/* Past Investors Section */}
        <div>
          <LineHead clr="text-[#fff]" heading="Past Investors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:justify-items-center">
            {pastInvestors.map((item, idx) => (
              <InvFlipCard
                key={idx}
                image={item.image}
                content={item.content}
                title={item.title}
                flip={item.flip}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InvFlipCard = ({ image, content, title, flip }) => {
  return (
    <div>
      {/* Desktop Hover Card */}
      {flip ? (
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
      ) : (
        <div className="relative w-[280px] h-[182px] hidden sm:block">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* Mobile Static Card */}
      {/* <div className="sm:hidden w-full max-w-[90vw] overflow-hidden flex flex-col cursor-pointer border-[2px] border-white">
        <div className="w-full h-[200px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        {content && (
          <div className="h-full w-full flex items-center p-4 text-[#474747] text-[14px] fsans-400 bg-white">
            {content}
          </div>
        )}
      </div> */}
      <div className="sm:hidden min-w-full h-auto overflow-hidden flex flex-col cursor-pointer border-[2px] border-white">
        <div className="w-full h-[200px]">
          <img
            src={image}
            alt={title}
            className="min-w-full h-full object-cover"
          />
        </div>
        {content && (
          <div className="w-full flex items-center p-4 text-[#474747] text-[14px] fsans-400 bg-white">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvflipF;
