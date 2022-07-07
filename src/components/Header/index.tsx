import logoImg from '../../assests/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button">Nova transação</button>
        </Content>
      </header>
    </Container>
  )
}
