import {ID} from './Common';
import {IsString} from 'class-validator';
import Notifications from './Notifications';

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

  id: ID;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  notifications: Notifications;

  @IsString()
  phoneNumber: string;

  @IsString()
  education: string;
}
