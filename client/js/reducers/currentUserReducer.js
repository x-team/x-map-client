import {
  APP_LOGIN_SUCCESS,
  APP_LOGOUT_SUCCESS
} from '../constants/AppConstants';

import assignToEmpty from '../utils/assign';

function currentUserReducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case APP_LOGIN_SUCCESS:
      return action.user;
    case APP_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

export default currentUserReducer;
