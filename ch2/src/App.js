import "./App.css";
import React, { useState } from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const [account, setAccount] = useState({ amount: 0 });

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByValue = (val) => {
    setAccount({ amount: account.amount + val });
  };

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount: {account.amount}</h3>
      <h3>Total Bonus: </h3>

      <Account
        account={account}
        increment={increment}
        decrement={decrement}
        incrementByValue={incrementByValue}
      ></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
