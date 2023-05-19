import styles from './BotaoDemo.module.css'

export default function BotaoDemo({children}) {
  return (
    <button className={`
    ${styles.botaoDemo}
    `}>
        {children}
    </button>
  )
}
