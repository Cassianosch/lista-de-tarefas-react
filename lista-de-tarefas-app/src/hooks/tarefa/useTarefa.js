import { useContext } from "react";
import { TarefaContexto } from "contexto";

const useTarefa = () => {
  const [tarefas, setTarefas] = useContext(TarefaContexto);

  const adicionarTarefa = (tarefaTitulo) => {
    let novaTarefa = {
      id: tarefas.length + 1,
      titulo: tarefaTitulo,
      status: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const editarTarefa = (tarefa) => {
    const tarefasAtualizas = tarefas.map((tarefaLacoDeRepeticao) => {
      if (tarefaLacoDeRepeticao.id === tarefa.id) {
        return tarefa;
      }
      return tarefaLacoDeRepeticao;
    });
    setTarefas(tarefasAtualizas);
  };

  const removerTarefa = (id) => {
    const tarefasAtualizas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizas);
  };

  return {
    tarefas,
    adicionarTarefa,
    editarTarefa,
    removerTarefa,
  };
};
export default useTarefa;
