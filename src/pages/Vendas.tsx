import React from "react";
import { useData } from "../contexts/dataContext";
import ItemVenda from "../components/ItemVenda";

const Vendas = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <div>
      {data?.map((venda) => (
        <ItemVenda venda={venda} />
      ))}
    </div>
  );
};

export default Vendas;
