import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type DeletePlayers = {playersIds: string[]} & NavigationPayload;

export default {
  fetchUserPlayers: createAction<NavigationPayload>(types.FETCH_USER_PLAYERS),
  fetchPlayersComplete: createAction(types.FETCH_PLAYERS_COMPLETE),
  deletePlayers: createAction<DeletePlayers>(types.DELETE_PLAYERS),
};
