import {Injectable} from '@nestjs/common';
import IUserStore from './IUserStore';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {GeneralReports, Player, User, Notification} from 'database/entities';

@Injectable()
export default class UserStore implements IUserStore {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  public readonly allRelations = ['players', 'friends', 'genReports', 'notifications'];

  async createUser(user: Partial<User>) {
    const newUser = this.repository.create(user);
    await this.repository.insert(newUser);
    return newUser;
  }

  async addPlayerToUser(players: Player[], id: string) {
    await this.repository.save({id, players});
  }

  async deletePlayerToUser(playerId: string, userId: string) {
    await this.repository
      .createQueryBuilder()
      .relation(User, 'players')
      .of([userId, playerId])
      .remove(playerId);
  }

  async getUserById(id: string) {
    return this.repository.findOne(id, {relations: this.allRelations});
  }

  async addFriend(id: string, friend: User) {
    await this.repository.save({id, friends: [friend]});
  }

  async deleteFriend(userId: string, friendId: string) {
    await this.repository
      .createQueryBuilder()
      .relation(User, 'friends')
      .of([userId, friendId])
      .remove(friendId);
  }

  async getFriendById(friendId: string) {
    return this.repository.findOne({where: {id: friendId}, relations: ['players']});
  }

  async addGenReportToUser(genReports: GeneralReports[], userId: string) {
    await this.repository.save({id: userId, genReports});
  }

  async addNotificationToUser(notifications: Notification[], id: string) {
    await this.repository.save({id, notifications});
  }

  async deleteNotificationToUser(notificationId: string, userId: string) {
    await this.repository
      .createQueryBuilder()
      .relation(User, 'notifications')
      .of([userId, notificationId])
      .remove(notificationId);
  }
}
