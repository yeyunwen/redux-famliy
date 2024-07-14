// @ts-check
import { getIncrementAction, getDecrementAction } from "./action/count.js";
import { countReducer } from "./reducer/count.js";
import {
  legacy_createStore as createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "redux";

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
  combineReducers({ count: countReducer }),
  undefined,
  applyMiddleware(logger1, logger2, logger3)
);

const countDispatchActions = bindActionCreators(
  { getIncrementAction, getDecrementAction },
  store.dispatch
);

countDispatchActions.getIncrementAction();
