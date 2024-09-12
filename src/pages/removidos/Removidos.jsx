import { useState } from 'react';
import { NavBar } from '../../components/NavBar'
import styles from './Removidos.module.css'
import Modal from 'react-modal';

// Defina o elemento base para o modal
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
export function Removidos() {

  // Estado para armazenar os objetos selecionados
  const [selectedObjects, setSelectedObjects] = useState([]);

  // Estado para controlar a exibição do modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Lista de objetos
  const objects = [
    { id: 1, name: 'Objeto 1' },
    { id: 2, name: 'Objeto 2' },
    { id: 3, name: 'Objeto 3' }
  ];

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
    <div>
      <NavBar />
      <h1>Selecione Objetos</h1>
      <ul>
        {objects.map((object) => (
          <li key={object.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedObjects.includes(object)}
                onChange={() => handleSelect(object)}
              />
              {object.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={openModal}>Avançar</button>

      <Modal
        className={styles.modalContentRemovidos}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Objetos Selecionados"
      >
        <h2>Relógios Selecionados</h2>
        <ul>
          {selectedObjects.map((object) => (
            <li key={object.id}>{object.name}</li>
          ))}
        </ul>

        <div className={styles.closeModalButton}>
          <button
            onClick={closeModal}
          >Voltar</button>
        </div>
      </Modal>
    </div>
  );
};