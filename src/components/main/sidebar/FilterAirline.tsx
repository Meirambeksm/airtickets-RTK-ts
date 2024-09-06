import React from "react";
import ButtonAirline from "./ButtonAirline";
import s from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCompanies,
  selectActiveCompanies,
} from "../../../features/filtersSlice";
import { AppDispatch, RootState } from "../../app/store";

interface FilterAirlineProps {
  mode: "light" | "dark";
}

const FilterAirline: React.FC<FilterAirlineProps> = ({ mode }) => {
  const companies = ["Победа", "Red Wings", "S7 Airlines"];

  const dispatch = useDispatch<AppDispatch>();
  const activeCompanies = useSelector((state: RootState) =>
    selectActiveCompanies(state)
  );

  const handleFilter = (company: string) => {
    const newActiveCompanies = activeCompanies.includes(company)
      ? activeCompanies.filter((c) => c !== company)
      : [...activeCompanies, company];
    dispatch(setActiveCompanies(newActiveCompanies));
  };

  return (
    <div className={`${s.filterTransit} ${s[mode]}`}>
      <h1 className={`${s.filterHeading} ${s[mode]}`}>Компании</h1>
      {companies.map((company, index) => (
        <ButtonAirline
          key={index}
          mode={mode}
          isActive={activeCompanies.includes(company)}
          onClick={() => handleFilter(company)}
        >
          {company}
        </ButtonAirline>
      ))}
    </div>
  );
};

export default FilterAirline;
