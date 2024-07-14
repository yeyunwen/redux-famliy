const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...agrs) =>
        a(b(...agrs))
  );
};

const applyMiddleware = (...middlewares) => {
  return (createStore) => {
    return (reducer, preloadedState) => {
      const store = createStore(reducer, preloadedState);
      let dispatch = () => {
        throw new Error(
          "Dispatching while constructing your middleware is not allowed. " +
            "Other middleware would not be applied to this dispatch."
        );
      };
      const middlewareAPI = {
        getState: store.getState,
        // 注入给中间件的store.dispatch是上面那个抛出错误的dispatch
        dispatch: (action, ...args) => dispatch(action, ...args),
      };
      // 把store注入到中间件，拿到返回新的dispatch函数的函数，(next) => (action) => {}
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
};

export default applyMiddleware;
