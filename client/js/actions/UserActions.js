// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {
  USER_CREATE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE
} from '../constants/AppConstants';

export function userCreate(email, password) {
  return (dispatch) => {
    fetch('users.json', {
      method: 'POST',
      body: { email, password }
    })
      .then(response => response.json())
      .then(json => dispatch(userCreateSuccess(json)))
      .catch(() => dispatch(userCreateFailure()));
  };
}

export function userCreateSuccess(user) {
  return { type: USER_CREATE_SUCCESS, user };
}

export function userCreateFailure() {
  return { type: USER_CREATE_FAILURE };
}