"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const getLinkData = (acbtn) => {
  if (acbtn === "Case Studies") {
    return { href: "/case-studies", text: "Explore Case Study" };
  } else if (acbtn === "News") {
    return { href: "/blogs", text: "Explore News" };
  } else if (acbtn === "Press Release") {
    return { href: "/blogs", text: "Explore Press Release" };
  }
  return { href: "#", text: "Explore More" }; // Fallback for other tabs
};

const Card = ({ todos, activeSidebar, acbtn }) => {
  const activeItem = todos.find((item) => item.id === activeSidebar);
  const linkData = getLinkData(acbtn);

  // If no active item is found, display a default message
  if (!activeItem) {
    return <div className="text-center"></div>;
  }

  // return (
  //   <div className="flex flex-col xl:w-[710px] xl-1280:w-[650px] w-full md:pb-[30px] lg:min-h-[550px] overflow-hidden">
  //     <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
  //       <motion.div
  //         initial={{ x: 200, opacity: 0 }}
  //         whileInView={{ x: 0, opacity: 1 }}
  //         viewport={{ once: true, amount: 0.1 }}
  //         transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
  //         className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-[700px] h-[300px]"
  //       >
  //         {/* Dynamically update the image based on the active item */}
  //         <img
  //           src={activeItem.image || "/defaultImage.png"} // Use the image from activeItem or a default image
  //           alt={activeItem.title || "Default Image"}
  //           className="w-full object-cover h-full"
  //         />
  //       </motion.div>
  //     </div>
  //     <motion.h3
  //       initial={{ x: 200, opacity: 0 }}
  //       whileInView={{ x: 0, opacity: 1 }}
  //       viewport={{ once: true, amount: 0.1 }}
  //       transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1], delay: 0.1 }}
  //       className="fsans-600 lg:text-[28px] min-1366:h-[120px] h-[150px] text-[24px] text-white spotlightheaddd pt-[23px]"
  //     >
  //       {activeItem.content || "No Data Available"}
  //     </motion.h3>
  //     <motion.div
  //       className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
  //       initial={{ x: 100, opacity: 0 }}
  //       whileInView={{ x: 0, opacity: 1 }}
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.9, delay: 0.1 }}
  //     >
  //       {/* Use Next.js Link component in place of a button */}
  //       <Link
  //         href={activeItem.href || "#"} // Dynamically use the href from the active item
  //         // {...(activeItem.newTab
  //         //   ? { target: "_blank", rel: "noopener noreferrer" }
  //         //   : {})}
  //         className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
  //       >
  //         <img
  //           src="/buttonarrows/redarico.svg"
  //           width={0}
  //           height={0}
  //           className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
  //           alt="Red Arrow Icon"
  //         />
  //         <p className="text-[#ffffff] fsans-600 text-[16px]">
  //           {linkData.text}
  //         </p>
  //       </Link>
  //     </motion.div>
  //   </div>
  // );
  return (
    // <div className="flex flex-col xl:w-[710px] xl-1280:w-[650px] w-full md:pb-[30px] lg:min-h-[550px] overflow-hidden">
    //   <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
    //     <motion.div
    //       initial={{ x: 200, opacity: 0 }}
    //       whileInView={{ x: 0, opacity: 1 }}
    //       viewport={{ once: true, amount: 0.1 }}
    //       transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
    //       className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-[700px] h-[300px]"
    //     >
    //       <AnimatePresence mode="wait">
    //         <motion.img
    //           key={activeItem.image}
    //           src={activeItem.image || "/defaultImage.png"}
    //           alt={activeItem.title || "Default Image"}
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //           className="w-full object-cover h-full"
    //         />
    //       </AnimatePresence>
    //     </motion.div>
    //   </div>

    //   <motion.div
    //     initial={{ x: 200, opacity: 0 }}
    //     whileInView={{ x: 0, opacity: 1 }}
    //     viewport={{ once: true, amount: 0.1 }}
    //     transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1], delay: 0.1 }}
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.h3
    //         key={activeItem.content}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //         className="fsans-600 lg:text-[28px] min-1366:h-[120px] h-[150px] text-[24px] text-white spotlightheaddd pt-[23px]"
    //       >
    //         {activeItem.content || "No Data Available"}
    //       </motion.h3>
    //     </AnimatePresence>
    //   </motion.div>

    //   <motion.div
    //     initial={{ x: 100, opacity: 0 }}
    //     whileInView={{ x: 0, opacity: 1 }}
    //     viewport={{ once: true }}
    //     transition={{ duration: 0.9, delay: 0.1, ease: [0.7, 0, 0.4, 1] }}
    //     className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={activeItem.href}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //       >
    //         <Link
    //           href={activeItem.href || "#"}
    //           className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
    //         >
    //           <img
    //             src="/buttonarrows/redarico.svg"
    //             width={0}
    //             height={0}
    //             className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
    //             alt="Red Arrow Icon"
    //           />
    //           <p className="text-[#ffffff] fsans-600 text-[16px]">
    //             {linkData.text}
    //           </p>
    //         </Link>
    //       </motion.div>
    //     </AnimatePresence>
    //   </motion.div>
    // </div>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // <div className="flex flex-col xl:w-[600px] xl-1280:w-[650px] w-full md:pb-[30px] lg:min-h-[550px] overflow-hidden">
    //   <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
    //     <motion.div
    //       initial={{ x: 200, opacity: 0 }}
    //       whileInView={{ x: 0, opacity: 1 }}
    //       viewport={{ once: true, amount: 0.1 }}
    //       transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
    //       className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-[600px] h-[257px]"
    //     >
    //       <AnimatePresence mode="wait">
    //         <motion.img
    //           key={activeItem.image}
    //           src={activeItem.image || "/defaultImage.png"}
    //           alt={activeItem.title || "Default Image"}
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //           className="w-full object-cover h-full"
    //         />
    //       </AnimatePresence>
    //     </motion.div>
    //   </div>

    //   <motion.div
    //     initial={{ x: 200, opacity: 0 }}
    //     whileInView={{ x: 0, opacity: 1 }}
    //     viewport={{ once: true, amount: 0.1 }}
    //     transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1], delay: 0.1 }}
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.h3
    //         key={activeItem.content}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //         className="fsans-600 lg:text-[28px] text-[24px] text-white spotlightheaddd pt-[23px]"
    //       >
    //         {activeItem.content || "No Data Available"}
    //       </motion.h3>
    //     </AnimatePresence>
    //   </motion.div>

    //   <motion.div
    //     initial={{ x: 100, opacity: 0 }}
    //     whileInView={{ x: 0, opacity: 1 }}
    //     viewport={{ once: true }}
    //     transition={{ duration: 0.9, delay: 0.1, ease: [0.7, 0, 0.4, 1] }}
    //     className="flex cursor-pointer group items-center justify-between font-semibold text-[#ffffff] text-[16px] h-[50px] w-fit"
    //   >
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={activeItem.href}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
    //       >
    //         <Link
    //           href={activeItem.href || "#"}
    //           className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
    //         >
    //           <img
    //             src="/buttonarrows/redarico.svg"
    //             width={0}
    //             height={0}
    //             className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
    //             alt="Red Arrow Icon"
    //           />
    //           <p className="text-[#ffffff] fsans-600 text-[16px]">
    //             {linkData.text}
    //           </p>
    //         </Link>
    //       </motion.div>
    //     </AnimatePresence>
    //   </motion.div>
    // </div>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // <div className="flex flex-col xl:w-[600px] xl-1280:w-[650px] w-full lg:pb-[30px] h-[400px] md:h-[410px] lg:h-[480px]">
    //   <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={activeItem.image}
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    //         className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-full md:h-[250px] lg:max-w-[600px] h-[200px] lg:h-[257px]"
    //       >
    //         <motion.img
    //           key={activeItem.image}
    //           src={activeItem.image || "/defaultImage.png"}
    //           alt={activeItem.title || "Default Image"}
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    //           className="w-full object-cover h-full"
    //         />
    //       </motion.div>
    //     </AnimatePresence>
    //   </div>

    //   <AnimatePresence mode="wait">
    //     <motion.div
    //       key={activeItem.content}
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    //     >
    //       <motion.h3
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    //         className="fsans-600 min-1440:text-[28px] md:text-[24px] text-[20px] leading-[150%] text-white spotlightheaddd pt-[23px]"
    //       >
    //         {activeItem.content || "No Data Available"}
    //       </motion.h3>
    //     </motion.div>
    //   </AnimatePresence>

    //   <AnimatePresence mode="wait">
    //     <motion.div
    //       key={activeItem.href}
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
    //       className="flex cursor-pointer group items-center justify-between pt-[23px] font-semibold text-[#ffffff] text-[16px] h-fit w-fit"
    //     >
    //       <Link
    //         href={activeItem.href || "#"}
    //         className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
    //       >
    //         <img
    //           src="/buttonarrows/redarico.svg"
    //           width={0}
    //           height={0}
    //           className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
    //           alt="Red Arrow Icon"
    //         />
    //         <p className="text-[#ffffff] fsans-600 text-[16px]">
    //           {linkData.text}
    //         </p>
    //       </Link>
    //     </motion.div>
    //   </AnimatePresence>
    // </div>
    <div className="flex lg:justify-end flex-col xl:w-[600px] xl-1280:w-[650px] w-full h-[400px] md:h-[410px] lg:h-[480px]">
      <div className="xl:min-w-fit lg:min-h-fit max-w-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            className="border-[10px] border-[#6E5E55] xl:min-w-fit max-w-full md:h-[250px] lg:max-w-[600px] h-[200px] lg:h-[257px]"
          >
            <motion.img
              key={activeItem.image}
              src={activeItem.image || "/defaultImage.png"}
              alt={activeItem.title || "Default Image"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
              className="w-full object-cover h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
            className="fsans-600 min-1440:text-[28px] md:text-[24px] text-[20px] leading-[150%] text-white spotlightheaddd pt-[23px]"
          >
            {activeItem.content || "No Data Available"}
          </motion.h3>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.href}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
          className="flex cursor-pointer group items-center justify-between pt-[23px] font-semibold text-[#ffffff] text-[16px] h-fit w-fit"
        >
          <Link
            href={activeItem.href || "#"}
            className="flex group transition-transform duration-[400ms] items-center justify-center gap-3"
          >
            <img
              src="/buttonarrows/redarico.svg"
              width={0}
              height={0}
              className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
              alt="Red Arrow Icon"
            />
            <p className="text-[#ffffff] fsans-600 text-[16px]">
              {linkData.text}
            </p>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Card;
