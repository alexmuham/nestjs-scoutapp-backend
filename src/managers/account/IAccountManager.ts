import {Account, User} from 'entities';

export default abstract class IAccountManager {
  abstract getAccount(myUserId: string): Promise<Account>;

  abstract getFriends(myUserId: string): Promise<User[]>;

  abstract getFriendById(myUserId: string, friendId: string): Promise<User>;

  abstract addFriend(myUserId: string, friendId: string): Promise<void>;

  abstract deleteFriend(myUserId: string, friendId: string): Promise<void>;
}
