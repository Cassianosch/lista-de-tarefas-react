import React from "react";
import "./estilos.scss";
import { Item } from "./Item";
import { useTarefa } from "hooks";

export const Listagem = () => {
  const { tarefas } = useTarefa();
  return (
    <>
      {tarefas.map((tarefa) => (
        <Item key={tarefa.id} {...tarefa} />
      ))}
    </>
  );
};
