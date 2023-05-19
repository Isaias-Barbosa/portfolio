import styles from './Rodape.module.css'
import Linkedin from 'assets/linkedin.svg'
import Github from 'assets/git.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
            <a 
            href="https://www.linkedin.com/in/isaias-barbosa-047b54235/" 
            target="_blank" 
            rel="noreferrer"
            >
            <img src={Linkedin} alt="Linkedin" />
            </a>
            <a 
            href="https://github.com/Isaias-Barbosa"
            target="_blank"
            rel="noreferrer"
            >
            <img src={Github} alt="Github" />
            </a>
        </div>
        <p>Desenvolvido por: <span>Isaias Barbosa</span></p>
    </footer>
  )
}

