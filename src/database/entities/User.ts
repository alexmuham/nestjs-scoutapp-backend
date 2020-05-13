import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import Notifications from './Notifications';

@Entity()
export default class User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    notifications: Notifications,
    notificationsId: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.notifications = notifications;
    this.notificationsId = notificationsId;
    this.education = education;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @ManyToOne(() => Notifications, {nullable: false})
  notifications: Notifications;

  @Column({nullable: false})
  notificationsId: string;

  @Column()
  education: string;
}
