import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const Expenses = (props) => {
    var expenses = props.items
    return (
        <div className = "expenses">
            {
                expenses.map(list => {
                    return (
                        <ExpenseItem title={list.title} amount={list.amount} date={list.date} />
                    )
                })
            }
        </div>
    )
}

export default Expenses