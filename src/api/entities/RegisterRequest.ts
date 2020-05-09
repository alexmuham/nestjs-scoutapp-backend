import {IsNotEmpty, IsString} from 'class-validator';

export default class RegisterRequest {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    education: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.education = education;
  }

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsString()
  education: string;
}
