import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type OpenImagePicker = {imageUrl: string} & NavigationPayload;

export default {
  openImagePickerPopUp: createAction<OpenImagePicker>(types.OPEN_IMAGE_PICKER_POP_UP),
  addImageUrl: createAction<{imageUrl: string}>(types.ADD_IMAGE_URL),
  confirm: createAction(types.CONFIRM),
};
