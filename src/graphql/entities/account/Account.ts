import {Field, ObjectType} from '@nestjs/graphql';
import User from '../user/User';
import Notifications from '../user/Notifications';

@ObjectType()
export default class Account {
  @Field(() => User)
  user: User;

  @Field(() => Notifications)
  notifications: Notifications;

  constructor(user: User, notifications: Notifications) {
    this.user = user;
    this.notifications = notifications;
  }
}
