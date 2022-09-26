import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Rotas from "Rotas";
import "utils/estilos/principal.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="principal">
        <Rotas />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
