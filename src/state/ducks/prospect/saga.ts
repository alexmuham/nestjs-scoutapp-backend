import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {NavigationPayload} from '../router/actions';
import {alertActions} from '../alert';
import Player from 'entities/Player';

function* fetchPlayers({payload}: Action<NavigationPayload>) {
  try {
    const players = yield ScoutApi.getPlayers();
    yield put(actions.fetchPlayersComplete({players, history: payload.history}));
  } catch (e) {
    yield put(actions.fetchPlayersComplete(e));
  }
}

function* fetchPlayersComplete({payload, error}: Action<Player>) {
  if (error) {
    yield put(alertActions.showError(payload));
  }
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_PLAYERS, fetchPlayers),
    takeEvery(types.FETCH_PLAYERS_COMPLETE, fetchPlayersComplete),
  ]);
}
