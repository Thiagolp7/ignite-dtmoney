import { Container, Content } from "./styles"

import logoSvg from '../../assets/logo.svg'

interface HeaderProps {
  handleNewTransactionModalOpen: () => void;
}

export const Header = (
  { handleNewTransactionModalOpen }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dtmoney Logo"/>
        <button
          onClick={handleNewTransactionModalOpen}
        >Nova Transação</button>
      </Content>
    </Container>
  )
} 