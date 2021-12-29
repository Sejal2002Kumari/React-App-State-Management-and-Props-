import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
  console.log(props);
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].ammount}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].ammount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].ammount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].ammount}
      />
    </Card>
  );
};

export default Expenses;

<component></component>;
