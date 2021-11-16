import './ExpenseFrom.css'
import React, { useState } from 'react'

const ExpenseFrom = (props) => {
// Managing diffrent state for each Input <>
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
// Have one state for all Inputs <>
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // })
            // Updating the state using prevState argument for getting the latest state {}
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         title: event.target.value,
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value,
        // })
            // Updating the state using prevState argument for getting the latest state {}
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         amount: event.target.value,
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
            // Updating the state using prevState argument for getting the latest state {}
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         date: event.target.value,
        //     }
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title:  enteredTitle,
            amount: +enteredAmount,
            date:   new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    
    }

    return (
        <form onSubmit={submitHandler} prevent >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseFrom