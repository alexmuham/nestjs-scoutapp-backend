import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import {alertActions} from '../alert/index';
import authActions from '../auth/actions';
import {Action} from 'redux-actions';
import {checkNotAuthorizedError} from 'api/ScoutApiUtils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* handleError({payload}: Action<any>) {
  if (checkNotAuthorizedError(payload)) {
    yield put(authActions.logout(payload));
    return;
  }

  yield put(alertActions.showMessage(payload));
}

export default function* () {
  yield all([
    //
    takeEvery(types.HANDLE_ERROR, handleError),
  ]);
}
