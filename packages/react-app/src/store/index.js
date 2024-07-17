import { legacy_createStore as createStore, combineReducers } from "redux";
import countReducer from "./reducer/count";
import userReducer from "./reducer/user";

const reducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

const store = createStore(reducer);

export default store;
