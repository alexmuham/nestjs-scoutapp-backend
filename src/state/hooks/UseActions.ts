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
import {actions as friendsActions} from '../ducks/friends';
import {actions as searchActions} from '../ducks/search';
import {actions as genReportsActions} from '../ducks/generalReports';
import {actions as proReportsActions} from '../ducks/proReports';
import {actions as bigBoardActions} from '../ducks/bigBoard';
import RegisterRequest from '../../auth/RegisterRequest';
import LoginRequest from '@spryrocks/react-auth/LoginRequest';
import ForgotPasswordRequest from '../../api/entities/ForgotPasswordRequest';
import UpdatePreferences from '../../api/entities/UpdatePreferences';
import SearchRequest from '../../entities/SearchRequest';
import proReportsRequest from '../../entities/proReportsRequest';

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
    navigateToSearch: () => dispatch(routerActions.navigateToSearch({history})),
    navigateToImagePicker: (playerId: string) =>
      dispatch(routerActions.navigateToImagePicker({playerId, history})),
    navigateToFriend: (friendId: string) =>
      dispatch(routerActions.navigateToFriend({history, friendId})),
    navigateToEditFriends: () => dispatch(routerActions.navigateToEditFriends({history})),
    navigateToMassage: (friendId: string) =>
      dispatch(routerActions.navigateToMassage({friendId, history})),
    navigateToInvitePopUp: () => dispatch(routerActions.navigateToInvitePopUp({history})),
    navigateToPlayersListFromSearch: () =>
      dispatch(routerActions.navigateToPlayersListFromSearch({history})),
    navigateToEditProfile: () => dispatch(routerActions.navigateToEditProfile({history})),
    navigateToReports: (playerId: string) =>
      dispatch(routerActions.navigateToReports({playerId, history})),
    navigateToGeneralReports: (playerId: string) =>
      dispatch(routerActions.navigateToGeneralReports({playerId, history})),
    navigateToProReports: (playerId: string) =>
      dispatch(routerActions.navigateToProReports({playerId, history})),
    navigateToPitcherProReports: (playerId: string) =>
      dispatch(routerActions.navigateToPitcherReports({playerId, history})),
    navigateToNotifications: () =>
      dispatch(routerActions.navigateToNotifications({history})),
    navigateToBigBoard: () => dispatch(routerActions.navigateToBigBoard({history})),
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

export function useSearchActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    searchPlayers: (request: SearchRequest) =>
      dispatch(searchActions.searchPlayers({history, request})),
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
      dispatch(imagePickerActions.addImage({playerId, imageUri, history})),
  };
}

export function useFriendsActions() {
  const dispatch = useDispatch();
  const history = useHistory();
  return {
    fetchFriends: () => dispatch(friendsActions.fetchFriends({history})),
    deleteFriend: (id: string) =>
      dispatch(friendsActions.deleteFriend({friendId: id, history})),
  };
}

export function useGeneralReportsActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    addVideoToGeneralReports: (fileUri: string) =>
      dispatch(genReportsActions.addVideoToGeneralReports({fileUri, history})),
    addGeneralReports: (
      notes: string,
      date: Date | undefined,
      filesIds: string[] | undefined,
      playerId: string,
    ) =>
      dispatch(
        genReportsActions.addGeneralReports({history, notes, date, filesIds, playerId}),
      ),
  };
}

export function useProReportsActions() {
  const dispatch = useDispatch();
  const history = useHistory();

  return {
    addProReports: (request: proReportsRequest) =>
      dispatch(proReportsActions.addProReports({request, history})),
  };
}

export function useBigBoard() {
  const dispatch = useDispatch();
  const history = useHistory();
  return {
    fetchPlayers: () => dispatch(bigBoardActions.fetchBigBoard({history})),
  };
}
