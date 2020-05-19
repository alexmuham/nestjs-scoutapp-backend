import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {DeletePlayers} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {NavigationPayload} from '../router/actions';
import Player from 'entities/Player';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* fetchUserPlayers({payload}: Action<NavigationPayload>) {
  try {
    const players = yield ScoutApi.getUserPlayers();
    yield put(actions.fetchPlayersComplete({players, payload}));
  } catch (e) {
    yield put(actions.fetchPlayersComplete(e));
  }
}

function* fetchPlayersComplete({payload, error}: Action<Player>) {
  if (error) {
    yield put(errorActions.handleError(payload));
  }
}

function* deletePlayers({payload}: Action<DeletePlayers>) {
  try {
    yield ScoutApi.deletePlayers(payload.playersIds);
    yield put(routerActions.goBack({history: payload.history}));
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_USER_PLAYERS, fetchUserPlayers),
    takeEvery(types.FETCH_PLAYERS_COMPLETE, fetchPlayersComplete),
    takeEvery(types.DELETE_PLAYERS, deletePlayers),
  ]);
}
