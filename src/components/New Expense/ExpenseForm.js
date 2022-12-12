import React, { useState } from "react";
import "./ExpenseForm.css";

// 1.FIRST WE GATHER ALL THE VALUES FROM INPUTS AND STORE THEM,
// TO COMBINE THEM LATER INTO ONE OBJECT

// WE USE HERE STATE TO STORE AND SURVIVE THE VALUE NO MATTER HOW OFTEN COMPONENT FUNCTION WILL BE RE-EXECUTED
// SO AT THE BEGINNING IT'S EMPTY STRING, THEN IT CHANGES AND WE KEEP IT AS EVENT TARGET VALUE
// STRING BECAUSE VALUE OF THE INPUT IS ALWAYS A STRING
// IT'S OK TO HAVE MULTIPLE STATE SLICES

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }; 

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input onChange={titleChangeHandler} type="text" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input onChange={dateChangeHandler} type="date" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
