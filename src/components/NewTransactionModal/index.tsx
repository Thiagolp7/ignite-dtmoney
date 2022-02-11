import { useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox } from './styles';

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import closeSvg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  NewTransactionModalIsOpen: boolean;
  handleNewTransactionModalClose: () => void;
}

export const NewTransactionModal = ({ NewTransactionModalIsOpen,handleNewTransactionModalClose }: NewTransactionModalProps) => {
  
  const [transactionType, setTransactionType] = useState('deposit');

  console.log(transactionType)

  return (
    <Modal 
      isOpen={NewTransactionModalIsOpen}
      onRequestClose={handleNewTransactionModalClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className='react-modal-close'
        onClick={handleNewTransactionModalClose}
      >
        <img src={closeSvg} alt="" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder='Nome'/>
        <input type="number" placeholder='Preço'/>
        <RadioBox>
          <button 
            type='button' 
            className={transactionType === 'deposit' ? 'deposit' : ''}
            onClick={() => {setTransactionType('deposit')}}
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button 
            type='button' 
            className={transactionType === 'withdraw' ? 'withdraw' : ''}
            onClick={() => {setTransactionType('withdraw')}}
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </button>
        </RadioBox>
        <input type="text" placeholder='Categoria'/>
        <button 
          type="submit"
        >Cadastrar</button>
      </Container>
    </Modal>
  )

}