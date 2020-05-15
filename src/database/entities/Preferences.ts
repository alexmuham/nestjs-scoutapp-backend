import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Preferences {
  constructor(
    id: string,
    enableFriendRequestNotification?: boolean,
    enablePlayerMatchingNotification?: boolean,
    enableMessageNotification?: boolean,
    sendNotificationsToEmail?: boolean,
  ) {
    this.id = id;
    this.enableFriendRequestNotification = enableFriendRequestNotification;
    this.enablePlayerMatchingNotification = enablePlayerMatchingNotification;
    this.enableMessageNotification = enableMessageNotification;
    this.sendNotificationsToEmail = sendNotificationsToEmail;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  enableFriendRequestNotification?: boolean;

  @Column()
  enablePlayerMatchingNotification?: boolean;

  @Column()
  enableMessageNotification?: boolean;

  @Column()
  sendNotificationsToEmail?: boolean;
}
