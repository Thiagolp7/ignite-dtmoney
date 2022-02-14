import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --red: #E52E40;
    --green: #33CC95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --white: #FFFFFF;
    --light-grey: #F0F2F5;
    --light-grey02: #E7E9EE;
    --grey: #969cb3;
    --dark-grey: #363f5f;

    --incomes: var(--green);
    --outcomes: var(--red);
    --header-bg: var(--blue);
    --main-bg: var(--light-grey);
    --header-btn-bg: var(--blue-light);
    --header-btn-color: var(--white);
    --input-bg: var(--light-grey02);
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--main-bg) ;
    border-radius: .5rem;
    padding: 6.4rem 4.8rem;
    position: relative;
  }
 
  .react-modal-close {
    background: transparent;
    border: 0;
    position: absolute;
    top: .8rem;
    right: .8rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 1024px) {
    .react-modal-overlay {
      align-items: flex-end;
      overflow-y: auto;
    }
    
    .react-modal-content {
      border-radius: 1.6rem 1.6rem 0 0 ;
      padding: 2.4rem 2.4rem 4rem;
      position: relative;
    }

    .react-modal-close {
      top: 2rem;
      right: 1.1rem;
    }
  }
`