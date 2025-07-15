import { motion } from "framer-motion";
import Link from "next/link";

const AboutOurLeadership = () => {
  return (
    <div className="bg-[#EEF0F3] overflow-hidden max-w-full">
      <div className="fix12 py-8 lg:py-[90px] relative">
        {/* Wrapper to prevent overflow */}
        <div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{
          //   duration: 1.4,
          //   ease: [0.7, 0, 0.4, 1],
          // }}
          // viewport={{ once: true, amount: 0.3 }}
          className="relative pb-[10px] border-b border-[#D7D7D7] overflow-hidden"
        >
          {/* Content container */}
          <div className="flex items-end justify-between">
            <h1 className="sm:text-3xl text-[24px] max-w-fit lg:text-[44px] fpt-600 whitespace-nowrap">
              Our Leadership
            </h1>

            <Link
              href="/our-team"
              className="w-fit items-center text-sm btnCon lg:text-[18px] fsans-600 bg-[#E30613] gap-[8px] sm:gap-[10px] text-white py-2 flex px-4 lg:px-5 lg:py-3 rounded-[70px] group"
            >
              Meet The Team
              <svg
                className="rotate-45 group-hover:rotate-0 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_1485_4525)">
                  <path
                    d="M4.58771 19.6612L18.2422 6.8877"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.2452 17.7075L19.2452 6.85429C19.2452 6.32071 18.7829 5.88816 18.2125 5.88816L6.50391 5.88816"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1485_4525">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(24 24.5) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>

          {/* Mask covering entire section including the border */}
        </div>

        {/* Image Section */}
        <div className="ImgCon relative overflow-hidden pt-[30px] lg:pt-[50px]">
          <img src="/AboutPage/AboutOurLeadership.png" alt="" />
          {/* <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#EEF0F3]"
            initial={{ translateX: 0 }}
            whileInView={{ translateX: "100%" }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutOurLeadership;
