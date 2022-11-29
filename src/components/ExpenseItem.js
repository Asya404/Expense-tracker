// 4.IMPORT CSS AND FOR JSX SYNTAX USED CLASSNAME
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'; 


// 1.CREATE COMPONENT WHICH CONTAINS ONLY 1 ROOT EL (wrapped in brackets)
function ExpenseItem(props) {

  // 5.WE CAN DEFINE SOME JS VARIAB AND OUTPUT DYNAMIC DATA WITH JSX SNIPPETS {}
  // const expenseDate = new Date(2022, 11, 7);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;


  // 6.BUT WE WILL OUTPUT IT VIA PROPS 
  // WE NEED TO OUTPUT DATA FROM OUTSIDE (FROM SOME OBJECT), NOT FROM COMPONENT
  // WE DEFINE DATA IN APP COMPONENT AS AN OBJECT (FOR DIFFERENT DATA LIKE 3 DATES, 3 PRICES)

  // 7.THEN WE INSERT DATA BY ATTRIBUTES IN COMPONENT (ПРОСТО ПЕРЕДАЕМ ДАННЫЕ, КОТ БУДЕМ ИСПОЛЬЗОВАТЬ)
  // THEN WE NEED TO ACCESS THIS INSERTED DATA TO DISPLAY IT, LIKE PROPS.TITLE
  // (PARAMETER PROPS IT'S A NEW OBJECT WITH INSERTED DATA; ATTR ARE THE KEYS OF THIS OBJECT)

  // 8.HERE WE PASS DATA INTO OUR DATE COMPONENT BY PROPS
  // (WE PASS DATA FROM A COMPONENT TO A DIRECT CHILD OF COMPONENT, AND WE CAN'T SKIP ANOTHER EL)

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

// 2.EXPORT IT
export default ExpenseItem;
// 3.IMPORT IT INTO APP
