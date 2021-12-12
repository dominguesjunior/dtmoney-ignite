import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { TransactionModal } from './components/TransactionModal';
import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
