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
    buildings: "02 Buildings",
    pLink: "/ksh-chakan-iv",
    pImg: "/ParkPage/chakan-4/ch4lw.png",
  },
  {
    parkTitle: "KSH Chakan Park III",
    pLocal: "Chakan | Pune",
    totalLand: "1.50 MN SQ.FT.",
    buildings: "08 Buildings",
    pLink: "/ksh-chakan-iii",
    pImg: "/ParkPage/chakan-3/ch3lw.png",
  },
  {
    parkTitle: "KSH Chakan Park I",
    pLocal: "Chakan | Pune",
    totalLand: "0.85 MN SQ.FT.",
    buildings: "04 Buildings",
    pLink: "/ksh-chakan-i",
    pImg: "/ParkPage/chakan-1/ch1lw.png",
  },
  {
    parkTitle: "KSH Talegaon Park I",
    pLocal: "Talegaon | Pune",
    totalLand: "0.14 MN SQ.FT.",
    buildings: "02 Buildings",
    pLink: "/ksh-talegaon-i",
    pImg: "/ParkPage/talegaon-i/tal1lw.png",
  },
];

const LastSw = () => <ParkLastSw cardData={cardData} />;

export default LastSw;
