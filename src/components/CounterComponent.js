import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './../slice/counterSlice';

import { counterApiData } from './../services/counterService';

function CounterComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterApiData());
  }, [dispatch]);

  const { value, productData, loading, errorMessage } = useSelector(
    (state) => state.counter
  );
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <div>{loading ? 'Loading...' : JSON.stringify(productData)}</div>
    </div>
  );
}

export default CounterComponent;
