import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, CardTarefa } from "paginas";
import { UsuarioContexto, TarefaContexto } from "contexto";
import jsonTarefas from "utils/dados/tarefas.json";

const Rotas = () => {
  const [sessao, setSessao] = useState({ logado: false });
  const [tarefas, setTarefas] = useState(jsonTarefas);
  return (
    <UsuarioContexto.Provider value={[sessao, setSessao]}>
      <TarefaContexto.Provider value={[tarefas, setTarefas]}>
        <Routes>
          {sessao && sessao.logado ? (
            <>
              <Route path="lista-de-tarefas" element={<CardTarefa />} />
              <Route
                path="*"
                element={<Navigate to="lista-de-tarefas" replace />}
              />
            </>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="login" replace />} />
            </>
          )}
        </Routes>
      </TarefaContexto.Provider>
    </UsuarioContexto.Provider>
  );
};

export default Rotas;
