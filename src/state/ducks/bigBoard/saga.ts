import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {NavigationPayload} from '../router/actions';
import {errorActions} from '../error';
import actions from './actions';

function* fetchBigBoard({payload}: Action<NavigationPayload>) {
  try {
    const {history} = payload;
    const players = yield ScoutApi.getUserPlayers();
    yield put(actions.fetchBigBoardComplete({players, history}));
  } catch (e) {
    yield put(actions.fetchBigBoardComplete(e));
  }
}

function* fetchBigBoardComplete({payload, error}: Action<NavigationPayload>) {
  if (error) {
    yield put(errorActions.handleError(payload));
  }
}

export default function* () {
  yield all([
    takeEvery(types.FETCH_BIG_BOARD, fetchBigBoard),
    takeEvery(types.FETCH_BIG_BOARD_COMPLETE, fetchBigBoardComplete),
  ]);
}
