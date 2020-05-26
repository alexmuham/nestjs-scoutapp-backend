import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {NavigationPayload} from '../router/actions';
import Player from 'entities/Player';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* searchPlayers({payload}: Action<NavigationPayload>) {
  try {
    const players = yield ScoutApi.getPlayers();
    yield put(actions.searchPlayersCompleted({players, payload}));
    yield put(routerActions.navigateToPlayersListFromSearch({history: payload.history}));
  } catch (e) {
    yield put(actions.searchPlayersCompleted(e));
  }
}

function* searchPlayersComplete({payload, error}: Action<Player>) {
  if (error) {
    yield put(errorActions.handleError(payload));
  }
}

export default function* () {
  yield all([
    takeEvery(types.SEARCH_PLAYERS, searchPlayers),
    takeEvery(types.SEARCH_PLAYERS_COMPLETED, searchPlayersComplete),
  ]);
}
