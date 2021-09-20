import './App.css';
import BudgetApp from './components/BudgetApp';
import {useEffect} from 'react';
function App() {

  useEffect(() => {
    sessionStorage.clear();
  });

  return (

    <div className="container-fluid App">
      <div className="row text-center">
        <BudgetApp />
      </div>
    </div>
  );
}

export default App;
