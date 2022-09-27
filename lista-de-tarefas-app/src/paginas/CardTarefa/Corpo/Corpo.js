import React from "react";
import { BotaoControle } from "./BotaoControle";
import { Listagem } from "./Listagem/Listagem";
import "./estilos.scss";

export const Corpo = () => {
  return (
    <article className="tarefa">
      <h5 className="titulo">Tarefas</h5>
      <BotaoControle />
      <Listagem />
    </article>
  );
};
