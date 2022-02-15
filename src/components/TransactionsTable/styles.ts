import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 6.4rem auto;
  
  header {
    width: 100%;
    padding: 2rem 1rem 0 3.2rem;
    
    div {
      min-width: 10.24rem;
      display: grid;
      grid-template-columns: 2.5fr 1.5fr 1fr 1fr; 
      margin-bottom: 1.6rem;

      p {
        color: var(--text-body);
        font-size: 1.6rem;
      }
    }
    
    div.mobile {
      display: none;
      align-items: center;
      justify-content: space-between;
      color: var(--text-body);

      h2 {
        color: var(--text-title);
        font-size: 2rem;
        font-weight: 400;
      }
      
      p {
        font-size: 1.4rem;
      }
    }
  }

  div {
    width: 100%;
    min-width: 71rem;

    &.card {
      display: grid;
      grid-template-columns: 2.5fr 1.5fr 1fr 1fr;    
      background: var(--shape);
      border-radius: .5rem;
      position: relative;

      font-size: 1.6rem;
      color: var(--text-body);
      
      padding: 2rem 1rem 2rem 3.2rem;
      
      .card__title {
        color: var(--text-title);
        font-size: 1.6rem;
        font-weight: 400;
      }

      .card__amount {
        &.deposit {
         color: var(--incomes);
        }
    
        &.withdraw {
          color: var(--outcomes);
        }
      }

      .card__delete {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 0;
        color: var(--text-body);
        background: transparent;
        
        position: absolute;
        top: 2rem; 
        right: 2rem;
        transition: .2s ease;
        
        &:hover {
          color: var(--outcomes);
          filter: brightness(.9);
        }
      }

      & + div.card {
        margin-top: .8rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  @media screen and (max-width: 770px) {
    header {
      display: block;
      margin-bottom: 1.6rem;
      padding: 0;

      div {
        display: none;
      }

      div.mobile {
        display: flex;
      }
    }

    div {
      min-width: 30rem;
      &.card {
        height: 12.8rem;
        display: flex;
        flex-direction: column;
        padding: 2.4rem;
        font-size: 1.4rem;
        
        .card__title {
          font-size: 1.4rem;
        }
        .card__amount {
          font-size: 2rem;
          margin-top: .2rem;
        }

        .card__category{
          position: absolute;
          bottom: 1.8rem;
        }

        .card__date {
          position: absolute;
          bottom: 1.8rem;
          right: 2.4rem;
        }

        .card__delete {
          top: 2rem;
          right: 1.4rem;
          color: var(--outcomes);
        }
      }
    }
  }
 
  
`