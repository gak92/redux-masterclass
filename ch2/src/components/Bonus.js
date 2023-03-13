import React, { useState } from 'react'

const Bonus = ({bonus, incrementBonus}) => {

  

  return (
    <div className='card'>
      <div className='container'>
        <h4><b>Bonus Component</b></h4>

        <h3>Point: {bonus.points}</h3>
        <button onClick={incrementBonus}>Increment +</button>
      </div>
    </div>
  )
}

export default Bonus