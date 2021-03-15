import React from 'react';
import ReactDOM from 'react-dom';
import Top from './top_component';
import * as AJAX from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.createUser = AJAX.createAccountAJAX;
  window.removeUser = AJAX.removeAccountAJAX;
  window.editUser = AJAX.editAccountAJAX;
  window.login = AJAX.loginAJAX;
  window.logout = AJAX.logoutAJAX;

  ReactDOM.render(<Top />, root);
});
