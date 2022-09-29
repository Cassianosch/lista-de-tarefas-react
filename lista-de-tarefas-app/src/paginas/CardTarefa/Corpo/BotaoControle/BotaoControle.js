import React, { useState } from "react";
import "./estilos.scss";
import { useTarefa } from "hooks";
import { useForm } from "react-hook-form";

export const BotaoControle = () => {
  const [mostrarInput, setMostrarInput] = useState(false);

  const { adicionarTarefa } = useTarefa();

  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    adicionarTarefa(data.tarefa);
    resetField("tarefa");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`caixa__botao ${mostrarInput ? "mostrar" : ""}`}
    >
      <input type="text" {...register("tarefa", { required: true })} />
      <button type="submit" onClick={() => setMostrarInput(!mostrarInput)}>
        + Nova Tarefa
      </button>
    </form>
  );
};
