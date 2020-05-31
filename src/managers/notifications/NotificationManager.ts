import {Injectable} from '@nestjs/common';
import {NotificationState} from 'entities/Notification';
import IUserStore from '../../database/stores/user/IUserStore';
import INotificationManager from './INotificationManager';
import INotificationStore from 'database/stores/notification/INotificationStore';
import ScoutAppError from '../../ScoutAppError';

@Injectable()
export default class NotificationManager implements INotificationManager {
  constructor(
    private userStore: IUserStore,
    private notificationStore: INotificationStore,
  ) {}

  async getNotifications(userId: string) {
    const notifications = await this.notificationStore.getNotifications();
    if (!notifications || notifications.length < 1) throw new ScoutAppError(userId);
    return notifications;
  }

  async addNotification() {
    const newNotification = {
      date: 'Test date',
      state: NotificationState.MatchRequest,
      text: 'Test text',
      route: 'Test route',
    };
    return this.notificationStore.addNotification(newNotification);
  }

  async deleteNotificationToUser(userId: string, notificationId: string) {
    await this.userStore.deleteNotificationToUser(notificationId, userId);
  }

  async addNotificationToUser(notificationId: string, userId: string) {
    const user = await this.userStore.getUserById(userId);
    if (!user?.notifications) throw new ScoutAppError('user.notification does not exist');
    const notification = await this.notificationStore.getNotificationById(notificationId);
    if (!notification) throw new ScoutAppError('notification does not exist');
    const {notifications} = user;
    await notifications.push(notification);
    await this.userStore.addNotificationToUser(notifications, userId);
  }
}
