import { Link } from "react-router";

function NaoEncontrada() {
  return (
    <div className="pagina">
      <h1 className="pagina-titulo">Página não encontrada</h1>
      <p className="pagina-intro">O endereço digitado não existe neste site.</p>
      <Link to="/" className="botao">
        Voltar para o evento
      </Link>
    </div>
  );
}

export default NaoEncontrada;
