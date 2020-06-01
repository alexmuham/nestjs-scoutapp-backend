import {createAction} from 'redux-actions';
import types from './types';
import * as H from 'history';

export type NavigationPayload = {history: H.History};
export type NavigateFromPlayerId = {playerId: string} & NavigationPayload;
export type NavigateFromFriendId = {friendId: string} & NavigationPayload;

export default {
  goBack: createAction<NavigationPayload>(types.GO_BACK),
  accountEntered: createAction<NavigationPayload>(types.ACCOUNT_ENTERED),
  navigateToAuth: createAction<NavigationPayload>(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction<NavigationPayload>(types.NAVIGATE_TO_MAIN),
  navigateToProspect: createAction<NavigationPayload>(types.NAVIGATE_TO_PROSPECT),
  navigateToSearch: createAction<NavigationPayload>(types.NAVIGATE_TO_SEARCH),
  navigateToPlayer: createAction<NavigateFromPlayerId>(types.NAVIGATE_TO_PLAYER),
  navigateToSettings: createAction<NavigationPayload>(types.NAVIGATE_TO_SETTINGS),
  navigateToEditProspect: createAction<NavigationPayload>(
    types.NAVIGATE_TO_EDIT_PROSPECT,
  ),
  navigateToNotifications: createAction<NavigationPayload>(
    types.NAVIGATE_TO_NOTIFICATIONS,
  ),
  navigateToBigBoard: createAction<NavigationPayload>(types.NAVIGATE_TO_BIG_BOARD),
  navigateToImagePicker: createAction<NavigateFromPlayerId>(
    types.NAVIGATE_TO_IMAGE_PICKER,
  ),
  navigateToFriend: createAction<NavigateFromFriendId>(types.NAVIGATE_TO_FRIEND),
  navigateToEditFriends: createAction<NavigationPayload>(types.NAVIGATE_TO_EDIT_FRIENDS),
  navigateToInvitePopUp: createAction<NavigationPayload>(types.NAVIGATE_TO_INVITE_POP_UP),
  navigateToMassage: createAction<NavigateFromFriendId>(types.NAVIGATE_TO_MASSAGE),
  navigateToPlayersListFromSearch: createAction<NavigationPayload>(
    types.NAVIGATE_TO_PLAYERS_LIST_FROM_SEARCH,
  ),
  navigateToEditProfile: createAction<NavigationPayload>(types.NAVIGATE_TO_EDIT_PROFILE),
  navigateToReports: createAction<NavigateFromPlayerId>(types.NAVIGATE_TO_REPORTS),
  navigateToGeneralReports: createAction<NavigateFromPlayerId>(
    types.NAVIGATE_TO_GENERAL_REPORTS,
  ),
  navigateToProReports: createAction<NavigateFromPlayerId>(types.NAVIGATE_TO_PRO_REPORTS),
  navigateToPitcherReports: createAction<NavigateFromPlayerId>(
    types.NAVIGATE_TO_PITCHER_PRO_REPORTS,
  ),
};
