import React from "react";
import "./estilos.scss";
import icLixeira from "utils/imagem/ic-lixeira.svg";
import { useTarefa } from "hooks";

export const Item = ({ id, titulo, status }) => {
  const { editarTarefa, removerTarefa } = useTarefa();

  const modificarStatus = () => {
    const tarefaAtualizada = {
      id,
      titulo,
      status: !status,
    };
    editarTarefa(tarefaAtualizada);
  };

  return (
    <div className="item">
      <div className="esquerda">
        <div className="checkbox__fora">
          <input
            type="checkbox"
            id={`checkbox__${id}`}
            defaultChecked={status}
            onChange={modificarStatus}
          />
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
