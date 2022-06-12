import { legacy_createStore as createStore } from "redux";
const INCREASE = "INCREASE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
