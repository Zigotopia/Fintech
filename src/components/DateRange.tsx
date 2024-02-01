import React, { useState } from "react";
import DateInput from "./DateInput";
import { useData } from "../contexts/dataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex">
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
