// @ts-check
import { actionType } from "../action/user.js";

const initialState = {
  name: "jack",
  age: 18,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_NAME: {
      return { ...state, name: payload };
    }
    case actionType.SET_AGE: {
      return { ...state, age: payload };
    }
    default:
      return state;
  }
};
