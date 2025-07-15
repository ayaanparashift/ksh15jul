// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// const CareerAcc = () => {
//   const [openIndex, setOpenIndex] = useState(0); // Always keeps one item open

//   const accordionData = [
//     {
//       title: "Embracing Diversity",
//       content:
//         "The KSH INFRA Code of Conduct Handbook sets a high bar for compliance. This encompasses every aspect of how our team interacts with internal and external stakeholders to how our projects are commissioned and managed.",
//       image: "Career/carimg1.png",
//     },
//     {
//       title: "Shining the Spotlight",
//       content:
//         "Not only do KSH INFRA parks offer the best-in-class amenities, they also ensure that the safety protocols and facilities are given the highest priority. Safety is integral to our operations, and this enables us to deliver reliable, compliant and sustainable infrastructure.",
//       image: "Career/carimg1.png",
//     },
//     {
//       title: "Fostering Safety and Growth",
//       content:
//         "We create value for society and our stakeholders through numerous channels, such as employment opportunities, tax payment assistance, supply chain participation and investment in local communities.",
//       image: "Career/carimg1.png",
//     },
//     {
//       title: "Mentoring Future Leaders",
//       content:
//         "The KSH INFRA Code of Conduct Handbook sets a high bar for compliance. This encompasses every aspect of how our team interacts with internal and external stakeholders to how our projects are commissioned and managed.",
//       image: "Career/carimg1.png",
//     },
//     {
//       title: "Mentoring for Women",
//       content:
//         "Not only do KSH INFRA parks offer the best-in-class amenities, they also ensure that the safety protocols and facilities are given the highest priority. Safety is integral to our operations, and this enables us to deliver reliable, compliant and sustainable infrastructure.",
//       image: "Career/carimg1.png",
//     },
//     {
//       title: "Sustainable at Heart",
//       content:
//         "We create value for society and our stakeholders through numerous channels, such as employment opportunities, tax payment assistance, supply chain participation and investment in local communities.",
//       image: "Career/carimg1.png",
//     },
//   ];

//   const toggleAccordion = (index) => {
//     if (openIndex !== index) {
//       setOpenIndex(index);
//     }
//   };

//   return (
//     // <div className="bg-[#FFFFFF]">
//     //   <div className="min-1366:ml-[calc((100vw-1250px)/2)] xl-1280:ml-[60px] xl-1024:ml-[50px]">
//     //     <div className="flex justify-between items-stretch max-w-screen xl-1280:gap-0 gap-4">
//     //       {/* Left - Text Content */}
//     //       <motion.div
//     //         initial={{ opacity: 0 }}
//     //         whileInView={{ opacity: 1 }}
//     //         transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//     //         viewport={{ once: true, amount: 0.3 }}
//     //         className="w-full flex justify-center flex-col"
//     //       >
//     //         {accordionData.map((item, index) => (
//     //           <div
//     //             key={index}
//     //             className="border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
//     //           >
//     //             <div
//     //               className="flex items-center justify-between cursor-pointer"
//     //               onClick={() => toggleAccordion(index)}
//     //             >
//     //               <h1 className="text-[#7A7A7A] fsans-700 md:text-[22px] text-[18px] uppercase py-[25px]">
//     //                 {item.title}
//     //               </h1>
//     //               <img
//     //                 src={
//     //                   openIndex === index
//     //                     ? "Career/Icons/accm.svg"
//     //                     : "Career/Icons/accp.svg"
//     //                 }
//     //                 alt=""
//     //               />
//     //             </div>
//     //             {openIndex === index && (
//     //               <div>
//     //                 <p className="text-[#434343] fsans-400 text-base pt-0 pb-[25px]">
//     //                   {item.content}
//     //                 </p>
//     //               </div>
//     //             )}
//     //           </div>
//     //         ))}
//     //       </motion.div>

