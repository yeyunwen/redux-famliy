import { useContext, useState, useEffect } from "react";
import ReduxContext from "./ctx";
import { bindActionCreators } from "redux";

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Comp) => {
    const compare = (a, b) => {
      if (typeof a === "function" && typeof b === "function") {
        return a.toString() === b.toString();
      } else if (typeof a === "object" && typeof b === "object") {
        for (const key in a) {
          if (!compare(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      return a === b;
    };
    const Temp = (props) => {
      const store = useContext(ReduxContext);
      const [state, setState] = useState(
        mapStateToProps && mapStateToProps(store.getState())
      );

      useEffect(() => {
        return store.subscribe(() => {
          setState((prevState) => {
            const newState = mapStateToProps(store.getState());
            if (compare(prevState, newState)) {
              return prevState;
            } else {
              return newState;
            }
          });
        });
      }, [store]);

      const getHandlers = () => {
        if (typeof mapDispatchToProps === "object") {
          return bindActionCreators(
            mapDispatchToProps(store.dispatch),
            store.dispatch
          );
        } else if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(store.dispatch);
        }
      };

      const handlers = getHandlers();
      console.log(Temp.displayName, "render");

      return <Comp {...props} {...state} {...handlers} />;
    };
    Temp.displayName = Comp.displayName || Comp.name || "Component";
    return Temp;
  };
};

export default connect;
