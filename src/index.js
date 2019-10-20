import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import App from './App';

import rootReducer from './store/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root'),
);
