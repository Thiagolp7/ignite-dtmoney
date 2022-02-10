import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 1rem ;
  
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  
  color: var(--text-title);

  div {
    background: var(--shape);
    min-width: 32rem;
    max-width: 35.2rem;
    padding: 2.5rem 3.2rem;

    border-radius: 0.5rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    strong {
      font-size: 3.6rem;
      font-weight: 500;
    }

    &.hightlight-total {
      color: var(--shape);
      background: var(--incomes);
    }
  }

`