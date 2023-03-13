import React from 'react';
import { incrementBonus } from '../actions';

const Bonus = ({store}) => {

  

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Bonus Component</b></h4>

        <h3>Point: {store.getState().bonus.points}</h3>
        <button onClick={() => store.dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  )
}

export default Bonus