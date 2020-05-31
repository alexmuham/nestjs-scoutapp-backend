import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {Notification} from 'database/entities';
import INotificationStore from './INotificationStore';
import {ID} from 'entities/Common';

@Injectable()
export default class NotificationStore implements INotificationStore {
  constructor(
    @InjectRepository(Notification)
    private readonly repository: Repository<Notification>,
  ) {}

  async getNotifications() {
    return this.repository.find();
  }

  async getNotificationById(notificationId: string) {
    return this.repository.findOne(notificationId);
  }

  async addNotification(notification: Notification) {
    await this.repository.insert(notification);
    return true;
  }

  async deleteNotification(notificationId: ID) {
    await this.repository.delete(notificationId);
    return true;
  }
}
