import styled from 'styled-components';


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