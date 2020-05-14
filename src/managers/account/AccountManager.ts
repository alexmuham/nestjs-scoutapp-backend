import {Injectable} from '@nestjs/common';
import IUserStore from '../../database/stores/user/IUserStore';
import IAccountManager from './IAccountManager';
import {mapAccountFromDB} from '../../database/entities/Mappers';
import ScoutAppError from '../../ScoutAppError';
import INotificationsStore from '../../database/stores/notifications/INotificationsStore';

@Injectable()
export default class AccountManager implements IAccountManager {
  constructor(
    private userStore: IUserStore,
    private notificationsStore: INotificationsStore,
  ) {}

  async getMyAccount(myUserId: string) {
    const dbUser = await this.userStore.getUser(myUserId);
    if (!dbUser) throw new ScoutAppError('User is not found');
    const dbNotifications = await this.notificationsStore.getMyNotificationsSettings(
      dbUser.notificationsId,
    );
    if (!dbNotifications) throw new ScoutAppError('Notifications is not found');
    return mapAccountFromDB(dbUser, dbNotifications);
  }
}
