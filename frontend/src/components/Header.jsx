import { Link, NavLink } from "react-router";
import { evento } from "../data/evento.js";
import styles from "./Header.module.css";

function classeDoLink({ isActive }) {
  return isActive ? `${styles.link} ${styles.ativo}` : styles.link;
}

function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.conteudo}>
        <Link to="/" className={styles.marca}>
          {evento.nome}
        </Link>

        <nav aria-label="Principal" className={styles.menu}>
          <NavLink to="/" end className={classeDoLink}>
            Evento
          </NavLink>
          <NavLink to="/inscricao" className={classeDoLink}>
            Inscrição
          </NavLink>
          <NavLink to="/inscritos" className={classeDoLink}>
            Inscritos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
