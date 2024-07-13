//@ts-check
export const actionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const getIncrementAction = () => {
  return {
    type: actionType.INCREMENT,
  };
};
export const getDecrementAction = () => {
  return {
    type: actionType.DECREMENT,
  };
};
