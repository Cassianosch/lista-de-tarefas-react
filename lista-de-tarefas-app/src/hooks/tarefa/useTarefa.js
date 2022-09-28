import React, { useState } from "react";
import jsonTarefas from "utils/dados/tarefas.json";

const useTarefa = () => {
  const [tarefas, setTarefas] = useState(jsonTarefas);

  // console.log("====================================");
  // console.log(jsonTarefas);
  // console.log("====================================");
  const removerTarefa = (id) => {
    const tarefasAtualizas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizas);
    // console.log("====================================");
    // console.log("chamou remover", id);
    // console.log("====================================");
  };
  return {
    tarefas,
    removerTarefa,
  };
};
export default useTarefa;
