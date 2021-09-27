import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
  return (
    <header>
      <Container>
        <Content>
          <img src={logoImg} alt="dtmonney" />
          <button type="button">Nova transação</button>
        </Content>
      </Container>
    </header>
  )
}