import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../../UI/Card/Card'

const Expenses = (props) => {
    var expenses = props.items
    return (
        <Card className = "expenses">
            {
                expenses.map(list => {
                    return (
                        <ExpenseItem title={list.title} amount={list.amount} date={list.date} key={list.title} />
                    )
                })
            }
        </Card>
    )
}

export default Expenses