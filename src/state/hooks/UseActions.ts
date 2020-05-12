import {useDispatch} from 'react-redux';
import {actions as authActions} from '../ducks/auth';
import UpdateUserRequest from '../ducks/session/models';
import {actions as sessionActions} from '../ducks/session';
import RegisterRequest from '../../auth/RegisterRequest';
import LoginRequest from '../../auth/LoginRequest';
import ForgotPasswordRequest from '../../api/entities/ForgotPasswordRequest';
import {snackBarActions} from '../ducks/snackBar';
import {useHistory} from 'react-router-native';

export function useAuthActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    registerUser: (registerRequest: RegisterRequest) => {
      dispatch(authActions.registerUser({request: registerRequest, history}));
    },
    login: (loginRequest: LoginRequest) =>
      dispatch(authActions.login({request: loginRequest, history})),
    updateUserProfile: (updateRequest: UpdateUserRequest) => {
      dispatch(sessionActions.updateUserProfile(updateRequest));
    },
    logout: () => dispatch(authActions.logout({history})),
    recoverPassword: (email: ForgotPasswordRequest) => {
      dispatch(authActions.recoverPassword({request: email, history}));
    },
  };
}

export function useSnackBarActions() {
  const dispatch = useDispatch();
  return {
    closeSnackBar: () => dispatch(snackBarActions.clearSnackbar()),
  };
}
