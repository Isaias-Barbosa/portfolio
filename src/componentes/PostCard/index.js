import BotaoGit from 'componentes/BotaoGit';
import styles from './Post.module.css'
import BotaoDemo from 'componentes/BotaoDemo';


export default function PostCard({ post, index}) {
    return (
        <>
            <section className={styles.container}
            > 
                <div className={styles.principal}>
                    <div className={styles.descricao}>
                        <h2 >{post.titulo}</h2>
                        <a href={post.git}>
                            <BotaoGit>GitHub</BotaoGit>
                        </a>
                        <a href={post.demo}>
                        <BotaoDemo>Demo</BotaoDemo>
                        </a>
                    </div>
                </div>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt=""
                />
            </section>

        </>
    )
}
