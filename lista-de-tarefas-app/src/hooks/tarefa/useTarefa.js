import { useContext } from "react";
import { TarefaContexto } from "contexto";

const useTarefa = () => {
  const [tarefas, setTarefas] = useContext(TarefaContexto);

  const adicionarTarefa = (tarefaTitulo) => {
    let novaTarefa = {
      id: Math.floor(Math.random() * 10000000),
      titulo: tarefaTitulo,
      status: false,
    };
    let tarefasAtualizas = [...tarefas, novaTarefa];
    setTarefas(tarefasAtualizas);
    setarStorage(tarefasAtualizas);
  };

  const editarTarefa = (tarefa) => {
    const tarefasAtualizas = tarefas.map((tarefaLacoDeRepeticao) => {
      if (tarefaLacoDeRepeticao.id === tarefa.id) {
        return tarefa;
      }
      return tarefaLacoDeRepeticao;
    });
    setTarefas(tarefasAtualizas);
    setarStorage(tarefasAtualizas);
  };

  const removerTarefa = (id) => {
    const tarefasAtualizas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizas);
    setarStorage(tarefasAtualizas);
  };

  const setarStorage = (tarefas) => {
    localStorage.setItem("@programador.cs::tarefas", JSON.stringify(tarefas));
  };

  return {
    tarefas,
    adicionarTarefa,
    editarTarefa,
    removerTarefa,
  };
};
export default useTarefa;
