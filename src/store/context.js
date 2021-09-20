import { createStore } from "redux";

const initialState = { budget: 0 ,
                        expense:0,
                        balance:0,
                        title:"",
                        list:[]};

const counterReducer = (state = initialState, action) => {
  if(action.type === 'addBudget')
  {
      state.budget=0;
      //console.log(typeof(action.budget));
      return{
        budget : state.budget + parseInt(action.budget),
        expense:state.expense,
        balance:state.balance,
      }
  }
  if(action.type === 'addExpense')
  {
      /*console.log("Preethi",initialState);
      console.log(typeof(state.expense));
      console.log("context",state.expense + action.expense);
      console.log(state.budget-state.expense);*/
      const expenses = state.expense + parseInt(action.expenses);
      //console.log("Expense",expenses)
      return {
        budget: state.budget,
        expense: state.expense + parseInt(action.expenses),
        balance: state.budget - expenses,
        title:action.title,
      };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
