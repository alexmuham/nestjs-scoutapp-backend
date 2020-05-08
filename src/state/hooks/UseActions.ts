import {useDispatch} from 'react-redux';
import {actions as authActions} from '../ducks/auth';
import RegisterRequest from 'auth/RegisterRequest';
import LoginRequest from 'api/entities/LoginRequest';
import ForgotPasswordRequest from 'api/entities/ForgotPasswordRequest';
import {snackBarActions} from 'state/ducks/snackBar';
import UpdateUserRequest from '../ducks/session/models';
import {actions as sessionActions} from '../ducks/session';

export function useAuthActions() {
  const dispatch = useDispatch();

  return {
    registerUser: (registerRequest: RegisterRequest) => {
      dispatch(authActions.registerUser(registerRequest));
    },
    login: (loginRequest: LoginRequest) => dispatch(authActions.login(loginRequest)),
    updateUserProfile: (updateRequest: UpdateUserRequest) => {
      dispatch(sessionActions.updateUserProfile(updateRequest));
    },
    recoverPassword: (email: ForgotPasswordRequest) => {
      dispatch(authActions.recoverPassword(email));
    },
  };
}

export function useSnackBarActions() {
  const dispatch = useDispatch();
  return {
    closeSnackBar: () => dispatch(snackBarActions.clearSnackbar()),
  };
}
