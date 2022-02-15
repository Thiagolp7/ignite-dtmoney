import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  padding-bottom: 1.6rem ;
  
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

      img {
        width: 3.2rem;
        height: 3.2rem;
      }

    }

    strong {
      font-size: 3.6rem;
      font-weight: 500;
    }

    p {
      color: var(--text-body);
      font-size: 1.2rem;
      line-height: 1.8rem;
      display: none;
    }

    &.hightlight-total {
      color: var(--shape);
      background: var(--incomes);
    }

  }

  @media screen and (max-width: 1024px) {
    gap: 1.6rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    div {
      min-width: 30rem;
      max-width: 30rem;
      height: 20rem;
      padding: 1.8rem 2.3rem 4.2rem;

      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        h2 {
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 2.1rem;
        }

        img {
          width: 4rem;
          height: 4rem;
        }
      }

      strong {
        display: inline-block;
        margin-top: 3.8rem;
        font-size: 3rem;
        font-weight: 500;
      }

      p {
        display: inline-block;
      }
    }
}
  
  
`