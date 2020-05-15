import Account from '../../entities/Account';

export default abstract class IAccountManager {
  abstract getAccount(myUserId: string): Promise<Account>;
}
