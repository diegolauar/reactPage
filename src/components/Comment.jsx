import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment () {

        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diegolauar.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Lauar</strong>
                            <time title='11 de Maio as 15:02h' dateTime='2022-04-29 15:02:04'>Cerca de 1h atrás</time>
                        </div>



                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={22} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}