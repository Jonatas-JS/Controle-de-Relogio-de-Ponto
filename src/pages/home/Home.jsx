import { NavBar } from '../../components/NavBar';
import styles from './Home.module.css'

export function Home() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div></div>
        </div>
    );
};