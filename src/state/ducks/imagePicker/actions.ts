import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type addImage = {playerId: string; imageUri: string} & NavigationPayload;

export default {
  addImageToPlayer: createAction<addImage>(types.ADD_IMAGE_TO_PLAYER),
};
