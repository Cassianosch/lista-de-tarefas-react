import React, { useState } from "react";
import jsonTarefas from "utils/dados/tarefas.json";

const useTarefa = () => {
  const [tarefas, setTarefas] = useState(jsonTarefas);

  const removerTarefa = (id) => {
    const tarefasAtualizas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizas);
  };
  return {
    tarefas,
    removerTarefa,
  };
};
export default useTarefa;
