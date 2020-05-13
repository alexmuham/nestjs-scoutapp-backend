import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {FetchPlayer} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {alertActions} from '../alert';
import {Players} from '../../entities/PlayerContainer';

function* fetchPlayer({payload}: Action<FetchPlayer>) {
  try {
    const player = yield ScoutApi.getPlayerById(payload.playerId);
    yield put(actions.fetchPlayerComplete(player));
  } catch (e) {
    yield put(actions.fetchPlayerComplete(e));
  }
}

function* fetchPlayerComplete({payload, error}: Action<Players>) {
  if (error) {
    yield put(alertActions.showError(payload));
  }
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_PLAYER, fetchPlayer),
    takeEvery(types.FETCH_PLAYER_COMPLETE, fetchPlayerComplete),
  ]);
}
