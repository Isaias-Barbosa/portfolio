import PostModelo from 'componentes/PostModelo'
import styles from './SobreMim.module.css'
import Sobre from 'assets/perfil.JPG'

export default function SobreMim() {
  return (
    <PostModelo
    
    titulo="Sobre Mim"
  >
    <h3 className={styles.subtitulo}> Oi, tudo bem? </h3>

    <img
      src={Sobre}
      alt="Desenho"
      className={styles.fotoSobreMim}
    />

      <p className={styles.paragrafo}>
        <span>Me chamo Isaias Barbosa</span>, e eu comecei a entrar no mundo da programação em meados de 2016 quando fiz o curso técnico de informática pela ETB-Brasilia. 
        No momento em que me formei acabei me distanciando um pouco dessa área até 2020, quando comecei a faculdade de Analie e Desenvolvimento de Sistemas. E desde então eu me interesse mais e mais por esse universo da TI.
      </p>
      <p className={styles.paragrafo}>
      Atualmente eu estou focado em estudar Front-End, mas possuo alguns conhecimentos em Back-End como Java e PHP, pois futuramente eu planejo me tornar um dev FullStaks
      </p>
      <p className={styles.paragrafo}>
      Meus Hoobies se mantem em <span>Jogar, Ler, Animes e Música.</span>
      </p>
      <p className={styles.paragrafo}>
      Esta é a minha primeira versão do portifólio, criei ele com base nos meus estudos em ReactJs.
      </p>
      <p className={styles.paragrafo}>
        Email de contato: <span>isaiasbarbosa111@gmail.com</span>
      </p>

  </PostModelo>
  )
}
