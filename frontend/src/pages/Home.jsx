import { Link } from "react-router";
import { evento, palestrantes } from "../data/evento.js";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroConteudo}>
          <h1 className={styles.titulo}>
            <span>Mutirão</span>
            <span>Dev {evento.ano}</span>
          </h1>

          <dl className={styles.detalhes}>
            <div>
              <dt>Quando</dt>
              <dd>
                {evento.diaDaSemana}, {evento.data}
                <br />
                {evento.horario}
              </dd>
            </div>
            <div>
              <dt>Onde</dt>
              <dd>
                {evento.local}
                <br />
                {evento.endereco}
              </dd>
            </div>
          </dl>

          <Link to="/inscricao" className="botao">
            Inscreva-se
          </Link>
        </div>
      </section>

      <section className={styles.secao} aria-labelledby="titulo-sobre">
        <div className={styles.sobre}>
          <h2 id="titulo-sobre">Sobre o evento</h2>
          <div className={styles.texto}>
            {evento.sobre.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.secao} ${styles.programacao}`} aria-labelledby="titulo-palestrantes">
        <div className={styles.container}>
          <h2 id="titulo-palestrantes">Palestrantes</h2>

          <ol className={styles.lista}>
            {palestrantes.map((palestrante) => (
              <li key={palestrante.nome} className={styles.item}>
                <span className={styles.horario}>{palestrante.horario}</span>
                <div>
                  <p className={styles.nome}>{palestrante.nome}</p>
                  <p className={styles.cargo}>{palestrante.cargo}</p>
                </div>
                <p className={styles.palestra}>{palestrante.palestra}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.secao} aria-labelledby="titulo-chamada">
        <div className={`${styles.container} ${styles.chamada}`}>
          <div>
            <h2 id="titulo-chamada">Garanta sua vaga</h2>
            <p>A inscrição leva menos de um minuto e não precisa de cadastro.</p>
          </div>
          <Link to="/inscricao" className="botao">
            Inscreva-se
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
