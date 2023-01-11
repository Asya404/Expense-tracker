import React, { useState } from "react";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  const [expenses, updateExpenses] = useState(DUMMY_EXPENSES);


  // WE UPDATE OUR ARRAY (STATE) WHEN ADDING NEW EXPENSE 
  // THIS WAY BEC. IT'S BASED ON OLDER SNAPSHOT OF THAT SAME STATE, NOT ON INITIAL

  const addExpenseHandler = (expense) => {
    updateExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;




// --- PROPS ---
// - (PARAMETER PROPS IT'S A NEW OBJECT WITH INSERTED DATA; ATTR ARE THE KEYS OF THIS OBJECT)
// (WE PASS DATA FROM A COMPONENT TO A DIRECT CHILD OF COMPONENT, AND WE CAN'T SKIP ANOTHER EL)

// - ALSO WE CAN ADD AN EVENT LISTENER TO THE EL (we just point to the function, not execute it)
// BETTER TO CALL SUCH FUNCTIONS AS SMTH HANDLER



// --- STATE CONCEPT ---
// REACT DOESN'T CARE WHETHER YOU CHANGED SOME VARIABE VALUES. IT WILL NOT RE-EVALUATE THE COMPONENT FUNCTION
// IT ONLY DOES THAT FOR CHANGES TO REGISTERED STATE VALUES (CREATED VIA useState)
// useState RETURNS AN ARRAY WITH TWO ELEMENTS - 
// IN THE USE STATE IT'S AN INITIAL VALUE
// FIRST ELEMENT IS A CURRENT STATE VALUE (POINTER TO INITIAL VALUE)
// THE SECOND ELEMENT IS AN UPDATING FUNCTION which you can call to set a new value for your state
// CALLING THAT FUNCTION WILL TRIGGER REACT TO RE-EVAUATE THE COMPONENT

// -WE USE THE FIRST VALUE IN JSX (TITLE), BECAUSE WHEN COMPONENT FUNCTION IS BEING EXECUTED FIRST TIME,
// THE INITIAL VALUE IN USE STATE (PROPS.TITLE) IS ONLY CONSIDERED SO WE DON'T NEED TO DEFINE IT
// FUNCTION ONLY UPDATES THE VALUE AND UPDATED VALUE GET STORED IN THE TITLE



// --- TYPES OF COMPONENTS ---
// FILTER COMPONENT IS A controlled component
// COMPONENTS THAT MANAGE SOME STATES AS EXPENSE COMPONENT 
// THIS MEANS THAT IT HANDLES THE INPUT VALUE USING STATE
// ANOTHER COMPONENTS ARE: STATEFUL VS STATELESS (PRESENTATIONAL) COMPONENTS
// STATELESS ARE JUST OUTPUTS THE DATA