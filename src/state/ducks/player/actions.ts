import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type FetchPlayer = {playerId: string} & NavigationPayload;

export default {
  fetchPlayer: createAction<FetchPlayer>(types.FETCH_PLAYER),
  fetchPlayerComplete: createAction(types.FETCH_PLAYER_COMPLETE),
};
