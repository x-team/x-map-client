import {
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE
} from '../constants/AppConstants';

import assignToEmpty from '../utils/assign';

function currentUserReducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case USER_CREATE_SUCCESS:
      return assignToEmpty(state, {
        user: action.user
      });
    case USER_CREATE_FAILURE:
      return assignToEmpty(state, {
        user: undefined
      });
    default:
      return state;
  }
}

export default currentUserReducer;
