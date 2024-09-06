import React from "react";
import s from "./styles.module.css";

interface ButtonTransitProps {
  children: React.ReactNode;
  mode: "light" | "dark";
  onClick: () => void;
  isActive: boolean;
}

const ButtonTransit: React.FC<ButtonTransitProps> = ({
  children,
  mode,
  onClick,
  isActive,
}) => {
  return (
    <div className={`${s.option} ${s[mode]}`}>
      <button
        className={`${s.transitBtn} ${s[mode]} ${isActive ? s.active : ""}`}
        onClick={onClick}
      >
        <img src={`/assets/checkmark_${mode}.svg`} alt="checkmark icon" />
      </button>
      <span className={`${s.optionName} ${s[mode]}`}>{children}</span>
    </div>
  );
};

export default ButtonTransit;
