import {createAction} from 'redux-actions';
import types from './types';
import * as H from 'history';

export type NavigationPayload = {history: H.History};
export type NavigateToPlayer = {playerId: string} & NavigationPayload;

export default {
  goBack: createAction<NavigationPayload>(types.GO_BACK),
  accountEntered: createAction<NavigationPayload>(types.ACCOUNT_ENTERED),
  navigateToAuth: createAction<NavigationPayload>(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction<NavigationPayload>(types.NAVIGATE_TO_MAIN),
  navigateToProspect: createAction<NavigationPayload>(types.NAVIGATE_TO_PROSPECT),
  navigateToPlayer: createAction<NavigateToPlayer>(types.NAVIGATE_TO_PLAYER),
  navigateToSettings: createAction<NavigationPayload>(types.NAVIGATE_TO_SETTINGS),
};