import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as routerActions} from 'state/ducks/router';
import {addImage} from './actions';
import {errorActions} from '../error';
import {ScoutApi} from '../../../api';

function* addImageToPlayer({payload}: Action<addImage>) {
  try {
    const imageId: string = yield ScoutApi.uploadFile(payload.imageUri);
    yield ScoutApi.addPlayerImage(payload.playerId, imageId);
    yield put(routerActions.goBack({history: payload.history}));
  } catch (e) {
    yield put(yield put(errorActions.handleError(payload)));
  }
}

export default function* () {
  yield all([takeEvery(types.ADD_IMAGE_TO_PLAYER, addImageToPlayer)]);
}
