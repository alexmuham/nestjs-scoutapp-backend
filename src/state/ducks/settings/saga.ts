import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as alertActions} from '../alert';
import {ScoutApi} from 'api';
import Preferences from 'entities/Preferences';
import {actions} from './index';
import {snackBarActions} from '../snackBar';
import UpdatePreferences from 'api/entities/UpdatePreferences';

function* updatePreferences({payload}: Action<UpdatePreferences>) {
  try {
    yield ScoutApi.updatePreferences(payload);
  } catch (e) {
    yield put(alertActions.showError(e));
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
    takeEvery(types.FETCH_PREFERENCES, fetchPreferences),
    takeEvery(types.FETCH_PREFERENCES_COMPLETED, fetchPreferencesCompleted),
  ]);
}
