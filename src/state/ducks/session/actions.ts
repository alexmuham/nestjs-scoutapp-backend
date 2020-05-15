import {createAction} from 'redux-actions';
import types from './types';
import {Account} from 'entities/Account';
import UpdateUserRequest from './models';
import {NavigationPayload} from '../router/actions';

export default {
  fetchSession: createAction<NavigationPayload>(types.FETCH_SESSION),
  setSessionExists: createAction<boolean>(types.SET_SESSION_EXISTS),
  fetchUserAccount: createAction(types.FETCH_USER_ACCOUNT),
  fetchUserCompleted: createAction<Account>(types.FETCH_USER_COMPLETED),
  updateUserProfile: createAction<UpdateUserRequest>(types.UPDATE_USER_PROFILE),
  updateUserProfileCompleted: createAction<Account>(types.UPDATE_USER_PROFILE_COMPLETED),
};
