import {Field, ID, ObjectType} from '@nestjs/graphql';
import Player from '../player/Player';
import Notification from '../notification/Notification';

@ObjectType()
export default class User {
  constructor(
    id: string,
    email: string,
    preferencesId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
    players: Player[] | undefined,
    image: string | undefined,
    notifications: Notification[] | undefined,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.preferencesId = preferencesId;
    this.phoneNumber = phoneNumber;
    this.education = education;
    this.players = players;
    this.image = image;
    this.notifications = notifications;
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  preferencesId: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  education: string;

  @Field(() => [Player], {nullable: true})
  players: Player[] | undefined;

  @Field(() => [Notification], {nullable: true})
  notifications: Notification[] | undefined;

  @Field(() => String, {nullable: true})
  image: string | undefined;
}
