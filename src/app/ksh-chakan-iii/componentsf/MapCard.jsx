"use client";
import ParkMapCard from "../../Components/parkComponents/ParkMapCard";

const items = [
  {
    id: 1,
    title: "Pune International Airport",
    km: 37,
    icon: "/ParkPage/mapicons/apl.svg",
  },
  {
    id: 2,
    title: "Mumbai International Airport",
    km: 148,
    icon: "/ParkPage/mapicons/apl.svg",
  },
  { id: 3, title: "Seaport", km: 148, icon: "/ParkPage/mapicons/ship.svg" },
  {
    id: 4,
    title: "National Highways",
    km: 110,
    icon: "/ParkPage/mapicons/road.svg",
  },
  { id: 5, title: "City Center", km: 33, icon: "/ParkPage/mapicons/clock.svg" },
];

const staticItem = {
  id: "coordinates",
  title: "View on Map",
  value: "18.781965, 73.795441",
  icon: "/ParkPage/mapicons/road.svg",
};

const MapCard = ({ activeIndex, onSelectAirport }) => (
  <ParkMapCard
    items={items}
    activeIndex={activeIndex}
    onSelectAirport={onSelectAirport}
    staticItem={staticItem}
  />
);

export default MapCard;
