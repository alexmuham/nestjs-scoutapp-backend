import {Injectable} from '@nestjs/common';
import {mapPreferencesFromDb} from 'database/entities/Mappers';
import IPreferencesStore from 'database/stores/preferences/IPreferencesStore';
import IPreferencesManager from './IPreferencesManager';
import ScoutAppError from '../../ScoutAppError';
import IUserStore from 'database/stores/user/IUserStore';

@Injectable()
export default class PreferencesManager implements IPreferencesManager {
  constructor(
    private readonly preferencesStore: IPreferencesStore,
    private readonly userStore: IUserStore,
  ) {}

  async updatePreferences(
    userId: string,
    enableFriendRequestNotification?: boolean,
    enablePlayerMatchingNotification?: boolean,
    enableMessageNotification?: boolean,
    sendNotificationsToEmail?: boolean,
  ) {
    await this.preferencesStore.updatePreferences(
      userId,
      enableFriendRequestNotification,
      enablePlayerMatchingNotification,
      enableMessageNotification,
      sendNotificationsToEmail,
    );

    return this.getPreferences(userId);
  }

  async getPreferences(id: string) {
    const user = await this.userStore.getUser(id);
    if (!user) throw new ScoutAppError('User not exist');

    const preferences = await this.preferencesStore.getPreferences(user?.preferencesId);
    if (!preferences) throw new ScoutAppError('there is no such laundry');

    return mapPreferencesFromDb(preferences);
  }
}
