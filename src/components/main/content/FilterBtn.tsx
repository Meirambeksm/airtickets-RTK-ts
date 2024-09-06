import React from "react";
import s from "./styles.module.css";

interface FilterBtnProps {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

const FilterBtn: React.FC<FilterBtnProps> = ({
  onClick,
  children,
  isActive,
}) => {
  return (
    <button
      className={`${s.filterBtn} ${isActive ? s.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterBtn;
