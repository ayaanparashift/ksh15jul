// import Link from "next/link";
// import Newsletter from "../Components/Newsletter";

// const Footer = () => {
//   return (
//     <footer className="footerMain bg-[#141D28] max-w-full">
//       <div className="fix12 mx-auto">
//         {/* Footer Top */}
//         <Newsletter />

//         {/* Footer Middle */}
//         <div className="text-white flex-col gap-[40px] md:flex-row flex pt-[35px] w-full justify-between md:pt-[60px] pb-[41px] border-b-[rgba(215,215,215,0.34)] border-b">
//           <div className="h-full w-full object-cover max-w-[180px]">
//             <img src="/footerIcon.svg" alt="" />
//           </div>
//           <div>
//             <p className="pb-5 text-lg fsans-600">Quick links</p>
//             <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
//               <Link href="/">Home</Link>
//               <Link href="/about-ksh">About Us</Link>
//               <Link href="/our-team">Our Team</Link>
//               <Link href="/careers">Careers</Link>
//               <Link href="/contact-us">Contact Us</Link>
//             </div>
//           </div>
//           <div>
//             <p className="pb-5 text-lg fsans-600">Our Parks</p>
//             <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
//               <Link href="/ksh-chakan-iv">Chakan IV</Link>
//               <Link href="/ksh-chakan-iii">Chakan III</Link>
//               <Link href="/ksh-chakan-ii">Chakan II</Link>
//               <Link href="/ksh-chakan-i">Chakan I</Link>
//               <Link href="/ksh-talegaon-i">Talegaon I</Link>
//               <Link href="/ksh-hosur-i">Hosur I</Link>
//             </div>
//           </div>
//           <div>
//             <p className="pb-5 text-lg fsans-600">Others</p>
//             <div className="flex flex-col gap-4 text-[#9acbf880] fsans-600 text-[16px]">
//               <Link href="/investors">Investor</Link>
//               <Link href="/capabilities">Capabilities</Link>
//               <Link href="/sustainability">Sustainability</Link>
//               <Link href="/case-studies">Case Studies</Link>
//               <Link href="/blogs">Blogs</Link>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-white flex md:flex-row flex-col lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
//           <div className="pt-5 md:pt-0 flex gap-3">
//             <div
//               className="iconBox h-11 w-11 rounded-full flex items-center justify-center"
//               style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             >
//               <img src="/socials/map.svg" alt="" />
//             </div>
//             <div className="text-[#9acbf880] text-sm font-semibold leading-6 max-w-full ">
//               <p>
//                 KSH INFRA, <br /> Head Office: Pune
//               </p>
//               <p>
//                 Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
//                 of India Society, <br /> Near Marathwada College, Shivajinagar,
//                 <br />
//                 Pune, Maharashtra - 411 004 (India)
//               </p>
//             </div>
//           </div>
//           <div className="pt-5 md:pt-0 flex gap-3">
//             <div
//               className="iconBox h-11 w-11 rounded-full flex items-center justify-center"
//               style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//             >
//               <img src="/socials/map.svg" alt="" />
//             </div>
//             <div className="text-[#9acbf880] text-sm font-semibold leading-6 max-w-full ">
//               <p>
//                 KSH INFRA, <br />
//                 Mumbai
//               </p>
//               <p>
//                 Birla Centurion, Wing - B, PS/03/052,
//                 <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br /> Century
//                 Mills, Worli, Mumbai, <br />
//                 Maharashtra - 400030 (India)
//               </p>
//             </div>
//           </div>
//           <div className="pt-5 md:pt-0 flex flex-col gap-5">
//             <a
//               href="mailto:leasing@kshinfra.com"
//               className="flex items-center gap-3 text-[#9acbf880] hover:text-[#9acbf8]"
//             >
//               <div
//                 className="iconBox h-11 w-11 rounded-full flex items-center"
//                 style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//               >
//                 <img src="/socials/footerEmail.svg" alt="" />
//               </div>
//               <p className="text-sm font-semibold leading-6">
//                 leasing@kshinfra.com
//               </p>
//             </a>
//             {/* <a
//               href="tel:1800-212-2030"
//               className="flex items-center gap-3 md:gap-[28px]"
//             >
//               <div
//                 className="iconBox h-11 w-11 rounded-full flex items-center"
//                 style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
//               >
//                 <img src="/socials/Phone.svg" alt="" />
//               </div>
//               <p className="text-[#9acbf880] text-sm font-semibold leading-6">
//                 1800-212-2030 (Toll-Free)
//               </p>
//             </a> */}
//           </div>
//         </div>

