import React from "react";
import { dataVenda } from "../contexts/dataContext";
import { NavLink } from "react-router-dom";

const ItemVenda = ({ venda }: { venda: dataVenda }) => {
  return (
    <div className="venda box ">
      <NavLink to={`/vendas/${venda.id}`}>{venda.id}</NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default ItemVenda;
