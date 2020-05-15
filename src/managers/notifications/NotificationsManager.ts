import {Injectable} from '@nestjs/common';
import {mapNotificationsFromDB} from 'database/entities/Mappers';
import INotificationsStore from 'database/stores/notifications/INotificationsStore';
import INotificationsManager from './INotificationsManager';
import ScoutAppError from '../../ScoutAppError';
import IUserStore from 'database/stores/user/IUserStore';

@Injectable()
export default class NotificationsManager implements INotificationsManager {
  constructor(
    private readonly notificationsStore: INotificationsStore,
    private readonly userStore: IUserStore,
  ) {}

  async updateNotificationsSettings(
    userId: string,
    friendRequest?: boolean,
    playersMatching?: boolean,
    messages?: boolean,
    sendNotificationsToEmail?: boolean,
  ) {
    await this.notificationsStore.updateNotificationsSettings(
      userId,
      friendRequest,
      playersMatching,
      messages,
      sendNotificationsToEmail,
    );

    return this.getMyNotificationsSettings(userId);
  }

  async getMyNotificationsSettings(id: string) {
    const user = await this.userStore.getUser(id);
    if (!user) throw new ScoutAppError('User not exist');

    const notifications = await this.notificationsStore.getMyNotificationsSettings(
      user?.notificationsId,
    );
    if (!notifications) throw new ScoutAppError('there is no such laundry');

    return mapNotificationsFromDB(notifications);
  }
}
