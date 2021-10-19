import styles from './styles.module.scss'
import LogoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
        </li>
      </ul>
    </div>
  )
}
