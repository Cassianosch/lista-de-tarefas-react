import React from "react";
import "./estilos.scss";
import { Item } from "./Item";
import { useTarefa } from "hooks";

export const Listagem = () => {
  const { tarefas, removerTarefa } = useTarefa();
  // console.log(tarefas);
  return (
    <>
      {tarefas.map((tarefa) => (
        <Item key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} />
      ))}
    </>
  );
};
