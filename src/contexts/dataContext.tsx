import React, {
  Children,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../hooks/usefetch";

type fetchInterface = {
  data: dataVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type dataVenda = {
  id: string;
  nome: string;
  preco: number;
  pagamento: "cartao" | "pix";
  status: "pago" | "processando" | "falha";
  parcelas: number | null;
  data: string;
};

const datacontext = createContext<fetchInterface | null>(null);

export function useData() {
  const context = useContext(datacontext);
  if (!context)
    throw new Error("é necessario utilizar o provider nos elementos filhos");
  return context;
}

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getRecentDate(15));
  const [final, setFinal] = useState(getRecentDate(0));

  function getRecentDate(n: number) {
    const data = new Date();
    data.setDate(data.getDate() - n);
    return data.toISOString().substring(0, 10);
  }

  const { data, loading, error } = useFetch<dataVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <datacontext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </datacontext.Provider>
  );
};

export default DataContextProvider;
