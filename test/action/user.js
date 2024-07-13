// @ts-check

export const actionType = {
  SET_NAME: "SET_NAME",
  SET_AGE: "SET_AGE",
};

export const getSetNameAction = (name) => {
  return {
    type: actionType.SET_NAME,
    payload: name,
  };
};
export const getSetAgeAction = (age) => {
  return {
    type: actionType.SET_AGE,
    payload: age,
  };
};
