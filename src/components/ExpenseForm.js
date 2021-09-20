import './ExpenseFoem.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const ExpenseForm = (props) => {
    const dispatch = useDispatch();

    const [expenseTitle,setNewTitle] = useState('');
    const [expenseAmount,setNewAmount] = useState('');

    const expenseTitleHandler = (event) => {
        setNewTitle(event.target.value);
    }

    const expenseAmountHandler = event => {
        setNewAmount(event.target.value);
    }
    console.log("3");
    const transformedData=[];
    const onFormSubmitHandler = event => {
        event.preventDefault();
        const list = {
            title:expenseTitle,
            amount:expenseAmount,
        }
        transformedData.push(list);
        props.onAddExpenses(transformedData);
        dispatch({type:"addExpense" ,expenses:expenseAmount ,title:expenseTitle});
    }

    return(
                <form className="card" onSubmit={onFormSubmitHandler}>
                    <label>Please enter the expense title</label>
                    <input type="text" className="form-control" onChange={expenseTitleHandler} value={expenseTitle}/><br></br>
                    <label>Please enter the expense amount</label>
                    <input type="text" className="form-control" onChange={expenseAmountHandler} value={expenseAmount}/><br></br>
                    <button className="btn btn-dark">Add Expense</button>
                </form>

    )

}

export default ExpenseForm;