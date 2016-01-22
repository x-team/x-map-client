// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE
} from '../constants/AppConstants';

export function userCreate(email, password, onSuccess) {
  return (dispatch) => {
    fetch('http://x-map.app/app_dev.php/api/users.json', {
      body: JSON.stringify({ email, password, username: email }),
      method: 'POST',
      mode: 'cors-with-forced-preflight',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(userCreateSuccess(json)))
      .then(onSuccess)
      .catch(() => dispatch(userCreateFailure()));
  };
}

export function userCreateSuccess(user) {
  return { type: USER_CREATE_SUCCESS, user };
}

export function userCreateFailure() {
  return { type: USER_CREATE_FAILURE };
}