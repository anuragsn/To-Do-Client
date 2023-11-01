import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "../src/App"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducers/Reducer'; 

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);