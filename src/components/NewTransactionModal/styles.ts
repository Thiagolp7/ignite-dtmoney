import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  input {
    color: var(--text-title);
    background: var(--input-bg);
    padding: 2rem 2.4rem;
    font-size: 1.6rem;
    border: .1rem solid #d7d7d7;
    border-radius: 5px;

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    color: var(--shape);
    background: var(--incomes);
    font-size: 1.6rem;
    font-weight: 600;
    border: 0;
    border-radius: .5rem;

    margin-top: 2.4rem;
    padding: 2rem 0;

    &:hover {
      filter: brightness(.9);
    }
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 2rem;
      margin-bottom: 2.4rem;
    }

    input {
      font-size: 1.4rem;
      padding: 1.8rem 1.6rem;

      & + input {
        margin-top: .8rem;
      }
    }
    button[type="submit"] {
      padding: 1.8rem 0;
    }
  }
`

export const RadioBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .8rem;
  margin: 1.6rem 0;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  button {
    max-width: 100%;
    background: var(--main-bg);
    font-size: 1.6rem;
    border: .1rem solid #d7d7d7;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    padding: 2rem 0;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      font-size: 1.6rem;
      color: var(--text-title);
    }

    &:hover {
      filter: brightness(.9);
    }

    &.deposit{
      background: ${transparentize(.9, "#33CC95")};
    }

    &.withdraw{
      background: ${transparentize(.9, "#E52E40")};
    }
  }

  @media screen and (max-width: 480px) {
    margin: .8rem 0;

    button {
      padding: 1.6rem 0;

      span {
        font-size: 1.4rem;
      }
    }
  }
`