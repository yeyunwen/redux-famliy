import React, { PureComponent } from "react";

export default class CC extends PureComponent {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    console.log(CC.name, "render");
    return (
      <div>
        <h1>CC</h1>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleClick}>no change</button>
      </div>
    );
  }
}
