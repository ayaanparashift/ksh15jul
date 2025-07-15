// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// const InvesterCase = () => {
//   return (
//     <>
//       <div className="bg-[#092241] py-16">
//         <div className="fix12  ">
//           <div className="lg:flex justify-between items-center gap-5 xl:gap-10">
//             <div className="leftCon relative overflow-hidden lg:w-[500px] h-[480px]  flex-shrink-0 flex items-center justify-center">
//               <img src="/investorRel/inin.png" alt="" />
//               {/* <motion.div
//                 className="absolute top-0 left-0 w-full h-full bg-[#092241]"
//                 initial={{ x: 0 }}
//                 whileInView={{ x: "100%" }}
//                 transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
//               /> */}
//             </div>
//             <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
//               <motion.h1
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className=" text-white pb-2 text-3xl whitespace-nowrap overflow-hidden leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
//               >
//                 IndoSpace
//               </motion.h1>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="relative overflow-hidden pt-5 xl:pt-10 space-y-[40px]"
//               >
//                 <p className="xl:text-base text-sm fsans-400 leading-[26px] text-[#eee]">
//                   IndoSpace, a leading investor, developer, and manager of
//                   Industrial & Logistics real estate in India, was founded in
//                   2007. The company has a strong team of industry experts with
//                   vast experience in the industrial real estate market.
//                   IndoSpace's unwavering focus on the industrial and warehousing
//                   sector in India demonstrates its dedication to meeting the
//                   needs of its clients. The company has partnered with KSH INFRA
//                   to deliver an ecosystem of sustainable, ESG-positive
//                   industrial parks in several strategically important economic
//                   zones in India.
//                 </p>
//                 <p className="text-base fsans-400 leading-[26px] text-[#eee]">
//                   IndoSpace is investing INR 1,000 crore (~ USD 120 million) in
//                   a JV with KSH INFRA to develop a 10-million square feet
//                   portfolio of world-class warehousing and industrial parks
//                   across the country over the next five years.
//                 </p>
//                 {/* <a
//                   target="_blank"
//                   href="https://www.indospace.in/about/"
//                   className="text-white fsans-600 flex gap-[10px] items-center text-[16px]"
//                 >
//                   Read more
//                   <img
//                     className="h-8 w-8"
//                     src="/buttonarrows/redarico.svg"
//                     alt="Redarrow"
//                   />
//                 </a> */}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ---------- */}
//       <div className="bg-[#EEF0F3] py-16">
//         <div className="fix12  ">
//           <div className="lg:flex justify-between items-center gap-5 xl:gap-10 flex-row-reverse">
//             <div className="leftCon relative overflow-hidden lg:w-[500px] h-[480px]  flex-shrink-0 flex items-center justify-center">
//               <img src="./investorRel/inmt.png" alt="" />
//               {/* <motion.div
//                 className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
//                 initial={{ x: 0 }}
//                 whileInView={{ x: "-100%" }}
//                 transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
//               /> */}
//             </div>
//             <div className="RightCon max-w-1/2 flex flex-wrap wrap  xl-768:mt-14">
//               <motion.h1
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="text-[#151515]  whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]"
//               >
//                 Mapletree Investments - Singapore
//               </motion.h1>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className=" pt-10 space-y-[40px]"
//               >
//                 <p className="text-[#303030] text-base fsans-400 leading-[26px] ">
//                   Mapletree is a global company specializing in real estate
//                   development, investment, capital, and property management,
//                   with a strong commitment to sustainability. The company
//                   continually creates new investment opportunities to meet the
//                   evolving needs of investors and aims to expand its presence by
//                   diversifying its portfolio with investments across the Asia
//                   Pacific, Europe, the United Kingdom, and the United States.
//                 </p>
//                 {/* <a
//                   target="_blank"
//                   href="https://en.mapletree.com.sg/"
//                   className="fsans-600 flex gap-[10px] items-center text-[16px]"
//                 >
//                   Read more
//                   <img
//                     className="h-8 w-8"
//                     src="/buttonarrows/redarico.svg"
//                     alt="Redarrow"
//                   />
//                 </a> */}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ---------- */}
//       <div className="bg-[#092241] py-16">
//         <div className="fix12  ">
//           <div className="lg:flex justify-between items-center gap-5 xl:gap-10">
//             <div className="leftCon relative overflow-hidden lg:w-[500px] h-[480px]  flex-shrink-0 flex items-center justify-center">
//               <img src="/investorRel/inms.png" alt="" />
//               {/* <motion.div
//                 className="absolute top-0 left-0 w-full h-full bg-[#092241]"
//                 initial={{ x: 0 }}
//                 whileInView={{ x: "100%" }}
//                 transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
//               /> */}
//             </div>
//             <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className=" text-white  overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
//               >
//                 Morgan Stanley Real Estate Investing (MSREF)
//               </motion.h1>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="overflow-hidden relative pt-5 xl:pt-10 space-y-[40px]"
//               >
//                 <p className="text-sm xl:text-base fsans-400 leading-[26px] text-[#eee]">
//                   Morgan Stanley Real Estate Investing (MSREI) is the global
//                   private real estate investment management arm of Morgan
//                   Stanley. One of the most active property investors in the
//                   world for over three decades, MSREI employs a disciplined
//                   approach through global real estate investment strategies.
//                   With 17 offices in 12 countries and 30-plus years of
//                   experience investing in the global markets, MSREI combines
//                   local market knowledge, established relationships and the
//                   powerful legacy of Morgan Stanley to identify, evaluate, and
//                   manage investments.
//                 </p>

