import { actionType } from "../actions/count.js";

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return state + 1;
    case actionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default countReducer;
