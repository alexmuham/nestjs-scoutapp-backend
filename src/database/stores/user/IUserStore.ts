import {ID} from 'entities/Common';
import User from 'database/entities/User';
import File from 'database/entities/File';

export default abstract class IUserStore {
  abstract createUser(user: Partial<User>, image: Partial<File>): Promise<User>;

  abstract getUser(userId: ID): Promise<User | undefined>;
}
