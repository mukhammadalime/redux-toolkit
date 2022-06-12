import { legacy_createStore as createStore } from "redux";
export const INCREASE = "INCREASE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOGGLE = "TOGGLE";

const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
  if (action.type === INCREMENT) {
    return {
      showCounter: state.showCounter,
      counter: state.counter + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      showCounter: state.showCounter,
      counter: state.counter - 1,
    };
  }
  if (action.type === INCREASE) {
    return {
      showCounter: state.showCounter,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === TOGGLE) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
