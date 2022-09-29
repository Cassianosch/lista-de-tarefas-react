import React from "react";
import "./estilos.scss";
import icLixeira from "utils/imagem/ic-lixeira.svg";
import { useTarefa } from "hooks";

export const Item = (propriedades) => {
  const { tarefa, setEditando } = propriedades;
  const { id, titulo, status } = tarefa;

  const { editarTarefa, removerTarefa } = useTarefa();

  const modificarStatus = () => {
    const tarefaAtualizada = {
      id,
      titulo,
      status: !status,
    };
    editarTarefa(tarefaAtualizada);
  };

  const handleRemoverElemento = () => {
    removerTarefa(id);
    setEditando(false);
  };

  return (
    <div className="item">
      <div className="esquerda">
        <div className="checkbox__fora">
          <input
            type="checkbox"
            id={`checkbox__${id}`}
            checked={status}
            onChange={modificarStatus}
          />
          <label htmlFor={`checkbox__${id}`}></label>
        </div>
        <span
          className={status ? "text-line-through" : ""}
          onClick={() => setEditando(tarefa)}
        >
          {titulo}
        </span>
      </div>
      <img
        src={icLixeira}
        alt="Icone lixeira"
        onClick={handleRemoverElemento}
      />
    </div>
  );
};
