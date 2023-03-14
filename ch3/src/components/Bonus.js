import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

const Bonus = () => {

  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();  

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Bonus Component</b></h4>

        <h3>Bonus: ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>

      </div>
    </div>
  )
}

export default Bonus