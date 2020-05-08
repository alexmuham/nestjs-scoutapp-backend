import {createAction} from 'redux-actions';
import types from './types';

export default {
  goBack: createAction(types.GO_BACK),
  accountEntered: createAction(types.ACCOUNT_ENTERED),
  navigateToAuth: createAction(types.NAVIGATE_TO_AUTH),
  navigateToMain: createAction(types.NAVIGATE_TO_MAIN),
};
