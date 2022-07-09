import React from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreators from '../state/index';

function Shop() {
  const dispatch=useDispatch();
  const actions=bindActionCreators(actionCreators,dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(50)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(50)}}>+</button>
    </div>
  )
}

export default Shop