//         {/* Footer End */}
//         <div className="pt-[84px] pb-[23px] flex flex-col md:flex-row gap-2 text-center items-center justify-center sm:justify-between text-[#6c8dab80] text-sm font-semibold leading-6">
//           <p>© 2025. KSH INFRA. All rights reserved.</p>
//           <p>
//             <Link href="/privacy-policy">Privacy Policy</Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// ???????????????????????????????????????????????
// ???????????????????????????????????????????????
// ???????????????????????????????????????????????
// ???????????????????????????????????????????????
// ???????????????????????????????????????????????
// ???????????????????????????????????????????????

import Link from "next/link";
import Newsletter from "../Components/Newsletter";

const Footer = () => {
  // return (
  //   <footer className="footerMain bg-[#141D28] max-w-full">
  //     <div className="fix12 mx-auto">
  //       {/* Footer Top */}
  //       <Newsletter />

  //       {/* Footer Middle */}
  //       <div
  //         className="text-white flex-col gap-[40px] md:flex-row flex pt-[32px] xl:w-[80%] xl:max-w-[80%] xl:mx-auto justify-between
  //        pb-[41px] "
  //       >
  //         <div className="h-full">
  //           <div className="object-cover max-w-[180px]">
  //             <img src="/footerIcon.svg" alt="" />
  //           </div>
  //         </div>
  //         <div>
  //           <p className="pb-5 text-lg fsans-600">Quick links</p>
  //           <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
  //             <Link href="/">Home</Link>
  //             <Link href="/about-ksh">About Us</Link>
  //             <Link href="/our-team">Our Team</Link>
  //             <Link href="/careers">Careers</Link>
  //             <Link href="/contact-us">Contact Us</Link>
  //           </div>
  //         </div>
  //         <div>
  //           <p className="pb-5 text-lg fsans-600">Our Parks</p>
  //           <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
  //             <Link href="/ksh-chakan-iv">Chakan IV</Link>
  //             <Link href="/ksh-chakan-iii">Chakan III</Link>
  //             <Link href="/ksh-chakan-ii">Chakan II</Link>
  //             <Link href="/ksh-chakan-i">Chakan I</Link>
  //             <Link href="/ksh-talegaon-i">Talegaon I</Link>
  //             <Link href="/ksh-hosur-i">Hosur I</Link>
  //           </div>
  //         </div>
  //         <div>
  //           <p className="pb-5 text-lg fsans-600">Others</p>
  //           <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
  //             <Link href="/investors">Investor</Link>
  //             <Link href="/capabilities">Capabilities</Link>
  //             <Link href="/sustainability">Sustainability</Link>
  //             <Link href="/case-studies">Case Studies</Link>
  //             <Link href="/blogs">Blogs</Link>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Footer Bottom */}
  //       {/* <div className="xl:max-w-[1250px] xl:w-[1250px] max-w-full w-full border-t-[rgba(215,215,215,0.34)] border-t">
  //         <div className="text-white flex md:flex-row flex-col xl:w-[80%] xl:max-w-[80%] xl:mx-auto lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
  //           <div className="flex-col flex h-full justify-between gap-5">
  //             <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px] ">
  //               <a
  //                 href="mailto:leasing@kshinfra.com"
  //                 className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
  //               >
  //                 <div
  //                   className="iconBox h-8 w-8 rounded-full flex items-center "
  //                   style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
  //                 >
  //                   <img src="/socials/footerEmail.svg" alt="" />
  //                 </div>
  //                 <p className="">leasing@kshinfra.com</p>
  //               </a>
  //               <a
  //                 href="tel:1800-212-2030"
  //                 className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
  //               >
  //                 <div
  //                   className="iconBox h-8 w-8 rounded-full flex items-center"
  //                   style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
  //                 >
  //                   <img src="/socials/Phone.svg" alt="" />
  //                 </div>
  //                 <p className="">1800-212-2030 (Toll-Free)</p>
  //               </a>
  //             </div>
  //             <div className="flex iconinfo items-center gap-[10px]">
  //               <Link
  //                 target="__blank"
  //                 href="https://www.linkedin.com/company/ksh-infra/?viewAsMember=true"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M11.5776 9.30078C11.5776 10.958 10.2456 12.3008 8.60156 12.3008C6.95756 12.3008 5.62556 10.958 5.62556 9.30078C5.62556 7.64478 6.95756 6.30078 8.60156 6.30078C10.2456 6.30078 11.5776 7.64478 11.5776 9.30078ZM11.6016 14.7008H5.60156V33.9008H11.6016V14.7008ZM21.18 14.7008H15.2184V33.9008H21.1812V23.822C21.1812 18.218 28.416 17.7596 28.416 23.822V33.9008H34.4016V21.7436C34.4016 12.2876 23.6952 12.632 21.18 17.2868V14.7008Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 href="https://www.youtube.com/channel/UCae7QNTK0AUOf7kxBF53hag"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M35.9295 11.9946C35.74 11.2887 35.3683 10.6451 34.8515 10.1284C34.3347 9.6116 33.6911 9.23984 32.9853 9.0504C31.057 8.3054 12.3753 7.9404 6.95531 9.07123C6.24937 9.26075 5.60571 9.63263 5.08893 10.1496C4.57216 10.6665 4.20046 11.3102 4.01114 12.0162C3.14031 15.8354 3.07447 24.0921 4.03281 27.9971C4.22225 28.7029 4.59401 29.3465 5.11077 29.8633C5.62754 30.38 6.27114 30.7518 6.97698 30.9412C10.7961 31.8204 28.9528 31.9437 33.007 30.9412C33.7128 30.7518 34.3564 30.38 34.8732 29.8633C35.3899 29.3465 35.7617 28.7029 35.9511 27.9971C36.8795 23.8362 36.9453 16.0912 35.9295 11.9946Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M25.4715 19.9964L16.7656 15.0039V24.9889L25.4715 19.9964Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 target="__blank"
  //                 href="https://www.facebook.com/KSHInfraIndia/"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M36.4 20.2C36.4 11.253 29.147 4 20.2 4C11.253 4 4 11.253 4 20.2C4 28.2858 9.92407 34.9879 17.6688 36.2032V24.8828H13.5555V20.2H17.6688V16.6309C17.6688 12.5708 20.0874 10.3281 23.7877 10.3281C25.5596 10.3281 27.4141 10.6445 27.4141 10.6445V14.6313H25.3713C23.359 14.6313 22.7313 15.8801 22.7313 17.1625V20.2H27.2242L26.506 24.8828H22.7313V36.2032C30.4759 34.9879 36.4 28.2858 36.4 20.2Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 target="__blank"
  //                 href="https://www.instagram.com/kshinfrapark/"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M26.5932 5.71094H13.4115C9.15822 5.71094 5.71094 9.15883 5.71094 13.4122V26.5926C5.71094 30.8459 9.15883 34.2938 13.4122 34.2938H26.5926C30.8459 34.2938 34.2938 30.8459 34.2938 26.5926V13.4122C34.2938 9.15883 30.8465 5.71094 26.5932 5.71094Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeMiterlimit="10"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M20.001 26.9005C23.8115 26.9005 26.9005 23.8115 26.9005 20.001C26.9005 16.1905 23.8115 13.1016 20.001 13.1016C16.1905 13.1016 13.1016 16.1905 13.1016 20.001C13.1016 23.8115 16.1905 26.9005 20.001 26.9005Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeMiterlimit="10"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M28.3767 13.0972C29.1931 13.0972 29.855 12.4353 29.855 11.6189C29.855 10.8025 29.1931 10.1406 28.3767 10.1406C27.5603 10.1406 26.8984 10.8025 26.8984 11.6189C26.8984 12.4353 27.5603 13.0972 28.3767 13.0972Z"
  //                     fill="#cfe6fc90"
  //                     className="transition-all duration-300 group-hover:fill-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 href="https://twitter.com/KshInfra/status/1687774451692343296"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M18.0028 21.353L6.41031 34.583M31.6028 5.41964L21.2945 17.5596M5.50781 5.41797L28.3745 34.5846H34.6745L11.8086 5.41797H5.50781Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>
  //             </div>
  //           </div>
  //           <div className="">
  //             <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
  //               <p>
  //                 KSH INFRA, <br /> Head Office: Pune
  //               </p>
  //               <p>
  //                 Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
  //                 of India Society, <br /> Near Marathwada College,
  //                 Shivajinagar,
  //                 <br />
  //                 Pune, Maharashtra - 411 004 (India)
  //               </p>
  //             </div>
  //           </div>
  //           <div className="">
  //             <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
  //               <p>
  //                 KSH INFRA, <br />
  //                 Mumbai
  //               </p>
  //               <p>
  //                 Birla Centurion, Wing - B, PS/03/052,
  //                 <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br />{" "}
  //                 Century Mills, Worli, Mumbai, <br />
  //                 Maharashtra - 400030 (India)
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div> */}
  //       <div className="w-full border-t-[rgba(215,215,215,0.34)] border-t">
  //         <div className="text-white flex md:flex-row flex-col xl:w-[80%] xl:max-w-[80%] xl:mx-auto lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
  //           <div className="flex-col flex h-full justify-between gap-5">
  //             <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px] ">
  //               <a
  //                 href="mailto:leasing@kshinfra.com"
  //                 className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
  //               >
  //                 <div
  //                   className="iconBox h-8 w-8 rounded-full flex items-center "
  //                   style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
  //                 >
  //                   <img src="/socials/footerEmail.svg" alt="" />
  //                 </div>
  //                 <p className="">leasing@kshinfra.com</p>
  //               </a>
  //               <a
  //                 href="tel:1800-212-2030"
  //                 className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
  //               >
  //                 <div
  //                   className="iconBox h-8 w-8 rounded-full flex items-center"
  //                   style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
  //                 >
  //                   <img src="/socials/Phone.svg" alt="" />
  //                 </div>
  //                 <p className="">1800-212-2030 (Toll-Free)</p>
  //               </a>
  //             </div>
  //             <div className="flex iconinfo items-center gap-[10px]">
  //               <Link
  //                 target="__blank"
  //                 href="https://www.linkedin.com/company/ksh-infra/?viewAsMember=true"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M11.5776 9.30078C11.5776 10.958 10.2456 12.3008 8.60156 12.3008C6.95756 12.3008 5.62556 10.958 5.62556 9.30078C5.62556 7.64478 6.95756 6.30078 8.60156 6.30078C10.2456 6.30078 11.5776 7.64478 11.5776 9.30078ZM11.6016 14.7008H5.60156V33.9008H11.6016V14.7008ZM21.18 14.7008H15.2184V33.9008H21.1812V23.822C21.1812 18.218 28.416 17.7596 28.416 23.822V33.9008H34.4016V21.7436C34.4016 12.2876 23.6952 12.632 21.18 17.2868V14.7008Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 href="https://www.youtube.com/channel/UCae7QNTK0AUOf7kxBF53hag"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M35.9295 11.9946C35.74 11.2887 35.3683 10.6451 34.8515 10.1284C34.3347 9.6116 33.6911 9.23984 32.9853 9.0504C31.057 8.3054 12.3753 7.9404 6.95531 9.07123C6.24937 9.26075 5.60571 9.63263 5.08893 10.1496C4.57216 10.6665 4.20046 11.3102 4.01114 12.0162C3.14031 15.8354 3.07447 24.0921 4.03281 27.9971C4.22225 28.7029 4.59401 29.3465 5.11077 29.8633C5.62754 30.38 6.27114 30.7518 6.97698 30.9412C10.7961 31.8204 28.9528 31.9437 33.007 30.9412C33.7128 30.7518 34.3564 30.38 34.8732 29.8633C35.3899 29.3465 35.7617 28.7029 35.9511 27.9971C36.8795 23.8362 36.9453 16.0912 35.9295 11.9946Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M25.4715 19.9964L16.7656 15.0039V24.9889L25.4715 19.9964Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 target="__blank"
  //                 href="https://www.facebook.com/KSHInfraIndia/"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M36.4 20.2C36.4 11.253 29.147 4 20.2 4C11.253 4 4 11.253 4 20.2C4 28.2858 9.92407 34.9879 17.6688 36.2032V24.8828H13.5555V20.2H17.6688V16.6309C17.6688 12.5708 20.0874 10.3281 23.7877 10.3281C25.5596 10.3281 27.4141 10.6445 27.4141 10.6445V14.6313H25.3713C23.359 14.6313 22.7313 15.8801 22.7313 17.1625V20.2H27.2242L26.506 24.8828H22.7313V36.2032C30.4759 34.9879 36.4 28.2858 36.4 20.2Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 target="__blank"
  //                 href="https://www.instagram.com/kshinfrapark/"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M26.5932 5.71094H13.4115C9.15822 5.71094 5.71094 9.15883 5.71094 13.4122V26.5926C5.71094 30.8459 9.15883 34.2938 13.4122 34.2938H26.5926C30.8459 34.2938 34.2938 30.8459 34.2938 26.5926V13.4122C34.2938 9.15883 30.8465 5.71094 26.5932 5.71094Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeMiterlimit="10"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M20.001 26.9005C23.8115 26.9005 26.9005 23.8115 26.9005 20.001C26.9005 16.1905 23.8115 13.1016 20.001 13.1016C16.1905 13.1016 13.1016 16.1905 13.1016 20.001C13.1016 23.8115 16.1905 26.9005 20.001 26.9005Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeMiterlimit="10"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                   <path
  //                     d="M28.3767 13.0972C29.1931 13.0972 29.855 12.4353 29.855 11.6189C29.855 10.8025 29.1931 10.1406 28.3767 10.1406C27.5603 10.1406 26.8984 10.8025 26.8984 11.6189C26.8984 12.4353 27.5603 13.0972 28.3767 13.0972Z"
  //                     fill="#cfe6fc90"
  //                     className="transition-all duration-300 group-hover:fill-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>

  //               <Link
  //                 href="https://twitter.com/KshInfra/status/1687774451692343296"
  //                 className="group"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 40 40"
  //                   fill="none"
  //                 >
  //                   <path
  //                     d="M18.0028 21.353L6.41031 34.583M31.6028 5.41964L21.2945 17.5596M5.50781 5.41797L28.3745 34.5846H34.6745L11.8086 5.41797H5.50781Z"
  //                     stroke="#fff"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
  //                   />
  //                 </svg>
  //               </Link>
  //             </div>
  //           </div>
  //           <div className="">
  //             <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
  //               <p>
  //                 KSH INFRA, <br /> Head Office: Pune
  //               </p>
  //               <p>
  //                 Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
  //                 of India Society, <br /> Near Marathwada College,
  //                 Shivajinagar,
  //                 <br />
  //                 Pune, Maharashtra - 411 004 (India)
  //               </p>
  //             </div>
  //           </div>
  //           <div className="">
  //             <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
  //               <p>
  //                 KSH INFRA, <br />
  //                 Mumbai
  //               </p>
  //               <p>
  //                 Birla Centurion, Wing - B, PS/03/052,
  //                 <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br />{" "}
  //                 Century Mills, Worli, Mumbai, <br />
  //                 Maharashtra - 400030 (India)
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Footer End */}
  //       <div className="pt-[84px] pb-[23px] flex flex-col md:flex-row gap-2 text-center items-center justify-center sm:justify-between text-[#6c8dab80] text-sm font-semibold leading-6">
  //         <p>© 2025. KSH INFRA. All rights reserved.</p>
  //         <p>
  //           <Link href="/privacy-policy">Privacy Policy</Link>
  //         </p>
  //       </div>
  //     </div>
  //   </footer>
  // );
  return (
    <footer className="footerMain bg-[#141D28] max-w-full">
      <div className="fix12 mx-auto">
        {/* Footer Top */}
        <Newsletter />

        {/* Footer Middle */}
        <div
          className="text-white flex-col gap-[40px] md:flex-row flex pt-[32px] xl:w-[80%] xl:max-w-[80%] xl:mx-auto justify-between
         pb-[41px] "
        >
          <div>
            <p className="pb-5 text-lg fsans-600">Quick links</p>
            <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
              <Link href="/">Home</Link>
              <Link href="/about-ksh">About Us</Link>
              <Link href="/our-team">Our Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div>
            <p className="pb-5 text-lg fsans-600">Our Parks</p>
            <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
              <Link href="/ksh-chakan-iv">Chakan IV</Link>
              <Link href="/ksh-chakan-iii">Chakan III</Link>
              <Link href="/ksh-chakan-ii">Chakan II</Link>
              <Link href="/ksh-chakan-i">Chakan I</Link>
              <Link href="/ksh-talegaon-i">Talegaon I</Link>
              <Link href="/ksh-hosur-i">Hosur I</Link>
            </div>
          </div>
          <div>
            <p className="pb-5 text-lg fsans-600">Others</p>
            <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px]">
              <Link href="/investors">Investor</Link>
              <Link href="/capabilities">Capabilities</Link>
              <Link href="/sustainability">Sustainability</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
          </div>
          <div className="flex-col flex h-full justify-between gap-5">
            <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px] ">
              <p className="text-lg fsans-600 text-white">Connect</p>
              <a
                href="mailto:leasing@kshinfra.com"
                className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
              >
                <div
                  className="iconBox h-8 w-8 rounded-full flex items-center "
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                >
                  <img src="/socials/footerEmail.svg" alt="" />
                </div>
                <p className="">leasing@kshinfra.com</p>
              </a>
              <a
                href="tel:1800-212-2030"
                className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
              >
                <div
                  className="iconBox h-8 w-8 rounded-full flex items-center"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                >
                  <img src="/socials/Phone.svg" alt="" />
                </div>
                <p className="">1800-212-2030 (Toll-Free)</p>
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="pt-5 text-lg fsans-600">Follow</p>
              <div className="flex iconinfo items-center gap-[10px]">
                <Link
                  target="__blank"
                  href="https://www.linkedin.com/company/ksh-infra/?viewAsMember=true"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M11.5776 9.30078C11.5776 10.958 10.2456 12.3008 8.60156 12.3008C6.95756 12.3008 5.62556 10.958 5.62556 9.30078C5.62556 7.64478 6.95756 6.30078 8.60156 6.30078C10.2456 6.30078 11.5776 7.64478 11.5776 9.30078ZM11.6016 14.7008H5.60156V33.9008H11.6016V14.7008ZM21.18 14.7008H15.2184V33.9008H21.1812V23.822C21.1812 18.218 28.416 17.7596 28.416 23.822V33.9008H34.4016V21.7436C34.4016 12.2876 23.6952 12.632 21.18 17.2868V14.7008Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                  </svg>
                </Link>

                <Link
                  target="__blank"
                  href="https://www.youtube.com/channel/UCae7QNTK0AUOf7kxBF53hag"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M35.9295 11.9946C35.74 11.2887 35.3683 10.6451 34.8515 10.1284C34.3347 9.6116 33.6911 9.23984 32.9853 9.0504C31.057 8.3054 12.3753 7.9404 6.95531 9.07123C6.24937 9.26075 5.60571 9.63263 5.08893 10.1496C4.57216 10.6665 4.20046 11.3102 4.01114 12.0162C3.14031 15.8354 3.07447 24.0921 4.03281 27.9971C4.22225 28.7029 4.59401 29.3465 5.11077 29.8633C5.62754 30.38 6.27114 30.7518 6.97698 30.9412C10.7961 31.8204 28.9528 31.9437 33.007 30.9412C33.7128 30.7518 34.3564 30.38 34.8732 29.8633C35.3899 29.3465 35.7617 28.7029 35.9511 27.9971C36.8795 23.8362 36.9453 16.0912 35.9295 11.9946Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M25.4715 19.9964L16.7656 15.0039V24.9889L25.4715 19.9964Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
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
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M36.4 20.2C36.4 11.253 29.147 4 20.2 4C11.253 4 4 11.253 4 20.2C4 28.2858 9.92407 34.9879 17.6688 36.2032V24.8828H13.5555V20.2H17.6688V16.6309C17.6688 12.5708 20.0874 10.3281 23.7877 10.3281C25.5596 10.3281 27.4141 10.6445 27.4141 10.6445V14.6313H25.3713C23.359 14.6313 22.7313 15.8801 22.7313 17.1625V20.2H27.2242L26.506 24.8828H22.7313V36.2032C30.4759 34.9879 36.4 28.2858 36.4 20.2Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
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
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M26.5932 5.71094H13.4115C9.15822 5.71094 5.71094 9.15883 5.71094 13.4122V26.5926C5.71094 30.8459 9.15883 34.2938 13.4122 34.2938H26.5926C30.8459 34.2938 34.2938 30.8459 34.2938 26.5926V13.4122C34.2938 9.15883 30.8465 5.71094 26.5932 5.71094Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M20.001 26.9005C23.8115 26.9005 26.9005 23.8115 26.9005 20.001C26.9005 16.1905 23.8115 13.1016 20.001 13.1016C16.1905 13.1016 13.1016 16.1905 13.1016 20.001C13.1016 23.8115 16.1905 26.9005 20.001 26.9005Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M28.3767 13.0972C29.1931 13.0972 29.855 12.4353 29.855 11.6189C29.855 10.8025 29.1931 10.1406 28.3767 10.1406C27.5603 10.1406 26.8984 10.8025 26.8984 11.6189C26.8984 12.4353 27.5603 13.0972 28.3767 13.0972Z"
                      fill="#cfe6fc90"
                      className="transition-all duration-300 group-hover:fill-[#9acbf8]"
                    />
                  </svg>
                </Link>

                <Link
                  target="__blank"
                  href="https://twitter.com/KshInfra/status/1687774451692343296"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M18.0028 21.353L6.41031 34.583M31.6028 5.41964L21.2945 17.5596M5.50781 5.41797L28.3745 34.5846H34.6745L11.8086 5.41797H5.50781Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="xl:max-w-[1250px] xl:w-[1250px] max-w-full w-full border-t-[rgba(215,215,215,0.34)] border-t">
          <div className="text-white flex md:flex-row flex-col xl:w-[80%] xl:max-w-[80%] xl:mx-auto lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
            <div className="flex-col flex h-full justify-between gap-5">
              <div className="flex flex-col gap-4 text-[#cfe6fc90] fsans-600 text-[16px] ">
                <a
                  href="mailto:leasing@kshinfra.com"
                  className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
                >
                  <div
                    className="iconBox h-8 w-8 rounded-full flex items-center "
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                  >
                    <img src="/socials/footerEmail.svg" alt="" />
                  </div>
                  <p className="">leasing@kshinfra.com</p>
                </a>
                <a
                  href="tel:1800-212-2030"
                  className="flex items-center gap-3 text-[#cfe6fc90] hover:text-[#9acbf8]"
                >
                  <div
                    className="iconBox h-8 w-8 rounded-full flex items-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
                  >
                    <img src="/socials/Phone.svg" alt="" />
                  </div>
                  <p className="">1800-212-2030 (Toll-Free)</p>
                </a>
              </div>
              <div className="flex iconinfo items-center gap-[10px]">
                <Link
                  target="__blank"
                  href="https://www.linkedin.com/company/ksh-infra/?viewAsMember=true"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M11.5776 9.30078C11.5776 10.958 10.2456 12.3008 8.60156 12.3008C6.95756 12.3008 5.62556 10.958 5.62556 9.30078C5.62556 7.64478 6.95756 6.30078 8.60156 6.30078C10.2456 6.30078 11.5776 7.64478 11.5776 9.30078ZM11.6016 14.7008H5.60156V33.9008H11.6016V14.7008ZM21.18 14.7008H15.2184V33.9008H21.1812V23.822C21.1812 18.218 28.416 17.7596 28.416 23.822V33.9008H34.4016V21.7436C34.4016 12.2876 23.6952 12.632 21.18 17.2868V14.7008Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://www.youtube.com/channel/UCae7QNTK0AUOf7kxBF53hag"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M35.9295 11.9946C35.74 11.2887 35.3683 10.6451 34.8515 10.1284C34.3347 9.6116 33.6911 9.23984 32.9853 9.0504C31.057 8.3054 12.3753 7.9404 6.95531 9.07123C6.24937 9.26075 5.60571 9.63263 5.08893 10.1496C4.57216 10.6665 4.20046 11.3102 4.01114 12.0162C3.14031 15.8354 3.07447 24.0921 4.03281 27.9971C4.22225 28.7029 4.59401 29.3465 5.11077 29.8633C5.62754 30.38 6.27114 30.7518 6.97698 30.9412C10.7961 31.8204 28.9528 31.9437 33.007 30.9412C33.7128 30.7518 34.3564 30.38 34.8732 29.8633C35.3899 29.3465 35.7617 28.7029 35.9511 27.9971C36.8795 23.8362 36.9453 16.0912 35.9295 11.9946Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M25.4715 19.9964L16.7656 15.0039V24.9889L25.4715 19.9964Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
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
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M36.4 20.2C36.4 11.253 29.147 4 20.2 4C11.253 4 4 11.253 4 20.2C4 28.2858 9.92407 34.9879 17.6688 36.2032V24.8828H13.5555V20.2H17.6688V16.6309C17.6688 12.5708 20.0874 10.3281 23.7877 10.3281C25.5596 10.3281 27.4141 10.6445 27.4141 10.6445V14.6313H25.3713C23.359 14.6313 22.7313 15.8801 22.7313 17.1625V20.2H27.2242L26.506 24.8828H22.7313V36.2032C30.4759 34.9879 36.4 28.2858 36.4 20.2Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
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
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M26.5932 5.71094H13.4115C9.15822 5.71094 5.71094 9.15883 5.71094 13.4122V26.5926C5.71094 30.8459 9.15883 34.2938 13.4122 34.2938H26.5926C30.8459 34.2938 34.2938 30.8459 34.2938 26.5926V13.4122C34.2938 9.15883 30.8465 5.71094 26.5932 5.71094Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M20.001 26.9005C23.8115 26.9005 26.9005 23.8115 26.9005 20.001C26.9005 16.1905 23.8115 13.1016 20.001 13.1016C16.1905 13.1016 13.1016 16.1905 13.1016 20.001C13.1016 23.8115 16.1905 26.9005 20.001 26.9005Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                    <path
                      d="M28.3767 13.0972C29.1931 13.0972 29.855 12.4353 29.855 11.6189C29.855 10.8025 29.1931 10.1406 28.3767 10.1406C27.5603 10.1406 26.8984 10.8025 26.8984 11.6189C26.8984 12.4353 27.5603 13.0972 28.3767 13.0972Z"
                      fill="#cfe6fc90"
                      className="transition-all duration-300 group-hover:fill-[#9acbf8]"
                    />
                  </svg>
                </Link>

                <Link
                  href="https://twitter.com/KshInfra/status/1687774451692343296"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M18.0028 21.353L6.41031 34.583M31.6028 5.41964L21.2945 17.5596M5.50781 5.41797L28.3745 34.5846H34.6745L11.8086 5.41797H5.50781Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-[#9acbf8]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
                <p>
                  KSH INFRA, <br /> Head Office: Pune
                </p>
                <p>
                  Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
                  of India Society, <br /> Near Marathwada College,
                  Shivajinagar,
                  <br />
                  Pune, Maharashtra - 411 004 (India)
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
                <p>
                  KSH INFRA, <br />
                  Mumbai
                </p>
                <p>
                  Birla Centurion, Wing - B, PS/03/052,
                  <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br />{" "}
                  Century Mills, Worli, Mumbai, <br />
                  Maharashtra - 400030 (India)
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="xl:w-[80%] xl:max-w-[80%] xl:mx-auto border-t-[rgba(215,215,215,0.34)] border-t">
          <div className="text-white flex md:flex-row flex-col  lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap  items-start justify-between pt-[32px]">
            <div className="h-full">
              <div className="object-cover max-w-[180px]">
                <img src="/footerIcon.svg" alt="" />
              </div>
            </div>

            <div className="">
              <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
                <p className="whitespace-nowrap text-white pb-1 fsans-600">
                  KSH INFRA, Head Office: Pune
                </p>
                <p>
                  Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
                  of India Society, <br /> Near Marathwada College,
                  Shivajinagar,
                  <br />
                  Pune, Maharashtra - 411 004 (India)
                </p>
              </div>
            </div>
            <div className="">
              <div className="text-[#cfe6fc90] text-sm font-semibold leading-6 max-w-full ">
                <p className="whitespace-nowrap text-white pb-1 fpt-600">
                  KSH INFRA, Mumbai
                </p>
                <p>
                  Birla Centurion, Wing - B, PS/03/052,
                  <br /> 3rd Floor, COWRKS, Pandurang Budhkar Marg, <br />{" "}
                  Century Mills, Worli, Mumbai, <br />
                  Maharashtra - 400030 (India)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        <div className="pt-[64px] w-[80%] mx-auto pb-[23px] flex flex-col md:flex-row gap-2 text-center items-center justify-center sm:justify-between text-[#6c8dab80] text-sm font-semibold leading-6">
          <p className="text-[#cfe6fc90]">
            © 2025. KSH INFRA. All rights reserved.
          </p>
          <p className="text-[#cfe6fc90]">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
