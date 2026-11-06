import { useEffect, useState } from "react";
import { Link } from "react-router";
import { tiposIngresso } from "../data/evento.js";
import { listarInscricoes, removerInscricao } from "../services/api.js";
import styles from "./Inscritos.module.css";

function tituloDoTipo(valor) {
  return tiposIngresso.find((tipo) => tipo.valor === valor)?.titulo ?? valor;
}

function Inscritos() {
  const [inscricoes, setInscricoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [removendoId, setRemovendoId] = useState(null);

  useEffect(() => {
    // Evita atualizar o estado se o usuário sair da tela antes da resposta chegar
    let ativo = true;

    listarInscricoes()
      .then((lista) => {
        if (ativo) setInscricoes(lista);
      })
      .catch((falha) => {
        if (ativo) setErro(falha.message);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  async function remover(inscricao) {
    if (!window.confirm(`Excluir a inscrição de ${inscricao.nome}?`)) {
      return;
    }

    setErro("");
    setRemovendoId(inscricao.id);

    try {
      await removerInscricao(inscricao.id);
      setInscricoes((atual) => atual.filter((item) => item.id !== inscricao.id));
    } catch (falha) {
      setErro(falha.message);
    } finally {
      setRemovendoId(null);
    }
  }

  const total = inscricoes.length;

  return (
    <div className="pagina">
      <h1 className="pagina-titulo">Inscritos</h1>
      <p className="pagina-intro">
        {carregando
          ? "Carregando inscrições..."
          : `${total} ${total === 1 ? "pessoa inscrita" : "pessoas inscritas"} no evento.`}
      </p>

      {erro && (
        <p className="alerta-erro" role="alert">
          {erro}
        </p>
      )}

      {!carregando && !erro && total === 0 && (
        <div className={styles.vazio}>
          <p>Ainda não há inscrições. Quando alguém se inscrever, o nome aparece aqui.</p>
          <Link to="/inscricao" className="botao">
            Abrir formulário de inscrição
          </Link>
        </div>
      )}

      {total > 0 && (
        <table className={styles.tabela}>
          <caption className="visualmente-oculto">Lista de pessoas inscritas</caption>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Ingresso</th>
              <th scope="col">
                <span className="visualmente-oculto">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {inscricoes.map((inscricao) => (
              <tr key={inscricao.id}>
                <td data-rotulo="Nome" className={styles.nome}>
                  {inscricao.nome}
                </td>
                <td data-rotulo="E-mail" className={styles.email}>
                  {inscricao.email}
                </td>
                <td data-rotulo="Telefone">
                  {inscricao.telefone || <span className={styles.semDado}>Não informado</span>}
                </td>
                <td data-rotulo="Ingresso">
                  <span className={`${styles.etiqueta} ${styles[inscricao.tipoIngresso]}`}>
                    {tituloDoTipo(inscricao.tipoIngresso)}
                  </span>
                </td>
                <td className={styles.acao}>
                  <button
                    type="button"
                    className={styles.excluir}
                    onClick={() => remover(inscricao)}
                    disabled={removendoId === inscricao.id}
                    aria-label={`Excluir a inscrição de ${inscricao.nome}`}
                  >
                    {removendoId === inscricao.id ? "Excluindo..." : "Excluir"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Inscritos;
