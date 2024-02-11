
import Card from '../CardComponent/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/* <div>{props.expense.date.toUTCString()}</div> */}
      <ExpenseDate date={props.expense.date}/>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
