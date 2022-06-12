// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// if we have one reducer
// const store = createStore(counterSlice.reducer);

// if we have many reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // auth: authSlice.reducer
  },
});

export default store;
