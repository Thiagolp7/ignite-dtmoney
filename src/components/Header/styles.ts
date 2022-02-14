import styled  from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 3.2rem 0 13.2rem 0;
  background: var(--header-bg);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 17.28rem;
    height: 4rem;
  }

  button {
    color: var(--header-btn-color);
    background: var(--header-btn-bg);
    padding: 1.2rem 3.2rem;
    border: 0;
    border-radius: .5rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    &:hover{
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 13.5rem;
      height: 3.12rem;
    }

    button {
      font-size: 1.2rem;
      font-weight: 600;
      padding: 1.1rem 1.6rem;
    }
  }
`