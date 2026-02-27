"use client";
import ParkMapCard from "../../Components/parkComponents/ParkMapCard";
const items = [
  { id: 1, title: "Bengaluru International Airport", km: 90, icon: "/ParkPage/mapicons/apl.svg" },
  { id: 2, title: "Chennai International Airport", km: 286, icon: "/ParkPage/mapicons/apl.svg" },
  { id: 3, title: "Chennai seaport", km: 300, icon: "/ParkPage/mapicons/ship.svg" },
  { id: 4, title: "National Highway", km: 30, icon: "/ParkPage/mapicons/road.svg" },
  { id: 5, title: "State Highway", km: 37, icon: "/ParkPage/mapicons/road.svg" },
];
const MapCard = ({ activeIndex, onSelectAirport }) => <ParkMapCard items={items} activeIndex={activeIndex} onSelectAirport={onSelectAirport} />;
export default MapCard;
