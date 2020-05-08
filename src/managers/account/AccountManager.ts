import {Injectable} from '@nestjs/common';
import IUserStore from '../../database/stores/user/IUserStore';
import IAccountManager from './IAccountManager';
import {mapAccountFromDB} from '../../database/entities/Mappers';
import ScoutAppError from '../../ScoutAppError';

@Injectable()
export default class AccountManager implements IAccountManager {
  constructor(private userStore: IUserStore) {}

  async getMyAccount(myUserId: string) {
    const dbUser = await this.userStore.getUser(myUserId);
    if (!dbUser) throw new ScoutAppError('User is not found');
    return mapAccountFromDB(dbUser);
  }
}
