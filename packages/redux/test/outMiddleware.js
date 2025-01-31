import {
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware,
} from "../src/index.js";
import { studentReducer } from "./reducer/student.js";
import { createFetchStudentsAction } from "./action/student.js";
import thunk from "@redux-famliy/redux-thunk";
import logger from "redux-logger";

const { createLogger } = logger;

const store = createStore(
  combineReducers({ student: studentReducer }),
  applyMiddleware(thunk, createLogger())
);

store.dispatch(createFetchStudentsAction());
