import s from "./styles.module.css";
import React, { useEffect } from "react";
import LoadBtn from "./LoadBtn";
import Filter from "./Filter";
import FlightFilter from "./FlightFilter";
import FlightList from "./FlightList";
import {
  incrementDisplayedCount,
  selectActiveCompanies,
  selectActiveTransits,
  selectDisplayedCount,
  selectSortCriteria,
} from "../../../features/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlightsThunk,
  selectAllFlights,
} from "../../../features/flightsSlice";
import { AppDispatch, RootState } from "../../app/store";

interface Flight {
  company: string;
  transit: {
    name: string;
  };
  price: number;
  duration: number;
}

const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const flights = useSelector((state: RootState) => selectAllFlights(state));
  const activeCompanies = useSelector((state: RootState) =>
    selectActiveCompanies(state)
  );
  const activeTransits = useSelector((state: RootState) =>
    selectActiveTransits(state)
  );
  const displayedCount = useSelector((state: RootState) =>
    selectDisplayedCount(state)
  );
  const sortCriteria = useSelector((state: RootState) =>
    selectSortCriteria(state)
  );

  const handleLoadMore = () => dispatch(incrementDisplayedCount());

  useEffect(() => {
    if (flights.length === 0) dispatch(fetchFlightsThunk());
  }, [dispatch, flights.length]);

  const filteredFlights = flights
    .slice(0, displayedCount)
    .filter((flight: Flight) => {
      if (
        activeCompanies.length > 0 &&
        !activeCompanies.includes(flight.company)
      ) {
        return false;
      }
      if (
        activeTransits.length > 0 &&
        !activeTransits.includes(flight.transit.name)
      ) {
        return false;
      }
      return true;
    });

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "duration") {
      return a.duration - b.duration;
    } else if (sortCriteria === "optimal") {
      const priceWeight = 0.5;
      const durationWeight = 0.5;
      const scoreA = priceWeight * a.price + durationWeight * a.duration;
      const scoreB = priceWeight * b.price + durationWeight * b.duration;
      return scoreA - scoreB;
    }
    return 0;
  });

  const loaded = filteredFlights.length >= flights.length;

  return (
    <div className={s.content}>
      <FlightFilter />
      <Filter />
      <FlightList sortedFlights={sortedFlights} />
      <LoadBtn onClick={handleLoadMore} disabled={loaded}>
        {loaded ? "Других билетов нет" : "Загрузить еще билеты"}
      </LoadBtn>
    </div>
  );
};

export default Content;
