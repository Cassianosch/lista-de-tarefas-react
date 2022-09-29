import React, { useState } from "react";
import { BotaoControle } from "./BotaoControle";
import { Listagem } from "./Listagem/Listagem";
import "./estilos.scss";

export const Corpo = () => {
  const [editando, setEditando] = useState(false);

  return (
    <article className="tarefa">
      <h5 className="titulo">Tarefas</h5>
      <BotaoControle editando={editando} setEditando={setEditando} />
      <Listagem setEditando={setEditando} />
    </article>
  );
};
