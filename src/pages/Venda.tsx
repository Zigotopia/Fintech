import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import { dataVenda } from "../contexts/dataContext";
import Loading from "../components/Loading";

const Venda = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<dataVenda>(
    `https://data.origamid.dev/vendas/${id}`
  );
  console.log(data);
  if (loading) return <Loading />;
  return (
    <div>
      <div className="mb box">Id: {data?.id}</div>
      <div className="mb box">Nome: {data?.nome}</div>
      <div className="mb box">Pagamento: {data?.pagamento}</div>

      <div className="mb box">
        Preço:{" "}
        {data?.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="mb box">Status: {data?.status}</div>
    </div>
  );
};

export default Venda;
