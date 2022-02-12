import { useContext } from "react";
import { Container } from "./styles"
import { FaTrash } from 'react-icons/fa'
import { TransactionsContext } from "../../TransactionsProvider";

export const TransactionsTable = () => {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);
  return (
    <Container>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {transaction.type === 'withdraw' ?  '-' : ''}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL' 
                }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR')
              .format(new Date(transaction.createdAt))}</td>
            <td>
              <button onClick={() => {deleteTransaction(transaction)}}><FaTrash size={16} /></button>
            </td>
          </tr>
          )
        })}
      </tbody>
    </Container>
  )
}