import {Injectable} from '@nestjs/common';
import IUserStore from 'database/stores/user/IUserStore';
import IAccountManager from './IAccountManager';
import {mapAccountFromDb, mapUserFromDb, mapUsersFromDb} from 'database/entities/Mappers';
import ScoutAppError from 'ScoutAppError';
import IPreferencesStore from 'database/stores/preferences/IPreferencesStore';

@Injectable()
export default class AccountManager implements IAccountManager {
  constructor(
    private userStore: IUserStore,
    private preferencesStore: IPreferencesStore,
  ) {}

  async getAccount(myUserId: string) {
    const dbUser = await this.userStore.getUserById(myUserId);
    if (!dbUser) throw new ScoutAppError('User is not found');
    const dbPreferences = await this.preferencesStore.getPreferences(
      dbUser.preferencesId,
    );
    if (!dbPreferences) throw new ScoutAppError('Preferences is not found');
    return mapAccountFromDb(dbUser, dbPreferences);
  }

  async addFriend(myUserId: string, friendId: string) {
    if (friendId === myUserId)
      throw new ScoutAppError('You cannot add yourself as a friend');
    const friend = await this.userStore.getUserById(friendId);
    if (!friend) throw new ScoutAppError('Such user does not exist');
    await this.userStore.addFriend(myUserId, friend);
  }

  async deleteFriend(myUserId: string, friendId: string) {
    await this.userStore.deleteFriend(myUserId, friendId);
  }

  async getFriendById(myUserId: string, friendId: string) {
    const friend = await this.userStore.getFriendById(myUserId, friendId);
    if (!friend) throw new ScoutAppError('Such user does not exist');
    return mapUserFromDb(friend);
  }

  async getFriends(myUserId: string) {
    const user = await this.userStore.getUserById(myUserId);
    if (!user) throw new ScoutAppError('Such user does not exist');
    return mapUsersFromDb(user.friends);
  }
}
