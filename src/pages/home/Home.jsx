import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import styles from './Home.module.css'

export function Home() {
    const prediosSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const REPs = [
        {
            predio_1: [
                {
                    predio: '1',
                    coletor: '',
                    descricao: 'Predio 1 - I',
                    rep: 'I',
                    ip: '',
                    gr_acesso: '',
                },
                {
                    predio: '1',
                    coletor: '',
                    descricao: 'Predio 1 - II',
                    rep: 'II',
                    ip: '',
                    gr_acesso: '',
                },
            ],
            predio_2: [
                {
                    predio: '2',
                    coletor: '',
                    descricao: 'Predio 2 - I',
                    rep: 'I',
                    ip: '',
                    gr_acesso: '',
                },
                {
                    predio: '2',
                    coletor: '',
                    descricao: 'Predio 2 - II',
                    rep: 'II',
                    ip: '',
                    gr_acesso: '',
                },
            ],
            predio_3: [
                {
                    predio: '3',
                    coletor: '',
                    descricao: 'Predio 3 - I',
                    rep: 'I',
                    ip: '',
                    gr_acesso: '',
                },
                {
                    predio: '3',
                    coletor: '',
                    descricao: 'Predio 3 - II',
                    rep: 'II',
                    ip: '',
                    gr_acesso: '',
                },
            ],
        },

    ];

    console.log(REPs[0].predio_1[0].descricao)

    const [selectedOption, setSelectedOption] = useState('selectedRegistro');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function handlePredioSelected(event) {
        const predioSelected = event.targe
        console.log(predioSelected);
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

                    </div>
                    <div className={styles.selectionREPs}>
                        <div className={styles.wrapper}>
                            <div className={styles.predioSelect}>
                                {prediosSelect.map((item) => {
                                    return (
                                        <div
                                            className={styles.predioList}
                                            key={Math.random()}
                                            onClick={handlePredioSelected}
                                        >
                                            <p>{item}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                {REPs.map((item) => {
                                    return (
                                        <div
                                            className={styles.repLis}
                                            key={Math.random}>
                                            <p>{item.descricao}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};