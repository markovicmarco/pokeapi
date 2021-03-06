import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import nameReducer from './reducers/nameReducer.js';

import App from "./App";

const rootElement = document.getElementById("root");

const store = createStore(nameReducer, composeWithDevTools());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
