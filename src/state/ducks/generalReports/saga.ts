import {all, takeEvery, put} from 'redux-saga/effects';
import types from './types';
import actions, {VideoPayload} from './actions';
import {Action} from 'redux-actions';
import {ScoutApi} from 'api';
import {useSelector} from 'state/hooks';

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
    yield put(actions.addVideoCompleted(e));
  }
}

export default function* () {
  yield all([
    //
    takeEvery(types.ADD_VIDEO_TO_GENERAL_REPORTS, addVideoToGeneralReports),
  ]);
}
