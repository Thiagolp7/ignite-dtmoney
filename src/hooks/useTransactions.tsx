import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api";

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
  lastDeposit: string;
  lastWithdraw: string;
}

const TransactionsContext = createContext({} as TransactionContextData);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [lastDeposit, setLastDeposit] = useState('');
  const [lastWithdraw, setLastWithdraw] = useState('');

  

  useEffect(() => {
    api.get('/transactions')
    .then(response => {
      const transactions = response.data.transactions.reverse()
      setLastWithdrawAndDeposit(transactions)
      return setTransactions(transactions)
    })    
  },[])

  async function createNewTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', transactionInput)
    const transaction = await response.data.transaction
    const newTransactions = [transaction, ...transactions]
    setTransactions(newTransactions)
    setLastWithdrawAndDeposit(newTransactions)
  }
  
  async function deleteTransaction(transaction: Transaction){
    const response = await api.delete(`/transactions/${transaction.id}`)
    const newTransactions = transactions.filter((transactionItem) => {
      return transactionItem.id !== transaction.id
    })
    setTransactions(newTransactions)
    setLastWithdrawAndDeposit(newTransactions)

  }

  function setLastWithdrawAndDeposit(transactions: Transaction[]){
    const deposits = transactions.filter((transaction: Transaction) =>  transaction.type === 'deposit')
    const withdraws = transactions.filter((transaction: Transaction) => transaction.type === 'withdraw')
    const lastDeposit = deposits[0].createdAt
    const lastWithdraw = withdraws[0].createdAt
    setLastDeposit(String(lastDeposit))
    setLastWithdraw(String(lastWithdraw))
  }
  
  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction, deleteTransaction, lastDeposit, lastWithdraw }}>
      {children}
    </TransactionsContext.Provider>
  )
} 

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context
}



