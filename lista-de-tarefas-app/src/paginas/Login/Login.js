import React from "react";

const Login = () => {
  return (
    <article className="pagina-login conteudo">
      <section className="login">
        <form>
          <div className="inputs">
            <div className="caixa__input">
              <label>Login</label>
              <input type="text" />
            </div>
            <div className="caixa__input">
              <label>Senha</label>
              <input type="password" />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </article>
  );
};

export default Login;
