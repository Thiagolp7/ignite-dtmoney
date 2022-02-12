import { Container } from "./styles"

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'
import { useContext, useEffect, useState } from "react"
import { TransactionsContext } from "../../TransactionsProvider"


export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);
  const [summary, setSummary] = useState({incomes: 0, outcomes: 0, total: 0});

  useEffect(() => {
    const incomes = transactions.filter((transaction)=>{
      return transaction.type === 'deposit'
    }).reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)

    const outcomes = transactions.filter((transaction)=>{
      return transaction.type === 'withdraw'
    }).reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)

    const total = incomes - outcomes

    return setSummary({incomes, outcomes, total})
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <h2>Entradas</h2>
          <img src={incomeSvg} alt="incomes"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.incomes)}</strong>
      </div>

      <div>
        <header>
          <h2>Saídas</h2>
          <img src={outcomeSvg} alt="incomes"/>
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.outcomes)}</strong>
      </div>

      <div className="hightlight-total">
        <header>
          <h2>Total</h2>
          <img src={totalSvg} alt="incomes"/>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}

function TransactionsContex(TransactionsContex: any): { transactions: any } {
  throw new Error("Function not implemented.")
}
