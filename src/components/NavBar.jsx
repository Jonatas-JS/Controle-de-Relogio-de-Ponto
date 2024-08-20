import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'
import { House } from '@phosphor-icons/react'

export function NavBar() {

    const pages = [
        {
            id: 1,
            name: 'Home',
            path: '/home',
            classNameItem: 'menuHome',
        },
        {
            id: 2,
            name: 'Registro',
            path: '/registro',
            classNameItem: 'menuRegistro',
        },
        {
            id: 3,
            name: 'Ativos',
            path: '/ativos',
            classNameItem: 'menuAtivos',
        },
        {
            id: 4,
            name: 'Removidos',
            path: '/removidos',
            classNameItem: 'menuRemovidos',
        },
        {
            id: 5,
            name: 'Manutenção',
            path: '/manutencao',
            classNameItem: 'menuManutenção',
        },
        {
            id: 6,
            name: 'Estoque',
            path: '/estoque',
            classNameItem: 'menuEstoque',
        },
        {
            id: 7,
            name: 'Sair',
            path: '/',
            classNameItem: 'menuSair',
        },
    ];

    return(
        <div className={styles.navBar}>
            <header>
            <House size={32} />
                <div>
                <ul className={styles.listMenu}>{pages.map(item => {
                    return (
                        <Link
                        to={item.path}
                        key={item.id}
                        className={item.classNameItem}>
                                {item.name}
                        </Link>
                    )
                })}</ul>
                </div>
            </header>
        </div>
    )
}