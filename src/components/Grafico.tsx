import React from "react";
import { dataVenda } from "../contexts/dataContext";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface vendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: dataVenda[]): vendaDia[] {
  const dias = data.reduce((acc: { [key: string]: vendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const Grafico = ({ data }: { data: dataVenda[] }) => {
  const transformeddata = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformeddata}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="tomato" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Grafico;
