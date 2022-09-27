import React, { useState } from 'react'
import * as C from '../styles/form';
import Grid from './Grid';

export const Form = ({ handleAdd, transactionList, setTransactionsList }:
  { handleAdd: any, transactionList: any, setTransactionsList: any }) => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor  tem que ser positivo!")
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
  
    setDesc("");
    setAmount(0);
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
            type="radio"
            onChange={() => setExpense(!isExpense)}
            id="rIncome"
            defaultChecked
            name='group1'
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
        </C.RadioGroup>

        <C.RadioGroup>
          <C.Input
            type="radio"
            onChange={() => setExpense(!isExpense)}
            id="rExpenses"
            name='group1'
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup> 
        
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionList} setItens={setTransactionsList} />
    </>
  )
};