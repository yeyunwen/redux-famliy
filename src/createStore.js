//@ts-check

import ActionTypes from "./utils/actionTypes.js";
import isPlainObject from "./utils/isPlainObject.js";

/**
 *
 * @param {function} reducer reducer
 * @param {any} [initalState] 初始化状态
 * @returns {{
 *    dispatch: (action: any) => void,
 *    getState: () => any,
 *    subscribe: (fn: () => void) => void,
 * }}
 */
const createStore = (reducer, initalState) => {
  let currentState = initalState;
  const listeners = [];

  if (typeof reducer !== "function") {
    throw new TypeError("reducer is not a function");
  }

  const dispatch = (action) => {
    if (!isPlainObject(action)) {
      throw new TypeError("action is not a plain object");
    }
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  };
  const getState = () => {
    return currentState;
  };
  const subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners.splice(listeners.indexOf(fn), 1);
    };
  };

  dispatch({ type: ActionTypes.INIT });
  return {
    dispatch,
    getState,
    subscribe,
  };
};

export default createStore;
