import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
import history from "./history";

const store = configureStore({}, history);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
