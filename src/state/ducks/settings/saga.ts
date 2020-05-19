import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as alertActions} from '../alert';
import {ScoutApi} from 'api';
import Preferences from 'entities/Preferences';
import actions from './actions';
import {snackBarActions} from '../snackBar';
import UpdatePreferences from 'api/entities/UpdatePreferences';

function* updatePreferences({payload}: Action<UpdatePreferences>) {
  try {
    const preferences: Preferences = yield ScoutApi.updatePreferences(payload);
    yield put(actions.fetchPreferencesCompleted(preferences));
  } catch (e) {
    yield put(actions.fetchPreferencesCompleted(e));
    yield put(alertActions.showError(e));
  }
}

function* updatePreferencesCompleted({payload, error}: Action<Preferences>) {
  if (error) {
    yield put(
      snackBarActions.showSnackbar({
        message: alertActions.showError({error: payload}),
        type: 'error',
      }),
    );
  }
}

function* fetchPreferences() {
  try {
    const preferences: Preferences = yield ScoutApi.preferences();
    yield put(actions.fetchPreferencesCompleted(preferences));
  } catch (e) {
    yield put(actions.fetchPreferencesCompleted(e));
  }
}

function* fetchPreferencesCompleted({payload, error}: Action<Preferences>) {
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
    takeEvery(types.UPDATE_PREFERENCES, updatePreferences),
    takeEvery(types.UPDATE_PREFERENCES_COMPLETED, updatePreferencesCompleted),
    takeEvery(types.FETCH_PREFERENCES, fetchPreferences),
    takeEvery(types.FETCH_PREFERENCES_COMPLETED, fetchPreferencesCompleted),
  ]);
}
