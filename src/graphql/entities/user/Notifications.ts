import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class Notifications {
  constructor(
    id: string,
    friendRequest?: boolean,
    playersMatching?: boolean,
    messages?: boolean,
    sendNotificationsToEmail?: boolean,
  ) {
    this.id = id;
    this.friendRequest = friendRequest;
    this.playersMatching = playersMatching;
    this.messages = messages;
    this.sendNotificationsToEmail = sendNotificationsToEmail;
  }

  @Field(() => String)
  id: string;

  @Field(() => Boolean)
  friendRequest?: boolean;

  @Field(() => Boolean)
  playersMatching?: boolean;

  @Field(() => Boolean)
  messages?: boolean;

  @Field(() => Boolean)
  sendNotificationsToEmail?: boolean;
}
