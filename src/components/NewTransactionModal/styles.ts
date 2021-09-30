import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: .25rem;
    border: 1px solid #D7D7D7;
    background: #E7E9EE;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input { //Todo input que tiver outro input, antes dele 
      margin-top: 1rem;
    }
  } 

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter .2s;
    font-weight: 600;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`; 

const colors = {
  green: '#33CC95',
  red: '#E52E40'
}

interface RadioBoxProps {
  isActive: Boolean;
  activeColor: "green" | "red";
}


export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #D7D7D7;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.isActive 
      ? transparentize(0.9,colors[props.activeColor])
      : 'transparent'
    };
    transition: border-color .2s;

    &:hover {
      border-color: ${darken(0.1, '#D7D7D7')};
    }

    img {
      width: 32px;
      height: 32px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`;
