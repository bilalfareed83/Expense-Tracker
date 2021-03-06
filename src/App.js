import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { AddTranscation } from "./components/AddTranscation";
import { GlobalProvider } from "./context/GlobalState";
import { TransationList } from "./components/TranscationList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalProvider>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransationList />
          <AddTranscation />
        </GlobalProvider>
      </header>
    </div>
  );
}

export default App;
