import {createAction} from 'redux-actions';
import types from './types';
import Notifications from 'entities/Notifications';

export default {
  updateNotificationsSettings: createAction(types.UPDATE_NOTIFICATIONS_SETTINGS),
  fetchNotificationsSettings: createAction(types.FETCH_NOTIFICATIONS_SETTINGS),
  fetchNotificationsSettingsCompleted: createAction<Notifications>(
    types.FETCH_NOTIFICATIONS_SETTINGS_COMPLETED,
  ),
};
