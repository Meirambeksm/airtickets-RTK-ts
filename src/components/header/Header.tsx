import React from "react";
import s from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <img src="/assets/airplane.svg" alt="Airplane icon" />
      <h1>Поиск авиабилетов</h1>
    </div>
  );
};

export default Header;
