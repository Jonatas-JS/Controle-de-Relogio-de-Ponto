import styles from './Estoque.module.css'
import { NavBar } from '../../components/NavBar'

export function Estoque() {
    return(
        <div className={styles.containerEstoque}>
            <NavBar />
        </div>
    )
}