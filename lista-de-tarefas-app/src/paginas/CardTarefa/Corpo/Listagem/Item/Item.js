import React from "react";
import "./estilos.scss";
import icLixeira from "utils/imagem/ic-lixeira.svg";

export const Item = ({ chaveCorrente }) => {
  console.log(chaveCorrente);
  return (
    <div className="item">
      <div className="esquerda">
        <div className="checkbox__fora">
          <input type="checkbox" id={`checkbox__${chaveCorrente}`} />
          <label htmlFor={`checkbox__${chaveCorrente}`}></label>
        </div>
        <span className={true ? "text-line-through" : ""}>Estudar CSS</span>
      </div>
      <img src={icLixeira} alt="Icone lixeira" />
    </div>
  );
};
