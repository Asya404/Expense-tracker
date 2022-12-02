import './ExpenseDate.css';

function ExpenseDate(props) {

  // 8.HERE ARE SOME METHODS TO DISPLAY DATE CORRECTLY, THEN WE INSERT IT AS SNIPPETS
  // (BETTER TO KEEP IT SEPARATLY THAN INSERT RIGHT INTO THE CODE)
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div class="expense-date">
      <div class="expense-date__month">{month}</div>
      <div class="expense-date__year">{year}</div>
      <div class="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
