import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {GeneralReportsPayload, VideoPayload} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {useSelector} from 'state/hooks';
import {errorActions} from '../error';
import {routerActions} from '../router';

function* addVideoToGeneralReports({payload}: Action<VideoPayload>) {
  try {
    let filesUris = [];
    let filesIds = [];
    const {files} = useSelector((state) => state.genReports);
    const {fileUri} = payload;
    const fileId = yield ScoutApi.uploadFile(fileUri);
    if (!files) {
      filesUris.push(fileUri);
      filesIds.push(fileId);
    } else {
      filesUris = files.filesUris;
      filesUris.push(fileUri);
      filesIds = files.filesIds;
      filesIds.push(fileId);
    }
    yield put(
      actions.addVideoCompleted({
        filesUris,
        filesIds,
      }),
    );
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

function* addGeneralReports({payload}: Action<GeneralReportsPayload>) {
  try {
    const {history, playerId} = payload;
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
