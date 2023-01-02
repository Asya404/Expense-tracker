import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData)
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

// 4.WE NEED TO PASS THIS OBJECT DATA TO THE APP COMPONENT (FROM CHILD TO PARENT):
// - WE CREATE OUR OWN EVENT PROP (onSubmitExpenseData) WITH FUNCTION AS VALUE
// - SO WE PASS FUNCTION FROM A PARENT COMPONENT TO A CHILD COMPONENT
// - AND CALL THE FUNCTION INSIDE OF A CHILD COMPONENT
// - WHEN WE CALL FUNCTION WE PASS OUR DATA AS A PARAMETER
// - AND EXTRACT IT INSIDE THE FUNCTION

// - HERE WE CREATE NEW OBJ WITH SPREAD BECAUSE WE WANT TO ADD AN ID
// - THEN WE INSERT NEW OBJECT INTO PROP FUNCTION TO THE COMPONENT UP AND REPEAT