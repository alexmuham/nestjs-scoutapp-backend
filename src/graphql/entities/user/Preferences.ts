import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class Preferences {
  constructor(
    id: string,
    enableFriendRequestNotification: boolean,
    enablePlayerMatchingNotification: boolean,
    enableMessageNotification: boolean,
    sendNotificationsToEmail: boolean,
    players: string[],
  ) {
    this.id = id;
    this.enableFriendRequestNotification = enableFriendRequestNotification;
    this.enablePlayerMatchingNotification = enablePlayerMatchingNotification;
    this.enableMessageNotification = enableMessageNotification;
    this.sendNotificationsToEmail = sendNotificationsToEmail;
    this.players = players;
  }

  @Field(() => String)
  id: string;

  @Field(() => Boolean)
  enableFriendRequestNotification: boolean;

  @Field(() => Boolean)
  enablePlayerMatchingNotification: boolean;

  @Field(() => Boolean)
  enableMessageNotification: boolean;

  @Field(() => Boolean)
  sendNotificationsToEmail: boolean;

  @Field(() => [String])
  players?: string[];
}
