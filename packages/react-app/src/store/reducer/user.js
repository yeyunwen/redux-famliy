import { userActionType } from "../actions/user";

const initialState = {
  name: "张三",
  age: 18,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionType.SET_NAME: {
      return { ...state, name: payload };
    }
    case userActionType.SET_AGE: {
      return { ...state, age: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
