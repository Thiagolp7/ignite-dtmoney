import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions';
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

export const NewTransactionModal = ({ NewTransactionModalIsOpen, handleNewTransactionModalClose }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  const { createNewTransaction } = useTransactions();

  function handleCreateTransaction(event: FormEvent){
    event.preventDefault()

    const transactionData = {
      title,
      amount,
      type,
      category,
      createdAt: new Date()
    }

    createNewTransaction(transactionData);
    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    handleNewTransactionModalClose();
  }

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
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          placeholder='Nome'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="number" 
          placeholder='Preço'
          value={amount === 0 ? '' : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <RadioBox>
          <button 
            type='button' 
            className={type === 'deposit' ? 'deposit' : ''}
            onClick={() => {setType('deposit')}}
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button 
            type='button' 
            className={type === 'withdraw' ? 'withdraw' : ''}
            onClick={() => {setType('withdraw')}}
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </button>
        </RadioBox>
        <input 
          type="text" 
          placeholder='Categoria'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button 
          type="submit"
        >Cadastrar</button>
      </Container>
    </Modal>
  )

}