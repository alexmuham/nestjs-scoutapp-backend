import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import INotificationsManager from '../../managers/notifications/INotificationsManager';
import Notifications from '../entities/user/Notifications';
import {UseGuards} from '@nestjs/common';
import AuthGuard from '../../enhancers/guards/AuthGuard';
import CurrentSession from '../../enhancers/decorators/CurrentSession';
import Session from '../../entities/Session';
import {mapNotificationsToGQL} from '../entities/Mappers';

@Resolver()
@UseGuards(AuthGuard)
export class NotificationsResolver {
  constructor(private readonly notificationsManager: INotificationsManager) {}

  @Mutation(() => Notifications)
  async updateNotificationsSettings(
    @CurrentSession() {userId}: Session,
    @Args('friendRequest') friendRequest: boolean,
    @Args('playersMatching') playersMatching: boolean,
    @Args('messages') messages: boolean,
    @Args('sendNotificationsToEmail') sendNotificationsToEmail: boolean,
  ) {
    return this.notificationsManager.updateNotificationsSettings(
      userId,
      friendRequest,
      playersMatching,
      messages,
      sendNotificationsToEmail,
    );
  }

  @Query(() => Notifications)
  async myNotificationsSettings(@CurrentSession() {userId}: Session) {
    return mapNotificationsToGQL(
      await this.notificationsManager.getMyNotificationsSettings(userId),
    );
  }
}
