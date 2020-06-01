import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import {ProReportsPayload} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* addGeneralReports({payload}: Action<ProReportsPayload>) {
  try {
    const {request, history} = payload;
    if (!request.reportDate.matchDate) return;
    yield ScoutApi.addProReports(request);
    yield put(routerActions.navigateToPlayer({history, playerId: request.playerId}));
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

export default function* () {
  yield all([
    //
    takeEvery(types.ADD_PRO_REPORTS, addGeneralReports),
  ]);
}
