import { useState } from "react";
import { Link } from "react-router";
import { evento, tiposIngresso } from "../data/evento.js";
import { criarInscricao } from "../services/api.js";
import styles from "./Inscricao.module.css";

const FORMULARIO_VAZIO = { nome: "", email: "", telefone: "", tipoIngresso: "" };

function Inscricao() {
  const [dados, setDados] = useState(FORMULARIO_VAZIO);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [inscricaoCriada, setInscricaoCriada] = useState(null);

  // Um único handler para todos os campos, usando o atributo name
  function atualizarCampo(e) {
    const { name, value } = e.target;
    setDados((atual) => ({ ...atual, [name]: value }));
  }

  async function enviar(e) {
    e.preventDefault();
    setErro("");
    setEnviando(true);

    try {
      const criada = await criarInscricao(dados);
      setInscricaoCriada(criada);
      setDados(FORMULARIO_VAZIO);
    } catch (falha) {
      setErro(falha.message);
    } finally {
      setEnviando(false);
    }
  }

  const tipoEscolhido = tiposIngresso.find((tipo) => tipo.valor === inscricaoCriada?.tipoIngresso);

  return (
    <div className={`pagina ${styles.layout}`}>
      <div>
        <h1 className="pagina-titulo">Inscrição</h1>
        <p className="pagina-intro">
          Preencha seus dados para garantir a vaga no {evento.nome} {evento.ano}.
        </p>
        <p className={styles.resumo}>
          {evento.diaDaSemana}, {evento.data}, {evento.horario}
          <br />
          {evento.local}, {evento.endereco}
        </p>
      </div>

      {inscricaoCriada ? (
        <section className={styles.sucesso} aria-live="polite">
          <h2>Inscrição confirmada</h2>
          <p>
            {inscricaoCriada.nome}, sua inscrição como {tipoEscolhido?.titulo.toLowerCase()} foi registrada
            com o e-mail {inscricaoCriada.email}.
          </p>
          <div className={styles.acoes}>
            <Link to="/" className="botao">
              Voltar para o evento
            </Link>
            <button type="button" className="botao botao-contorno" onClick={() => setInscricaoCriada(null)}>
              Fazer outra inscrição
            </button>
          </div>
        </section>
      ) : (
        <form className={styles.formulario} onSubmit={enviar}>
          <div className={styles.campo}>
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              required
              value={dados.nome}
              onChange={atualizarCampo}
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={dados.email}
              onChange={atualizarCampo}
            />
          </div>

          <div className={styles.campo}>
            <label htmlFor="telefone">
              Telefone <span className={styles.opcional}>(opcional)</span>
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              value={dados.telefone}
              onChange={atualizarCampo}
            />
          </div>

          <fieldset className={styles.tipos}>
            <legend>Tipo de ingresso</legend>
            <div className={styles.opcoes}>
              {tiposIngresso.map((tipo) => (
                <label key={tipo.valor} className={styles.opcao}>
                  <input
                    type="radio"
                    name="tipoIngresso"
                    value={tipo.valor}
                    required
                    checked={dados.tipoIngresso === tipo.valor}
                    onChange={atualizarCampo}
                  />
                  <span className={styles.opcaoTitulo}>{tipo.titulo}</span>
                  <span className={styles.opcaoDescricao}>{tipo.descricao}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {erro && (
            <p className="alerta-erro" role="alert">
              {erro}
            </p>
          )}

          <button type="submit" className="botao" disabled={enviando}>
            {enviando ? "Enviando inscrição..." : "Confirmar inscrição"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Inscricao;
