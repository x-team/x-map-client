// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  APP_ROUTE_CHANGED,
  APP_LOGIN,
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAILURE,
  APP_LOGOUT,
  APP_LOGOUT_SUCCESS,
  APP_LOGOUT_FAILURE
} from '../constants/AppConstants';

export function routeChanged() {
  return { type: APP_ROUTE_CHANGED };
}

export function login(email, password, onSuccess) {
  return (dispatch) => {
    fetch(process.env.API_BASE_URL + 'logins.json', {
      body: JSON.stringify({email, password}),
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(json)))
      .then(onSuccess)
      .catch(() => dispatch(loginFailure(response)));
  };
}

export function loginSuccess(user) {
  return {type: APP_LOGIN_SUCCESS, user};
}

export function loginFailure() {
  return {type: APP_LOGIN_FAILURE};
}

export function logout() {
  return (dispatch) => {
    fetch(process.env.API_BASE_URL + 'logouts.json', {
      method: 'POST',
      mode: 'cors'
    })
      .then(() => dispatch(logoutSuccess()))
      .catch(() => dispatch(logoutFailure()));
  };
}

export function logoutSuccess() {
  return {type: APP_LOGOUT_SUCCESS};
}

export function logoutFailure(response) {
  console.log(response.json());
  return {type: APP_LOGOUT_FAILURE};
}