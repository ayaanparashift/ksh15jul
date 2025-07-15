// "use client";
// import Image from "next/image";
// import ParkOvBtn from "./ParkOvBtn";
// import Link from "next/link";

// const TabSec = () => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-start w-full pt-[30px] min-1440:pt-[45px] gap-0 text-white">
//       {/* Left Image */}
//       <div className="flex-shrink-0 flex flex-col gap-[30px] min-1440:gap-[50px]">
//         <img
//           src="/nav/navimg.png" // Replace with actual path if different
//           alt="Facility"
//           // width={270}
//           // height={310}
//           className="object-cover h-auto w-[220px] min-1440:w-[270px]"
//         />
//         <ParkOvBtn />
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col md:flex-row w-full justify-evenly gap-0">
//         {/* Pune Section */}
//         <div>
//           <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
//             Pune
//           </h3>
//           <ul className="flex fsans-600 flex-col">
//             <Link
//               href="/ksh-chakan-iv"
//               className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Chakan IV</p>
//             </Link>
//             <Link
//               href="/ksh-chakan-iii"
//               className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Chakan III</p>
//             </Link>
//             <Link
//               href="/ksh-chakan-ii"
//               className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Chakan II</p>
//             </Link>
//             <Link
//               href="/ksh-chakan-i"
//               className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Chakan I</p>
//             </Link>
//             <Link
//               href="/ksh-talegaon-i"
//               className=" border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Talegaon I</p>
//             </Link>
//           </ul>
//         </div>

//         {/* Bangalore Section */}
//         <div>
//           <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
//             Hosur
//           </h3>
//           <ul className="flex fsans-600 flex-col">
//             <Link
//               href="/ksh-hosur-i"
//               className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//             >
//               <p>—</p> <p>KSH Hosur I</p>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabSec;

"use client";
import Image from "next/image";
import ParkOvBtn from "./ParkOvBtn";
import Link from "next/link";

// const col1 = [
//   { href: "/ksh-chakan-iv", text: "KSH Chakan IV" },
//   { href: "/ksh-chakan-iii", text: "KSH Chakan III" },
//   { href: "/ksh-chakan-ii", text: "KSH Chakan II" },
//   { href: "/ksh-chakan-i", text: "KSH Chakan I" },
//   { href: "/ksh-talegaon-i", text: "KSH Talegaon I" },
// ];

// const col2 = [{ href: "/ksh-hosur-i", text: "KSH Hosur I" }];

// const TabSec = () => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-start w-full pt-[30px] min-1440:pt-[45px] gap-0 text-white">
//       {/* Left Image */}
//       <div className="flex-shrink-0 flex flex-col gap-[30px] min-1440:gap-[50px]">
//         <img
//           src="/nav/navimg.png"
//           alt="Facility"
//           className="object-cover h-auto w-[220px] min-1440:w-[270px]"
//         />
//         <ParkOvBtn />
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col md:flex-row w-full justify-evenly gap-0">
//         {/* Pune Section */}
//         <div>
//           <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
//             Pune
//           </h3>
//           <ul className="flex fsans-600 flex-col">
//             {col1.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//               >
//                 <p>—</p>
//                 <p>{item.text}</p>
//               </Link>
//             ))}
//           </ul>
//         </div>

//         {/* Hosur Section */}
//         <div>
//           <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
//             Hosur
//           </h3>
//           <ul className="flex fsans-600 flex-col">
//             {col2.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className="border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]"
//               >
//                 <p>—</p>
//                 <p>{item.text}</p>
//               </Link>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabSec;

const col1 = [
  { href: "/ksh-chakan-iv", text: "KSH Chakan IV" },
  { href: "/ksh-chakan-iii", text: "KSH Chakan III" },
  { href: "/ksh-chakan-ii", text: "KSH Chakan II" },
  { href: "/ksh-chakan-i", text: "KSH Chakan I" },
  { href: "/ksh-talegaon-i", text: "KSH Talegaon I" },
];

const col2 = [{ href: "/ksh-hosur-i", text: "KSH Hosur I" }];

const TabSec = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start w-full min-1366:pt-[30px] min-1440:pt-[45px] gap-0 text-white">
      {/* Left Image */}
      <div className="flex-shrink-0 flex flex-col gap-[30px] min-1440:gap-[50px]">
        <img
          src="/nav/navimg.png"
          alt="Facility"
          className="object-cover h-auto w-[220px] min-1440:w-[270px]"
        />
        <ParkOvBtn />
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row w-full justify-evenly gap-0">
        {/* Pune Section */}
        <div>
          <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
            Pune
          </h3>
          <ul className="flex fsans-600 flex-col">
            {col1.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div className="tab-link border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]">
                    <p>—</p>
                    <p>{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hosur Section */}
        <div>
          <h3 className="text-[14px] spotlightheaddd fsan-400 text-[#CFCFCF] mb-4 border-b border-[#fff] border-opacity-60 pb-[10px]">
            Bengalore
          </h3>
          <ul className="flex fsans-600 flex-col">
            {col2.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div className="tab-link border-b border-white/20 py-[16px] min-1440:py-[22px] flex gap-[24px]">
                    <p>—</p>
                    <p>{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Styled JSX for animated underline */}
      <style jsx>{`
        .tab-link {
          position: relative;
        }

        .tab-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px; /* aligned with border-bottom */
          width: 0%;
          height: 1px;
          background: white;
          opacity: 0.8;
          transition: width 0.4s ease;
        }

        .tab-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default TabSec;
