import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');


  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder="Título" />
      <input type="number" placeholder="Valor" />
      
      <TransactionTypeContainer>
        <RadioBox 
          type="button" 
          onClick={() => {setType('deposit');}}
          isActive= {type === 'deposit'}
          activeColor="green"
        >
          <img src={entradaImg} alt="icone de entrada" />
          <span>Entrada</span>
        </RadioBox>
        
        <RadioBox 
          type="button" 
          onClick={() => {setType('withdraw');}}
          isActive= {type === 'withdraw'}
          activeColor="red"
        >
          <img src={saidaImg} alt="icone de saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    
  );
}