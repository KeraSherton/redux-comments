import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Form from "./Form";
import List from "./List";

import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <List />
      </div>
    </Provider>
  );
};
export default App;
