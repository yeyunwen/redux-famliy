/**
 * Binds action creators to a dispatch function.
 *
 * @param {function|object} actionCreators - The action creators to bind.
 * @param {function} dispatch - The dispatch function.
 * @return {function|object} The bound action creators.
 */
const bindActionCreators = (actionCreators, dispatch) => {
  if (typeof actionCreators === "function") {
    return (...args) => dispatch(actionCreators(...args));
  }

  if (typeof actionCreators === "object") {
    const boundActionCreators = {};
    for (const key in actionCreators) {
      boundActionCreators[key] = bindActionCreators(
        actionCreators[key],
        dispatch
      );
    }
    return boundActionCreators;
  }
  throw new TypeError("actionCreators is not a function or object");
};

export default bindActionCreators;
