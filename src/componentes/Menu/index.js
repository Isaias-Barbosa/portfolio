import { Link, NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
export default function Menu() {
  return <header className={styles.header}>
    <a className={styles.pular} href="#conteudo">Pular para o conteúdo</a>
    <nav className={styles.navegacao} aria-label="Navegação principal">
      <Link to="/" className={styles.marca} aria-label="Isaias Barbosa — início">ib<span>.</span></Link>
      <div className={styles.links}>
        <NavLink to="/" end>Início</NavLink>
        <Link to="/#projetos">Projetos</Link>
        <NavLink to="/sobremim">Sobre mim</NavLink>
        <Link className={styles.contato} to="/#contato">Vamos conversar <span aria-hidden="true">↗</span></Link>
      </div>
    </nav>
  </header>;
}
