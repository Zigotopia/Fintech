import React, { CSSProperties } from "react";
import { useData } from "../contexts/dataContext";

const style: CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  border: "none",
  borderRadius: "var(--gap)",
  fontWeight: "600",
  textTransform: "capitalize",
};
function getMesName(n: number) {
  const data = new Date();
  data.setMonth(data.getMonth() - n);

  const date = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);

  return date;
}

const MesBtn = ({ n }: { n: number }) => {
  const { setFinal, setInicio } = useData();

  function setMes(n: number) {
    const data = new Date();
    data.setMonth(data.getMonth() - n);
    const firstday = new Date(data.getFullYear(), data.getMonth(), 1)
      .toISOString()
      .substring(0, 10);
    const lastday = new Date(data.getFullYear(), data.getMonth() + 1, 0)
      .toISOString()
      .substring(0, 10);

    setInicio(firstday);
    setFinal(lastday);
  }

  return (
    <button onClick={() => setMes(n)} type="button" style={style}>
      {getMesName(n)}
    </button>
  );
};

export default MesBtn;
