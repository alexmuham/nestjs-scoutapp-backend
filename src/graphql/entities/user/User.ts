import {Field, ID, ObjectType} from '@nestjs/graphql';
import Notifications from './Notifications';

@ObjectType()
export default class User {
  constructor(
    id: string,
    email: string,
    notifications: Notifications,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.notifications = notifications;
    this.phoneNumber = phoneNumber;
    this.education = education;
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => Notifications, {nullable: false})
  notifications: Notifications;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  education: string;
}
