import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export default {
  fetchPlayers: createAction<NavigationPayload>(types.FETCH_PLAYERS),
  fetchPlayersComplete: createAction(types.FETCH_PLAYERS_COMPLETE),
};
