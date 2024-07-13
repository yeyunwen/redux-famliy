import ActionTypes from "./utils/actionTypes.js";
import isPlainObject from "./utils/isPlainObject.js";

const validateReducers = (reducers) => {
  if (typeof reducers !== "object") {
    throw new TypeError("reducer is not a object");
  }
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducer is not a plain object");
  }

  for (const key in reducers) {
    if (typeof reducers[key] !== "function") {
      throw new TypeError("reducer is not a function");
    }
    let state = reducers[key](undefined, { type: ActionTypes.INIT });
    if (state === undefined) {
      throw new Error("reducer is must return a non-undefined state");
    }

    state = reducers[key](undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION(),
    });
    if (state === undefined) {
      throw new Error("reducer is must return a non-undefined state");
    }
  }
};

/**
 *
 * @param {Record<string, (state, action) => state>} reducers
 * @returns { (state, action) => state} reduce
 */
const combineReducers = (reducers) => {
  validateReducers(reducers);
  return (state = {}, action) => {
    const newState = {};
    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};

export default combineReducers;
