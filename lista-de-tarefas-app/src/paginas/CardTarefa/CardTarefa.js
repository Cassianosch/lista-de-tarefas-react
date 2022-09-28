import React from "react";
import { Cabecalho } from "./Cabecalho";
import { Corpo } from "./Corpo";
import "./estilos.scss";

const CardTarefa = () => {
  return (
    <article className="card-tarefa">
      <section className="card">
        <Cabecalho />
        <Corpo />
      </section>
    </article>
  );
};

export default CardTarefa;
