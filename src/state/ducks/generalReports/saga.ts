import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {GeneralReportsPayload, VideoPayload} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* addVideoToGeneralReports({payload}: Action<VideoPayload>) {
  try {
    const {fileUri} = payload;
    const fileId: string = yield ScoutApi.uploadFile(fileUri);
    yield put(
      actions.addVideoCompleted({
        fileUri,
        fileId,
      }),
    );
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

function* addGeneralReports({payload}: Action<GeneralReportsPayload>) {
  try {
    const {history, filesIds, date, notes, playerId} = payload;
    if (!date) return;
    yield ScoutApi.addGeneralReports(filesIds, date, notes, playerId);
    yield put(routerActions.navigateToPlayer({history, playerId}));
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

export default function* () {
  yield all([
    //
    takeEvery(types.ADD_VIDEO_TO_GENERAL_REPORTS, addVideoToGeneralReports),
    takeEvery(types.ADD_GENERAL_REPORTS, addGeneralReports),
  ]);
}
