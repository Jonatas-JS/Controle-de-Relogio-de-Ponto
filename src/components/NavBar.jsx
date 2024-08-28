import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'
import { House, ListPlus, CheckCircle, CubeFocus, Truck, ShippingContainer } from '@phosphor-icons/react'

export function NavBar() {

    const location = useLocation();

    const getIconForRoute = (route) => {
        switch (route) {
            case '/home':
                return <House size={32} />;
            case '/registro':
                return <ListPlus size={32} />;
            case '/ativos':
                return <CheckCircle size={32} />;
            case '/removidos':
                return <CubeFocus size={32} />;
            case '/manutencao':
                return <Truck size={32} />;
            default:
                return <ShippingContainer size={32} />;

        }
    };
    const pages = [
        {
            id: 1,
            name: 'Home',
            path: '/home',
            classNameItem: 'menuHome',
            iconMenu: 'House',
        },
        {
            id: 2,
            name: 'Registro',
            path: '/registro',
            classNameItem: 'menuRegistro',
            iconMenu: 'ListPlus',
        },
        {
            id: 3,
            name: 'Ativos',
            path: '/ativos',
            classNameItem: 'menuAtivos',
            iconMenu: 'CheckCircle',
        },
        {
            id: 4,
            name: 'Removidos',
            path: '/removidos',
            classNameItem: 'menuRemovidos',
            iconMenu: 'CubeFocus',
        },
        {
            id: 5,
            name: 'Manutenção',
            path: '/manutencao',
            classNameItem: 'menuManutenção',
            iconMenu: 'Truck',
        },
        {
            id: 6,
            name: 'Estoque',
            path: '/estoque',
            classNameItem: 'menuEstoque',
            iconMenu: 'ShippingContainer',
        },
        {
            id: 7,
            name: 'Sair',
            path: '/',
            classNameItem: 'menuSair',
            iconMenu: '',
        },
    ];

    return (
        <div className={styles.navBar}>
            <header>
                <div className={styles.iconMenuPage}>
                    {getIconForRoute(location.pathname)}
                </div>
                <div>
                    <ul className={styles.listMenu}>
                        {pages.map(page => {
                            return (
                                <li
                                    key={page.id}
                                    className={styles[page.classNameItem]}>
                                    <Link
                                        to={page.path}
                                    >
                                        {page.name}
                                    </Link>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </header>
        </div>
    )
}