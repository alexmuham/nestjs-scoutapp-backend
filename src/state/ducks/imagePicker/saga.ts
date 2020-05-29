import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as routerActions} from 'state/ducks/router';
import {actions as playerActions} from 'state/ducks/player';
import {addImageUri} from './actions';
import {errorActions} from '../error';
import {ScoutApi} from 'api';

function* addImage({payload}: Action<addImageUri>) {
  try {
    const {history, imageUri, playerId} = payload;
    const imageId: string = yield ScoutApi.uploadFile(imageUri);
    yield ScoutApi.addPlayerImage(playerId, imageId);
    yield put(playerActions.fetchPlayer({playerId, history}));
    yield put(routerActions.goBack({history}));
  } catch (e) {
    yield put(errorActions.handleError(e));
  }
}

export default function* () {
  yield all([takeEvery(types.ADD_IMAGE, addImage)]);
}
