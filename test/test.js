// @ts-check
import { createStore, bindActionCreators } from "../src/index.js";
import { getIncrementAction, getDecrementAction } from "./action/count.js";
import { countReducer } from "./reducer/count.js";

const store = createStore(countReducer, 0);
store.subscribe(() => {
  console.log(store.getState());
});

const countDispatchActions = bindActionCreators(
  { getIncrementAction, getDecrementAction },
  store.dispatch
);
countDispatchActions.getIncrementAction();
countDispatchActions.getDecrementAction();
