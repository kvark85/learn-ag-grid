import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="example-wrapper">
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <br/>
      <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
      <br/>
      <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
        Add Async
      </button>
      <br/>
      <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
        Add If Odd
      </button>
    </div>
  );
}
