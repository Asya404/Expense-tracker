import React, { useState } from "react";
import "./ExpenseForm.css";

// 1.FIRST WE GATHER ALL THE VALUES FROM INPUTS AND STORE THEM,
// TO COMBINE THEM LATER INTO ONE OBJECT

// WE USE HERE STATE TO STORE AND SURVIVE THE VALUE NO MATTER HOW OFTEN COMPONENT FUNCTION WILL BE RE-EXECUTED
// SO AT THE BEGINNING IT'S EMPTY STRING, THEN IT CHANGES AND WE KEEP IT AS EVENT TARGET VALUE
// STRING BECAUSE VALUE OF THE INPUT IS ALWAYS A STRING
// IT'S OK TO HAVE MULTIPLE STATE SLICES

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };



  // 2.THEN WE COMBINE ALL VALUES IN THE OBJECT ON SUBMIT
  // FORM HAS IT'S OWN SUBMIT EVENT, SO WE DON'T NEED TO HANDLE EVENT ON BUTTON
  // PAGE AUTOMATICALLY RELOADS AFTER SUBMIT (IT SENDS A REQUEST), SO WE PREVENT IT,
  // BUT WE WANT TO HANDLE IT WITH JS
  // WE PUT DATE AS A NEW DATE BECAUSE WE WILL GET ENTERED DATE AS STRING, BUT WITH DATE IT WILL BE CONVERTED INTO OBJ

  // CLEAR ALL INPUTS ON SUBMIT (TWO-WAY BINDING)
  // ON CHANGE WE UPDATE THE VALUE (FIRST BIND) AND ON SUBMIT WE UPDATE IT BACK TO THE EMPTY STRING (SECOND BIND)
  // SO FIRST WE GATHER INFO, THEN CHANGE IT TO EMPTY

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData)
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input onChange={titleChangeHandler} value={enteredTitle} type="text" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input onChange={dateChangeHandler} value={enteredDate} type="date" />
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
