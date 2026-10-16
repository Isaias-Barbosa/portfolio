import cards from 'json/skills.json';
import posts from 'json/posts.json';
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';

const descricoes = ['Planejamento de refeições em uma aplicação web.', 'Uma vitrine digital para a Donna Modelli.', 'Uma experiência de navegação por livros.', 'Organização visual de equipes em uma aplicação React.', 'Um espaço na web dedicado à nutrição.', 'Presença digital para uma clínica odontológica.', 'Uma experiência de e-commerce para a LuxosNav.'];
export default function Inicio() {
  return <div className={styles.home}>
    <section id="projetos" className={styles.projetos} aria-labelledby="titulo-projetos">
      <div className={styles.cabecalho}><div><p className={styles.eyebrow}>PORTFÓLIO / TRABALHOS</p><h2 id="titulo-projetos">Projetos em prática<span>.</span></h2></div><a href="https://github.com/Isaias-Barbosa" target="_blank" rel="noreferrer">Todos no GitHub <span aria-hidden="true">↗</span></a></div>
      <p className={styles.intro}>Uma seleção do que venho construindo. Explore as interfaces e o código por trás de cada projeto.</p>
      <ul className={styles.grade}>{posts.map((post, index) => <li key={post.id} className={styles.card}>
        <a href={post.demo} target="_blank" rel="noreferrer" className={styles.imagem} aria-label={`Abrir ${post.titulo} em nova aba`}><img src={`/assets/posts/${post.id}/capa.png`} alt={`Interface do projeto ${post.titulo}`} loading="lazy" /></a>
        <div className={styles.cardConteudo}><p className={styles.numero}>PROJETO {String(index + 1).padStart(2, '0')}</p><h3>{post.titulo}</h3><p>{descricoes[index]}</p><div className={styles.cardLinks}><a href={post.demo} target="_blank" rel="noreferrer" aria-label={`Ver site: ${post.titulo}`}>Ver site <span aria-hidden="true">↗</span></a><a href={post.git} target="_blank" rel="noreferrer" aria-label={`Ver código: ${post.titulo}`}>Código <span aria-hidden="true">↗</span></a></div></div>
      </li>)}</ul>
    </section>
    <section className={styles.sobre} aria-labelledby="titulo-sobre"><div><p className={styles.eyebrow}>APRENDIZADO CONTÍNUO</p><h2 id="titulo-sobre">Tecnologia com<br />curiosidade e propósito.</h2><p>Sou formado em Análise e Desenvolvimento de Sistemas e sigo aprofundando meus conhecimentos em front-end, explorando também o desenvolvimento back-end.</p><Link to="/sobremim" className={styles.linkSobre}>Mais sobre mim <span aria-hidden="true">→</span></Link></div><div className={styles.conhecimentos}><h3>Minha caixa de ferramentas</h3><ul>{cards.map(card => <li key={card.id}>{card.titulo}</li>)}</ul><div className={styles.formacao}><span aria-hidden="true">↗</span><div><h3>Análise e Desenvolvimento de Sistemas</h3><p>Formação acadêmica concluída</p></div></div></div></section>
    <section id="contato" className={styles.contato} aria-labelledby="titulo-contato"><p className={styles.eyebrow}>PRÓXIMO PASSO</p><h2 id="titulo-contato">Vamos construir algo juntos?</h2><p>Para conversar sobre projetos ou oportunidades, entre em contato.</p><div><a className={styles.email} href="mailto:isaiasbarbosa111@gmail.com">Enviar um e-mail <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/isaias-barbosa-047b54235/" target="_blank" rel="noreferrer">Conectar no LinkedIn ↗</a></div></section>
  </div>;
}
