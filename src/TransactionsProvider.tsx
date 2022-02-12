import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api";

interface Transaction{
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

interface TransactionsProviderProps{
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id'>

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (transaction: Transaction) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  async function createNewTransaction(transactionInput: TransactionInput){
    console.log(transactions)
    const response = await api.post('/transactions', transactionInput)
    const transaction = await response.data.transaction
    setTransactions([...transactions, transaction])
  }
  
  async function deleteTransaction(transaction: Transaction){
    const response = await api.delete(`/transactions/${transaction.id}`)
    setTransactions(transactions.filter((transactionItem) => {
      return transactionItem.id !== transaction.id
    }))
  }
  
  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction, deleteTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
} 




