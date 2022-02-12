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
    background: var(--main-bg);
    font-size: 1.6rem;
    border: .1rem solid #d7d7d7;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    padding: 2rem 6.6rem;

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

`