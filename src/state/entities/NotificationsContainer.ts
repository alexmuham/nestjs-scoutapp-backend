import Notifications from 'entities/Notifications';
import {LoadableContainer} from 'entities/LoadableContainer';

export interface NotificationsContainer {
  notifications: LoadableContainer<Notifications>;
}
