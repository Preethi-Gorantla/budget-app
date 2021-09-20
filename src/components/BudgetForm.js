import './BudgetForm.css';
import { useDispatch } from "react-redux";
import { useState } from 'react';
const BudgetFrom = () => {
    const dispatch = useDispatch();
    
    const [budgetAmount,setNewBudget] = useState(0);
    console.log(typeof(budgetAmount));
    const [inputValid,setValidInput] = useState(false);
    
    const budgetHandler = (event) => {
      setNewBudget(event.target.value);
      if(event.target.value !== "")
      {
        setValidInput(true);
      }
    }

    const budgetSubmitHandler = (event) => {
      event.preventDefault();
      dispatch({ type: "addBudget", budget: budgetAmount });
      console.log(budgetAmount);
    }
    console.log("2")
    return (
          <form className="card" onSubmit={budgetSubmitHandler}>
            <label htmlFor="budget">Please enter the budget</label>
            <br></br>
            <input id="budget" type="text" className="form-control" onChange={budgetHandler} value={budgetAmount}/>
            <button className="btn btn-primary mt-3" disabled={!inputValid}>Set Budget</button>
          </form>
    );

}

export default BudgetFrom;