import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0; //por padrão o button ja vem com border, então estamos tirando
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    transition: .2s;

  &:hover {
    filter: brightness(.9); //para escurecer a cor, sem precisar de outra variavel
  }
}
`