import {createAction} from 'redux-actions';
import types from './types';
import {NavigationPayload} from '../router/actions';

export type DeleteFriends = {friendId: string} & NavigationPayload;

export default {
  fetchFriends: createAction<NavigationPayload>(types.FETCH_FRIENDS),
  fetchFriendsComplete: createAction(types.FETCH_FRIENDS_COMPLETE),
  deleteFriend: createAction<DeleteFriends>(types.DELETE_FRIEND),
};
