import React from "react";
import s from "./styles.module.css";
import FlightItem from "./FlightItem";
import { Flight } from "../../../features/types";

interface FlightListProps {
  sortedFlights: Flight[];
}

const FlightList: React.FC<FlightListProps> = ({ sortedFlights }) => {
  return (
    <ul className={s.flights}>
      {sortedFlights.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </ul>
  );
};

export default FlightList;
