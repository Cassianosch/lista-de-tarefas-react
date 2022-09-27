import React from "react";
import { useForm } from "react-hook-form";
import "./estilo.scss";
import { useUsuario } from "hooks";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { handleLogin } = useUsuario();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <article className="pagina-login conteudo">
      <section className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="caixa__input">
              <label>Login</label>
              <input type="text" {...register("usuario", { required: true })} />
            </div>
            <div className="caixa__input">
              <label>Senha</label>
              <input
                type="password"
                {...register("senha", { required: true })}
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </article>
  );
};

export default Login;
