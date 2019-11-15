import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import "./index.css";
import App from "./App";
import { CounterContainer } from "./conteiners/Counter";

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,

  document.getElementById("root")
);
