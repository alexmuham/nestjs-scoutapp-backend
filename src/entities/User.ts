import {ID} from './Common';
import {IsString} from 'class-validator';

export default class User {
  constructor(
    id: string,
    email: string,
    preferencesId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.preferencesId = preferencesId;
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

  @IsString()
  preferencesId: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  education: string;
}
