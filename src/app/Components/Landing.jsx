"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};
const fadeIn2 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
  },
};

const Landing = ({ isActive }) => {
  return (
    <motion.div
      className="bg-[url(/fistfold.png)] bg-cover bg-center min-w-screen"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="fix12 flex items-center lg:justify-center justify-end xl-1600:max-h-fit md:h-screen h-[90vh] pb-[75px] pt-[0px] md:py-[92px] xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
        {/* Left Side Content */}
        <motion.div
          className="flex min-1920:mt-[190px] flex-col flex-1 max-w-full lg:gap-[30px] gap-5 xl:flex-[1] xl-1920:h-[500px] xl-1600:h-[500px] xl:h-[400px] md:h-[500px] md:justify-end h-full"
          variants={fadeIn2}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.h1
            className="fpt-600 max-w-fit min-1366:text-[65px] xl:text-[52px] lg:text-[40px] text-[28px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[105%] min-1600:text-[70px]"
            variants={fadeIn2}
          >
            Delivering
            <br className="md:flex hidden" /> Grade A Industrial{" "}
            <br className="md:flex hidden" /> & Logistics Parks
          </motion.h1>
          <motion.p
            className="fsans-500 text-[14px] lg:text-[18px] xl:text-[20px] leading-[26px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #5F7B9E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
            variants={fadeIn2}
          >
            We deliver on our promises, with expertise in land acquisition, site
            selection, and customised facility development to fit your needs and
            schedule.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="/about-ksh"
              className="flex group w-full transition-transform duration-[400ms] items-center justify-start gap-3"
            >
              <Image
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] text-[16px] fsans-600">
                Learn More About KSH INFRA
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="md:min-h-screen min-h-fit h-fit flex-1 flex flex-col justify-end items-end"
          variants={fadeIn}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.div
            className="flex items-end justify-end flex-col min-1600:h-[695px] xl:w-[490.45px] xl:h-[595px] max-w-full"
            variants={fadeIn}
          >
            {/* Desktop Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src="/homepage/landimg1920.png"
                className="object-cover min-1600:inline-block hidden"
                alt="some"
                variants={fadeIn}
              />
              <motion.img
                src="/firstman.png"
                className="object-cover min-1600:hidden md:inline-block hidden"
                alt="some"
                variants={fadeIn}
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src="/landingph.jpg"
                className="object-cover md:hidden inline-block"
                alt="some"
                variants={fadeIn}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
