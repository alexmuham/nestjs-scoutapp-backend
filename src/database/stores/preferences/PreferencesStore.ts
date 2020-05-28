import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import IPreferencesStore from './IPreferencesStore';
import {ID} from 'entities';
import ScoutAppError from '../../../ScoutAppError';
import {User, Preferences} from 'database/entities';

export default class PreferencesStore extends IPreferencesStore {
  constructor(
    @InjectRepository(Preferences)
    private readonly repository: Repository<Preferences>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  async createPreferences(
    enableFriendRequestNotification: boolean,
    enablePlayerMatchingNotification: boolean,
    enableMessageNotification: boolean,
    sendNotificationsToEmail: boolean,
  ) {
    const preferences = await this.repository.create({
      enableFriendRequestNotification,
      enablePlayerMatchingNotification,
      enableMessageNotification,
      sendNotificationsToEmail,
    });
    await this.repository.insert(preferences);
    return preferences;
  }

  async getPreferences(id: string) {
    return this.repository.findOne(id);
  }

  async updatePreferences(
    userId: string,
    enableFriendRequestNotification?: boolean,
    enablePlayerMatchingNotification?: boolean,
    enableMessageNotification?: boolean,
    sendNotificationsToEmail?: boolean,
  ): Promise<Preferences> {
    const user = await this.userRepository.findOne(userId);
    if (!user) throw new ScoutAppError('User not exists');

    if (enableFriendRequestNotification !== undefined) {
      await this.repository.update(user.preferencesId, {
        enableFriendRequestNotification,
      });
    }
    if (enablePlayerMatchingNotification !== undefined) {
      await this.repository.update(user.preferencesId, {
        enablePlayerMatchingNotification,
      });
    }
    if (enableMessageNotification !== undefined) {
      await this.repository.update(user.preferencesId, {
        enableMessageNotification,
      });
    }
    if (sendNotificationsToEmail !== undefined) {
      await this.repository.update(user.preferencesId, {
        sendNotificationsToEmail,
      });
    }

    return this.getPreferencesOrFail(user?.preferencesId);
  }

  async getPreferencesOrFail(preferencesId: ID) {
    const preferences = await this.getPreferences(preferencesId);
    if (!preferences) throw new ScoutAppError('Preferences not exists');
    return preferences;
  }
}
