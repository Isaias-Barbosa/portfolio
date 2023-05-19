import styles from './Skill.module.css'

export default function SkillCard({post}) {
  return (
    <>
                <div className={styles.post}>
                    <img
                        className={styles.capa}
                        src={`/assets/cards/${post.id}/card.png`}
                        alt=""
                    />
                    <h2 className={styles.titulo}>{post.titulo}</h2>
                </div>
        </>
  )
}
