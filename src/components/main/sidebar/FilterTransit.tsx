import React from "react";
import ButtonTransit from "./ButtonTransit";
import s from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTransits,
  selectActiveTransits,
} from "../../../features/filtersSlice";
import { AppDispatch, RootState } from "../../app/store";

interface FilterTransitProps {
  mode: "light" | "dark";
}

const FilterTransit: React.FC<FilterTransitProps> = ({ mode }) => {
  const transits = [
    "Без пересадки",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ];

  const dispatch = useDispatch<AppDispatch>();
  const activeTransits = useSelector((state: RootState) =>
    selectActiveTransits(state)
  );

  const handleTransitFilter = (transit: string) => {
    const newActiveTransits = activeTransits.includes(transit)
      ? activeTransits.filter((t) => t !== transit)
      : [...activeTransits, transit];
    dispatch(setActiveTransits(newActiveTransits));
  };

  return (
    <div className={`${s.filterTransit} ${s[mode]}`}>
      <h1 className={`${s.filterHeading} ${s[mode]}`}>Количество пересадок</h1>
      {transits.map((transit) => (
        <ButtonTransit
          key={transit}
          mode={mode}
          onClick={() => handleTransitFilter(transit)}
          isActive={activeTransits.includes(transit)}
        >
          {transit}
        </ButtonTransit>
      ))}
    </div>
  );
};

export default FilterTransit;
