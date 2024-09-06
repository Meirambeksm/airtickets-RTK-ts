import React, { useState } from "react";
import FilterBtn from "./FilterBtn";
import s from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortCriteria,
  selectSortCriteria,
} from "../../../features/filtersSlice";
import { AppDispatch, RootState } from "../../app/store";

const FlightFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sortCriteria = useSelector((state: RootState) =>
    selectSortCriteria(state)
  );
  const [activeFilter, setActiveFilter] = useState<string | null>(sortCriteria);

  const handleFilterClick = (criteria: string) => {
    dispatch(setSortCriteria(criteria));
    setActiveFilter(criteria);
  };

  const filterBtns = [
    { name: "Самый дешевый", criteria: "price" },
    { name: "Самый быстрый", criteria: "duration" },
    { name: "Самый оптимальный", criteria: "optimal" },
  ]; // check

  return (
    <div className={s.filterFlight}>
      {filterBtns.map((btn) => (
        <FilterBtn
          key={btn.criteria}
          onClick={() => handleFilterClick(btn.criteria)}
          isActive={activeFilter === btn.criteria}
        >
          {btn.name}
        </FilterBtn>
      ))}
    </div>
  );
};

export default FlightFilter;
