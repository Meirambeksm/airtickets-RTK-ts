import React from "react";
import s from "./styles.module.css";

interface ButtonAirlineProps {
  children: React.ReactNode;
  mode: "light" | "dark";
  onClick: () => void;
  isActive: boolean;
}

const ButtonAirline: React.FC<ButtonAirlineProps> = ({
  children,
  mode,
  onClick,
  isActive,
}) => {
  return (
    <div className={`${s.option} ${s[mode]}`}>
      <button className={`${s.airlineBtn} ${s[mode]}`} onClick={onClick}>
        <div className={`${s[mode]} ${isActive ? s.active : ""}`}></div>
      </button>
      <span className={`${s.optionName} ${s[mode]}`}>{children}</span>
    </div>
  );
};

export default ButtonAirline;
