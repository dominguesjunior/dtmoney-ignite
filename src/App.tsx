import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionModal } from './components/TransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  function handleOpenTransactionModal() {
      setIsTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
      setIsTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </>
  );
}
