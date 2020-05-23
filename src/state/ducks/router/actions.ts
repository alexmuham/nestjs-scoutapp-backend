import {createAction} from 'redux-actions';
import types from './types';
import * as H from 'history';

export type NavigationPayload = {history: H.History};
export type NavigateToPlayer = {playerId: string} & NavigationPayload;
export type NavigateToFriend = {friendId: string} & NavigationPayload;

export default {
  goBack: createAction<NavigationPayload>(types.GO_BACK),
  accountEntered: createAction<NavigationPayload>(types.ACCOUNT_ENTERED),
  navigateToAuth: createAction<NavigationPayload>(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction<NavigationPayload>(types.NAVIGATE_TO_MAIN),
  navigateToProspect: createAction<NavigationPayload>(types.NAVIGATE_TO_PROSPECT),
  navigateToPlayer: createAction<NavigateToPlayer>(types.NAVIGATE_TO_PLAYER),
  navigateToSettings: createAction<NavigationPayload>(types.NAVIGATE_TO_SETTINGS),
  navigateToEditProspect: createAction<NavigationPayload>(
    types.NAVIGATE_TO_EDIT_PROSPECT,
  ),
  navigateToImagePicker: createAction<NavigateToPlayer>(types.NAVIGATE_TO_IMAGE_PICKER),
  navigateToFriend: createAction<NavigateToFriend>(types.NAVIGATE_TO_FRIEND),
  navigateToEditFriends: createAction<NavigationPayload>(types.NAVIGATE_TO_EDIT_FRIENDS),
  navigateToInvitePopUp: createAction<NavigationPayload>(types.NAVIGATE_TO_INVITE_POP_UP),
  navigateToFriendActPopUp: createAction<NavigateToFriend>(
    types.NAVIGATE_TO_FRIEND_ACT_POP_UP,
  ),
};
