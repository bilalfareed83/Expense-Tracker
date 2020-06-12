import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransationList } from './components/TransationList';
import { AddTransation } from './components/AddTransation';
import { GlobalProvider } from './context/GlobalState';




function App() {
  return (
      <div className="App">
      <header className="App-header">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransationList />
        <AddTransation />
      </GlobalProvider>   
        
      </header>
    </div>
  );
}

export default App;
