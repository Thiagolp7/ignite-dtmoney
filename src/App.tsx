import { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsProvider";

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


