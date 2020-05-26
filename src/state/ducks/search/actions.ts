import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export default {
  searchPlayers: createAction<NavigationPayload>(types.SEARCH_PLAYERS),
  searchPlayersCompleted: createAction(types.SEARCH_PLAYERS_COMPLETED),
};
