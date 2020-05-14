import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as alertActions} from '../alert';
import {ScoutApi} from 'api';
import Notifications from 'entities/Notifications';
import {actions} from './index';
import {snackBarActions} from '../snackBar';

function* updateNotificationsSettings() {
  try {
    // const account: Account = yield ScoutApi.updateUserProfile(payload);
    // yield put(actions.updateUserProfileCompleted(account));
    // yield put(routerActions.goBack(payload));
    yield put(alertActions.showSnackbar({title: 'Profile saved!!'}));
  } catch (e) {
    yield put(alertActions.showError(e));
  }
}

function* fetchNotificationsSettings() {
  try {
    const notifications: Notifications = yield ScoutApi.myNotificationsSettings();
    yield put(actions.fetchNotificationsSettingsCompleted(notifications));
  } catch (e) {
    yield put(actions.fetchNotificationsSettingsCompleted(e));
  }
}

function* fetchNotificationsSettingsCompleted({payload, error}: Action<Notifications>) {
  if (error) {
    yield put(
      snackBarActions.showSnackbar({
        message: alertActions.showError({error: payload}),
        type: 'error',
      }),
    );
  }
}

export default function* () {
  yield all([
    takeEvery(types.UPDATE_NOTIFICATIONS_SETTINGS, updateNotificationsSettings),
    takeEvery(types.FETCH_NOTIFICATIONS_SETTINGS, fetchNotificationsSettings),
    takeEvery(
      types.FETCH_NOTIFICATIONS_SETTINGS_COMPLETED,
      fetchNotificationsSettingsCompleted,
    ),
    // takeEvery(types.AUTH_COMPLETED, authCompleted),
  ]);
}
