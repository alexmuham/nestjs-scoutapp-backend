import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class User {
  constructor(
    id: string,
    email: string,
    allowNotifications: boolean,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.allowNotifications = allowNotifications;
    this.phoneNumber = phoneNumber;
    this.education = education;
  }

  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => Boolean)
  allowNotifications: boolean;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  education: string;
}
