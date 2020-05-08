import Account from '../../entities/Account';

export default abstract class IAccountManager {
  abstract getMyAccount(myUserId: string): Promise<Account>;
}
