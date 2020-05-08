import {all, put, takeEvery} from 'redux-saga/effects';
import {ScoutApi} from 'api';
import {Account} from 'entities/Account';
import types from './types';
import {actions as alertActions} from '../alert';
import sessionActions from 'state/ducks/session/actions';

function* updateMyAccount() {
  try {
    // const account: Account = yield ScoutApi.updateUserProfile(payload);
    // yield put(actions.updateUserProfileCompleted(account));
    // yield put(routerActions.goBack(payload));
    yield put(alertActions.showSnackbar({title: 'Profile saved!!'}));
  } catch (e) {
    yield put(alertActions.showError(e));
  }
}

function* fetchSession() {
  try {
    const account: Account = yield ScoutApi.myAccount();
    yield put(sessionActions.fetchUserCompleted(account));
    yield put(sessionActions.setSessionExists(true));
  } catch (e) {
    yield put(sessionActions.fetchUserCompleted(e));
  }
}

export default function* () {
  yield all([takeEvery(types.UPDATE_USER_PROFILE, updateMyAccount)]);
  yield all([takeEvery(types.FETCH_SESSION, fetchSession)]);
}
