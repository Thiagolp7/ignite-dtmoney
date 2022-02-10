import { Container, Content } from "./styles"

import logoSvg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dtmoney Logo"/>
        <button>Nova Transação</button>
      </Content>
    </Container>
  )
} 