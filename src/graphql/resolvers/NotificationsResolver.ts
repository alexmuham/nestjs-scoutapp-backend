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

  @Mutation(() => Boolean)
  async updateNotificationsSettings(
    @CurrentSession() {userId}: Session,
    @Args('friendRequest', {nullable: true}) friendRequest?: boolean,
    @Args('playersMatching', {nullable: true}) playersMatching?: boolean,
    @Args('messages', {nullable: true}) messages?: boolean,
    @Args('sendNotificationsToEmail', {nullable: true})
    sendNotificationsToEmail?: boolean,
  ) {
    await this.notificationsManager.updateNotificationsSettings(
      userId,
      friendRequest,
      playersMatching,
      messages,
      sendNotificationsToEmail,
    );

    return true;
  }

  @Query(() => Notifications)
  async myNotificationsSettings(@CurrentSession() {userId}: Session) {
    return mapNotificationsToGQL(
      await this.notificationsManager.getMyNotificationsSettings(userId),
    );
  }
}
