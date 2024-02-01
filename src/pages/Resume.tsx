import React from "react";
import { useData } from "../contexts/dataContext";
import Grafico from "../components/Grafico";

const Resume = () => {
  const { data } = useData();
  if (data)
    return (
      <div>
        <div className="flex resumo mb">
          <div className="box">
            <h2>Vendas</h2>
            <span>
              {data
                ?.filter((item) => item.status !== "falha")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
          <div className="box">
            <h2>Recebido</h2>
            <span>
              {data
                ?.filter((item) => item.status === "pago")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
          <div className="box">
            <h2>Processando</h2>
            <span>
              {data
                ?.filter((item) => item.status === "processando")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
        </div>
        <div className="box mb">
          <Grafico data={data} />
        </div>
      </div>
    );
};

export default Resume;
