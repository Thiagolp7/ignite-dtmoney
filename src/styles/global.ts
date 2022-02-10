import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --red: #E52E40;
    --green: #33CC95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --white: #FFFFFF;
    --light-grey: #F8F2F5;
    --grey: #969cb3;
    --dark-grey: #363f5f;

    --incomes: var(--green);
    --outcomes: var(--red);
    --header-bg: var(--blue);
    --main-bg: var(--light-grey);
    --header-btn-bg: var(--blue-light);
    --header-btn-color: var(--white);
    --text-title: var(--dark-grey);
    --text-body: var(--grey);
    --shape: var(--white);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--main-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
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
    opacity: 0.6;
    cursor: not-allowed;
  }


`