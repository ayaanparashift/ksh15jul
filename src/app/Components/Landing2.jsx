// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const fadeIn = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
//   exit: {
//     opacity: 0,
//     y: -100,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };
// const fadeIn2 = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
//   exit: {
//     opacity: 0,
//     x: 100,
//     transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
//   },
// };

// const Landing2 = ({ isActive }) => {
//   return (
//     <motion.div
//       className="bg-[url(/fistfold.png)] bg-cover bg-center min-w-screen"
//       initial="hidden"
//       animate={isActive ? "visible" : "hidden"}
//       exit="exit"
//     >
//       <div className="w-full flex items-center lg:justify-center justify-end xl-1600:max-h-fit md:h-screen h-[90vh] pb-[75px] pt-[0px] md:py-[92px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
//         {/* Left Side Content */}
//         <motion.div
//           className="ml-[max(5%,calc((100vw-1250px)/2))] xl:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] flex min-1920:mt-[190px] flex-col flex-1 max-w-full lg:gap-[30px] gap-2 xl:flex-[1] xl-1920:h-[500px] xl-1600:h-[500px] xl:h-[400px] md:h-[500px] md:justify-end h-full"
//           variants={fadeIn2}
//           initial="hidden"
//           animate={isActive ? "visible" : "hidden"}
//           exit="exit"
//         >
//           <motion.h1
//             className="fpt-500 max-w-fit  xl:text-[52px] lg:text-[40px] min-1366:text-[70px] text-[28px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[105%] min-1600:text-[70px]"
//             variants={fadeIn2}
//           >
//             Launching <br />
//             KSH Hosur Park 1 <br />- Near Bengaluru
//           </motion.h1>
//           <motion.p
//             className="fsans-500 text-[14px] lg:text-[18px] xl:text-[20px] leading-[26px]"
//             style={{
//               backgroundImage: "linear-gradient(to bottom, #ffffff, #5F7B9E)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               color: "transparent",
//             }}
//             variants={fadeIn2}
//           >
//             KSH’s newest park in the thriving Bengaluru–Hosur corridor offers
//             1.2 million sq. ft. of ready Grade A industrial and logistics
//             infrastructure—built for speed, safety, and growth.
//           </motion.p>
//           <motion.div variants={fadeIn}>
//             <Link
//               href="/ksh-hosur-i"
//               className="flex group w-full transition-transform duration-[400ms] items-center justify-start gap-3"
//             >
//               <img
//                 src="/buttonarrows/redarico.svg"
//                 width={0}
//                 height={0}
//                 className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                 alt="Red Arrow Icon"
//               />
//               <p className="text-[#ffffff] text-[16px] fsans-600">
//                 Explore Hosur Park I
//               </p>
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           className="md:min-h-full min-h-fit max-w-full md:w-auto w-full h-fit flex-1 flex flex-col justify-center items-end"
//           variants={fadeIn}
//           initial="hidden"
//           animate={isActive ? "visible" : "hidden"}
//           exit="exit"
//         >
//           <motion.div
//             className="flex items-end justify-center flex-col min-1600:h-[695px] pt-32 xl:pt-[75px] md:pt-[150px] min-1920:pt-[300px] min-1600:pt-[150px] xl:h-[595px] max-w-full md:w-auto w-full"
//             variants={fadeIn}
//           >
//             {/* Desktop Image */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <motion.img
//                 src="/homepage/hospot.png"
//                 className="object-cover w-[704px] min-1600:inline-block hidden"
//                 alt="some"
//                 variants={fadeIn}
//               />
//               <motion.img
//                 src="/homepage/hospot.png"
//                 className="object-cover w-[704px] min-1600:hidden md:inline-block hidden"
//                 alt="some"
//                 variants={fadeIn}
//               />
//             </motion.div>

//             {/* Mobile Image */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="w-full max-w-[1250px] mx-auto px-5 md:hidden"
//             >
//               <motion.img
//                 src="/homepage/hshomeph.png"
//                 className="object-cover w-full"
//                 alt="some"
//                 variants={fadeIn}
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Landing2;

import Link from "next/link";

const Landing2 = () => {
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center min-w-screen">
      <div className="w-full flex items-center lg:justify-center justify-end xl-1600:max-h-fit md:h-screen h-[90vh] pb-[75px] pt-[0px] md:py-[92px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
        {/* Left Side Content */}
        <div className="ml-[max(5%,calc((100vw-1250px)/2))] xl:mr-0 mr-[max(5%,calc((100vw-1250px)/2))] flex min-1920:mt-[190px] flex-col flex-1 max-w-full lg:gap-[30px] gap-2 xl:flex-[1] xl-1920:h-[500px] xl-1600:h-[500px] xl:h-[400px] md:h-[500px] md:justify-end h-full">
          <h1 className="fpt-500 max-w-fit xl:text-[52px] lg:text-[40px] min-1366:text-[70px] text-[28px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[105%] min-1600:text-[70px]">
            Launching - <br />
            KSH INFRA Park <br />
            in Bangalore
          </h1>
          <p
            className="fsans-500 text-[14px] lg:text-[18px] xl:text-[20px] leading-[26px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #5F7B9E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            KSH’s newest park in the thriving Bengaluru–Hosur corridor offers
            1.2 million sq. ft. of ready Grade A industrial and logistics
            infrastructure—built for speed, safety, and growth.
          </p>
          <div>
            <Link
              href="/ksh-hosur-i"
              className="flex group w-full transition-transform duration-[400ms] items-center justify-start gap-3"
            >
              <img
                src="/buttonarrows/redarico.svg"
                width={40}
                height={40}
                className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] text-[16px] fsans-600">
                Explore Hosur Park I
              </p>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:min-h-full min-h-fit max-w-full md:w-auto w-full h-fit flex-1 flex flex-col justify-center items-end">
          <div className="flex items-end justify-center flex-col min-1600:h-[695px] pt-32 xl:pt-[75px] md:pt-[150px] min-1920:pt-[300px] min-1600:pt-[150px] xl:h-[595px] max-w-full md:w-auto w-full">
            {/* Desktop Image */}
            <div>
              <div className="min-1600:inline-block hidden">
                <img
                  src="/homepage/hospot.png"
                  alt="some"
                  width={704}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="min-1600:hidden md:inline-block hidden">
                <img
                  src="/homepage/hospot.png"
                  alt="some"
                  width={704}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Image */}
            <div className="w-full max-w-[1250px] mx-auto px-5 md:hidden">
              <img
                src="/homepage/hshomeph.png"
                alt="some"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
