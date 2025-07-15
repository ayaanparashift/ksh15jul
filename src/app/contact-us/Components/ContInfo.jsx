"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const ContInfo = () => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1] }}
      // viewport={{ amount: 0.3, once: true }}
      className="flex flex-col gap-[30px] xl:gap-[60px] xl:pb-0 pb-10"
    >
      <div className="flex flex-col gap-[10px] xl:gap-[30px]">
        {/* email */}
        <div className="flex gap-[10px] items-center justify-center w-fit">
          <div>
            <img src="/contact/icons/contem.svg" alt="Contact Email" />
          </div>
          <div>
            <Link
              className="fsans-400 text-[18px] leading-[111%] text-[#5E5E5E]"
              href="mailto:leasing@kshinfra.com"
            >
              leasing@kshinfra.com
            </Link>
          </div>
        </div>
        {/* Phone */}
        <div className="flex gap-[10px] items-center justify-center w-fit">
          <div>
            <img src="/contact/icons/contph.svg" alt="Contact Email" />
          </div>
          <div>
            <Link
              className="fsans-400 text-[18px] leading-[111%] text-[#5E5E5E]"
              href="tel:1800-212-2030"
            >
              1800-212-2030 (Toll-Free)
            </Link>
          </div>
        </div>
        {/* Pune Address */}
        <div className="flex flex-col gap-[10px] justify-center w-fit">
          <div className="flex w-fit justify-center items-center gap-[6px]">
            <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
              Pune
            </h3>
            <p className="fsans-600 text-[18px] leading-[130%] text-[#787878]">
              (Head Office)
            </p>
          </div>
          <p className="fsans-400 text-[18px] leading-[28px] text-[#5E5E5E]">
            Gokhale Sanchit, Office No. 4, Survey No. 846,
            <br />
            Servants of India Society, Near Marathwada College,
            <br />
            Shivajinagar, Pune, Maharashtra - 411 004 (India)
          </p>
        </div>
        {/* Mumbai Address */}
        <div className="flex flex-col gap-[10px] justify-center w-fit">
          <div className="flex w-fit justify-center items-center gap-[28px]">
            <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
              Mumbai
            </h3>
            {/* <p className="fsans-600 text-[18px] leading-[130%] text-[#787878]">
              (Head Office)
            </p> */}
          </div>
          <p className="fsans-400 text-[18px] leading-[28px] text-[#5E5E5E]">
            {/* Birla Centurion 3rd Floor, Pandurang Budhkar Marg,
            <br /> Worli, Mumbai, Maharashtra 400030 Birla Centurion, Wing - B, */}
            Birla Centurion, Wing - B, PS/03/052, 3rd Floor, COWRKS, Pandurang
            Budhkar Marg, Century Mills, <br /> Worli, Mumbai, Maharashtra -
            400030 (India)
          </p>
        </div>
      </div>
      {/* Socials /////////////// */}
      <div className="flex flex-col gap-[10px] justify-center w-fit">
        <h3 className="spotlightheaddd fsans-600 text-[24px] leading-[130%]">
          Follow us on
        </h3>
        <div className="flex iconinfo items-center gap-[30px]">
          <Link
            target="__blank"
            href="https://www.linkedin.com/company/ksh-infra/?viewAsMember=true"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M11.5776 9.30078C11.5776 10.958 10.2456 12.3008 8.60156 12.3008C6.95756 12.3008 5.62556 10.958 5.62556 9.30078C5.62556 7.64478 6.95756 6.30078 8.60156 6.30078C10.2456 6.30078 11.5776 7.64478 11.5776 9.30078ZM11.6016 14.7008H5.60156V33.9008H11.6016V14.7008ZM21.18 14.7008H15.2184V33.9008H21.1812V23.822C21.1812 18.218 28.416 17.7596 28.416 23.822V33.9008H34.4016V21.7436C34.4016 12.2876 23.6952 12.632 21.18 17.2868V14.7008Z"
                stroke="#6F6F70"
                strokeWidth="1.08"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
            </svg>
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCae7QNTK0AUOf7kxBF53hag"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M35.9295 11.9946C35.74 11.2887 35.3683 10.6451 34.8515 10.1284C34.3347 9.6116 33.6911 9.23984 32.9853 9.0504C31.057 8.3054 12.3753 7.9404 6.95531 9.07123C6.24937 9.26075 5.60571 9.63263 5.08893 10.1496C4.57216 10.6665 4.20046 11.3102 4.01114 12.0162C3.14031 15.8354 3.07447 24.0921 4.03281 27.9971C4.22225 28.7029 4.59401 29.3465 5.11077 29.8633C5.62754 30.38 6.27114 30.7518 6.97698 30.9412C10.7961 31.8204 28.9528 31.9437 33.007 30.9412C33.7128 30.7518 34.3564 30.38 34.8732 29.8633C35.3899 29.3465 35.7617 28.7029 35.9511 27.9971C36.8795 23.8362 36.9453 16.0912 35.9295 11.9946Z"
                stroke="#6F6F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
              <path
                d="M25.4715 19.9964L16.7656 15.0039V24.9889L25.4715 19.9964Z"
                stroke="#6F6F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
            </svg>
          </Link>

          <Link
            target="__blank"
            href="https://www.facebook.com/KSHInfraIndia/"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M36.4 20.2C36.4 11.253 29.147 4 20.2 4C11.253 4 4 11.253 4 20.2C4 28.2858 9.92407 34.9879 17.6688 36.2032V24.8828H13.5555V20.2H17.6688V16.6309C17.6688 12.5708 20.0874 10.3281 23.7877 10.3281C25.5596 10.3281 27.4141 10.6445 27.4141 10.6445V14.6313H25.3713C23.359 14.6313 22.7313 15.8801 22.7313 17.1625V20.2H27.2242L26.506 24.8828H22.7313V36.2032C30.4759 34.9879 36.4 28.2858 36.4 20.2Z"
                stroke="#6F6F70"
                strokeWidth="1.35"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
            </svg>
          </Link>

          <Link
            target="__blank"
            href="https://www.instagram.com/kshinfrapark/"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M26.5932 5.71094H13.4115C9.15822 5.71094 5.71094 9.15883 5.71094 13.4122V26.5926C5.71094 30.8459 9.15883 34.2938 13.4122 34.2938H26.5926C30.8459 34.2938 34.2938 30.8459 34.2938 26.5926V13.4122C34.2938 9.15883 30.8465 5.71094 26.5932 5.71094Z"
                stroke="#6F6F70"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
              <path
                d="M20.001 26.9005C23.8115 26.9005 26.9005 23.8115 26.9005 20.001C26.9005 16.1905 23.8115 13.1016 20.001 13.1016C16.1905 13.1016 13.1016 16.1905 13.1016 20.001C13.1016 23.8115 16.1905 26.9005 20.001 26.9005Z"
                stroke="#6F6F70"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
              <path
                d="M28.3767 13.0972C29.1931 13.0972 29.855 12.4353 29.855 11.6189C29.855 10.8025 29.1931 10.1406 28.3767 10.1406C27.5603 10.1406 26.8984 10.8025 26.8984 11.6189C26.8984 12.4353 27.5603 13.0972 28.3767 13.0972Z"
                fill="#6F6F70"
                className="transition-all duration-300 group-hover:fill-[#092241]"
              />
            </svg>
          </Link>

          <Link
            href="https://twitter.com/KshInfra/status/1687774451692343296"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M18.0028 21.353L6.41031 34.583M31.6028 5.41964L21.2945 17.5596M5.50781 5.41797L28.3745 34.5846H34.6745L11.8086 5.41797H5.50781Z"
                stroke="#6F6F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#092241]"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContInfo;
