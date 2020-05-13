import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export default {
  openSettings: createAction<NavigationPayload>(types.OPEN_SETTINGS),
};