//                 {/* <a
//                   target="_blank"
//                   href="https://www.morganstanley.com/content/imweb/im/en-us/intermediary-manager-research/about-us/investment-teams/real-assets/private-real-estate-investing-team.html"
//                   className="text-white fsans-600 flex gap-[10px] items-center text-[16px]"
//                 >
//                   Read more
//                   <img
//                     className="h-8 w-8"
//                     src="/buttonarrows/redarico.svg"
//                     alt="Redarrow"
//                   />
//                 </a> */}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ---------- */}
//       <div className="bg-[#EEF0F3] py-16">
//         <div className="fix12  ">
//           <div className="lg:flex justify-between items-center gap-10 flex-row-reverse">
//             <div className="leftCon relative overflow-hidden lg:w-[500px] h-[480px]  flex-shrink-0 flex items-center justify-center">
//               <img src="/investorRel/inpc.png" alt="" />
//               {/* <motion.div
//                 className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
//                 initial={{ x: 0 }}
//                 whileInView={{ x: "-100%" }}
//                 transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
//               /> */}
//             </div>
//             <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
//               <motion.h1
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="text-[#151515]  whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]"
//               >
//                 Pacific Century Group
//               </motion.h1>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.1, once: true }}
//                 className="overflow-hidden pt-5 xl:pt-10 space-y-[40px]"
//               >
//                 <p className="text-[#303030] text-sm xl:text-base fsans-400 leading-[26px] ">
//                   Pacific Century Group (PCG) is a private investment group
//                   based in Asia, founded in 1993. It focuses on three main
//                   business sectors: Technology, Media & Telecommunications
//                   (TMT), Financial Services, and Property. PCG has established a
//                   strong track record of successful investments and has built a
//                   sustainable network across Asia within these core sectors.
//                 </p>

//                 {/* <a
//                   target="_blank"
//                   href="http://www.pcg-group.com/about/"
//                   className="text-black fsans-600 flex gap-[10px] items-center text-[16px]"
//                 >
//                   Read more
//                   <img
//                     className="h-8 w-8"
//                     src="/buttonarrows/redarico.svg"
//                     alt="Redarrow"
//                   />
//                 </a> */}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*  */}
//     </>
//   );
// };

// export default InvesterCase;

// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////

