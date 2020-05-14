import {ID} from 'entities/Common';
import User from 'database/entities/User';
import Player from 'database/entities/Player';

export default abstract class IUserStore {
  abstract createUser(user: Partial<User>): Promise<User>;

  abstract getUser(userId: ID): Promise<User | undefined>;

  abstract addPlayerToUser(players: Player[], userId: ID): Promise<void>;

  abstract deletePlayerToUser(players: Player[], userId: ID): Promise<void>;

  abstract getUserById(userId: ID): Promise<User | undefined>;
}
