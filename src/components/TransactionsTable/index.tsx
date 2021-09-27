import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(res => console.log(res.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">12.000,00</td>
            <td>Desenvolvimento</td>
            <td>12/03/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- 1.000,00</td>
            <td>Contas</td>
            <td>12/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}