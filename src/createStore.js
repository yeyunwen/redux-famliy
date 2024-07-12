//@ts-check

/**
 *
 * @param {function} reducer reducer
 * @param {any} initalState 初始化状态
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
    throw new Error("reducer is not a function");
  }

  const dispatch = (action) => {
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

  dispatch({ type: "@@redux/INIT" });
  return {
    dispatch,
    getState,
    subscribe,
  };
};

export default createStore;
