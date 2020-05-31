import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UseGuards} from '@nestjs/common';
import AuthGuard from 'enhancers/guards/AuthGuard';
import INotificationManager from 'managers/notifications/INotificationManager';
import CurrentSession from 'enhancers/decorators/CurrentSession';
import Session from 'entities/Session';
import GQLNotification from 'graphql/entities/notification/Notification';

@Resolver()
@UseGuards(AuthGuard)
export class NotificationResolver {
  constructor(private readonly notificationManager: INotificationManager) {}

  @Query(() => [GQLNotification])
  async getNotifications(@CurrentSession() {userId}: Session) {
    return this.notificationManager.getNotifications(userId);
  }

  @Mutation(() => Boolean)
  async addNotification() {
    return this.notificationManager.addNotification();
  }

  @Mutation(() => Boolean)
  async addNotificationToUser(
    @Args({name: 'notificationId', type: () => String}) notificationId: string,
    @CurrentSession() {userId}: Session,
  ) {
    await this.notificationManager.addNotificationToUser(notificationId, userId);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteNotificationToUser(
    @Args({name: 'notificationId', type: () => String}) notificationId: string,
    @CurrentSession() {userId}: Session,
  ) {
    await this.notificationManager.deleteNotificationToUser(notificationId, userId);
    return true;
  }
}
