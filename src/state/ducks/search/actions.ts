import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';
import SearchRequest from 'entities/SearchRequest';

export type SearchPlayers = {request: SearchRequest} & NavigationPayload;

export default {
  searchPlayers: createAction<SearchPlayers>(types.SEARCH_PLAYERS),
  searchPlayersCompleted: createAction(types.SEARCH_PLAYERS_COMPLETED),
};
