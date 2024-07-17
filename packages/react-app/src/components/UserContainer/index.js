import { connect } from "../../react-redux";
import { getSetAgeAction, getSetNameAction } from "../../store/actions/user";
const User = (props) => {
  return (
    <>
      <div>User</div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <button onClick={props.onSetNameAction}>change name</button>
      <button onClick={props.onSetAgeAction}>change age</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetNameAction: () => {
      dispatch(getSetNameAction("李四"));
    },
    onSetAgeAction: () => {
      dispatch(getSetAgeAction(20));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
