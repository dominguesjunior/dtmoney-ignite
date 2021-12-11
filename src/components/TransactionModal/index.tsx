import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer } from './styles';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="" />
      </button>

      <Container>
        <h2>Cadastrar Transacao</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}