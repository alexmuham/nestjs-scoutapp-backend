import {ID} from 'entities/Common';
import User from 'database/entities/User';
import Player from 'database/entities/Player';

export default abstract class IUserStore {
  abstract createUser(user: Partial<User>): Promise<User>;

  abstract addPlayerToUser(players: Player[], userId: ID): Promise<void>;

  abstract deletePlayerToUser(players: string, userId: ID): Promise<void>;

  abstract getUserById(userId: ID): Promise<User | undefined>;

  abstract addFriend(userId: ID, friend: User): Promise<void>;

  abstract deleteFriend(userId: ID, friendId: string): Promise<void>;

  abstract getFriendById(userId: ID, friendId: string): Promise<User | undefined>;
}
