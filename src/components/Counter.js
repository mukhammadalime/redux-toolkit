import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, INCREASE, DECREMENT, TOGGLE } from "../store";

const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: INCREASE, amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter && (
        <div className={classes.value}>{state.counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
