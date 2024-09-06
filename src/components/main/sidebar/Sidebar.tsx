import React from "react";
import s from "./styles.module.css";
import FilterTransit from "./FilterTransit";
import FilterAirline from "./FilterAirline";

const Sidebar: React.FC = () => {
  return (
    <aside className={s.sidebar}>
      <FilterTransit mode="light" />
      <FilterAirline mode="light" />
    </aside>
  );
};

export default Sidebar;
