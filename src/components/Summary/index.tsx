import { Container } from "./styles";

import IncomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';



export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="icon Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="icon Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
    
      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="icon Total" />
        </header>
        <strong>R$16.000,00</strong>
      </div>
    </Container>
  );
}