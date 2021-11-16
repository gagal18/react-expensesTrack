import './NewExpense.css'
import ExpenseFrom from '../ExpenseForm/ExpenseFrom'
const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData={saveExpenseDateHandler} /> 
        </div>
    )
}

export default NewExpense