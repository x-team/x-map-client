import {
  APP_LOGIN_SUCCESS,
  APP_LOGOUT_SUCCESS
} from '../constants/AppConstants';

function currentUserReducer(currentUser = {}, action) {
  Object.freeze(currentUser);

  switch (action.type) {
    case APP_LOGIN_SUCCESS:
      return action.user;
    case APP_LOGOUT_SUCCESS:
      return {};
    default:
      return currentUser;
  }
}

export default currentUserReducer;
