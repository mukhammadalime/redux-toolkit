// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// if we have one reducer
// const store = createStore(counterSlice.reducer);

// if we have many reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
