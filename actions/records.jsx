import * as types from '../constants/ActionTypes';

export function addRecord(text) {
  return { type: types.ADD_RECORD, text };
}

export function deleteRecord(id) {
  return { type: types.DELETE_RECORD, id };
}

export function editRecord(id, status, project_owner, budget) {
  return { type: types.EDIT_RECORD, id, status, project_owner, budget };
}

export function completeRecord(id) {
  return { type: types.COMPLETE_RECORD, id };
}

export function completeAll() {
  return { type: types.COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}

export function setFilterParams(params) {
  return { type: types.SET_PARAMS, params };
}