import React, { Component } from "react";
import Counter from "./Counter";
import store from "../../store";
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
// class CounterContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = mapStateToProps(store.getState());
//     store.subscribe(() => {
//       this.setState(mapStateToProps(store.getState()));
//     });
//   }
//   render() {
//     const { onAddClick, onDecreaseClick } = mapDispatchToProps(store.dispatch);
//     return (
//       <>
//         <h1>CounterContainer</h1>
//         <Counter
//           count={this.state.count}
//           onAddClick={onAddClick}
//           onDecreaseClick={onDecreaseClick}
//         ></Counter>
//       </>
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
