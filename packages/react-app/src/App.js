import { Provider } from "./react-redux";
import store from "./store";
import CounterContainer from "./components/CounterContainer";
import UserContainer from "./components/UserContainer";
import PureComponent from "./components/PureComponent";

function App() {
  return (
    <Provider store={store}>
      {/* <CounterContainer abc={12} />
      <UserContainer abc={12} /> */}
      <PureComponent />
    </Provider>
  );
}

export default App;
