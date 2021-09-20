import './Amounts.css';
import { useSelector} from "react-redux";
const Amounts =() => {
    const budget = useSelector(state=>state.budget);
    const expense = useSelector(state=>state.expense);
    const balance = useSelector(state=>state.balance);
    console.log("1");
    if(balance < 0 )
    {
      alert("Expense is greater than Balance try to increase the budget")
    }
    return (

        <div className="col-11 card d-flex flex-row justify-content-between text-center">
          <div className="budget d-flex flex-column align-items-center">
            <h6>Budget</h6>
            <img
              className="image text-center"
              src="https://assets.ccbp.in/frontend/dynamic-webapps/budget-img.png"
              alt=""
            />
            <p>{budget}</p>
          </div>
          <div className="expense">
            <h6>Expenses</h6>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/dynamic-webapps/expenses-img.png"
              alt=""
            />
            <p>{expense}</p>
          </div>
          <div className="total">
            <h6>Balance</h6>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/dynamic-webapps/balance-img.png"
              alt=""
            />
            <p>{balance}</p>
          </div>
        </div>
    );
}
export default Amounts;