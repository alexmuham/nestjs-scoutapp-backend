import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export default class User {
  constructor(
    id: string,
    email: string,
    notificationsId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    education: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.notificationsId = notificationsId;
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

  @Field(() => String)
  notificationsId: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  education: string;
}
