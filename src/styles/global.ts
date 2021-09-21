import { createGlobalStyle } from 'styled-components'

export const  GlobalStyled = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --green: #33CC95;
    --red: #E52E40;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button { //Por padrão esses elementos não pegam a fonte do corpo do HTML5, então assim vc sobreescreve.
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`