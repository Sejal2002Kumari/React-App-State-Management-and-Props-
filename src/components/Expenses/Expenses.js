import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
  console.log(props);
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.ammount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

<component></component>;
