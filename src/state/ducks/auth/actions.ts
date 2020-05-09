import {createAction} from 'redux-actions';
import types from './types';
import LoginRequest from 'auth/LoginRequest';
import RegisterRequest from 'auth/RegisterRequest';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import Session from 'auth/Session';

export default {
  registerUser: createAction<RegisterRequest>(types.REGISTER_USER),
  login: createAction<LoginRequest>(types.LOGIN_USER),
  authCompleted: createAction<Session>(types.AUTH_COMPLETED),
  logout: createAction(types.LOGOUT),
  recoverPassword: createAction<ForgotPasswordRequest>(types.RECOVER_PASSWORD),
  setIsChecking: createAction<boolean>(types.SET_IS_CHECKING),
  removeImage: createAction(types.REMOVE_IMAGE),
};
