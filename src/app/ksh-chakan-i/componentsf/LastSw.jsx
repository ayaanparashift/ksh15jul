"use client";

import ParkLastSw from "../../Components/parkComponents/LastSw";

const cardData = [
  {
    parkTitle: "KSH Hosur Park I",
    pLocal: "Hosur | Bengaluru",
    totalLand: "1.26 MN SQ.FT.",
    buildings: "04 Buildings",
    pImg: "/ParkPage/hosur-1/hosurlw.png",
    pLink: "/ksh-hosur-i",
  },
  {
    parkTitle: "KSH Chakan Park IV",
    pLocal: "Chakan | Pune",
    totalLand: "0.36 MN SQ.FT.",
    pImg: "/ParkPage/chakan-4/ch4lw.png",
    buildings: "02 Buildings",
    pLink: "/ksh-chakan-iv",
  },
  {
    parkTitle: "KSH Chakan Park III",
    pLocal: "Chakan | Pune",
    totalLand: "1.50 MN SQ.FT.",
    pImg: "/ParkPage/chakan-3/ch3lw.png",
    buildings: "08 Buildings",
    pLink: "/ksh-chakan-iii",
  },
  {
    parkTitle: "KSH Chakan Park II",
    pLocal: "Chakan | Pune",
    totalLand: "1.20 MN SQ.FT.",
    pImg: "/ParkPage/chakan-2/ch2lw.png",
    buildings: "05 Buildings",
    pLink: "/ksh-chakan-ii",
  },
  {
    parkTitle: "KSH Talegaon Park I",
    pLocal: "Talegaon | Pune",
    totalLand: "0.14 MN SQ.FT.",
    pImg: "/ParkPage/talegaon-i/tal1lw.png",
    buildings: "02 Buildings",
    pLink: "/ksh-talegaon-i",
  },
];

const LastSw = () => <ParkLastSw cardData={cardData} />;

export default LastSw;
