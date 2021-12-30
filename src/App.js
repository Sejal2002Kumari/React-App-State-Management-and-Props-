import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "school fee",
    ammount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    ammount: 220,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e3",
    title: "House rent",
    ammount: 750,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e4",
    title: "Food",
    ammount: 550,
    date: new Date(2021, 4, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
