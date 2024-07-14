//@ts-check

import ActionTypes from "./utils/actionTypes.js";
import isPlainObject from "./utils/isPlainObject.js";

/**
 *
 * @param {function} reducer reducer
 * @param {any} [preloadedState] 初始化状态
 * @param {function} [enhancer] 中间件
 * @returns {{
 *    dispatch: (action: any) => void,
 *    getState: () => any,
 *    subscribe: (fn: () => void) => void,
 * }}
 */
const createStore = (reducer, preloadedState, enhancer) => {
  let currentState = preloadedState;
  const listeners = [];

  if (typeof reducer !== "function") {
    throw new TypeError("reducer is not a function");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function") {
    throw new TypeError("preloadedState is not a function");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = undefined;
    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new TypeError("enhancer is not a function");
    }
    return enhancer(createStore)(reducer, preloadedState);
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
