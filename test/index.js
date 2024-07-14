// @ts-check
import {
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "../src/index.js";
import { getIncrementAction, getDecrementAction } from "./action/count.js";
import { countReducer } from "./reducer/count.js";
import { getSetNameAction, getSetAgeAction } from "./action/user.js";
import { userReducer } from "./reducer/user.js";

//#region middleware
const logger1 = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.log("logger1 before store", getState());
      next(action);
      console.log("logger1 after store", getState());
    };
  };
};

const logger2 = (store) => {
  return (next) => {
    return (action) => {
      console.log("logger2 before store", store.getState());
      next(action);
      console.log("logger2 after store", store.getState());
    };
  };
};
const logger3 = (store) => {
  return (next) => {
    return (action) => {
      console.log("logger3 before store", store.getState());
      next(action);
      console.log("logger3 after store", store.getState());
    };
  };
};
//#endregion
const store = createStore(
  combineReducers({ count: countReducer, user: userReducer }),
  applyMiddleware(logger1, logger2, logger3)
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

//#region create app by applyMiddleware
// const app = applyMiddleware(logger1, logger2, logger3)(createStore)(
//   countReducer
// );

// const countDispatchActions = bindActionCreators(
//   { getIncrementAction, getDecrementAction },
//   app.dispatch
// );
// countDispatchActions.getIncrementAction();
// countDispatchActions.getDecrementAction();
//#endregion
