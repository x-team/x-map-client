import {
  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAILURE,
  APP_LOGOUT_SUCCESS,
  APP_LOGOUT_FAILURE
} from '../constants/AppConstants';

function currentUserReducer(currentUser = {}, action) {
  Object.freeze(currentUser);

  switch (action.type) {
    case APP_LOGIN_SUCCESS:
      return action.user;
    case APP_LOGIN_FAILURE:
    case APP_LOGOUT_SUCCESS:
      return {};
    case APP_LOGOUT_FAILURE:
    default:
      return currentUser;
  }
}

export default currentUserReducer;