//     //       {/* Right - Image */}
//     //       <div className="relative overflow-hidden hidden lg:block w-full h-full">
//     //         <img
//     //           src={accordionData[openIndex]?.image}
//     //           className="w-full h-full object-cover"
//     //           alt="Accordion Image"
//     //         />
//     //         <motion.div
//     //           initial={{ x: 0 }}
//     //           whileInView={{ x: "100%" }}
//     //           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//     //           viewport={{ once: true, amount: 0.3 }}
//     //           className="absolute h-full left-0 top-0 bg-[#092241] z-20 w-full"
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//   );
// };

// export default CareerAcc;

"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const CareerAcc = () => {
  const [openIndex, setOpenIndex] = useState(0); // Always keeps one item open
  const contentRefs = useRef([]);

  const accordionData = [
    {
      title: "Career Growth & Learning Opportunities",
      content: `
          <p>We give our team clear paths to advance their careers, mentorship from top industry experts, and specialized training programs.</p>
          <br/>
          <p>Our employees benefit from well-defined professional growth opportunities. They learn directly from experienced leaders and gain new skills through targeted training designed for their specific needs. We encourage professional development through:</p>
          <br/>
          <ul class="list-disc pl-[20px]">
            <li>Leadership and Management Training</li>
            <li>Industry Certifications and Sponsored Learning</li>
            <li>Cross-Functional Learning Opportunities</li>
            <li>Internal Promotion Avenues</li>
          </ul>
      `,
      image: "Career/carimg1.png",
    },
    {
      title: "Collaboration & Inclusion",
      content: `
          <p>
              We thrive on teamwork, transparency, and respect. We welcome diverse viewpoints at KSH INFRA and value what each employee brings to the table. Our inclusive policies give everyone equal chances to grow, no matter their background.
          </p>
          <br/>
          <p>
            Through open conversations and supportive leadership, we help our people bring their full potential to work daily. We believe diverse, inclusive teams create better solutions and stronger results.
          </p>`,
      image: "Career/carimg1.png",
    },
    {
      title: "Work-Life Balance Initiatives",
      content: `
        <p>
           We understand that a meaningful career cannot thrive without personal well-being. Our commitment to work-life balance enables employees to excel professionally while also making time for family, personal development, and wellness. We promote:
        </p>
        <br/>
        <ul class="list-disc pl-[20px]">
          <li>Flexible Work Policies</li>
          <li>Mental Health and Wellness Programs</li>
          <li>Employee Engagement Activities and Recreational Initiatives</li>
          <li>Paid Time off and Leave Benefits to Recharge and Refresh</li>
        </ul>`,
      image: "Career/carimg1.png",
    },
    {
      title: "Employee Benefits & Perks",
      content: `
        <p>
          We provide a comprehensive benefits package that ensures financial security, health coverage, and performance-driven rewards. Employees at KSH INFRA enjoy:
        </p>
        <br />
        <ul class="list-disc pl-[20px]">
          <li>Competitive Salary Packages with Performance Incentives</li>
          <li>Comprehensive Health and Wellness Benefits</li>
          <li>Retirement and Financial Planning Support</li>
          <li>Recognition Programs and Awards for Outstanding Contributions</li>
        </ul>
        `,
      image: "Career/carimg1.png",
    },
    {
      title: "Committed to Sustainability",
      content: `
        <p>
          Sustainability is integral to everything we do—from our business practices to our workplace initiatives. We practice and promote eco-conscious efforts, corporate social responsibility, and green initiatives that contribute to a better world for future generations.
        </p>
        `,
      image: "Career/carimg1.png",
    },
  ];

  const toggleAccordion = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    if (contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].style.height =
        contentRefs.current[openIndex].scrollHeight + "px";
    }

    contentRefs.current.forEach((el, i) => {
      if (i !== openIndex && el) el.style.height = "0px";
    });
  }, [openIndex]);

  // return (
  //   <div className="bg-[#FFFFFF] ">
  //     <div className="min-1366:ml-[calc((100vw-1250px)/2)] xl-1280:ml-[60px] xl-1024:ml-[50px]">
  //       <div className="flex justify-between items-stretch max-w-screen gap-[70px] xl:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] xl:ml-0 ml-[max(5%,calc((100vw-1250px)/2))]">
  //         {/* Left - Text Content */}
  //         <motion.div
  //           initial={{ opacity: 0 }}
  //           whileInView={{ opacity: 1 }}
  //           transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
  //           viewport={{ once: true, amount: 0.3 }}
  //           className="w-full flex justify-center flex-col py-[5%] lg:py-[120px]"
  //         >
  //           {accordionData.map((item, index) => (
  //             <div
  //               key={index}
  //               className="border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
  //             >
  //               {/* Header */}
  //               <div
  //                 className="flex items-center justify-between cursor-pointer py-[25px]"
  //                 onClick={() => toggleAccordion(index)}
  //               >
  //                 <h1 className="text-[#7A7A7A] fsans-700 md:text-[22px] text-[18px]">
  //                   {item.title}
  //                 </h1>
  //                 <img
  //                   src={
  //                     openIndex === index
  //                       ? "Career/Icons/accm.svg"
  //                       : "Career/Icons/accp.svg"
  //                   }
  //                   alt="Toggle"
  //                 />
  //               </div>

  //               {/* Content - Slide Down/Up Without Layout Shift */}
  //               <div
  //                 ref={(el) => (contentRefs.current[index] = el)}
  //                 className="overflow-hidden transition-all duration-500 ease-in-out"
  //                 style={{ height: "0px" }}
  //               >
  //                 <p
  //                   dangerouslySetInnerHTML={{ __html: item.content }}
  //                   className="text-[#434343] fsans-400 text-base pt-0 pb-[25px]"
  //                 ></p>
  //               </div>
  //             </div>
  //           ))}
  //         </motion.div>

  //         {/* Right - Image */}
  //         <div className="relative overflow-hidden hidden xl:block w-full min-h-full">
  //           {accordionData[openIndex] && (
  //             <img
  //               src={accordionData[openIndex]?.image}
  //               className="w-auto h-[948px] object-cover transition-opacity duration-500"
  //               alt="Accordion Image"
  //             />
  //           )}
  //           <motion.div
  //             initial={{ x: 0 }}
  //             whileInView={{ x: "100%" }}
  //             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
  //             viewport={{ once: true, amount: 0.3 }}
  //             className="absolute h-full left-0 top-0 bg-[#092241] z-20 w-full"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-[#FFFFFF] ">
      <div className="min-1366:ml-[calc((100vw-1250px)/2)] xl-1280:ml-[60px] xl-1024:ml-[50px]">
        <div className="flex justify-between items-stretch max-w-screen gap-[70px] xl:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] xl:ml-0 ml-[max(5%,calc((100vw-1250px)/2))]">
          {/* Left - Text Content */}
          <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            // viewport={{ once: true, amount: 0.3 }}
            className="w-full h-auto max-h-[732px] lg:min-h-[732px] lg:h-[732px] flex justify-center flex-col"
          >
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border-[#D7D7D7] border-b-[1px] border-opacity-35 last:border-none"
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between cursor-pointer py-[25px]"
                  onClick={() => toggleAccordion(index)}
                >
                  <h1 className="text-[#7A7A7A] fsans-700 md:text-[22px] text-[18px]">
                    {item.title}
                  </h1>
                  <img
                    src={
                      openIndex === index
                        ? "Career/Icons/accm.svg"
                        : "Career/Icons/accp.svg"
                    }
                    alt="Toggle"
                  />
                </div>

                {/* Content - Slide Down/Up Without Layout Shift */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ height: "0px" }}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="text-[#434343] fsans-400 text-base pt-0 pb-[25px]"
                  ></p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative overflow-hidden hidden xl:block w-full min-h-full">
            {accordionData[openIndex] && (
              <img
                src={accordionData[openIndex]?.image}
                className="w-auto h-full object-cover transition-opacity duration-500"
                alt="Accordion Image"
              />
            )}
            {/* <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute h-full left-0 top-0 bg-[#092241] z-20 w-full"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAcc;
