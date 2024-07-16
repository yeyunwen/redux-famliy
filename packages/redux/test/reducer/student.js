import { actionType } from "../action/student.js";

const initialState = {
  isFetching: false,
  students: [],
};
export const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    case actionType.SET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
    default:
      return state;
  }
};
