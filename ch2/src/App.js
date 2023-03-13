import "./App.css";
import React, { useState } from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App({store}) {
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

  // const [bonus, setBonus] = useState({points: 0});

  // const incrementBonus = () => {
  //   setBonus({ points: bonus.points + 1});
  // }

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount: {store.getState().account.amount}</h3>
      <h3>Total Bonus: {store.getState().bonus.points}</h3>

      <Account
        account={account}
        increment={increment}
        decrement={decrement}
        incrementByValue={incrementByValue}
      ></Account>

      <Bonus store={store} ></Bonus>
    </div>
  );
}

export default App;
