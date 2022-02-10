import { Container } from "./styles"

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <h2>Entradas</h2>
          <img src={incomeSvg} alt="incomes"/>
        </header>
        <strong>R$ 2.000,00</strong>
      </div>

      <div>
        <header>
          <h2>Saídas</h2>
          <img src={outcomeSvg} alt="incomes"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div className="hightlight-total">
        <header>
          <h2>Entradas</h2>
          <img src={totalSvg} alt="incomes"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container>
  )
}