import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles"

import { ImCancelCircle } from 'react-icons/im'

export const TransactionsTable = () => {
  const { transactions, deleteTransaction } = useTransactions();
  return (
    <Container>
      <header>
        <div>
          <p>Título</p>
          <p>Preço</p>
          <p>Categoria</p>
          <p>Data</p>
        </div>
        <div className="mobile">
          <h2>Listagem</h2>
          <p>{transactions.length} itens</p>
        </div>
      </header>
      <div>
        {transactions.map((transaction) => (
            <div className="card" key={transaction.id}>
              <h3 className="card__title">{transaction.title}</h3>
              <p className={
                transaction.type === 'withdraw' 
                ? 'card__amount withdraw' 
                : 'card__amount deposit'}
              >
                {transaction.type === 'withdraw' ? '-' : ''}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount) }
              </p>
              <p className="card__category">{transaction.category}</p>
              <p className="card__date">
                {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(transaction.createdAt))}
              </p>
              <button 
                className="card__delete" 
                onClick={() => { deleteTransaction(transaction) }}
              >
                <ImCancelCircle size={16}/>
              </button>
            </div>
          ))
        }
      </div>
    </Container>
  )
}