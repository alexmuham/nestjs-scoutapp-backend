import {NotificationState} from 'entities/Notification';
import {ID} from 'entities/Common';
import Notification from 'graphql/entities/notification/Notification';

interface INotification {
  date: string;
  state: NotificationState;
  text?: string;
  route?: string;
}

export default abstract class INotificationStore {
  abstract getNotifications(): Promise<Notification[]>;

  abstract getNotificationById(notificationId: string): Promise<Notification | undefined>;

  abstract addNotification(notification: INotification): Promise<boolean>;

  abstract deleteNotification(notificationId: ID): Promise<boolean>;
}
