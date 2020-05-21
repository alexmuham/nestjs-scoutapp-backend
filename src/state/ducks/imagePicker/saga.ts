import types from './types';
import {all, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {actions as routerActions} from 'state/ducks/router';
import actions, {OpenImagePicker} from './actions';
import {errorActions} from '../error';

// function* confirm({payload}: Action<{uri: string}>) {
//   yield put(routerActions.goBack());
//   console.log(payload, 'PAYLOAD');
//   // yield put(payload.confirmAction({imageUrl: payload.uri}));
// }

function* openImagePickerPopUp({payload}: Action<OpenImagePicker>) {
  try {
    yield put(actions.addImageUrl({imageUrl: payload.imageUrl}));
    yield put(routerActions.navigateToImagePicker({history: payload.history}));
  } catch (e) {
    yield put(yield put(errorActions.handleError(payload)));
  }
}

export default function* () {
  yield all([
    //
    // takeEvery(types.CONFIRM, confirm),
    takeEvery(types.OPEN_IMAGE_PICKER_POP_UP, openImagePickerPopUp),
  ]);
}
