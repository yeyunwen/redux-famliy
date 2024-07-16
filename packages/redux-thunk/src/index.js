const createThunkMiddleware = ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      if (typeof action === "function") {
        action(dispatch, getState);
      } else {
        next(action);
      }
    };
  };
};

export default createThunkMiddleware;
