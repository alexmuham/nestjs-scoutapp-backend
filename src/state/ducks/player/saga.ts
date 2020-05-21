import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {FetchPlayer} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {Players} from '../../entities/PlayerContainer';
import {errorActions} from '../error';

function* fetchPlayer({payload}: Action<FetchPlayer>) {
  try {
    const player = yield ScoutApi.getPlayerById(payload.playerId);
    yield put(actions.fetchPlayerComplete(player));
  } catch (e) {
    yield put(yield put(errorActions.handleError(payload)));
  }
}

function* fetchPlayerComplete({payload, error}: Action<Players>) {
  if (error) {
    yield put(yield put(errorActions.handleError(payload)));
  }
}

function* addPlayerToUser({payload}: Action<FetchPlayer>) {
  yield ScoutApi.addPlayer(payload.playerId);
}

function* deletePlayerFromUser({payload}: Action<FetchPlayer>) {
  yield ScoutApi.deletePlayer(payload.playerId);
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_PLAYER, fetchPlayer),
    takeEvery(types.FETCH_PLAYER_COMPLETE, fetchPlayerComplete),
    takeEvery(types.AAD_PLAYER_TO_USER, addPlayerToUser),
    takeEvery(types.DELETE_PLAYER_FROM_USER, deletePlayerFromUser),
  ]);
}
