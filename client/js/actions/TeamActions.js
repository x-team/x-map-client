/* eslint-disable no-use-before-define */

import {
  TEAM_CREATE,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAILURE,
  TEAM_GET,
  TEAM_GET_SUCCESS,
  TEAM_GET_FAILURE,
  TEAM_LIST,
  TEAM_LIST_SUCCESS,
  TEAM_LIST_FAILURE,
  TEAM_UPDATE,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_FAILURE,
  TEAM_DELETE,
  TEAM_DELETE_SUCCESS,
  TEAM_DELETE_FAILURE,
  TEAM_LINK_USER,
  TEAM_LINK_USER_SUCCESS,
  TEAM_LINK_USER_FAILURE,
  TEAM_UNLINK_USER,
  TEAM_UNLINK_USER_SUCCESS,
  TEAM_UNLINK_USER_FAILURE
} from '../constants/AppConstants';

import request from '../utils/request';

export function teamCreate(data, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamCreate());
    request(process.env.API_BASE_URL + 'teams.json', {
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then(team => dispatch(teamCreateSuccess(team)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamCreateFailure(data, errors)));
  };
}

function doTeamCreate() {
  return {type: TEAM_CREATE};
}

export function teamCreateSuccess(team) {
  return {type: TEAM_CREATE_SUCCESS, team};
}

export function teamCreateFailure(data, errors) {
  return {type: TEAM_CREATE_FAILURE, data, errors};
}

export function teamGet(id, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamGet(id));
    request(process.env.API_BASE_URL + 'teams/' + id + '.json')
      .then(team => dispatch(teamGetSuccess(team)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamGetFailure(id, errors)));
  };
}

function doTeamGet(team) {
  return {type: TEAM_GET, team};
}

export function teamGetSuccess(team) {
  return {type: TEAM_GET_SUCCESS, team};
}

export function teamGetFailure(id, errors) {
  return {type: TEAM_GET_FAILURE, id, errors};
}

export function teamList(onSuccess) {
  return (dispatch) => {
    dispatch(doTeamList());
    request(process.env.API_BASE_URL + 'teams.json')
      .then(teams => dispatch(teamListSuccess(teams)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamListFailure(errors)));
  };
}

function doTeamList() {
  return {type: TEAM_LIST};
}

export function teamListSuccess(teams) {
  return {type: TEAM_LIST_SUCCESS, teams};
}

export function teamListFailure(errors) {
  return {type: TEAM_LIST_FAILURE, errors};
}

export function teamUpdate(data, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamUpdate(data));
    request(process.env.API_BASE_URL + 'teams/' + data.id + '.json', {
      body: JSON.stringify(data),
      method: 'PUT'
    })
      .then(team => dispatch(teamUpdateSuccess(team)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamUpdateFailure(data, errors)));
  };
}

function doTeamUpdate(data) {
  return {type: TEAM_UPDATE, data};
}

export function teamUpdateSuccess(team) {
  return {type: TEAM_UPDATE_SUCCESS, team};
}

export function teamUpdateFailure(data, errors) {
  return {type: TEAM_UPDATE_FAILURE, data, errors};
}

export function teamDelete(id, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamDelete(id));
    request(process.env.API_BASE_URL + 'teams/' + id + '.json', {
      method: 'DELETE'
    })
      .then(onSuccess)
      .then(() => dispatch(teamDeleteSuccess(id)))
      .catch((errors) => dispatch(teamDeleteFailure(id, errors)));
  };
}

function doTeamDelete(id) {
  return {type: TEAM_DELETE, id};
}

export function teamDeleteSuccess(id) {
  return {type: TEAM_DELETE_SUCCESS, id};
}

export function teamDeleteFailure(id, errors) {
  return {type: TEAM_DELETE_FAILURE, id, errors};
}

export function teamLinkUser(id, userId, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamLinkUser(id, userId));
    request(process.env.API_BASE_URL + 'teams/' + id + '/users/' + userId + '/admin.json', {
      method: 'PUT'
    })
      .then(() => dispatch(teamLinkUserSuccess(id, userId)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamLinkUserFailure(id, userId, errors)));
  };
}

function doTeamLinkUser(id, userId) {
  return {type: TEAM_LINK_USER, id, userId};
}

export function teamLinkUserSuccess(id, userId) {
  return {type: TEAM_LINK_USER_SUCCESS, id, userId};
}

export function teamLinkUserFailure(id, userId, errors) {
  return {type: TEAM_LINK_USER_FAILURE, id, userId, errors};
}

export function teamUnlinkUser(id, userId, onSuccess) {
  return (dispatch) => {
    dispatch(doTeamUnlinkUser(id, userId));
    request(process.env.API_BASE_URL + 'teams/' + id + '/users/' + userId + '/admin.json', {
      method: 'DELETE'
    })
      .then(() => dispatch(teamUnlinkUserSuccess(id, userId)))
      .then(onSuccess)
      .catch((errors) => dispatch(teamUnlinkUserFailure(id, userId, errors)));
  };
}

function doTeamUnlinkUser(id, userId) {
  return {type: TEAM_UNLINK_USER, id, userId};
}

export function teamUnlinkUserSuccess(id, userId) {
  return {type: TEAM_UNLINK_USER_SUCCESS, id, userId};
}

export function teamUnlinkUserFailure(id, userId, errors) {
  return {type: TEAM_UNLINK_USER_FAILURE, id, userId, errors};
}
