import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.isVisible);

  const [increaseNumber, setIncreaseNumber] = useState(0);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(increaseNumber));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={increaseNumber}
          onChange={(e) => setIncreaseNumber(+e.target.value)}
        />
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
