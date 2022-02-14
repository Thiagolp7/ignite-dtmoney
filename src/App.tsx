import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [NewTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false);

  function handleNewTransactionModalClose(){
    setNewTransactionModalIsOpen(false)
  }
  
  function handleNewTransactionModalOpen(){
    setNewTransactionModalIsOpen(true)
  }

  return (
    <TransactionsProvider>
      <Header 
        handleNewTransactionModalOpen={handleNewTransactionModalOpen}
      />
      <Dashboard/>
      <NewTransactionModal
        NewTransactionModalIsOpen={NewTransactionModalIsOpen}
        handleNewTransactionModalClose={handleNewTransactionModalClose}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  )
}


