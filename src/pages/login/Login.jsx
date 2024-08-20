import { useState } from 'react';
import { Fingerprint } from '@phosphor-icons/react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom'

export function Login() {
    const [inputText, setInputText] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    function handleInputChange(e) {
        const {type, value} = e.target;
        if (type === "text") {
            setInputText(value);
        } else if (type === "password") {
            setInputPassword(value);
        }
    };

    const isButtonDisabled = !inputText.trim() || !inputPassword.trim();

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.headerLogin}>
                    <h3>CRP - Controle de Relógio de Ponto</h3><Fingerprint size={39} />
                </div>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.loginContainer}>
                    <h3>Login de Usuário</h3>
                    <div className={styles.loginInput}>
                        <label>Login</label>
                        <input 
                        placeholder='Login' 
                        type='text'
                        value={inputText} 
                        onChange={handleInputChange}
                        id='user' 
                        />
                        <label>Senha</label>
                        <input 
                        placeholder='Senha' 
                        type='password' 
                        value={inputPassword}
                        onChange={handleInputChange}
                        id='password' 
                        />
                        <Link to="/home">
                        <div 
                        className={isButtonDisabled ? `${styles.loginButton} ${styles.disabled}` : styles.loginButton}
                        >ENTRAR</div>
                        </Link>
                    </div>
                </div>
                <img src='../public/relogio-de-ponto-idclass.png' />
            </div>

            <footer>Copyright © 2024 Site Title. All rights reserved.</footer>
        </div>
    )
}