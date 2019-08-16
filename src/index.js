import React from "react";
import ReactDOM from "react-dom";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./counter";

import "./styles.css";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
