import expect from 'expect';
import usersReducer, { initialState } from '../../js/reducers/usersReducer';
import * as constants from '../../js/constants/AppConstants';

const getAction = (type, payload) => {
  return {
    type,
    ...payload
  };
};

describe('usersReducer', () => {
  const user = { id: 1, name: 'User 1' };
  const user2 = { id: 2, name: 'User 2' };

  it('should return initial state on init', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('should return initial state on unknown action', () => {
    expect(usersReducer(undefined, getAction('UNKNOWN_ACTION'))).toEqual(initialState);
  });

  it('should return an Object<User> indexed by ID with USER_LIST_SUCCESS action', () => {
    const action = getAction(constants.USER_LIST_SUCCESS, {
      users: [user]
    });

    expect(usersReducer(undefined, action)).toEqual({ 1: user });
  });

  it('should update user info on state when called with USER_GET_SUCCESS or USER_UPDATE_SUCCESS', () => {
    const state = { 1: user, 2: user2 };
    const updatedUser = { id: 1, name: 'User Updated' };
    const actionPayload = { user: updatedUser };
    const actionGetSuccess = getAction(constants.USER_GET_SUCCESS, actionPayload);
    const actionUpdateSuccess = getAction(constants.USER_GET_SUCCESS, actionPayload);
    const expected = { 1: updatedUser, 2: user2 };

    expect(usersReducer(state, actionGetSuccess)).toEqual(expected);
    expect(Object.keys(usersReducer(state, actionGetSuccess)).length).toBe(2);

    expect(usersReducer(state, actionUpdateSuccess)).toEqual(expected);
    expect(Object.keys(usersReducer(state, actionUpdateSuccess)).length).toBe(2);
  });

  it('should assign "isAdmin: true" property to an user when called with USER_GRANT_ADMIN_SUCCESS action', () => {
    const state = { 1: user };
    const action = getAction(constants.USER_GRANT_ADMIN_SUCCESS, { id: 1 });

    expect(usersReducer(state, action)).toEqual({
      1: {...user, isAdmin: true }
    });
  });

  it('should assign "isAdmin: false" property to an user when called with USER_REVOKE_ADMIN_SUCCESS action', () => {
    const state = { 1: user };
    const action = getAction(constants.USER_REVOKE_ADMIN_SUCCESS, { id: 1 });

    expect(usersReducer(state, action)).toEqual({
      1: {...user, isAdmin: false }
    });
  });

  it('should delete user info on state when called with USER_GET_FAILURE or USER_DELETE_SUCCESS', () => {
    const state = { 1: user, 2: user2 };
    const actionPayload = {id: 1};
    const actionGetFailure = getAction(constants.USER_GET_FAILURE, actionPayload);
    const actionDeleteSuccess = getAction(constants.USER_DELETE_SUCCESS, actionPayload);
    const expected = { 2: user2 };

    expect(usersReducer(state, actionGetFailure)).toEqual(expected);
    expect(Object.keys(usersReducer(state, actionGetFailure)).length).toBe(1);

    expect(usersReducer(state, actionDeleteSuccess)).toEqual(expected);
    expect(Object.keys(usersReducer(state, actionDeleteSuccess)).length).toBe(1);
  });
});
