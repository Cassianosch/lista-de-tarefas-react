import React, { useState, useEffect } from "react";
import "./estilos.scss";
import { useTarefa } from "hooks";
import { useForm } from "react-hook-form";

export const BotaoControle = ({ editando, setEditando }) => {
  const [mostrarInput, setMostrarInput] = useState(false);

  const { adicionarTarefa, editarTarefa } = useTarefa();

  const { register, handleSubmit, resetField, setValue } = useForm();

  const onSubmit = (data) => {
    if (editando?.titulo) {
      editando.titulo = data.tarefa;
      editando.status = false;
      editarTarefa(editando);
    } else {
      adicionarTarefa(data.tarefa);
    }
    setEditando(false);
    resetField("tarefa");
  };

  useEffect(() => {
    if (editando?.titulo) {
      setValue("tarefa", editando.titulo);
      setMostrarInput(true);
    } else {
      setEditando(false);
      setMostrarInput(false);
      resetField("tarefa");
    }
  }, [editando, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`caixa__botao ${mostrarInput || editando ? "mostrar" : ""}`}
    >
      <input type="text" {...register("tarefa", { required: true })} />
      <button type="submit" onClick={() => setMostrarInput(!mostrarInput)}>
        + Nova Tarefa
      </button>
    </form>
  );
};
