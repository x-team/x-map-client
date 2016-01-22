// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  APP_LOGIN,
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAILURE,
  APP_LOGOUT,
  APP_LOGOUT_SUCCESS,
  APP_LOGOUT_FAILURE
} from '../constants/AppConstants';

export function login(email, password) {
  return (dispatch) => {
    fetch('logins.json', {
      method: 'POST',
      body: { email, password }
    })
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(json)))
      .catch(() => dispatch(loginFailure()));
  };
}

export function loginSuccess(user) {
  return { type: APP_LOGIN_SUCCESS, user };
}

export function loginFailure() {
  return { type: APP_LOGIN_FAILURE };
}

export function logout() {
  return (dispatch) => {
    fetch('logouts.json', { method: 'POST' })
      .then(response => response.json())
      .then(() => dispatch(logoutSuccess()))
      .catch(() => dispatch(logoutFailure()));
  };
}

export function logoutSuccess() {
  return { type: APP_LOGIN_SUCCESS, user };
}

export function logoutFailure() {
  return { type: APP_LOGIN_FAILURE };
}