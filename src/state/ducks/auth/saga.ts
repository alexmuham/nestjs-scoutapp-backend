import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import RegisterRequest from 'auth/RegisterRequest';
import LoginRequest from 'api/entities/LoginRequest';
import sessionActions from '../session/actions';
import routerActions from '../router/actions';
import Session from 'auth/Session';
import {ScoutApi as Api} from 'api';
import {AuthInfoKeeper} from 'auth';
import {mapLoginRequestToApi, mapRegisterRequestToApi} from 'api/Mappers';
import actions from './actions';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import {actions as alertActions} from '../alert';

function* registerUser({payload}: Action<RegisterRequest>) {
  try {
    const session: Session = yield Api.register(mapRegisterRequestToApi(payload));
    yield put(actions.authCompleted(session));
  } catch (e) {
    yield put(actions.authCompleted(e));
  }
}

function* authCompleted({payload, error}: Action<Session>) {
  if (error) {
    yield put(alertActions.showError(payload));
    return;
  }

  yield AuthInfoKeeper.authenticate(payload);
  yield put(sessionActions.setSessionExists(true));
  yield put(routerActions.navigateToMain());
  yield put(sessionActions.fetchSession());
  yield put(actions.removeImage());
}

function* logout() {
  yield AuthInfoKeeper.reset();
  yield put(routerActions.navigateToAuth());
}

function* loginUser({payload}: Action<LoginRequest>) {
  try {
    const session: Session = yield Api.login(mapLoginRequestToApi(payload));
    yield put(actions.authCompleted(session));
  } catch (e) {
    yield put(actions.authCompleted(e));
  }
}

function* recoverPassword({payload}: Action<ForgotPasswordRequest>) {
  try {
    yield Api.forgotPassword(payload);
    yield put(routerActions.goBack());
  } catch (e) {
    yield put(alertActions.showError(e));
  }
}

export default function* () {
  yield all([
    takeEvery(types.LOGOUT, logout),
    takeEvery(types.REGISTER_USER, registerUser),
    takeEvery(types.AUTH_COMPLETED, authCompleted),
    takeEvery(types.LOGIN_USER, loginUser),
    takeEvery(types.RECOVER_PASSWORD, recoverPassword),
  ]);
}
