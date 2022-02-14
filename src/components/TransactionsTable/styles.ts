import styled from "styled-components";

export const Container = styled.table`
  margin-top: 4rem;
  width: 100%;

  font-size: 1.6rem;
  border-spacing: 0 .8rem;
  color: var(--text-body);
  
  overflow-x: auto;

  th {
    text-align: left;
    font-weight: 400;
    padding: 1rem 3.2rem ;
  }
  
  td {
    background: var(--shape);
    padding: 2rem 3.2rem ;
    border: 0;

    &:first-child {
      color: var(--text-title);
      border-radius: .5rem 0 0 .5rem;
    }

    &:last-child {
      border-radius: 0 .5rem .5rem 0;
      padding: 0 1rem 0 0 ;
      
      button {
        color: var(--outcomes);
        background: transparent;
        padding: .5rem 1.2rem;
        border: 0;

        display: flex;
        align-items: center;

        &:hover{
          transform: scale(1.1);
          filter: brightness(.9);
        }
      }

    }

    &.deposit {
      color: var(--incomes);
    }
    
    &.withdraw {
      color: var(--outcomes);
    }
  }
`