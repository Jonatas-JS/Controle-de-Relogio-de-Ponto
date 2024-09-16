import { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import Modal from 'react-modal';
import styles from './Home.module.css'

// Define o elemento base para o modal
Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(53, 65, 90, 0.8)',
        backdropFilter: 'blur(1.5px)',
    }
};

export function Home() {
    const prediosList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const REPs = [
        {
            predio: 1,
            coletor: '',
            descricao: 'Predio 1 - I',
            rep: 'I',
            ip: '',
            gr_acesso: '',
        },
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
            rep: 'II',
            ip: '',
            gr_acesso: '',
        },
        {
            predio: 3,
            coletor: '',
            descricao: 'Predio 3 - IV',
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
        } else {
            setRepsSelected(relogio.descricao);
        }
        console.log(relogio);
    };
    const getClassName = () => {
        return isActive ? styles.repSelect : styles.repPredio
    };

    // Estado para armazenar os objetos selecionados
    const [selectedObjects, setSelectedObjects] = useState([]);

    // Estado para controlar a exibição do modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Função para selecionar/deselecionar um objeto
    const handleSelect = (object) => {
        setSelectedObjects((prevSelected) => {
            // Verifica se o objeto já está selecionado
            if (prevSelected.includes(object)) {
                // Se estiver, remove-o
                return prevSelected.filter((obj) => obj !== object);
            } else {
                // Se não estiver, adiciona-o
                return [...prevSelected, object];
            }
        });
    };

    // Função para abrir o modal
    const openModal = () => {
        setModalIsOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModalIsOpen(false);
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
                                            onClick={() => { handleRepsSelected(relogio); setIsActive(!isActive) }}
                                            className={getClassName()}
                                            key={Math.random()}>
                                            <p>{relogio.rep}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className={styles.forwardButton}>
                            <button
                                onClick={openModal}
                            >Avançar</button>
                        </div>

                    </div>
                </div>
            </div>

            <Modal
                className={styles.modalRepSelected}
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Relógios Selecionados"
            >
                <h2>Relógios Selecionados</h2>
                <ul className={styles.REPsInModalList}>
                    {REPs.map((relogio) => {
                        return (
                            <li key={Math.random}>{relogio.descricao}</li>
                        )
                    })}
                </ul>

                <div className={styles.modalRepOptions}>
                    <form>
                        <select className={styles.selectProblemaRep}>
                            <option disabled selected>Selecione o problema:</option>
                            <option>Bloqueado</option>
                            <option>Ticket pendente</option>
                        </select>

                        <input type='datetime-local' />

                        <select className={styles.selectMotivoProvavelRep}>
                            <option disabled selected>Motivo provável:</option>
                            <option>Cabo frouxo</option>
                            <option>Desligamento</option>
                            <option>Desligamento / Queda de energia</option>
                            <option>Forçamento da saída do Ticket</option>
                        </select>

                        <input type='text' placeholder='Observações:' />
                    </form>
                </div>

                <div className={styles.footerBarOptions}>
                    <div className={styles.closeModalButton}>
                        <button
                            onClick={closeModal}
                        >Voltar</button>
                    </div>
                    <div className={styles.finishModalButton}>
                        <button
                        >Concluir</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};