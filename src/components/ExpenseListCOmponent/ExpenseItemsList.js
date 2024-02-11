import Card from "../CardComponent/Card";
import ExpenseItem from "../ExpenseItemComponent/ExpenseItem";
import "./expenses.css";

function ExpenseItemsList(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </Card>
  );
}

export default ExpenseItemsList;
