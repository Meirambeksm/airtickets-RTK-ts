import React from "react";
import s from "./styles.module.css";

interface LoadBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const LoadBtn: React.FC<LoadBtnProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={s.loadBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadBtn;
