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

export default function* () {
  yield all([
    takeEvery(types.FETCH_PLAYER, fetchPlayer),
    takeEvery(types.FETCH_PLAYER_COMPLETE, fetchPlayerComplete),
  ]);
}
