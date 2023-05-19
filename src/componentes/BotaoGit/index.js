import styles from './BotaoGit.module.css'

export default function BotaoGit({children}) {
  return (
    <button className={`
    ${styles.botaoGit}
    `}>
        {children}
    </button>
  )
}
