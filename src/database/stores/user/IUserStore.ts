import {ID} from 'entities/Common';
import User from 'database/entities/User';

export default abstract class IUserStore {
  abstract createUser(user: Partial<User>): Promise<User>;

  abstract getUser(userId: ID): Promise<User | undefined>;
}
