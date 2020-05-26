import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {SearchPlayers} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import Player from 'entities/Player';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* searchPlayers({payload}: Action<SearchPlayers>) {
  try {
    const {history, request} = payload;
    const {
      name,
      weight,
      playerThrow,
      tenYard,
      sixtyTime,
      positionVelocity,
      position,
      height,
      exitVelocity,
      commitment,
      graduatingClass,
      bat,
    } = request;
    const players = yield ScoutApi.getPlayersBySearchParameters(
      name,
      height,
      weight,
      position,
      graduatingClass,
      commitment,
      bat,
      playerThrow,
      sixtyTime,
      positionVelocity,
      tenYard,
      exitVelocity,
    );
    yield put(actions.searchPlayersCompleted({players, history}));
    yield put(routerActions.navigateToPlayersListFromSearch({history}));
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
