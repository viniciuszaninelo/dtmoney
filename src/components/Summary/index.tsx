import React, { useContext } from 'react';

import { Container } from "./styles";

import IncomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';
import totalImg from '../../assets/total.svg';

import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc,transaction) => {
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  })


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="icon Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
              }).format(summary.deposits)}
          </strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="icon Saídas" />
        </header>
        <strong>
          -
        {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
              }).format(summary.withdraw)}
          </strong>

      </div>
    
      <div className="green-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="icon Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
              }).format(summary.total)}
          </strong>
      </div>
    </Container>
  );
}