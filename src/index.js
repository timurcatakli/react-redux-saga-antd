import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

const initialState = {
  products: [{ name: 'iphone' }],
  user: 'Michael',
};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension(),
);

console.log(store.getState());

const action = {
  type: 'CHANGESTATE',
  payload: 13,
};

store.dispatch(action);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
