import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Notifications {
  constructor(
    id: string,
    friendRequest: boolean,
    playersMatching: boolean,
    messages: boolean,
    sendNotificationsToEmail: boolean,
  ) {
    this.id = id;
    this.friendRequest = friendRequest;
    this.playersMatching = playersMatching;
    this.messages = messages;
    this.sendNotificationsToEmail = sendNotificationsToEmail;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  friendRequest: boolean;

  @Column()
  playersMatching: boolean;

  @Column()
  messages: boolean;

  @Column()
  sendNotificationsToEmail: boolean;
}
