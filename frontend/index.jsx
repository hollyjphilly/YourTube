import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  login,
  logout,
  createAccount
} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TEST BEGIN

  window.login = login;
  window.logout = logout;
  window.createAccount = createAccount;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // TEST END

  ReactDOM.render(<Root store={store}/>, root);
});
