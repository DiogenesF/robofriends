import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "tachyons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { searchRobots, requestingRobots } from "./redux/reducers";
import MainComponent from "./containers/MainComponent";

import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots,
  requestingRobots,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
