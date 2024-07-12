//@ts-check
import { createStore } from "./src/index.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(reducer, 0);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "INCREMENT" });
