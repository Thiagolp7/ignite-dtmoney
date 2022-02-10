import { Container } from "./styles"
import { FaTrash } from 'react-icons/fa'


export const TransactionsTable = () => {
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
        <tr>
          <td>Desenvolvimento website</td>
          <td className="deposit">R$ 2.000,00</td>
          <td>dev</td>
          <td>13/04/2021</td>
          <td>
            <button><FaTrash size={16} /></button>
          </td>
        </tr>
        <tr>
          <td>Supermercado</td>
          <td className="withdraw">- R$ 1.000,00</td>
          <td>compras</td>
          <td>20/04/2021</td>
          <td>
            <button><FaTrash size={16} /></button>
          </td>
        </tr>
      </tbody>
    </Container>
  )
}