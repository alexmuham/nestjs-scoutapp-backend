import {ID} from './Common';
import Player from './Player';
import {Field} from '@nestjs/graphql';
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
    players: Player[],
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.preferencesId = preferencesId;
    this.phoneNumber = phoneNumber;
    this.education = education;
    this.players = players;
  }

  id: ID;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [Player])
  players?: Player[];

  @Field()
  email: string;

  @IsString()
  preferencesId: string;

  @Field()
  phoneNumber: string;

  @Field()
  education: string;
}
