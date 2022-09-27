import { useContext } from "react";
import jsonUsuario from "utils/usuario.json";
import { UsuarioContexto } from "contexto/Usuario";

const useUsuario = () => {
  const [_, setSessao] = useContext(UsuarioContexto);

  const handleLogin = ({ usuario, senha }) => {
    if (
      jsonUsuario.usuario.toLowerCase() === usuario.toLowerCase() &&
      jsonUsuario.senha === senha
    ) {
      setSessao({ ...jsonUsuario, logado: true });
    } else {
      alert("Dados incorretos, tente novamente.");
    }
  };
  return {
    handleLogin,
  };
};
export default useUsuario;
