import { Provider } from "./react-redux";
import store from "./store";
import CounterContainer from "./components/CounterContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <CounterContainer abc={12} />
      <UserContainer abc={12} />
    </Provider>
  );
}

export default App;
