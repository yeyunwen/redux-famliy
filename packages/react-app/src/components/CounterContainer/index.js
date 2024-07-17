import Counter from "./Counter";
import {
  getIncrementAction,
  getDecrementAction,
} from "../../store/actions/count";
import { connect } from "../../react-redux";

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      dispatch(getIncrementAction());
    },
    onDecreaseClick: () => {
      dispatch(getDecrementAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
