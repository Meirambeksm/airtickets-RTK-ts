import React, { useState } from "react";
import s from "./styles.module.css";
import FilterAirline from "../sidebar/FilterAirline";
import FilterTransit from "../sidebar/FilterTransit";

const Filter: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={s.filter}>
      <div className={s.filterContainer}>
        <span>Любая авиакомпания, любое кол-во пересадок</span>
        <button onClick={() => setOpen(!open)}>
          <span>Открыть настройки</span>
          <img src="/assets/arrow_btn.svg" alt="Arrow button" />
        </button>
      </div>

      {open && (
        <div className={s.filterDetails}>
          <FilterAirline mode="dark" />
          <FilterTransit mode="dark" />
        </div>
      )}
    </div>
  );
};

export default Filter;
