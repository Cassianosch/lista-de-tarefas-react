import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, CardTarefa } from "paginas";
import { UsuarioContexto } from "contexto/Usuario";

const Rotas = () => {
  const [sessao, setSessao] = useState({ logado: true });
  return (
    <UsuarioContexto.Provider value={[sessao, setSessao]}>
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
    </UsuarioContexto.Provider>
  );
};

export default Rotas;
