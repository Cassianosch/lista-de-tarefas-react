import React from "react";
import "./estilos.scss";
import icLixeira from "utils/imagem/ic-lixeira.svg";

export const Item = ({ tarefa, removerTarefa }) => {
  const { id, titulo, status } = tarefa;
  return (
    <div className="item">
      <div className="esquerda">
        <div className="checkbox__fora">
          <input type="checkbox" id={`checkbox__${id}`} />
          <label htmlFor={`checkbox__${id}`}></label>
        </div>
        <span className={status ? "text-line-through" : ""}>{titulo}</span>
      </div>
      <img
        src={icLixeira}
        alt="Icone lixeira"
        onClick={() => removerTarefa(id)}
      />
    </div>
  );
};
