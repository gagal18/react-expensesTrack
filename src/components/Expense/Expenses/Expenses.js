import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import Card from '../../UI/Card/Card'

const Expenses = (props) => {
    var expenses = props.items
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
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