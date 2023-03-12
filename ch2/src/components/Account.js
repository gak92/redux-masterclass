import React, { useState } from 'react';

const Account = () => {

  const [value, setValue] = useState(0);
  const [account, setAccount] = useState({ amount: 0 });

  const increment = () => {
    setAccount({ amount: account.amount+1 });
  }

  const decrement = () => {
    setAccount({ amount: account.amount-1 });
  }

  const incrementByValue = (val) => {
    setAccount({ amount: account.amount + val });
  }

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Account Component</b></h4>

        <h3>Amount: ${account.amount}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>

        <input type='text' onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => incrementByValue(value)}>Increment By {value} +</button>
      </div>
    </div>
  )
}

export default Account