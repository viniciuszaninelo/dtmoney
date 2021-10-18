import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'
import { Container, TransactionTypeContainer, RadioBox } from './styles'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');


  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault(); //faz com que a página pare de recarregar, assim que o usuário click no botão de cadastrar

    await createTransaction({
      title,
      amount,
      category, 
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }


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

      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
      <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
      
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

      <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
      <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    
  );
}