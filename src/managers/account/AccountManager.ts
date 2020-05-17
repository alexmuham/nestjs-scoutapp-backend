import {Injectable} from '@nestjs/common';
import IUserStore from '../../database/stores/user/IUserStore';
import IAccountManager from './IAccountManager';
import {mapAccountFromDb} from '../../database/entities/Mappers';
import ScoutAppError from '../../ScoutAppError';
import IPreferencesStore from 'database/stores/preferences/IPreferencesStore';

@Injectable()
export default class AccountManager implements IAccountManager {
  constructor(
    private userStore: IUserStore,
    private preferencesStore: IPreferencesStore,
  ) {}

  async getAccount(myUserId: string) {
    const dbUser = await this.userStore.getUser(myUserId);
    if (!dbUser) throw new ScoutAppError('User is not found');
    const dbPreferences = await this.preferencesStore.getPreferences(
      dbUser.preferencesId,
    );
    if (!dbPreferences) throw new ScoutAppError('Preferences is not found');
    return mapAccountFromDb(dbUser, dbPreferences);
  }
}
