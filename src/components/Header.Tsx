import React, { useEffect, useState } from "react";
import { useData } from "../contexts/dataContext.tsx";
import DateRange from "./DateRange.tsx";
import Meses from "./Meses.tsx";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Resumo");
        document.title = "Fintech | Resumo";
        break;
      case "/vendas":
        setTitle("Vendas");
        document.title = "Fintech | Vendas";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
