import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type
    };

    api.post('/transactions', data);
  }
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transacao</h2>

        <input
          type="text"
          placeholder="Título"
          onChange={event => setTitle(event.target.value)}
          value={title}
        />

        <input
          type="number"
          placeholder="Valor"
          onChange={event => setAmount(Number(event.target.value))}
          value={amount}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          onChange={event => setCategory(event.target.value)}
          value={category}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}