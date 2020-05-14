import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import INotificationsStore from './INotificationsStore';
import Notifications from 'database/entities/Notifications';
import {ID} from '../../../entities/Common';
import ScoutAppError from '../../../ScoutAppError';
import User from 'database/entities/User';

export default class NotificationsStore extends INotificationsStore {
  constructor(
    @InjectRepository(Notifications)
    private readonly repository: Repository<Notifications>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  async createNotifications(
    friendRequest: boolean,
    playersMatching: boolean,
    messages: boolean,
    sendNotificationsToEmail: boolean,
  ) {
    const notifications = await this.repository.create({
      friendRequest,
      playersMatching,
      messages,
      sendNotificationsToEmail,
    });
    await this.repository.insert(notifications);
    return notifications;
  }

  async getMyNotificationsSettings(id: string) {
    return this.repository.findOne(id);
  }

  async updateNotificationsSettings(
    userId: string,
    friendRequest: boolean,
    playersMatching: boolean,
    messages: boolean,
    sendNotificationsToEmail: boolean,
  ): Promise<Notifications> {
    const user = await this.userRepository.findOne(userId);
    if (!user) throw new ScoutAppError('User not exists');
    await this.repository.update(user?.notificationsId, {
      friendRequest,
      playersMatching,
      messages,
      sendNotificationsToEmail,
    });
    return this.getNotificationsOrFail(user?.notificationsId);
  }

  async getNotificationsOrFail(notificationsId: ID) {
    const notifications = await this.getMyNotificationsSettings(notificationsId);
    if (!notifications) throw new ScoutAppError('Notifications not exists');
    return notifications;
  }
}
