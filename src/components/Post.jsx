import { Comment } from './Comment'
import {format, formatDistanceToNow} from 'date-fns'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale'

export function Post({author, publishedAt, content}) {

    const dateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR
    })
    const dateFormattedNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diegolauar.png" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={dateFormatted} dateTime={publishedAt.toISOString()}>{dateFormattedNow}</time>
            </header>

            <div className={styles.content}>
              {content.map(line => {
                if(line.type == 'paragraph'){
                    return <p>{line.content}</p>
                }else if (line.type == 'link'){
                    return <p><a href="">{line.content}</a></p>

                }
              })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                
                <textarea
                    placeholder='Deixe um comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )

}