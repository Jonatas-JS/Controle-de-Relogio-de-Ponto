import { NavBar } from '../../components/NavBar';
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.containerHome}>
                <div>
                    <div className={styles.primaryServiceSelection}>
                        <div className={styles.checkboxRegistro}>
                            <label>
                                <input type='checkbox' checked />Registro
                            </label>
                        </div>
                        <div className={styles.checkboxRemocao}>
                            <label>
                                <input type='checkbox'/>Remoção
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};