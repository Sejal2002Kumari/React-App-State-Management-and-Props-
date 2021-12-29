import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  //useState is a react hook
  //Destructuring

  const [newTitle, setNewTitle] = useState(""); //useState return two thing variable and function
  const [student, setStudent] = useState(null);
  const [title, setTitle] = useState(props.title); //useState return two thing variable and function

  const clickHandler = () => {
    setStudent({
      id: 1,
      stuName: "Ram",
    });
    setTitle(newTitle);
    console.log(student);
  };
  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