"use client";
import React from "react";
import { motion } from "framer-motion";
const InvesterCase = () => {
  return (
    <>
      <div className="bg-[#092241] py-16">
        <div className="fix12  ">
          <div className="lg:flex justify-between items-start gap-5 xl:gap-10">
            <div className="leftCon relative overflow-hidden lg:w-[500px]  flex-shrink-0 flex items-start justify-start">
              <img src="/investorRel/inin.png" alt="" />
              {/* <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                initial={{ x: 0 }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              /> */}
            </div>
            <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
              <h1
                // initial={{ width: 0 }}
                // whileInView={{ width: "100%" }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className=" text-white pb-2 text-3xl whitespace-nowrap overflow-hidden leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
              >
                IndoSpace
              </h1>
              <div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="relative overflow-hidden pt-5 xl:pt-10 space-y-[40px]"
              >
                <p className="xl:text-base text-sm fsans-400 leading-[26px] text-[#eee]">
                  IndoSpace, a leading investor, developer, and manager of
                  Industrial & Logistics real estate in India, was founded in
                  2007. The company has a strong team of industry experts with
                  vast experience in the industrial real estate market.
                </p>
                {/* <p className="text-base fsans-400 leading-[26px] text-[#eee]">
                  IndoSpace is investing INR 1,000 crore (~ USD 120 million) in
                  a JV with KSH INFRA to develop a 10-million square feet
                  portfolio of world-class warehousing and industrial parks
                  across the country over the next five years.
                </p> */}
                {/* <a
                  target="_blank"
                  href="https://www.indospace.in/about/"
                  className="text-white fsans-600 flex gap-[10px] items-center text-[16px]"
                >
                  Read more
                  <img
                    className="h-8 w-8"
                    src="/buttonarrows/redarico.svg"
                    alt="Redarrow"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#EEF0F3] py-16">
        <div className="fix12  ">
          <div className="lg:flex justify-between items-start gap-5 xl:gap-10 flex-row-reverse">
            <div className="leftCon relative overflow-hidden lg:w-[500px]  flex-shrink-0 flex items-center justify-center">
              <img src="./investorRel/inmt.png" alt="" />
              {/* <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
                initial={{ x: 0 }}
                whileInView={{ x: "-100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              /> */}
            </div>
            <div className="RightCon max-w-1/2 flex flex-wrap wrap  xl-768:mt-14">
              <h1
                // initial={{ width: 0 }}
                // whileInView={{ width: "100%" }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-[#151515]  whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]"
              >
                Mapletree Investments - Singapore
              </h1>
              <div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className=" pt-10 space-y-[40px]"
              >
                <p className="text-[#303030] text-base fsans-400 leading-[26px] ">
                  Mapletree is a global company specializing in real estate
                  development, investment, capital, and property management,
                  with a strong commitment to sustainability. The company
                  continually creates new investment opportunities to meet the
                  evolving needs of investors and aims to expand its presence by
                  diversifying its portfolio with investments across the Asia
                  Pacific, Europe, the United Kingdom, and the United States.
                </p>
                {/* <a
                  target="_blank"
                  href="https://en.mapletree.com.sg/"
                  className="fsans-600 flex gap-[10px] items-center text-[16px]"
                >
                  Read more
                  <img
                    className="h-8 w-8"
                    src="/buttonarrows/redarico.svg"
                    alt="Redarrow"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#092241] py-16">
        <div className="fix12  ">
          <div className="lg:flex justify-between items-start gap-5 xl:gap-10">
            <div className="leftCon relative overflow-hidden lg:w-[500px]  flex-shrink-0 flex items-center justify-center">
              <img src="/investorRel/inms.png" alt="" />
              {/* <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#092241]"
                initial={{ x: 0 }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              /> */}
            </div>
            <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
              <h1
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className=" text-white  overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#D7D7D7] border-b-[1px]"
              >
                Morgan Stanley Real Estate Investing (MSREF)
              </h1>
              <div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="overflow-hidden relative pt-5 xl:pt-10 space-y-[40px]"
              >
                <p className="text-sm xl:text-base fsans-400 leading-[26px] text-[#eee]">
                  Morgan Stanley Real Estate Investing (MSREI) is the global
                  private real estate investment management arm of Morgan
                  Stanley. One of the most active property investors in the
                  world for over three decades, MSREI employs a disciplined
                  approach through global real estate investment strategies.
                  With 17 offices in 12 countries and 30-plus years of
                  experience investing in the global markets, MSREI combines
                  local market knowledge, established relationships and the
                  powerful legacy of Morgan Stanley to identify, evaluate, and
                  manage investments.
                </p>

                {/* <a
                  target="_blank"
                  href="https://www.morganstanley.com/content/imweb/im/en-us/intermediary-manager-research/about-us/investment-teams/real-assets/private-real-estate-investing-team.html"
                  className="text-white fsans-600 flex gap-[10px] items-center text-[16px]"
                >
                  Read more
                  <img
                    className="h-8 w-8"
                    src="/buttonarrows/redarico.svg"
                    alt="Redarrow"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#EEF0F3] py-16">
        <div className="fix12  ">
          <div className="lg:flex justify-between items-center gap-10 flex-row-reverse">
            <div className="leftCon relative overflow-hidden lg:w-[500px]  flex-shrink-0 flex items-center justify-center">
              <img src="/investorRel/inpc.png" alt="" />
              {/* <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
                initial={{ x: 0 }}
                whileInView={{ x: "-100%" }}
                transition={{ duration: 1.7, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ once: true, amount: 0.3 }} // Adjust amount to control trigger point
              /> */}
            </div>
            <div className="RightCon flex-1 lg:p-4 xl-768:mt-14">
              <h1
                // initial={{ width: 0 }}
                // whileInView={{ width: "100%" }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="text-[#151515]  whitespace-nowrap overflow-hidden pb-2 text-3xl leading-[33px] border-b-[#464646] border-b-[1px]"
              >
                Pacific Century Group
              </h1>
              <div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
                // viewport={{ amount: 0.1, once: true }}
                className="overflow-hidden pt-5 xl:pt-10 space-y-[40px]"
              >
                <p className="text-[#303030] text-sm xl:text-base fsans-400 leading-[26px] ">
                  Pacific Century Group (PCG) is a private investment group
                  based in Asia, founded in 1993. It focuses on three main
                  business sectors: Technology, Media & Telecommunications
                  (TMT), Financial Services, and Property. PCG has established a
                  strong track record of successful investments and has built a
                  sustainable network across Asia within these core sectors.
                </p>

                {/* <a
                  target="_blank"
                  href="http://www.pcg-group.com/about/"
                  className="text-black fsans-600 flex gap-[10px] items-center text-[16px]"
                >
                  Read more
                  <img
                    className="h-8 w-8"
                    src="/buttonarrows/redarico.svg"
                    alt="Redarrow"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default InvesterCase;
