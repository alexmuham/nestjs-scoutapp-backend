import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-native';
import UpdateUserRequest from '../ducks/session/models';
import {snackBarActions} from '../ducks/snackBar';
import {actions as authActions} from '../ducks/auth';
import {actions as sessionActions} from '../ducks/session';
import {actions as prospectActions} from '../ducks/prospect';
import {actions as playerActions} from '../ducks/player';
import {actions as routerActions} from '../ducks/router';
import RegisterRequest from '../../auth/RegisterRequest';
import LoginRequest from '../../auth/LoginRequest';
import ForgotPasswordRequest from '../../api/entities/ForgotPasswordRequest';

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

export function useRouterActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    navigateToPlayer: (playerId: string) => {
      dispatch(routerActions.navigateToPlayer({history, playerId}));
    },
  };
}

export function useProspectActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    fetchPlayers: () => {
      dispatch(prospectActions.fetchPlayers({history}));
    },
  };
}

export function usePlayerActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    fetchPlayer: (playerId: string) => {
      dispatch(playerActions.fetchPlayer({playerId, history}));
    },
  };
}

export function useSnackBarActions() {
  const dispatch = useDispatch();
  return {
    closeSnackBar: () => dispatch(snackBarActions.clearSnackbar()),
  };
}
