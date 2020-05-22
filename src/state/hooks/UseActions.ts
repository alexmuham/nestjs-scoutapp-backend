import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-native';
import {actions as authActions} from '../ducks/auth';
import {actions as settingsActions} from '../ducks/settings';
import UpdateUserRequest from '../ducks/session/models';
import {snackBarActions} from '../ducks/snackBar';
import {actions as sessionActions} from '../ducks/session';
import {actions as prospectActions} from '../ducks/prospect';
import {actions as playerActions} from '../ducks/player';
import {actions as routerActions} from '../ducks/router';
import {actions as imagePickerActions} from '../ducks/imagePicker';
import RegisterRequest from '../../auth/RegisterRequest';
import LoginRequest from '@spryrocks/react-auth/LoginRequest';
import ForgotPasswordRequest from '../../api/entities/ForgotPasswordRequest';
import UpdatePreferences from '../../api/entities/UpdatePreferences';

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
    navigateToPlayer: (playerId: string) =>
      dispatch(routerActions.navigateToPlayer({history, playerId})),
    navigateToEditProspect: () =>
      dispatch(routerActions.navigateToEditProspect({history})),
    goBack: () => dispatch(routerActions.goBack({history})),
    navigateToProspect: () => dispatch(routerActions.navigateToProspect({history})),
    navigateToImagePicker: (playerId: string) =>
      dispatch(routerActions.navigateToImagePicker({playerId, history})),
  };
}

export function useProspectActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    fetchUserPlayers: () => {
      dispatch(prospectActions.fetchUserPlayers({history}));
    },
    deletePlayers: (playersIds: string[]) => {
      dispatch(prospectActions.deletePlayers({playersIds, history}));
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
    addPlayerToUser: (playerId: string) => {
      dispatch(playerActions.addPlayerToUser({playerId, history}));
    },
    deletePlayerFromUser: (playerId: string) => {
      dispatch(playerActions.deletePlayerFromUser({playerId, history}));
    },
  };
}

export function useSettingsActions() {
  const dispatch = useDispatch();

  return {
    fetchPreferences: () => dispatch(settingsActions.fetchPreferences()),
    updatePreferences: (request: UpdatePreferences) =>
      dispatch(settingsActions.updatePreferences(request)),
  };
}

export function useSnackBarActions() {
  const dispatch = useDispatch();
  return {
    closeSnackBar: () => dispatch(snackBarActions.clearSnackbar()),
  };
}

export function useImagePickerActions() {
  const dispatch = useDispatch();
  const history = useHistory();
  return {
    addImageToPlayer: (playerId: string, imageUri: string) =>
      dispatch(imagePickerActions.addImageToPlayer({playerId, imageUri, history})),
  };
}
