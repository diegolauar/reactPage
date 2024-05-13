import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react" 
import { Avatar } from "./Avatar"


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/diegolauar.png"/>

                <strong>Diego Henrique</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}