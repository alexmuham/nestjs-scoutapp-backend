import {handleActions, ReducerNextThrow} from 'redux-actions';
import types from './types';
import {failed, loading, success} from '../../entities/LoadableContainer';
import {NotificationsContainer} from '../../entities/NotificationsContainer';
import Notifications from '../../../entities/Notifications';

const fetchNotificationsSettingsCompleted: ReducerNextThrow<
  NotificationsContainer,
  Notifications
> = {
  next: (state, {payload}) => ({...state, ...success({account: payload})}),
  // @ts-ignore
  throw: (_, {payload}) => failed(payload),
};

export default handleActions<any>(
  {
    [types.FETCH_NOTIFICATIONS_SETTINGS]: (state) =>
      state.exists ? {exists: true, ...loading(state)} : {exists: false},
    [types.FETCH_NOTIFICATIONS_SETTINGS_COMPLETED]: fetchNotificationsSettingsCompleted,
  },
  {isBusy: false, isChecking: false, isLoading: false},
);
