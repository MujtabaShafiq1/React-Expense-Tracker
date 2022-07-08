import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import './App.css'

const App = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};

export default App;
