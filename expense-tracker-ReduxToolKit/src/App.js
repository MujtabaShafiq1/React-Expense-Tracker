import Header from './components/Header/Header';
import Balance from './components/Expenses/Balance';
import IncomeExpenses from './components/Expenses/IncomeExpenses';
import TransactionList from './components/Transaction/TransactionList';
import AddTransaction from './components/Transaction/AddTransaction';

import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};

export default App;
