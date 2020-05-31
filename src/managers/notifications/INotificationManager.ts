import {ID} from 'entities/Common';
import Notification from 'graphql/entities/notification/Notification';

export default abstract class INotificationManager {
    abstract getNotifications(userId: ID): Promise<Notification[]>;

    abstract addNotification(): Promise<Boolean>;

    abstract addNotificationToUser(notificationId: ID, userId: ID): Promise<void>;

    abstract deleteNotificationToUser(userId: ID, notificationId: ID): Promise<void>;
}
