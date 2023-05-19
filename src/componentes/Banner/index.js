import styles from "./Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/perfil.JPG';

export default function Banner() {
    return (
        
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas-vindas ao meu espaço pessoal! Eu sou Isaias Barbosa, Analista e Desenvolvedor de Sistemas. :)
                </p>
            </div>
        </div>
        
    )
}
