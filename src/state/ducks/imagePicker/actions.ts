import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type addImageUri = {playerId: string; imageUri: string} & NavigationPayload;

export default {
  addImage: createAction<addImageUri>(types.ADD_IMAGE),
};
