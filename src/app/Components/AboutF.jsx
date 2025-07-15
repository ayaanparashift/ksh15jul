"use client";
import { motion } from "framer-motion";
import Countersec from "./Counter/Countersec";
import ButtomComp from "./ButtonComp";
import LineHead from "./Heading/LineHead";
import Map1 from "./MapComponents/Map1";
import MapNew from "./MapComponents/MapNew";

const AboutF = () => {
  return (
    <div className="w-full max-h-fit relative">
      <div className="fix12 py-[50px] md:py-[92px] h-full flex flex-col justify-end">
        <LineHead heading={"About Us"} clr="text-[#092241]" bclr="#D7D7D7" />
        <div className="flex lg:flex-row flex-col justify-start items-start gap-[36px] sm:gap-[44px] lg:gap-[84px]">
          <div
            className="hidden xl:flex"
            style={{
              width: "502px !important", // Fixed width for parent container
              height: "500px", // Fixed height for the container
              minWidth: "502px !important",
            }}
          >
            <div
              // initial={{ width: 0 }}
              // whileInView={{ width: "502px" }} // Ensures width animation smoothly
              // viewport={{ once: true, amount: 0.1 }}
              // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              style={{
                width: "502px",
                overflow: "hidden",
                height: "500px",
                display: "block",
              }}
            >
              <img
                src="/homepage/abc1.png"
                alt="Warehouse"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="flex xl:hidden max-w-full w-full">
            <div
              // initial={{ x: "-99.99999%", opacity: 0 }}
              // whileInView={{ x: "0", opacity: 1 }}
              // viewport={{ amount: 0.01, once: true }}
              // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
              className="w-full max-w-full"
            >
              <img
                src="/homepage/abc1.png"
                alt="Warehouse"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-[28px] lg:gap-[36px] xl:gap-[48px]">
            <div
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{
            //   duration: 1.2,
            //   easing: [0.7, 0, 0.4, 1],
            //   delay: 0.6,
            // }}
            >
              <h2
                className="fsans-700 text-[22px] leading-[130%] 2xl:text-[31px] xl:text-[26px] aboutpioneer"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #092241, #1757A7)", // Replace with your gradient colors
                  WebkitBackgroundClip: "text", // For WebKit-based browsers
                  WebkitTextFillColor: "transparent", // Ensures only the text takes on the gradient
                  backgroundClip: "text", // Fallback for other browsers (optional)
                  color: "transparent",
                }}
              >
                At KSH INFRA, we develop Grade A Industrial & Logistics Parks,
                built on the foundations of trust, integrity, and environmental
                sustainability.
              </h2>
            </div>
            <div
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{
            //   duration: 1.2,
            //   easing: [0.7, 0, 0.4, 1],
            //   delay: 0.6,
            // }}
            >
              <p className="flato-400 text-[18px] leading-[26px] text-[#6C8DAB] w-[300px]">
                We remain the preferred choice for leading organizations at a
                growing number of industrial hubs nationwide.
              </p>
            </div>
            <ButtomComp />
          </div>
        </div>
        <div className="absolute right-[120px] xl-1920:right-[310px] w-[373px] h-[251px] min-w-[373px] 2xl:flex hidden">
          <div
            className="flex justify-end h-[251px] overflow-hidden"
            // initial={{ width: 0 }}
            // whileInView={{ width: "373px" }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
          >
            <img
              src="/homepage/abc2.png"
              alt="Truck"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="absolute right-[0px]  w-[298.4px] h-[200.8px] min-w-[298.4px] xl:flex 2xl:hidden hidden">
          <div
            className="flex justify-end h-[200.8px] overflow-hidden"
            // initial={{ width: 0 }}
            // whileInView={{ width: "298.4px" }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
          >
            <img
              src="/homepage/abc2.png"
              alt="Truck"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="absolute right-0 w-[186.5px] xl:right-[80px]  h-[125.5px] min-w-[186.5px] lg:flex xl:hidden md:flex hidden">
          <div
            className="flex justify-end h-[125.5px] overflow-hidden"
            // initial={{ width: 0 }}
            // whileInView={{ width: "186.5px" }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
          >
            <img
              src="/homepage/abc2.png"
              alt="Truck"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
      <Countersec />
      <div className="">
        <MapNew />
      </div>
    </div>
  );
};

export default AboutF;
