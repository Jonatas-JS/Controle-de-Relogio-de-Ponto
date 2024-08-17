import styles from './NavBar.module.css'
import { House } from '@phosphor-icons/react'

export function NavBar() {

    const pages = [
        {
            id: 1,
            name: 'Home',
        },
        {
            id: 2,
            name: 'Registro',
        },
        {
            id: 3,
            name: 'Ativos',
        },
        {
            id: 4,
            name: 'Removidos',
        },
        {
            id: 5,
            name: 'Manutenção',
        },
        {
            id: 6,
            name: 'Estoque',
        },
    ];

    return(
        <div className={styles.navBar}>
            <header>
            <House size={32} />
                <div>
                <list className={styles.listMenu}>{pages.map(item => {
                    return (
                        <p key={item.id}>{item.name}</p>
                    )
                })}</list>
                </div>
            </header>
        </div>
    )
}