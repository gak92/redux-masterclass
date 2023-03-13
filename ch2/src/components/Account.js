import React, { useState } from 'react';

const Account = ({account, increment, decrement, incrementByValue}) => {

  const [value, setValue] = useState(0);

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