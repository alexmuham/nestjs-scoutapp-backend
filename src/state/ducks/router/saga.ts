import {all, put, select, takeEvery} from 'redux-saga/effects';
import types from './types';
import {NavigationPayload} from './actions';
import {Action} from 'redux-actions';
import State from 'state/entities/State';
import {actions as sessionActions} from 'state/ducks/session';
import {LoadableContainer} from 'entities/LoadableContainer';

function goBack({payload}: Action<NavigationPayload>) {
  payload.history.goBack();
}

function* accountEntered() {
  const session: LoadableContainer<any> = yield select((state: State) => state.session);
  if (!session.isSuccess && !session.isLoading) {
    yield put(sessionActions.fetchSession());
  }
}

function navigateToAuth({payload}: Action<NavigationPayload>) {
  payload.history.push('/login');
}

function navigateToMain({payload}: Action<NavigationPayload>) {
  payload.history.push('/player');
}

export default function* () {
  yield all([
    takeEvery(types.GO_BACK, goBack),
    takeEvery(types.NAVIGATE_TO_AUTH, navigateToAuth),
    takeEvery(types.ACCOUNT_ENTERED, accountEntered),
    takeEvery(types.NAVIGATE_TO_MAIN, navigateToMain),
  ]);
}
