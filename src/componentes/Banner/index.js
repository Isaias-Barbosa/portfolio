import { Link } from 'react-router-dom';
import styles from './Banner.module.css';
import minhaFoto from 'assets/perfil.JPG';

export default function Banner() {
  return (
    <section className={styles.banner} aria-labelledby="apresentacao">
      <div className={styles.conteudo}>
        <p className={styles.eyebrow}>ISAIAS BARBOSA · DESENVOLVIMENTO WEB</p>
        <h1 id="apresentacao">Ideias que ganham<br /><em>vida na web.</em></h1>
        <p className={styles.descricao}>Olá, sou Isaias. Analista e Desenvolvedor de Sistemas com foco em front-end. Construo interfaces que conectam pessoas e ideias.</p>
        <div className={styles.acoes}>
          <Link className={styles.primario} to="/#projetos">Explorar projetos <span aria-hidden="true">↗</span></Link>
          <Link className={styles.secundario} to="/sobremim">Conheça minha trajetória <span aria-hidden="true">→</span></Link>
        </div>
        <p className={styles.nota}>React · JavaScript · Interfaces responsivas</p>
      </div>
      <div className={styles.retrato}>
        <img src={minhaFoto} alt="Isaias Barbosa" fetchPriority="high" />
        <div className={styles.legenda}><span aria-hidden="true">&lt;/&gt;</span><div>Do conceito ao código<small>Desenvolvimento com propósito.</small></div></div>
      </div>
    </section>
  );
}
