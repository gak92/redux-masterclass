import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from '../actions';

const Bonus = ({store}) => {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Bonus Component</b></h4>

        <h3>Amount: ${amount}</h3>
        <h3>Point: {points}</h3>
        <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  )
}

export default Bonus