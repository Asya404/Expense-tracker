import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (data) => {
    setFilteredYear(data);
  };


  // HERE ALSO WE CAN USE STATE FOR TWO WAY BINDING
  // INITIAL YEAR WILL BE 2020, THEN WE PASS FILTERED YEAR BY PROPS DOWN TO SET THE CHOSEN YEAR

  // HERE WE USE MAP METHOD TO DISPLAY ELEMENTS DYNAMICALLY (RENDER LISTS DYNAMICALLY)
  // WE TRANSFORM (MAP) EVERY EXPENSE OBJECT INTO AN EXPENSE ITEM ELEMENT
  // OR TRANSFORM OUR ARRAY TO AN ARRAY FULL OF JSX ITEMS
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> )}
    </Card>
  );
};

export default Expenses;
