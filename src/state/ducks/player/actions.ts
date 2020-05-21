import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type FetchPlayer = {playerId: string} & NavigationPayload;

export default {
  fetchPlayer: createAction<FetchPlayer>(types.FETCH_PLAYER),
  fetchPlayerComplete: createAction(types.FETCH_PLAYER_COMPLETE),
  addPlayerToUser: createAction<FetchPlayer>(types.AAD_PLAYER_TO_USER),
  deletePlayerFromUser: createAction<FetchPlayer>(types.DELETE_PLAYER_FROM_USER),
};
