import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const [toggleCounter, setToggleCounter] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increaseBy 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
