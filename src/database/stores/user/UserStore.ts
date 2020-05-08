import {Injectable} from '@nestjs/common';
import IUserStore from './IUserStore';
import User from 'database/entities/User';
import {ID} from 'entities/Common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export default class UserStore implements IUserStore {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getUser(userId: ID) {
    return this.repository.findOneOrFail({
      where: {id: userId},
    });
  }

  async createUser(user: Partial<User>, image: Partial<File>) {
    const newUser = this.repository.create({...user, image});
    await this.repository.insert(newUser);
    return newUser;
  }
}
