import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, CardTarefa } from "paginas";

const Rotas = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="lista-de-tarefas" element={<CardTarefa />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default Rotas;
