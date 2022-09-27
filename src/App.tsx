import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { Global } from "./styles/global";
import React, { useState, useEffect } from "react";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState<string>("");
  const [expense, setExpense] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));
    
    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));
    
    const expense = amountExpense.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc: number, cur: number) => acc + cur, 0).toFixed(2);
  
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);;
  }, [transactionsList])

  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <div>
      <Header />
      <Resume income={income} expense={expense} total={ total } />
      <Form handleAdd={handleAdd} transactionList={transactionsList} setTransactionsList={ setTransactionsList } />
      <Global />
    </div>
  )
}

export default App
