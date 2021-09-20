import { Fragment ,useState} from 'react';
import Amounts from './Amounts'
import BudgetFrom from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import Expenselist from './Expenselist';
const BudgetApp = (props) => {
  let expenses=[];
  const [addedItems,setNewItems] = useState({});
  const [index,setIndex] = useState(0);
  const [showList,setShowList] = useState(false)
  console.log("BudgetApp",index);

  const expenseHandler = (list) => {
      setNewItems(list);
      setIndex(index+1);
      setShowList(true);
      console.log("BudgetApp",expenses);
      sessionStorage.setItem(`key ${index}`,JSON.stringify(list));
  }
    return (
      <Fragment>
        <Amounts />
        <div className="row d-flex flex-row">
                <div className="d-flex flex-column col-12 col-md-4">
                     <BudgetFrom />
                     <ExpenseForm onAddExpenses={expenseHandler}/>
                </div>
                {showList && <Expenselist items={addedItems}/>}
        </div>
      </Fragment>
    );

}
export default BudgetApp;