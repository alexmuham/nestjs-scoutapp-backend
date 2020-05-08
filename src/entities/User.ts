import {ID} from './Common';
import {IsString} from 'class-validator';

export default class User {
  constructor(
    id: string,
    email: string,
    allowNotifications: boolean,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    image: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.allowNotifications = allowNotifications;
    this.phoneNumber = phoneNumber;
    this.image = image;
    this.education = education;
  }

  id: ID;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  image: string;

  @IsString()
  email: string;

  allowNotifications: boolean;

  @IsString()
  phoneNumber: string;

  @IsString()
  education: string;
}
