import {createAction} from 'redux-actions';
import types from './types';
import Notifications from 'entities/Notifications';
import UpdateNotificationsSettings from 'api/entities/UpdateNotificationsSettings';

export default {
  updateNotificationsSettings: createAction<UpdateNotificationsSettings>(
    types.UPDATE_NOTIFICATIONS_SETTINGS,
  ),
  fetchNotificationsSettings: createAction(types.FETCH_NOTIFICATIONS_SETTINGS),
  fetchNotificationsSettingsCompleted: createAction<Notifications>(
    types.FETCH_NOTIFICATIONS_SETTINGS_COMPLETED,
  ),
};
