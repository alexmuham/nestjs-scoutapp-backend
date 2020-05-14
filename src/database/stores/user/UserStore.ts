import {Injectable} from '@nestjs/common';
import IUserStore from './IUserStore';
import User from 'database/entities/User';
import {ID} from 'entities/Common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Player} from 'database/entities';

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

  async createUser(user: Partial<User>) {
    const newUser = this.repository.create(user);
    await this.repository.insert(newUser);
    return newUser;
  }

  async addPlayerToUser(players: Player[], id: string) {
    await this.repository.save({id, players});
  }

  async deletePlayerToUser(players: Player[], userId: string) {
    // @ts-ignore
    await this.repository.manager.update(userId, {players});
  }

  async getUserById(id: string) {
    return this.repository.findOne(id, {relations: ['players']});
  }
}
