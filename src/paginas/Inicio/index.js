import cards from 'json/skills.json';
import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import SkillCard from 'componentes/SkillCard';
import fotoFormacao from 'assets/estacio.jpeg';
import PostCard from 'componentes/PostCard';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <>
      <h2>Skills & Conhecimentos</h2>
      <ul className={styles.posts}>
        {cards.map((post) => (
          <li key={post.id}>
            <SkillCard post={post} />
          </li>
        ))}
      </ul>
      
      <h2>Formação Acadêmica</h2>
      <div className={styles.formacao}>
        <img src={fotoFormacao} />
        <span>Análise e Desenvolvimento de Sistemas</span>
        <p>Concluido</p>
      </div>
      <div className={styles.projetos}>
        <h2>Projetos</h2>
      </div>
      
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} git={post.git}  />
          </li>
        ))}
      </ul>
      <h3>Para mais projetos, visite o meu <a className={styles.link} href="https://github.com/Isaias-Barbosa" >Github</a></h3>
    </>
  )
}
