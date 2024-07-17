import React from "react";
import ReduxContext from "./ctx";
import { bindActionCreators } from "redux";

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Comp) => {
    return class Temp extends React.PureComponent {
      static displayName = Comp.displayName || Comp.name;
      static contextType = ReduxContext;
      constructor(props, context) {
        super(props, context);
        this.store = this.context;
        if (mapStateToProps) {
          this.state = mapStateToProps(this.store.getState());
          this.unlishten = this.store.subscribe(() => {
            this.setState(mapStateToProps(this.store.getState()));
          });
        }
        if (mapDispatchToProps) {
          this.handles = this.getActionDispatch();
        }
      }
      getActionDispatch() {
        if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(this.store.dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          return bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
      }

      componentWillUnmount() {
        this.unlishten();
      }

      render() {
        console.log(`render ${this.constructor.displayName}`);
        return <Comp {...this.props} {...this.state} {...this.handles} />;
      }
    };
  };
};

export default connect;
