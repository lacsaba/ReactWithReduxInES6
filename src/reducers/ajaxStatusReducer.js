import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.numAjaxCallInProgress, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR
            || actionTypeEndsInSuccess(action.type)) {
    return state -1;
  }
  return state;
}

function actionTypeEndsInSuccess(type) {
  return type.endsWith('_SUCCESS');
}
