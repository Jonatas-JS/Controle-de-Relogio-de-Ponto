import styles from './Registro.module.css'
import { NavBar } from '../../components/NavBar'

export function Registro() {
    return(
        <div className={styles.containerRegistro}>
            <NavBar />
            <div>
                <div className={styles.FilterBar}></div>
                <div>
                    <table>
                        <thead>
                            <th>N_SERIAL</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}