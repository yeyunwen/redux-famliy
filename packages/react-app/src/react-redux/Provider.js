import ReduxContext from "./ctx";
const Provider = ({ store, children }) => {
  return (
    <ReduxContext.Provider value={store} a={1}>
      {children}
    </ReduxContext.Provider>
  );
};

export default Provider;
