import React from 'react';
import {useSelector} from 'react-redux';

function Shop() {
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2">-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={handleAdd}>+</button>
    </div>
  )
}

export default Shop
