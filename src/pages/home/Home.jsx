import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './Home.module.css'

export function Home() {
    const prediosList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const REPs = [
        {
            predio: 1,
            coletor: '',
            descricao: 'Predio 1 - II',
            rep: 'II',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 2,
            coletor: '',
            descricao: 'Predio 2 - I',
            rep: 'I',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 2,
            coletor: '',
            descricao: 'Predio 2 - II',
            rep: 'II',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 3,
            coletor: '',
            descricao: 'Predio 3 - I',
            rep: 'I',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 3,
            coletor: '',
            descricao: 'Predio 3 - II',
            rep: 'III',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 3,
            coletor: '',
            descricao: 'Predio 3 - II',
            rep: 'IV',
            ip: '',
            gr_acesso: '',
        },
    ];

    const [selectedOption, setSelectedOption] = useState('selectedRegistro');
    const [predioSelected, setPredioSelected] = useState(0);
    const [repsSelected, setRepsSelected] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleRepsSelected = (relogio) => {
        if (repsSelected.find(rep => rep.descricao === relogio.descricao)) {
            repsSelected.filter(rep => rep.descricao !== relogio.descricao)
            document.querySelector(styles.predioList).add.className(styles.repSelect)
        } else {
            setRepsSelected(relogio);
        }
        console.log(relogio);
    };
    const getClassName = () => {
        return isActive ? styles.repSelect : styles.repPredio
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.containerHome}>
                <div>
                    <div className={styles.primaryServiceSelection}>
                        <div className={styles.checkboxRegistro}>
                            <label>
                                <input
                                    type='radio'
                                    value='selectedRegistro'
                                    checked={selectedOption === 'selectedRegistro'}
                                    onChange={handleOptionChange}
                                />Registro
                            </label>
                        </div>
                        <div className={styles.checkboxRemocao}>
                            <label>
                                <input
                                    type='radio'
                                    value='selectedRemocao'
                                    checked={selectedOption === 'selectedRemocao'}
                                    onChange={handleOptionChange}
                                />Remoção
                            </label>
                        </div>
                        <div className={styles.checkboxEstoque}>
                            <label>
                                <input
                                    type='radio'
                                    value='selectedEstoque'
                                    checked={selectedOption === 'selectedEstoque'}
                                    onChange={handleOptionChange}
                                />Estoque
                            </label>
                        </div>

                    </div>
                    <div className={styles.selectionREPs}>
                        <div className={styles.wrapper}>
                            <div className={styles.predioSelect}>
                                {prediosList.map((predio) => {
                                    return (
                                        <div
                                            className={styles.predioList}
                                            key={Math.random()}
                                            onClick={() => setPredioSelected(predio)}
                                        >
                                            <p>{predio}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className={styles.repList}>
                                {REPs.filter(relogio => relogio.predio === predioSelected).map(relogio => {
                                    return (
                                        <div
                                            onClick={() => {handleRepsSelected(relogio); setIsActive(!isActive)}}
                                            className={getClassName()}
                                            key={Math.random()}>
                                            <p>{relogio.rep}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className={styles.forwardButton}>
                            <button>Avançar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};