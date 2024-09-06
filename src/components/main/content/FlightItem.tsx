import React from "react";
import s from "./styles.module.css";
import { Flight } from "../../../features/types";

interface FlightItemProps {
  flight: Flight;
}

const FlightItem: React.FC<FlightItemProps> = ({ flight }) => {
  return (
    <li className={s.flight}>
      <div className={s.flightHeader}>
        <h1>{flight.price} R</h1>
        <img src={flight.logo} alt="Airplane logo" />
      </div>

      <div className={s.flightInfo}>
        <div>
          <span>
            {flight.from} - {flight.to}
          </span>
          <p>
            {flight.time?.start} - {flight.time?.end}
          </p>
        </div>

        <div className={s.flightInfo}>
          <span>В пути</span>
          <p>
            {Math.floor(flight.duration / 60)} ч {flight.duration % 60} мин
          </p>
        </div>

        <div className={s.flightInfo}>
          <span>Пересадка</span>
          <p>
            {!flight.transit?.value && "Без пересадок"}
            {flight.transit?.value === 1 && `${flight.transit.value} пересадка`}
            {flight.transit?.value > 1 && `${flight.transit.value} пересадки`}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FlightItem;
