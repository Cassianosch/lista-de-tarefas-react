import React from "react";
import "./estilos.scss";
import { Item } from "./Item";

export const Listagem = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((el, i) => (
        <Item key={i} chaveCorrente={i} />
      ))}
    </>
  );
};
