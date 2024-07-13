// @ts-check
import {
  createStore,
  bindActionCreators,
  combineReducers,
} from "../src/index.js";
import { getIncrementAction, getDecrementAction } from "./action/count.js";
import { countReducer } from "./reducer/count.js";
import { getSetNameAction, getSetAgeAction } from "./action/user.js";
import { userReducer } from "./reducer/user.js";

const store = createStore(
  combineReducers({ count: countReducer, user: userReducer })
);
store.subscribe(() => {
  console.log(store.getState());
});

const countDispatchActions = bindActionCreators(
  { getIncrementAction, getDecrementAction },
  store.dispatch
);
const userDispatchActions = bindActionCreators(
  { getSetNameAction, getSetAgeAction },
  store.dispatch
);

countDispatchActions.getIncrementAction();
countDispatchActions.getDecrementAction();
userDispatchActions.getSetNameAction("Bob");
userDispatchActions.getSetAgeAction(20);
