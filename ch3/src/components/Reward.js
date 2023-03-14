import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../reducers/rewardReducers';

const Reward = () => {

  const points = useSelector(state => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Reward Component</b></h4>

        <h3>Bonus: ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(incrementByAmount(7))}>Increment by 7</button>

      </div>
    </div>
  )
}

export default Reward