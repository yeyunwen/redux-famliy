export const userActionType = {
  SET_NAME: "SET_NAME",
  SET_AGE: "SET_AGE",
};

export const getSetNameAction = (payload) => ({
  type: userActionType.SET_NAME,
  payload,
});

export const getSetAgeAction = (payload) => ({
  type: userActionType.SET_AGE,
  payload,
});
